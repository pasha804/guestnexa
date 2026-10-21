import { NextRequest, NextResponse } from "next/server";
import { matchInstantAnswer } from "@/data/aiKnowledge";

const CLEANAPIS_URL = "https://cleanapis.com/v1/chat/completions";
const API_KEY = process.env.CLEANAPIS_KEY || "cc_12NyhR8NFyqnJPcujkRAjlVCllb6dDWsu0ci1zjEm2gw4kV8";

// Fast, highly optimized primary and fallback models (benchmarked <5s)
const FAST_MODELS = ["qwen3.8-27b", "gemini-3.7-flash", "seed-2.1-turbo"];

const SYSTEM_PROMPT = `You are "GuestNexa AI" — the intelligent, highly knowledgeable SEO consultant for Attia Awais and GuestNexa.
Represent Attia Awais accurately, professionally, smartly, and concisely.

KEY BUSINESS FACTS:
- Expert: Attia Awais (Founder of GuestNexa | Off-Page SEO & Outreach Specialist with 3+ Years of Verified Experience)
- Agency: GuestNexa (Official Domain: www.Guestnexa.com)
- Location: Lahore, Pakistan (Serving international & local clients: Pakistan, USA, UK, Canada, UAE, Australia)
- Phone / WhatsApp: 03126166818 / +92 312 6166818 (WhatsApp link: https://wa.me/923126166818)
- Email: guestnexa@gmail.com
- Core Services:
  1. High-DA Guest Posting: Manual blogger outreach on 850+ real authoritative websites with organic Google traffic (DA 50+ to 85+, 100% real sites, ZERO PBNs, permanent dofollow backlinks, guaranteed indexing).
  2. Strategic Link Building: White-hat contextual backlink campaigns, niche edits, competitor link gap analysis, topical authority clustering.
  3. Off-Page SEO: Complete backlink profile audits, toxic link disavow, tier-2 backlink boosting, and Google SERP domination.
- Pricing & Packages:
  • Starter Authority ($299): 5 High-DA Guest Posts (DA 40-60+), editorial content, dofollow links, live index report.
  • Growth Scaler ($599): 12 High-DA Guest Posts (DA 50-75+), competitor gap replication, anchor optimization, priority turnaround.
  • Enterprise & Agency ($1,199+): 25+ Tier-1 Guest Posts (DA 60-85+), niche edits, dedicated account manager, white-label reports.
- Accreditation: Officially Certified in Guest Posting from Skilledinn Institute (Batch No. 11, Trainer Naqeeb Ullah Khan).

CRITICAL RULES:
1. SMART CONVERSATION:
   - Think carefully about the user's specific query. Do NOT give repetitive generic answers.
   - If they ask about DA, DR, turnaround time (usually 3-7 days for guest posts), anchor text distribution, or indexing, provide expert SEO insights.
2. LANGUAGE MATCHING:
   - If user chats in Roman Urdu, reply in natural, polite Roman Urdu.
   - If user chats in English, reply in crisp, professional English.
   - If user chats in Urdu script, reply in Urdu script.
3. CONCISENESS & SPEED:
   - Keep answers direct, friendly, and practical (2-4 bullet points maximum).
   - Always invite user to connect with Attia Awais on WhatsApp (03126166818) for site lists, custom metrics, or custom bulk orders.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, stream = true } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages payload." },
        { status: 400 }
      );
    }

    const lastUserMessage =
      [...messages].reverse().find((m: any) => m.role === "user")?.content || "";

    // ⚡ STEP 1: ZERO-LATENCY INSTANT KNOWLEDGE ENGINE
    const instantAnswer = matchInstantAnswer(lastUserMessage);
    if (instantAnswer) {
      if (stream) {
        // Stream the instant answer quickly in text chunks
        const encoder = new TextEncoder();
        const customStream = new ReadableStream({
          async start(controller) {
            // Split answer into words for a natural fast stream
            const words = instantAnswer.split(" ");
            for (let i = 0; i < words.length; i += 3) {
              const chunk = words.slice(i, i + 3).join(" ") + (i + 3 < words.length ? " " : "");
              controller.enqueue(encoder.encode(chunk));
              await new Promise((r) => setTimeout(r, 12));
            }
            controller.close();
          }
        });

        return new Response(customStream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "Transfer-Encoding": "chunked"
          }
        });
      }

      return NextResponse.json({ reply: instantAnswer });
    }

    // ⚡ STEP 2: FAST DYNAMIC AI INFERENCE (Optimized tokens & context)
    // Only send the last 4 messages to minimize prefill latency
    const recentMessages = messages.slice(-4).map((m: any) => ({
      role: m.role,
      content: m.content
    }));

    const apiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...recentMessages
    ];

    // Helper to call CleanAPIs with a strict timeout
    const fetchWithTimeout = async (model: string, useStreaming: boolean) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7500); // 7.5s max

      try {
        const res = await fetch(CLEANAPIS_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model,
            messages: apiMessages,
            temperature: 0.6,
            max_tokens: 320,
            stream: useStreaming
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        return res;
      } catch (err) {
        clearTimeout(timeoutId);
        throw err;
      }
    };

    // Attempt primary fast model (qwen3.8-27b)
    let upstreamRes: Response | null = null;
    let selectedModel = FAST_MODELS[0];

    try {
      upstreamRes = await fetchWithTimeout(FAST_MODELS[0], stream);
      if (!upstreamRes.ok) throw new Error(`Model ${FAST_MODELS[0]} returned ${upstreamRes.status}`);
    } catch {
      // Fast fallback to secondary model (seed-2.1-turbo)
      try {
        selectedModel = FAST_MODELS[2];
        upstreamRes = await fetchWithTimeout(FAST_MODELS[2], stream);
        if (!upstreamRes.ok) throw new Error(`Model ${FAST_MODELS[2]} failed`);
      } catch {
        upstreamRes = null;
      }
    }

    // If upstream completely failed or timed out, provide instant high-quality fallback
    if (!upstreamRes || !upstreamRes.ok) {
      const fallbackReply =
        "Walaikum Assalam / Hello! 👋 Attia Awais (Founder of GuestNexa) is available directly on WhatsApp for instant project consultations, guest post site lists, and backlink packages:\n\n👉 **WhatsApp: 03126166818**\n[Click here to Chat on WhatsApp](https://wa.me/923126166818)";

      if (stream) {
        return new Response(fallbackReply, {
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      }
      return NextResponse.json({ reply: fallbackReply });
    }

    // If client requested streaming, pipe upstream SSE chunks as clean text
    if (stream && upstreamRes.body) {
      const reader = upstreamRes.body.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();

      const textStream = new ReadableStream({
        async start(controller) {
          let buffer = "";
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split("\n");
              buffer = lines.pop() || "";

              for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || trimmed === "data: [DONE]") continue;
                if (trimmed.startsWith("data: ")) {
                  try {
                    const parsed = JSON.parse(trimmed.slice(6));
                    const delta = parsed.choices?.[0]?.delta?.content;
                    if (delta) {
                      controller.enqueue(encoder.encode(delta));
                    }
                  } catch {
                    // Ignore SSE json parse error on split lines
                  }
                }
              }
            }
          } catch (err) {
            console.error("Stream reader error:", err);
          } finally {
            controller.close();
          }
        }
      });

      return new Response(textStream, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Transfer-Encoding": "chunked"
        }
      });
    }

    // Non-streaming fallback
    const data = await upstreamRes.json();
    const reply =
      data.choices?.[0]?.message?.content ||
      "Aap direct Attia Awais se WhatsApp par rabta kar sakte hain: 03126166818 (https://wa.me/923126166818).";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("AI Chat Route Error:", error);
    return NextResponse.json(
      {
        reply:
          "Attia Awais is available directly on WhatsApp at 03126166818 for instant SEO consultations, publisher inventories, and backlink packages. [Click here to Chat on WhatsApp](https://wa.me/923126166818)."
      },
      { status: 200 }
    );
  }
}
