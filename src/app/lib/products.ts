import { CONTENT } from "../content";
import type { TowerModelProduct, Lang } from "../types";

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
