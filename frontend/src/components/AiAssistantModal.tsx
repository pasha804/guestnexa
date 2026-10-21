"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ExternalLink,
  RotateCcw,
  HelpCircle,
  Zap
} from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";
import { matchInstantAnswer } from "../data/aiKnowledge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  isStreaming?: boolean;
}

const QUICK_PROMPTS = [
  { label: "👤 Who is Attia Awais?", text: "Attia Awais kaun hain aur GuestNexa kya services deti hai?" },
  { label: "🚀 How does Guest Posting work?", text: "Guest posting aur high-DA backlinks se Google ranking kaise improve hoti hai?" },
  { label: "💰 Pricing & Packages", text: "GuestNexa ke backlink packages aur rates kya hain?" },
  { label: "🎯 Dofollow Backlinks & DA", text: "Kya backlinks dofollow aur Google par indexed honge?" }
];

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Walaikum Assalam / Hello! 👋 Main **GuestNexa AI Assistant** hoon — Attia Awais (Founder of GuestNexa) ka intelligent SEO consultant. \n\nAap mujh se **Roman Urdu**, **English**, ya **Urdu** mein High-DA Guest Posting, Link Building, Off-Page SEO, pricing, ya ranking strategy ke mutaliq sawal pooch sakte hain. Main aapko instant aur realistic mashwara dunga!",
      timestamp: "Just now"
    }
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);

      // Lock body scroll on mobile viewports so chat scrolls smoothly
      if (typeof window !== "undefined" && window.innerWidth < 640) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isStreaming]);

  // Clean up any running typing timer on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || isLoading || isStreaming) return;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: currentTime
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // ⚡ SPEED TIER 1: ZERO-LATENCY INSTANT KNOWLEDGE ENGINE (< 20ms to start streaming)
    const instantAnswer = matchInstantAnswer(textToSend);
    if (instantAnswer) {
      setIsStreaming(true);
      const botMsgId = `bot-${Date.now()}`;
      const botMessage: Message = {
        id: botMsgId,
        role: "assistant",
        content: "",
        timestamp: currentTime,
        isStreaming: true
      };

      setMessages((prev) => [...prev, botMessage]);

      // Ultra-smooth typewriter streaming in fast bursts of words
      const words = instantAnswer.split(" ");
      let currentText = "";
      let wordIdx = 0;

      typingIntervalRef.current = setInterval(() => {
        if (wordIdx < words.length) {
          const chunk = words.slice(wordIdx, wordIdx + 3).join(" ");
          currentText += (currentText ? " " : "") + chunk;
          wordIdx += 3;

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMsgId
                ? { ...msg, content: currentText, isStreaming: wordIdx < words.length }
                : msg
            )
          );
        } else {
          if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
          setIsStreaming(false);
        }
      }, 16);

      return;
    }

    // ⚡ SPEED TIER 2: HIGH-SPEED BACKEND AI STREAMING
    setIsLoading(true);
    const botMsgId = `bot-${Date.now()}`;

    try {
      const historyToSend = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyToSend, stream: true })
      });

      if (!res.ok) {
        throw new Error("Chat response failed");
      }

      // Initial bot placeholder in messages
      const botPlaceholder: Message = {
        id: botMsgId,
        role: "assistant",
        content: "",
        timestamp: currentTime,
        isStreaming: true
      };

      setMessages((prev) => [...prev, botPlaceholder]);
      setIsLoading(false);
      setIsStreaming(true);

      if (res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          if (chunk) {
            accumulatedText += chunk;
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMsgId
                  ? { ...msg, content: accumulatedText, isStreaming: true }
                  : msg
              )
            );
          }
        }

        // If response was somehow empty, fill default
        if (!accumulatedText.trim()) {
          accumulatedText =
            `Walaikum Assalam / Hello! Attia Awais is available directly on WhatsApp at ${OWNER_INFO.phone} for instant consultations, guest post inventories, and backlink packages. [Click here to Chat on WhatsApp](${OWNER_INFO.whatsappUrl}).`;
        }

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMsgId
              ? { ...msg, content: accumulatedText, isStreaming: false }
              : msg
          )
        );
      }
    } catch {
      const fallbackMessage: Message = {
        id: `bot-fallback-${Date.now()}`,
        role: "assistant",
        content:
          `Aapka message mil gaya hai! GuestNexa high-DA guest posting aur white-hat link building services provide karti hai. Aap direct Attia Awais se WhatsApp par rabta kar sakte hain:\n\n👉 **WhatsApp: ${OWNER_INFO.phone}**\n[Chat Directly on WhatsApp](${OWNER_INFO.whatsappUrl})`,
        timestamp: currentTime,
        isStreaming: false
      };
      setMessages((prev) => [...prev.filter((m) => m.id !== botMsgId), fallbackMessage]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const clearChat = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    setIsLoading(false);
    setIsStreaming(false);
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Chat reset kar di gayi hai! Aap mujh se Guest Posting, Link Building, high-DA backlinks, ya SEO packages ke mutaliq sawal pooch sakte hain.",
        timestamp: "Just now"
      }
    ]);
  };

  // Render markdown formatting simply (bold, links, bullet points, and WhatsApp action buttons)
  const formatMessageText = (content: string, isStreamingMessage?: boolean, isUserMessage?: boolean) => {
    const lines = content.split("\n");
    return (
      <div className="space-y-1">
        {lines.map((line, idx) => {
          // Check for bullet points
          const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ") || /^\d+\./.test(line.trim());
          const cleanLine = line.replace(/^[-•]\s*/, "");

          // Parse markdown links [Text](URL)
          const linkRegex = /\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g;
          const segments: Array<{ type: "text" | "link"; text: string; url?: string }> = [];
          let lastIndex = 0;
          let match;

          while ((match = linkRegex.exec(cleanLine)) !== null) {
            if (match.index > lastIndex) {
              segments.push({
                type: "text",
                text: cleanLine.substring(lastIndex, match.index)
              });
            }
            segments.push({
              type: "link",
              text: match[1],
              url: match[2]
            });
            lastIndex = match.index + match[0].length;
          }

          if (lastIndex < cleanLine.length) {
            segments.push({
              type: "text",
              text: cleanLine.substring(lastIndex)
            });
          }

          return (
            <div key={idx} className={`${isBullet ? "flex items-start gap-1.5 ml-2 my-0.5" : "my-0.5"}`}>
              {isBullet && <span className="text-[#2587C4] font-black shrink-0 mt-0.5">•</span>}
              <div className="flex-1 flex flex-wrap items-center gap-x-1 gap-y-0.5">
                {segments.map((seg, sIdx) => {
                  if (seg.type === "link" && seg.url) {
                    const isWhatsApp = seg.url.includes("wa.me");
                    return (
                      <a
                        key={sIdx}
                        href={seg.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1 my-1 rounded-xl text-xs font-bold transition-all shadow-sm ${
                          isWhatsApp
                            ? "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                            : "bg-blue-50 hover:bg-blue-100 text-[#2587C4] border border-blue-200"
                        }`}
                      >
                        {isWhatsApp && <BrandIcon name="whatsapp" size={13} />}
                        <span>{seg.text || "Chat on WhatsApp"}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    );
                  }

                  // Handle bold tags within text segment
                  const boldParts = seg.text.split(/(\*\*.*?\*\*)/g);
                  return (
                    <span key={sIdx}>
                      {boldParts.map((part, pIdx) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          const boldContent = part.slice(2, -2);
                          return (
                            <strong
                              key={pIdx}
                              className={
                                isUserMessage
                                  ? "text-[#FFD166] font-black"
                                  : "text-[#92400E] font-extrabold bg-[#FEF3C7] border border-[#FDE68A] px-1.5 py-0.5 rounded-md inline-block my-0.5 shadow-xs"
                              }
                            >
                              {boldContent}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStreamingMessage && (
          <span className="inline-block w-2 h-3.5 bg-[#2587C4] ml-0.5 animate-pulse align-middle" />
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="GuestNexa AI Assistant"
      className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 flex flex-col w-full sm:w-[420px] md:w-[460px] h-full sm:h-[620px] max-h-full sm:max-h-[85vh] bg-white sm:rounded-3xl border-2 border-slate-200 shadow-[0_20px_60px_rgba(24,42,82,0.25)] backdrop-blur-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-[#182A52]"
    >
      {/* Top Border Accent */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#2587C4] via-[#FFB719] to-[#182A52] z-10" />

      {/* Header Bar */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0 relative z-10 shadow-sm">
        <div className="flex items-center gap-3">
          {/* AI Avatar */}
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2587C4] to-[#182A52] border border-[#2587C4]/40 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-5 h-5 text-[#FFB719]" />
            </div>
            {/* Online Live Status Indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25D366] border-2 border-white animate-pulse shadow-sm" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-extrabold text-[#182A52] tracking-wide">
                GuestNexa AI
              </h3>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-[#2587C4] border border-blue-200 uppercase tracking-wider flex items-center gap-0.5">
                <Zap className="w-2.5 h-2.5 text-[#2587C4]" />
                <span>Instant</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
              <span>Attia Awais’s SEO Assistant</span>
              <span>•</span>
              <span className="text-emerald-600 font-semibold">Online &amp; Fast</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={clearChat}
            title="Reset conversation"
            aria-label="Reset conversation"
            className="p-2 rounded-xl text-slate-400 hover:text-[#182A52] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Close Assistant"
            aria-label="Close Assistant"
            className="p-2 rounded-xl text-slate-400 hover:text-[#182A52] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Direct WhatsApp Callout Banner inside chat */}
      <a
        href={OWNER_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-emerald-50 border-b border-emerald-200 flex items-center justify-between text-[11px] text-emerald-800 hover:bg-emerald-100 transition-all group shrink-0"
      >
        <span className="flex items-center gap-2 font-medium">
          <BrandIcon name="whatsapp" size={14} mode="monochrome" className="text-emerald-600 fill-emerald-600" />
          <span>Need publisher lists? Message Attia directly:</span>
        </span>
        <span className="font-bold underline text-emerald-700 group-hover:text-emerald-900 shrink-0">
          {OWNER_INFO.phone} ↗
        </span>
      </a>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs sm:text-[13px] leading-relaxed select-text bg-slate-50/50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${
              m.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs shadow-sm ${
                m.role === "user"
                  ? "bg-[#2587C4] text-white"
                  : "bg-white border border-slate-200 text-[#182A52]"
              }`}
            >
              {m.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5 text-[#2587C4]" />}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[84%] sm:max-w-[80%] rounded-2xl p-3 sm:p-3.5 shadow-sm ${
                m.role === "user"
                  ? "bg-[#182A52] text-white rounded-tr-none"
                  : "bg-white border border-slate-200 text-slate-700 rounded-tl-none space-y-1 shadow-sm"
              }`}
            >
              {formatMessageText(m.content, m.isStreaming, m.role === "user")}
              <div
                className={`text-[9px] mt-1.5 opacity-70 text-right ${
                  m.role === "user" ? "text-slate-300" : "text-slate-400"
                }`}
              >
                {m.timestamp}
              </div>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5 animate-in fade-in duration-150">
            <div className="w-7 h-7 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5 text-[#2587C4]" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2587C4] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#FFB719] animate-bounce [animation-delay:0.15s]" />
              <span className="w-2 h-2 rounded-full bg-[#182A52] animate-bounce [animation-delay:0.3s]" />
              <span className="text-[11px] text-[#182A52] font-semibold ml-1.5 flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#FFB719]" />
                <span>Formulating intelligent SEO response...</span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="px-3 py-2 bg-white border-t border-slate-200 shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 w-max">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1 mr-1">
            <HelpCircle className="w-3 h-3 text-[#FFB719]" />
            <span>Quick:</span>
          </span>
          {QUICK_PROMPTS.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(q.text)}
              disabled={isLoading || isStreaming}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#2587C4]/10 border border-slate-200 hover:border-[#2587C4] text-[11px] text-[#182A52] font-medium transition-all whitespace-nowrap cursor-pointer disabled:opacity-50"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0 relative z-10"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask in Roman Urdu, English, ya Urdu..."
          disabled={isLoading || isStreaming}
          className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2587C4] focus:ring-1 focus:ring-[#2587C4] text-[#182A52] text-xs outline-none transition-all placeholder:text-slate-400"
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading || isStreaming}
          aria-label="Send message"
          className="p-2.5 rounded-xl bg-[#2587C4] hover:bg-[#1A6B9E] text-white font-black transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
