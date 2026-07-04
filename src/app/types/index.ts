export type Lang = "fa" | "en";

export interface NavContent {
  pbx: string;
  towers: string;
  towerModels: string;
  projects: string;
  contact: string;
}

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  desc: string;
  cta1: string;
  cta2: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface PBXSectionContent {
  title: string;
  subtitle: string;
  services: ServiceItem[];
  features: { icon: string; title: string; desc: string }[];
}

export interface TowerModelSpec {
  label: string;
  value: string;
}

export interface TowerModelProduct {
  id: string;
  name: string;
  scale: string;
  material: string;
  useCase: string;
  category: string;
  price: string;
  images: string[];
  description: string;
  specifications: TowerModelSpec[];
}

export interface TowerModelsContent {
  title: string;
  subtitle: string;
  intro: string;
  categories: { name: string; desc: string; icon: string }[];
  products: TowerModelProduct[];
  useCases: { title: string; desc: string; icon: string }[];
}

export interface AdvantageItem {
  title: string;
  desc: string;
}

export interface AdvantagesContent {
  title: string;
  subtitle: string;
  items: AdvantageItem[];
}

export interface BrandsContent {
  title: string;
  subtitle: string;
  list: string[];
}

export interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
}

export interface WorkflowContent {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export interface TestimonialItem {
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface TestimonialsContent {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQContent {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  name: string;
  phone: string;
  service: string;
  serviceOptions: string[];
  message: string;
  submit: string;
  orCall: string;
}

export interface FinalCTAContent {
  title: string;
  desc: string;
  cta: string;
}

export interface FooterContent {
  desc: string;
  links: string;
  rights: string;
}

export interface ProjectItem {
  type: "pbx" | "towerModel";
  title: string;
  desc: string;
  img: string;
  category: string;
}

export interface LangContent {
  dir: string;
  font: string;
  brand: string;
  nav: NavContent;
  callNow: string;
  hero: HeroContent;
  pbxSection: PBXSectionContent;
  towerModels: TowerModelsContent;
  advantages: AdvantagesContent;
  brands: BrandsContent;
  workflow: WorkflowContent;
  testimonials: TestimonialsContent;
  faq: FAQContent;
  contact: ContactContent;
  finalCta: FinalCTAContent;
  footer: FooterContent;
  projects: { title: string; subtitle: string };
}

export type Content = Record<Lang, LangContent>;
