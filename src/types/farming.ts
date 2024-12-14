export interface FarmingStep {
  title: string;
  description: string;
  duration?: string;
  tips?: string[];
}

export interface VegetableGuide {
  id: string;
  name: string;
  image: string;
  description: string;
  climate: string;
  season: string;
  steps: FarmingStep[];
}