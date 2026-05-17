export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  source: "google" | "tripadvisor";
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Tereza H.",
    avatar: "TH",
    rating: 5,
    text: "Naprosto nejlepší cold brew v Praze! Personál je úžasný — vždy s úsměvem a spoustou energie. Tohle místo mi dělá každé ráno lepší.",
    date: "Duben 2025",
    source: "google",
  },
  {
    id: "r2",
    name: "Marek V.",
    avatar: "MV",
    rating: 5,
    text: "Green Boost je na dalším levelu. Přišel jsem unavený po ranní poradě a odcházel jsem nabytý energií. Kavárna Svěží je teď moje každodenní rutina.",
    date: "Březen 2025",
    source: "google",
  },
  {
    id: "r3",
    name: "Anna K.",
    avatar: "AK",
    rating: 5,
    text: "Pracuji z kavárny a Svěží je zdaleka nejlepší místo v Praze pro práci. Skvělé wifi, tichá atmosféra a obsluha, která ti zvedne náladu.",
    date: "Duben 2025",
    source: "tripadvisor",
  },
  {
    id: "r4",
    name: "Ondřej P.",
    avatar: "OP",
    rating: 5,
    text: "Specialty filtrační káva s Sunrise juicem — takhle vypadá ideální snídaně. Prostředí je krásné, čisté, moderní. Jednoznačně doporučuji.",
    date: "Únor 2025",
    source: "google",
  },
  {
    id: "r5",
    name: "Lucie M.",
    avatar: "LM",
    rating: 5,
    text: "Konečně kavárna, kde personál skutečně žije tím, co dělá. Cítíte tu pozitivní energii hned od vstupu. Cheesecake je absolutní bomba.",
    date: "Duben 2025",
    source: "google",
  },
];
