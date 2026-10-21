export type ServiceCategory =
  | "Social Media Management"
  | "Meta Ads"
  | "Google Ads"
  | "SEO"
  | "Lead Generation"
  | "Content & Creative"
  | "Analytics & Tracking"
  | "E-commerce / Digital Growth"
  | "Other";

export interface ProjectWorkPillar {
  title: string;
  description: string;
  highlights: string[];
}

export interface ProjectWorkDetails {
  adCampaigns: ProjectWorkPillar;
  pageManagement: ProjectWorkPillar;
  creativeDesign: ProjectWorkPillar;
  clientResults: ProjectWorkPillar;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  facebookUrl: string;
  logoFilename: string;
  logoAlt: string;
  description: string;
  services: string[];
  platforms: string[];
  gridType: "large" | "medium";
  featured: boolean;
  sourceStatus: string;
  highlightTag?: string;
  workDetails?: ProjectWorkDetails;
  keyMetrics?: ProjectMetric[];
}

export interface Certificate {
  id: string;
  title: string;
  recipient: string;
  issuer: string;
  issueDate: string;
  program: string;
  credentialId?: string;
  verificationUrl?: string;
  imageFilename: string;
  imageAlt: string;
  category: string;
  description?: string;
  skills?: string[];
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating?: number;
  text: string;
  facebookUrl: string;
  source: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  service: string;
  email?: string;
  message?: string;
  honeypot?: string;
}
