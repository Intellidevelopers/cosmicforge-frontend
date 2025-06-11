export interface Plans {
  name: string;
  message: string;
  price: string;
  duration: string;
  active: boolean;
  offers: string[];
  commission: number | undefined;
  usdPrice: string;
}
