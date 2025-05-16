export type Currency = "USD" | "NGN";

export interface Feature {
  text: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  priceNGN: number;
  features: Feature[];
  isActive?: boolean;
  commissionRate?: number;
  maxPatients?: number;
  maxResponses?: number;
}

export type PlanCategory = "patient" | "doctor";
export interface PricingCardProps {
  plan: Plan;
  currency: Currency;
  category: PlanCategory;
  onSelect: (planId: string) => void;
}
