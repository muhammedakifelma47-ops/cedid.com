/** Static product catalog model. Product details and imagery will be added later. */
export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [];
