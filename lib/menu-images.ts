/** Curated cinematic imagery — warm luxury grading, consistent Pexels IDs */
const p = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const menuImages = {
  appetizers: p(1642454),
  sandwiches: p(1633578),
  burger: p(156114),
  bbq: p(361184),
  desi: p(12737663), // Dhiraj Jain's gourmet Indian curry under luxury lighting
  biryani: p(12737656), // Dhiraj Jain's majestic Michelin-star biryani close-up
  karahi: p(12737660), // Dhiraj Jain's authentic wok-charred karahi
  chinese: p(357756),
  tacos: p(2097090),
  soup: p(691114),
  fries: p(1893556),
  wings: p(60616),
  chaat: p(12737659), // Dhiraj Jain's exquisite plated South Asian street chaat
  hookah: p(1806038),
  hookahLounge: p(1267320),
  hookahPremium: p(1806038),
  mocktails: p(1125720),
  milkshakes: p(103566),
  juices: p(143133),
  chai: p(1414132),
  soda: p(50593),
  desserts: p(45201),
  cake: p(291528),
  falooda: p(1120588),
  lounge: p(1199957),
  catering: p(3184191),
  events: p(1105666),
  hero: p(262978, 1920),
  experience: p(1199957),
  cuisine: p(958545),
} as const;

export type ImageKey = keyof typeof menuImages;

const foodBySub: Record<string, string> = {
  appetizers: menuImages.appetizers,
  sandwiches: menuImages.sandwiches,
  bbq: menuImages.bbq,
  desi: menuImages.desi,
  chinese: menuImages.chinese,
};

const drinkBySub: Record<string, string> = {
  mocktails: menuImages.mocktails,
  milkshakes: menuImages.milkshakes,
  juices: menuImages.juices,
  "chai-coffee": menuImages.chai,
  soda: menuImages.soda,
};

const itemOverrides: Record<string, string> = {
  "pani-puri-shots": menuImages.chaat,
  "papdi-chaat": menuImages.chaat,
  "samosa-chaat": menuImages.chaat,
  "chicken-wings": menuImages.wings,
  "sheesh-burger": menuImages.burger,
  "sheesh-smash-burger": menuImages.burger,
  "goat-biryani": menuImages.biryani,
  "chicken-biryani": menuImages.biryani,
  "chicken-karahi": menuImages.karahi,
  "magaz-nihari": menuImages.desi,
  "beef-nihari": menuImages.desi,
  "sheesh-bbq-platter": menuImages.bbq,
  "gola-kabob-roll": menuImages.tacos,
  "bang-bang-shrimp": p(699953), // Gourmet cooked chili prawns under rich lighting
  "special-shahi-falooda": menuImages.falooda,
  "gulab-jamun-cheesecake": menuImages.cake,
  "ocean-blue-mojito": menuImages.mocktails,
  hayati: menuImages.mocktails,
  "oreo-milkshake": menuImages.milkshakes,
  "paan-rabri-milkshake": menuImages.milkshakes,
};

export function resolveMenuImage(
  category: string,
  subcategory?: string,
  id?: string
): string {
  if (id && itemOverrides[id]) return itemOverrides[id];

  if (category === "food" && subcategory) {
    return foodBySub[subcategory] ?? menuImages.desi;
  }

  if (category === "hookah") {
    if (subcategory === "premium" || subcategory === "selection") {
      return menuImages.hookahPremium;
    }
    if (subcategory === "house-mixes") return menuImages.hookahLounge;
    return menuImages.hookah;
  }

  if (category === "drinks" && subcategory) {
    return drinkBySub[subcategory] ?? menuImages.mocktails;
  }

  if (category === "desserts") return menuImages.desserts;

  return menuImages.lounge;
}
