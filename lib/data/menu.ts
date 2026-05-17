export type MenuCategory = "kava" | "juice" | "dezerty";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tag?: "bestseller" | "new" | "vegan" | "seasonal";
  image: string;
  imageAlt: string;
}

export const menuItems: MenuItem[] = [
  // ── Káva ──────────────────────────────────────────
  {
    id: "espresso",
    name: "Espresso",
    description: "Intenzivní, krémové, dokonale extrahované. Základ všeho.",
    price: 65,
    category: "kava",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
    imageAlt: "Espresso v bílém šálku na dřevěném stole",
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Dvojitý espresso s jemně napěněným mlékem. Silný, ale hedvábný.",
    price: 89,
    category: "kava",
    tag: "bestseller",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80",
    imageAlt: "Flat white s latte art v kavárně Svěží",
  },
  {
    id: "cold-brew-svezi",
    name: "Cold Brew Svěží",
    description: "Studená extrakce 18 hodin, podávána se zmrzlým citrusem a mátou.",
    price: 95,
    category: "kava",
    tag: "new",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    imageAlt: "Cold brew káva se ledem v Kavárně Svěží Praha",
  },
  {
    id: "specialty-filtr",
    name: "Specialty Filtr",
    description: "Výběrová filtrační káva z aktuální mikrodávky. Každý týden jiná.",
    price: 110,
    category: "kava",
    tag: "seasonal",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    imageAlt: "Specialty filtrační káva v Kavárně Svěží Praha",
  },
  {
    id: "latte",
    name: "Caffè Latte",
    description: "Jemné espresso zahalené do hodvábného mléka. Klasika bez kompromisů.",
    price: 85,
    category: "kava",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
    imageAlt: "Caffè latte s latte art v bílém hrnku",
  },

  // ── Juice ─────────────────────────────────────────
  {
    id: "green-boost",
    name: "Green Boost",
    description: "Špenát, jablko, zázvor, okurka, citron. Energie zevnitř.",
    price: 119,
    category: "juice",
    tag: "bestseller",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80",
    imageAlt: "Zelený fresh juice Green Boost v kavárně Svěží",
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Pomeranč, mrkev, kurkuma, zázvor. Jako ráno na jihu Evropy.",
    price: 109,
    category: "juice",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80",
    imageAlt: "Oranžový fresh juice Sunrise z pomeranče a mrkve",
  },
  {
    id: "detox-svezi",
    name: "Detox Svěží",
    description: "Řepa, jablko, citron, mátový odvar. Pij svěžest.",
    price: 129,
    category: "juice",
    tag: "new",
    image: "https://images.unsplash.com/photo-1586788680434-30d324626f3e?w=600&q=80",
    imageAlt: "Červený detox fresh juice z řepy a jablka Praha",
  },
  {
    id: "tropical-breeze",
    name: "Tropical Breeze",
    description: "Ananas, mango, kokosová voda, limetka. Dovolená v každém doušku.",
    price: 125,
    category: "juice",
    tag: "seasonal",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    imageAlt: "Tropický fresh juice Tropical Breeze v kavárně Svěží",
  },

  // ── Dezerty ───────────────────────────────────────
  {
    id: "cheesecake",
    name: "Domácí Cheesecake",
    description: "Pečený New York cheesecake s sezonním ovocem. Pekárna, ne fabrika.",
    price: 99,
    category: "dezerty",
    tag: "bestseller",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    imageAlt: "Domácí cheesecake s ovocem v kavárně Svěží Praha",
  },
  {
    id: "vegan-brownie",
    name: "Veganský Brownie",
    description: "Tmavá čokoláda, mandle, datlová hmota. Žádné kompromisy v chuti.",
    price: 89,
    category: "dezerty",
    tag: "vegan",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    imageAlt: "Veganský čokoládový brownie v kavárně Svěží Praha",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description: "Pečeme každé ráno čerstvé. Skořice, cardamom, krémová poleva.",
    price: 79,
    category: "dezerty",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
    imageAlt: "Čerstvý cinnamon roll skořicový závin v kavárně Svěží",
  },
];

export const menuCategories = [
  { id: "kava" as MenuCategory, label: "Fresh Káva", emoji: "☕" },
  { id: "juice" as MenuCategory, label: "Fresh Juice", emoji: "🍊" },
  { id: "dezerty" as MenuCategory, label: "Dezerty", emoji: "🍰" },
];
