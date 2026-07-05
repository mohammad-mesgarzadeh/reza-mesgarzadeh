import { CONTENT } from "../content";
import type { TowerModelProduct, TelecomProduct, Lang } from "../types";

export function getAllProducts(lang: Lang): TowerModelProduct[] {
  return CONTENT[lang].towerModels.products;
}

export function getProductById(id: string, lang: Lang): TowerModelProduct | undefined {
  return CONTENT[lang].towerModels.products.find((p) => p.id === id);
}

export function getRelatedProducts(
  product: TowerModelProduct,
  lang: Lang,
  count = 4,
): TowerModelProduct[] {
  return CONTENT[lang].towerModels.products.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.useCase === product.useCase),
  ).slice(0, count);
}

export function getAllTelecomProducts(lang: Lang): TelecomProduct[] {
  return CONTENT[lang].telecomProducts.products;
}

export function getTelecomProductById(id: string, lang: Lang): TelecomProduct | undefined {
  return CONTENT[lang].telecomProducts.products.find((p) => p.id === id);
}

export function getRelatedTelecomProducts(
  product: TelecomProduct,
  lang: Lang,
  count = 4,
): TelecomProduct[] {
  return CONTENT[lang].telecomProducts.products.filter(
    (p) => p.id !== product.id && p.category === product.category,
  ).slice(0, count);
}

export function getScaleModelById(id: string, lang: Lang): TowerModelProduct | undefined {
  return getProductById(id, lang);
}

export function getAllScaleModels(lang: Lang): TowerModelProduct[] {
  return getAllProducts(lang);
}

export function getRelatedScaleModels(
  product: TowerModelProduct,
  lang: Lang,
  count = 4,
): TowerModelProduct[] {
  return getRelatedProducts(product, lang, count);
}
