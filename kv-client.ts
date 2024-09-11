import { kv } from '@vercel/kv';

export interface CoffeeBrand {
  name: string;
  types: string[];
  features: string[];
  priceRange: string;
  notableProducts: string[];
}

export async function getBrand(brandKey: string): Promise<CoffeeBrand | null> {
  return await kv.get<CoffeeBrand>(brandKey);
}

export async function getAllBrands(): Promise<CoffeeBrand[]> {
  const keys = await kv.keys('brand:*');
  const brands = await Promise.all(keys.map(key => kv.get<CoffeeBrand>(key)));
  return brands.filter((brand): brand is CoffeeBrand => brand !== null);
}