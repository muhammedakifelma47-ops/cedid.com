import { getProduct, type CategorySlug, type Product } from "../data/catalog";

/**
 * Sayfalarda öne çıkarılan ürünleri merkezi katalogdan seçer.
 * Katalogda bulunmayan bir ürün adı yazılırsa derleme hata verir; böylece kırık bağlantı oluşmaz.
 */
export function pickProducts(category: CategorySlug, slugs: string[]): Product[] {
  return slugs.map((slug) => {
    const product = getProduct(category, slug);
    if (!product) throw new Error(`Katalogda bulunamayan ürün: ${category}/${slug}`);
    return product;
  });
}
