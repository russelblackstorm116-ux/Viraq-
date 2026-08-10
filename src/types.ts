export type ServiceCategory = 
  | 'Logo Design'
  | 'Bannière / Poster'
  | 'Lyrics'
  | 'Montage vidéo'
  | 'Identité visuelle'
  | 'Autre';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  features: string[];
  bgImage: string;
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Logos' | 'Bannières' | 'Videos' | 'Music / Lyrics';
  client: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  tags: string[];
  deliverables?: string[];
  year?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  stars: number;
  comment: string;
  date: string;
}

export interface OrderFormData {
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  selectedService: ServiceCategory;
  projectType: string;
  projectDescription: string;
  desiredStyle: string;
  desiredColors: string;
  budgetRange: string;
  timeframe: string;
  referencesUrl: string;
  extraInfo: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  whatsappNumber?: string;
  projectDescription?: string;
}
