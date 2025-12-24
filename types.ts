
export interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export interface CaseStudyProps {
  label: string;
  title: string;
  stat: string;
}

export interface PricingTier {
  name: string;
  price: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
}
