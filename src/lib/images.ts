import type { ImageMetadata } from "astro";
import fs from "node:fs";
import path from "node:path";
import type { CategorySlug } from "../data/catalog";

type ImageModule = { default: ImageMetadata };

const productImages = import.meta.glob<ImageModule>(
  "/src/assets/images/products/**/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
const categoryImages = import.meta.glob<ImageModule>(
  "/src/assets/images/categories/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
const groupImages = import.meta.glob<ImageModule>(
  "/src/assets/images/groups/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
const sceneImages = import.meta.glob<ImageModule>(
  "/src/assets/images/scenes/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

function findByBase(modules: Record<string, ImageModule>, base: string): ImageMetadata | undefined {
  const key = Object.keys(modules).find((file) => file.replace(/\.(jpe?g|png|webp)$/i, "") === base);
  return key ? modules[key].default : undefined;
}

/** Ürün görseli: src/assets/images/products/<kategori>/<urun-slug>.(jpg|png|webp) */
export function getProductImage(category: CategorySlug, slug: string): ImageMetadata | undefined {
  return findByBase(productImages, `/src/assets/images/products/${category}/${slug}`);
}

export function getCategoryImage(category: CategorySlug): ImageMetadata {
  const image = findByBase(categoryImages, `/src/assets/images/categories/${category}`);
  if (!image) throw new Error(`Kategori görseli bulunamadı: ${category}`);
  return image;
}

export function getGroupImage(group: string): ImageMetadata | undefined {
  return findByBase(groupImages, `/src/assets/images/groups/${group}`);
}

export type SceneName =
  | "depo-hero"
  | "fabrika-bant"
  | "restoran-bant"
  | "depo-koridor"
  | "fabrika-hero"
  | "restoran-hero"
  | "profesyonel-mutfak"
  | "depo-raflar"
  | "kamyon"
  | "endustriyel-temizlik"
  | "urunler-hero"
  | "depo-forklift"
  | "depo-genis";

export function getScene(name: SceneName): ImageMetadata {
  const image = findByBase(sceneImages, `/src/assets/images/scenes/${name}`);
  if (!image) throw new Error(`Sahne görseli bulunamadı: ${name}`);
  return image;
}

/**
 * Firma tarafından sağlanan dosyalar `public/` altında aranır.
 * Dosya eklendiğinde bir sonraki derlemede otomatik olarak kullanılır.
 */
function findPublicFile(dir: string, baseNames: string[], extensions: string[]): string | undefined {
  const root = path.join(process.cwd(), "public", dir);
  for (const base of baseNames) {
    for (const ext of extensions) {
      if (fs.existsSync(path.join(root, `${base}.${ext}`))) return `/${dir}/${base}.${ext}`;
    }
  }
  return undefined;
}

/** Gerçek mağaza fotoğrafı: public/images/kurumsal/magaza.(jpg|webp|png) */
export const storePhoto = findPublicFile("images/kurumsal", ["magaza"], ["jpg", "jpeg", "webp", "png"]);
/** E-katalog PDF: public/katalog/cedid-e-katalog.pdf */
export const catalogPdf = findPublicFile("katalog", ["cedid-e-katalog"], ["pdf"]);
