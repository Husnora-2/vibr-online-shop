// //  export type Product = {
// //   id: string;
// //   slug: string;
// //   name: string;
// //   category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
// //   collection: string;
// //   price: number;
// //   currency: "$";
// //   metal: string;
// //   stone: string;
// //   description: string;
// //   details: string[];
// //   image: string;
// //   colors: { name: string; hex: string; image: string }[];
// //   badge?: "New" | "Limited" | "Iconic" | "Bestseller";
// // };

// import { V } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

// // // Auto-generated images. Each product has its own unique images per color.
// // const img = (name: string) => new URL(`../assets/products/${name}.jpg`, import.meta.url).href;

// // const desc = (s: string) => s;

// // const COLORS = {
// //   black:  { name: "Qora",   hex: "#111111" },
// //   white:  { name: "Oq",     hex: "#f5f5f5" },
// //   gold:   { name: "Tilla",  hex: "#c9a14a" },
// //   rose:   { name: "Pushti", hex: "#d9a8a0" },
// //   silver: { name: "Kumush", hex: "#cfd2d6" },
// //   blue:   { name: "Ko'k",   hex: "#1f3a8a" },
// //   green:  { name: "Yashil", hex: "#1f6b3d" },
// //   emerald:{ name: "Zumrad", hex: "#0d8a5d" },
// //   ruby:   { name: "Yoqut",  hex: "#9a1d2e" },
// // };

// // type CK = keyof typeof COLORS;
// // const colorVariants = (slug: string, keys: CK[]) =>
// //   keys.map((k) => ({ name: COLORS[k].name, hex: COLORS[k].hex, image: img(`${slug}-${k}`) }));

// // const make = (
// //   p: Omit<Product, "image" | "colors" | "currency"> & { variants: CK[] }
// // ): Product => {
// //   const colors = colorVariants(p.slug, p.variants);
// //   return { ...p, currency: "$", image: colors[0].image, colors };
// // };

// // export const products: Product[] = [
// //   // WATCHES — vibration / silent dress watches
// //   make({ id: "w1", slug: "tourbillon-geneve", name: "Tourbillon de Genève", category: "watches", collection: "Haute Horlogerie", price: 8600, metal: "Rose gold case", stone: "Mother-of-pearl dial", description: desc("Flying tourbillon, hand-engraved bridges, alligator strap."), details: ["Manual movement","Power reserve 80h","40 mm case","Sapphire crystal"], variants: ["gold","black","white","silver"], badge: "Iconic" }),
// //   make({ id: "w2", slug: "automatique-aurelia", name: "Automatique Aurelia", category: "watches", collection: "Classique", price: 1420, metal: "Steel & gold", stone: "Silver-tone dial", description: desc("A dress automatic with date — the everyday companion."), details: ["Automatic","Power reserve 60h","38 mm case","Water resistant 50m"], variants: ["silver","gold","black","blue"], badge: "Bestseller" }),
// //   make({ id: "w3", slug: "lady-aurore", name: "Lady Aurore", category: "watches", collection: "Classique", price: 980, metal: "Rose gold", stone: "Diamond bezel", description: desc("A jewellery watch with diamond-set bezel and mother-of-pearl dial."), details: ["Quartz movement","32 mm case","Bezel set with diamonds","Satin strap"], variants: ["rose","white","black","gold"], badge: "New" }),
// //   make({ id: "w4", slug: "chronographe-vendome", name: "Chronographe Vendôme", category: "watches", collection: "Sport Chic", price: 2240, metal: "Steel", stone: "Slate dial", description: desc("In-house chronograph with tachymeter scale."), details: ["Column-wheel chrono","42 mm case","Water resistance 100m","Rubber strap"], variants: ["black","blue","white","green"] }),
// //   make({ id: "w5", slug: "skeleton-imperial", name: "Skeleton Imperial", category: "watches", collection: "Haute Horlogerie", price: 5600, metal: "White gold", stone: "Sapphire dial", description: desc("A fully open-worked movement, hand-bevelled and anglaged."), details: ["Skeleton, hand-finished","Power reserve 72h","40 mm","Alligator strap"], variants: ["silver","black","gold","rose"], badge: "Limited" }),
// //   make({ id: "w6", slug: "diver-azur", name: "Diver Azur", category: "watches", collection: "Sport Chic", price: 1890, metal: "Steel", stone: "Ceramic bezel", description: desc("Professional dive watch, 300m water resistance."), details: ["Automatic","42 mm case","Ceramic bezel","Steel bracelet"], variants: ["blue","black","green","silver"] }),

// //   // RINGS
// //   make({ id: "r1", slug: "solitaire-aurore", name: "Solitaire Aurore", category: "rings", collection: "Aurore", price: 895, metal: "18k gold", stone: "1.20 ct diamond", description: desc("A timeless six-prong solitaire."), details: ["18k gold","Diamond 1.20 ct","Hand-finished","Lifetime warranty"], variants: ["gold","white","rose"], badge: "Iconic" }),
// //   make({ id: "r2", slug: "halo-celeste", name: "Halo Céleste", category: "rings", collection: "Céleste", price: 642, metal: "18k gold", stone: "0.80 ct + halo pavé", description: desc("Cascading halo of micro-pavé diamonds."), details: ["18k gold","Centre 0.80 ct","48 pavé diamonds","Comfort band"], variants: ["white","gold","rose"] }),
// //   make({ id: "r3", slug: "trinity-band", name: "Trinity Band", category: "rings", collection: "Maison", price: 238, metal: "Tri-tone gold", stone: "—", description: desc("Three intertwined bands in yellow, rose and white gold."), details: ["18k tri-colour gold","Width 3.5 mm","Polished finish","Engravable"], variants: ["gold","rose","white"], badge: "Bestseller" }),
// //   make({ id: "r4", slug: "emerald-imperatrice", name: "Impératrice Emerald", category: "rings", collection: "Imperial", price: 1840, metal: "Platinum", stone: "2.40 ct emerald", description: desc("A regal emerald-cut stone framed by tapered baguettes."), details: ["Platinum 950","Emerald 2.40 ct","2 baguettes","Single edition"], variants: ["emerald","ruby","blue"], badge: "Limited" }),
// //   make({ id: "r5", slug: "eternity-riviere", name: "Eternity Rivière", category: "rings", collection: "Rivière", price: 568, metal: "18k gold", stone: "2.10 ct diamonds", description: desc("Twenty-two brilliants set shoulder to shoulder."), details: ["18k gold","22 round brilliants","2.10 ct total","Sizes 48–58"], variants: ["white","gold","rose"] }),
// //   make({ id: "r6", slug: "signet-monogramme", name: "Signet Monogramme", category: "rings", collection: "Maison", price: 198, metal: "18k gold", stone: "—", description: desc("A modern signet, ready for personal engraving."), details: ["18k gold, 9g","Oval 14×11mm","Custom engraving","Lifetime polish"], variants: ["gold","rose","white","black"], badge: "New" }),

// //   // NECKLACES
// //   make({ id: "n1", slug: "riviere-eclat", name: "Rivière Éclat", category: "necklaces", collection: "Rivière", price: 2460, metal: "18k gold", stone: "12.40 ct diamonds", description: desc("Sixty-eight graduated brilliants forming a flawless line of light."), details: ["18k gold","68 brilliants","Length 42 cm","Velvet case"], variants: ["white","gold","rose"], badge: "Iconic" }),
// //   make({ id: "n2", slug: "chaine-aurelia", name: "Chaîne Aurelia", category: "necklaces", collection: "Maison", price: 129, metal: "18k gold", stone: "—", description: desc("Our signature flat-link chain, mirror polished."), details: ["18k gold","Length 45 cm","Lobster clasp","2.4 mm"], variants: ["gold","white","rose"], badge: "Bestseller" }),
// //   make({ id: "n3", slug: "pendentif-soleil", name: "Pendentif Soleil", category: "necklaces", collection: "Céleste", price: 345, metal: "18k gold", stone: "Citrine 1.50 ct", description: desc("A radiant sun motif holding a faceted gemstone."), details: ["18k gold","Stone 1.50 ct","Diameter 18 mm","Adjustable chain"], variants: ["gold","emerald","blue","ruby"] }),
// //   make({ id: "n4", slug: "collier-perle", name: "Collier Perle", category: "necklaces", collection: "Maison", price: 498, metal: "18k gold", stone: "Pearl 11mm", description: desc("Single pearl on a fine box chain."), details: ["18k gold","Pearl 11mm","Length 42 cm","Diamond bail"], variants: ["white","black","rose"] }),
// //   make({ id: "n5", slug: "sautoir-vendome", name: "Sautoir Vendôme", category: "necklaces", collection: "Imperial", price: 920, metal: "18k gold", stone: "Diamonds 1.80 ct", description: desc("A long sautoir punctuated by diamond stations."), details: ["18k gold","12 diamond stations","Length 80 cm","Tassel pendant"], variants: ["gold","white","rose"], badge: "New" }),

// //   // EARRINGS
// //   make({ id: "e1", slug: "puces-aurore", name: "Puces Aurore", category: "earrings", collection: "Aurore", price: 148, metal: "18k gold", stone: "0.50 ct pair", description: desc("Solitaire studs — the everyday classic."), details: ["18k gold","2 brilliants","Six-prong setting","Butterfly backs"], variants: ["gold","white","rose"], badge: "Bestseller" }),
// //   make({ id: "e2", slug: "creoles-celeste", name: "Créoles Céleste", category: "earrings", collection: "Céleste", price: 289, metal: "18k gold", stone: "Pavé 0.80 ct", description: desc("Slim hoops paved with brilliants."), details: ["18k gold","Pavé 0.80 ct","Diameter 22 mm","Hinged clasp"], variants: ["white","gold","rose"] }),
// //   make({ id: "e3", slug: "pendantes-larme", name: "Pendantes Larme", category: "earrings", collection: "Imperial", price: 620, metal: "Platinum", stone: "Pear 1.20 ct", description: desc("Pear-cut stones suspended on an invisible thread."), details: ["Platinum 950","Pear stones","Length 28 mm","Lever back"], variants: ["white","emerald","ruby","blue"], badge: "Limited" }),
// //   make({ id: "e4", slug: "ear-cuff-luna", name: "Ear Cuff Luna", category: "earrings", collection: "Maison", price: 98, metal: "18k gold", stone: "—", description: desc("Sculpted cuff that traces the ear without piercing."), details: ["18k gold","Hand-formed","Adjustable","Sold individually"], variants: ["gold","rose","white","black"], badge: "New" }),

// //   // BRACELETS
// //   make({ id: "b1", slug: "tennis-riviere", name: "Tennis Rivière", category: "bracelets", collection: "Rivière", price: 1180, metal: "18k gold", stone: "5.00 ct diamonds", description: desc("The classic tennis bracelet — fifty brilliants in continuous flow."), details: ["18k gold","50 brilliants","Length 17 cm","Safety clasp"], variants: ["white","gold","rose"], badge: "Iconic" }),
// //   make({ id: "b2", slug: "jonc-aurelia", name: "Jonc Aurelia", category: "bracelets", collection: "Maison", price: 189, metal: "18k gold", stone: "—", description: desc("Slim polished bangle with hidden monogram clasp."), details: ["18k gold","Width 3 mm","Sizes S/M/L","Engravable inside"], variants: ["gold","white","rose"] }),
// //   make({ id: "b3", slug: "bracelet-cordelette", name: "Bracelet Cordelette", category: "bracelets", collection: "Maison", price: 69, metal: "18k gold + silk", stone: "Diamond 0.10 ct", description: desc("A single diamond on hand-braided silk."), details: ["18k gold caps","Italian silk cord","Adjustable","Diamond 0.10 ct"], variants: ["black","white","ruby","blue"], badge: "New" }),
// // ];

// // export const collections = [
// //   { slug: "aurore", name: "Aurore", tagline: "First light", description: "Soft rose tones." },
// //   { slug: "celeste", name: "Céleste", tagline: "Of the heavens", description: "Diamond-paved pieces." },
// //   { slug: "imperial", name: "Imperial", tagline: "Crown jewels", description: "Rare emeralds & sapphires." },
// //   { slug: "riviere", name: "Rivière", tagline: "A river of light", description: "Iconic diamond settings." },
// //   { slug: "maison", name: "Maison", tagline: "Everyday icons", description: "Pieces for a lifetime." },
// // ];

// // export const journal = [
// //   { slug: "art-of-setting", title: "The Art of the Six-Prong Setting", excerpt: "How our atelier crafts a setting that lifts a diamond into the light.", date: "Mart 2026", category: "Craftsmanship" },
// //   { slug: "muzo-emeralds", title: "From Muzo to Geneva: A Journey of Emeralds", excerpt: "Tracing the path of our emeralds.", date: "Fevral 2026", category: "Provenance" },
// //   { slug: "bridal-edit", title: "The 2026 Bridal Edit", excerpt: "Five quiet rings for a lifetime of meaning.", date: "Yanvar 2026", category: "Editorial" },
// // ];

// // export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
// // export const byCategory = (cat: Product["category"]) => products.filter((p) => p.category === cat);





































// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
//   collection: string;
//   price: number;
//   currency: "$";
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
//   badge?: "New" | "Limited" | "Iconic" | "Bestseller";
// };

// // Vite uchun rasmlarni xavfsiz yuklash (path xatolarini oldini oladi)
// const img = (name: string) => {
//   try {
//     return new URL(`../assets/products/${name}.jpg`, import.meta.url).href;
//   } catch (e) {
//     return ""; 
//   }
// };

// const COLORS = {
//   black:   { name: "Qora",   hex: "#111111" },
//   white:   { name: "Oq",     hex: "#f5f5f5" },
//   gold:    { name: "Tilla",  hex: "#c9a14a" },
//   rose:    { name: "Pushti", hex: "#d9a8a0" },
//   silver:  { name: "Kumush", hex: "#cfd2d6" },
//   blue:    { name: "Ko'k",   hex: "#1f3a8a" },
//   green:   { name: "Yashil", hex: "#1f6b3d" },
//   emerald: { name: "Zumrad", hex: "#0d8a5d" },
//   ruby:    { name: "Yoqut",  hex: "#9a1d2e" },
// };

// type CK = keyof typeof COLORS;
// const colorVariants = (slug: string, keys: CK[]) =>
//   keys.map((k) => ({ name: COLORS[k].name, hex: COLORS[k].hex, image: img(`${slug}-${k}`) }));

// const make = (
//   p: Omit<Product, "image" | "colors" | "currency"> & { variants: CK[] }
// ): Product => {
//   const colors = colorVariants(p.slug, p.variants);
//   return { ...p, currency: "$", image: colors[0]?.image || img(p.slug), colors };
// };

// export const products: Product[] = [
//   make({ id: "w1", slug: "tourbillon-geneve", name: "Tourbillon de Genève", category: "watches", collection: "Haute Horlogerie", price: 8600, metal: "Rose gold case", stone: "Mother-of-pearl dial", description: "Flying tourbillon, hand-engraved bridges, alligator strap.", details: ["Manual movement","Power reserve 80h","40 mm case","Sapphire crystal"], variants: ["gold","black","white","silver"], badge: "Iconic" }),
//   make({ id: "w2", slug: "automatique-aurelia", name: "Automatique Aurelia", category: "watches", collection: "Classique", price: 1420, metal: "Steel & gold", stone: "Silver-tone dial", description: "A dress automatic with date — the everyday companion.", details: ["Automatic","Power reserve 60h","38 mm case","Water resistant 50m"], variants: ["silver","gold","black","blue"], badge: "Bestseller" }),
//   make({ id: "w5", slug: "skeleton-imperial", name: "Skeleton Imperial", category: "watches", collection: "Haute Horlogerie", price: 5600, metal: "White gold", stone: "Sapphire dial", description: "A fully open-worked movement, hand-bevelled and anglaged.", details: ["Skeleton, hand-finished","Power reserve 72h","40 mm","Alligator strap"], variants: ["silver","black","gold","rose"], badge: "Limited" }),
//   make({ id: "r1", slug: "solitaire-aurore", name: "Solitaire Aurore", category: "rings", collection: "Aurore", price: 895, metal: "18k gold", stone: "1.20 ct diamond", description: "A timeless six-prong solitaire.", details: ["18k gold","Diamond 1.20 ct","Hand-finished","Lifetime warranty"], variants: ["gold","white","rose"], badge: "Iconic" }),
//   make({ id: "n1", slug: "riviere-eclat", name: "Rivière Éclat", category: "necklaces", collection: "Rivière", price: 2460, metal: "18k gold", stone: "12.40 ct diamonds", description: "Sixty-eight graduated brilliants forming a flawless line of light.", details: ["18k gold","68 brilliants","Length 42 cm","Velvet case"], variants: ["white","gold","rose"], badge: "Iconic" }),
//   make({ id: "b1", slug: "tennis-riviere", name: "Tennis Rivière", category: "bracelets", collection: "Rivière", price: 1180, metal: "18k gold", stone: "5.00 ct diamonds", description: "The classic tennis bracelet — fifty brilliants in continuous flow.", details: ["18k gold","50 brilliants","Length 17 cm","Safety clasp"], variants: ["white","gold","rose"], badge: "Iconic" }),
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

















































// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
//   collection: string;
//   price: number;
//   currency: "$";
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
//   badge?: "New" | "Limited" | "Iconic" | "Bestseller";
// };

// // HAR BIR KATEGORIYA UCHUN ALOHIDA RASMLAR (Sharmanda bo'lmaslik uchun)
// const fallbackImages: Record<string, string> = {
//   watches: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop",
//   rings: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
//   bracelets: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
//   necklaces: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
//   earrings: "https://images.unsplash.com/photo-1635767791024-3d5cbc08477c?q=80&w=1000&auto=format&fit=crop"
// };

// const img = (name: string, category: string) => {
//   try {
//     // Mahalliy rasmni qidirish
//     const url = new URL(`../assets/products/${name}.jpg`, import.meta.url).href;
    
//     // Agar rasm nomi xato bo'lsa (Vite topolmasa), catch blokiga o'tadi
//     if (url.includes('undefined')) throw new Error();
//     return url;
//   } catch (e) {
//     // KATEGORIYAGA QARAB HAR XIL RASM QAYTARISH
//     // Shunda hamma mahsulot bir xil soat bo'lib qolmaydi
//     return fallbackImages[category] || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000";
//   }
// };

// const COLORS = {
//   black:   { name: "Qora",   hex: "#111111" },
//   white:   { name: "Oq",     hex: "#f5f5f5" },
//   gold:    { name: "Tilla",  hex: "#c9a14a" },
//   rose:    { name: "Pushti", hex: "#d9a8a0" },
//   silver:  { name: "Kumush", hex: "#cfd2d6" },
//   blue:    { name: "Ko'k",   hex: "#1f3a8a" },
// };

// type CK = keyof typeof COLORS;

// const make = (
//   p: Omit<Product, "image" | "colors" | "currency"> & { variants: CK[] }
// ): Product => {
//   // Ranglarni generatsiya qilishda kategoriyani ham uzatamiz
//   const colors = p.variants.map((k) => ({ 
//     name: COLORS[k].name, 
//     hex: COLORS[k].hex, 
//     image: img(`${p.slug}-${k}`, p.category) 
//   }));

//   return { 
//     ...p, 
//     currency: "$", 
//     image: colors[0]?.image, 
//     colors 
//   };
// };

// export const products: Product[] = [
//   make({ id: "w1", slug: "tourbillon-geneve", name: "Tourbillon de Genève", category: "watches", collection: "Haute Horlogerie", price: 8600, metal: "Rose gold case", stone: "Mother-of-pearl dial", description: "Flying tourbillon masterpiece.", details: ["40 mm case"], variants: ["gold","black"] }),
//   make({ id: "r1", slug: "solitaire-aurore", name: "Solitaire Aurore", category: "rings", collection: "Aurore", price: 895, metal: "18k gold", stone: "1.20 ct diamond", description: "Timeless solitaire.", details: ["Hand-finished"], variants: ["gold","white","rose"] }),
//   make({ id: "b1", slug: "eternity-bangle", name: "Eternity Bangle", category: "bracelets", collection: "Aurore", price: 540, metal: "18k Rose Gold", stone: "Small Diamonds", description: "Classic bangle.", details: ["7-inch"], variants: ["rose","gold"] }),
//   make({ id: "n1", slug: "stellar-pendant", name: "Stellar Pendant", category: "necklaces", collection: "Classique", price: 1200, metal: "White Gold", stone: "Sapphire", description: "Blue sapphire necklace.", details: ["18-inch chain"], variants: ["white","silver"] }),
// ];

// export const collections = [
//   { slug: "aurore", name: "Aurore", tagline: "First light", description: "Soft rose tones." },
//   { slug: "classique", name: "Classique", tagline: "Timeless", description: "Daily elegance." }
// ];

// export const journal = [
//   { id: "j1", title: "Swiss Horology", category: "Craftsmanship", date: "May 2026", excerpt: "Art of time.", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop" }
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);






















// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
//   collection: string;
//   price: number;
//   currency: "$";
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
//   badge?: "New" | "Limited" | "Iconic" | "Bestseller";
// };

// // HAR BIR RANG UCHUN PREMIUM RASMLAR (Unsplash)
// const premiumLibrary = {
//   watches: [
//     "https://images.unsplash.com/photo-1523170335258-f5ed11844a49", // Gold
//     "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6", // Black
//     "https://images.unsplash.com/photo-1526045431048-f857369aba09", // Silver
//     "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7", // Luxury 1
//     "https://images.unsplash.com/photo-1508685096489-77a46807c628", // Luxury 2
//   ],
//   bracelets: [
//     "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
//     "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     "https://images.unsplash.com/photo-1573408302355-02623a815dc6",
//   ]
// };

// const COLORS = {
//   black:   { name: "Qora",   hex: "#111111" },
//   white:   { name: "Oq",     hex: "#f5f5f5" },
//   gold:    { name: "Tilla",  hex: "#c9a14a" },
//   rose:    { name: "Pushti", hex: "#d9a8a0" },
//   silver:  { name: "Kumush", hex: "#cfd2d6" },
//   blue:    { name: "Ko'k",   hex: "#1f3a8a" },
// };

// type CK = keyof typeof COLORS;

// const make = (
//   p: Omit<Product, "image" | "colors" | "currency"> & { variants: CK[], images: string[] }
// ): Product => {
//   const colors = p.variants.map((k, index) => ({ 
//     name: COLORS[k].name, 
//     hex: COLORS[k].hex, 
//     // Agar images massivida rasm bo'lsa o'shani, bo'lmasa birinchisini oladi
//     image: p.images[index] || p.images[0] + "?q=80&w=1000&auto=format&fit=crop"
//   }));

//   return { 
//     ...p, 
//     currency: "$", 
//     image: colors[0].image, 
//     colors 
//   };
// };

// export const products: Product[] = [
//   // --- WATCHES (10 TA SOAT) ---
//   make({ id: "w1", slug: "tourbillon-geneve", name: "Tourbillon de Genève", category: "watches", collection: "Haute Horlogerie", price: 8600, metal: "18k Rose Gold", stone: "Diamond markers", description: "The pinnacle of Swiss watchmaking.", details: ["Tourbillon movement"], variants: ["gold","black"], images: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49", "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6"] }),
//   make({ id: "w2", slug: "royal-oak", name: "Royal Excellence", category: "watches", collection: "Haute Horlogerie", price: 12400, metal: "Titanium", stone: "None", description: "Modern architectural design.", details: ["Self-winding"], variants: ["silver","black"], images: ["https://images.unsplash.com/photo-1526045431048-f857369aba09", "https://images.unsplash.com/photo-1547996160-81dfa63595aa"] }),
//   make({ id: "w3", slug: "classic-heritage", name: "Classic Heritage", category: "watches", collection: "Classique", price: 3200, metal: "Steel", stone: "Sapphire", description: "Timeless dress watch.", details: ["Automatic"], variants: ["white","blue"], images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d", "https://images.unsplash.com/photo-1508685096489-77a46807c628"] }),
//   make({ id: "w4", slug: "midnight-chronograph", name: "Midnight Chrono", category: "watches", collection: "Classique", price: 4500, metal: "Black Ceramic", stone: "None", description: "Stealth luxury.", details: ["Chronograph function"], variants: ["black"], images: ["https://images.unsplash.com/photo-1548171915-e79a380a2a4b"] }),
//   make({ id: "w5", slug: "ocean-master", name: "Ocean Master", category: "watches", collection: "Classique", price: 2800, metal: "Steel", stone: "Luminescent", description: "Professional diver watch.", details: ["300m Water resistance"], variants: ["blue","silver"], images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30", "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7"] }),
//   make({ id: "w6", slug: "rose-gold-stellar", name: "Rose Stellar", category: "watches", collection: "Aurore", price: 7200, metal: "Rose Gold", stone: "Mother-of-pearl", description: "Elegant lady watch.", details: ["Jewelry clasp"], variants: ["rose","gold"], images: ["https://images.unsplash.com/photo-1619134778706-7015533a6150", "https://images.unsplash.com/photo-1509115502069-4a9f1853a0f1"] }),
//   make({ id: "w7", slug: "skeleton-grand", name: "Grand Skeleton", category: "watches", collection: "Haute Horlogerie", price: 15000, metal: "Platinum", stone: "Ruby bearings", description: "Visible movement art.", details: ["Open-heart dial"], variants: ["silver"], images: ["https://images.unsplash.com/photo-1585123334904-845d60e97b29"] }),
//   make({ id: "w8", slug: "aviator-pro", name: "Aviator Pro", category: "watches", collection: "Classique", price: 2100, metal: "Steel", stone: "None", description: "Pilot's essential tool.", details: ["Dual time zone"], variants: ["black","silver"], images: ["https://images.unsplash.com/photo-1539874754764-5a96559165b0", "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7"] }),
//   make({ id: "w9", slug: "minimal-gold", name: "Minimalist Gold", category: "watches", collection: "Aurore", price: 1500, metal: "Gold Plated", stone: "None", description: "Simple luxury.", details: ["Ultra thin"], variants: ["gold"], images: ["https://images.unsplash.com/photo-1509115502069-4a9f1853a0f1"] }),
//   make({ id: "w10", slug: "sport-vitesse", name: "Sport Vitesse", category: "watches", collection: "Classique", price: 1900, metal: "Rubber & Steel", stone: "None", description: "Dynamic lifestyle.", details: ["Shock resistant"], variants: ["blue","black"], images: ["https://images.unsplash.com/photo-1518131394553-c3fd69099d9d", "https://images.unsplash.com/photo-1557531751-1ad945035bb3"] }),

//   // --- BRACELETS (RANGI BILAN O'ZGARADIGAN) ---
//   make({ 
//     id: "b1", slug: "eternity-bangle", name: "Eternity Bangle", category: "bracelets", collection: "Aurore", price: 540, metal: "18k Gold", stone: "Diamonds", 
//     description: "Iconic eternity design.", details: ["Hand-set stones"], 
//     variants: ["gold","silver","rose"], 
//     images: [
//       "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338", // Gold variant
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a", // Silver variant
//       "https://images.unsplash.com/photo-1573408302355-02623a815dc6"  // Rose variant
//     ] 
//   }),
//   make({ 
//     id: "b2", slug: "tennis-bracelet", name: "Diamond Tennis", category: "bracelets", collection: "Classique", price: 1200, metal: "White Gold", stone: "3ct Diamonds", 
//     description: "Pure brilliance on your wrist.", details: ["Safety clasp"], 
//     variants: ["white","silver"], 
//     images: ["https://images.unsplash.com/photo-1596944221741-f8dc03866d9f", "https://images.unsplash.com/photo-1602173574767-37ac01994b2a"] 
//   }),

//   // --- RINGS ---
//   make({ id: "r1", slug: "solitaire-aurore", name: "Solitaire Aurore", category: "rings", collection: "Aurore", price: 895, metal: "18k Gold", stone: "1.20ct Diamond", description: "The perfect engagement ring.", details: ["Six-prong setting"], variants: ["gold","white"], images: ["https://images.unsplash.com/photo-1601121141461-9d6647bca1ed", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"] }),
// ];

// export const collections = [
//   { slug: "haute-horlogerie", name: "Haute Horlogerie", tagline: "The Art of Time", description: "Exceptional movements for the true connoisseur." },
//   { slug: "aurore", name: "Aurore", tagline: "First Light", description: "Ethereal designs in rose and yellow gold." },
//   { slug: "classique", name: "Classique", tagline: "Timeless Elegance", description: "Daily luxury for any occasion." },
// ];

// export const journal = [
//   { id: "j1", title: "Swiss Craftsmanship", category: "Heritage", date: "May 2026", excerpt: "Inside our Geneva atelier.", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49" }
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);



















// export const products: Product[] = [
//   // --- RINGS ---
//   createProduct({
//     id: "r1", slug: "diamond-engagement", name: "Diamond Solitaire Ring", category: "rings", collection: "Classique", price: 4500, metal: "18K Gold", stone: "Diamond",
//     description: "A timeless symbol of love and commitment, featuring a brilliant-cut diamond.", details: ["GIA Certified", "High Polish Finish"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/briliant uzukoltinrang.png" },
//       { color: "silver", url: "/src/assets/products/briliant uzukkulurang.png" }
//     ]
//   }),
//   createProduct({
//     id: "r2", slug: "minimalist-band", name: "Minimalist Gold Band", category: "rings", collection: "Aurore", price: 900, metal: "14K Gold", stone: "None",
//     description: "Sleek and modern, this band is designed for effortless daily elegance.", details: ["Lightweight", "Comfort Fit"],
//     variants: [{ color: "gold", url: "/src/assets/products/minimalist uzukodam rang.png" }]
//   }),
//   createProduct({
//     id: "r3", slug: "rose-petal-ring", name: "Rose Petal Ring", category: "rings", collection: "Aurore", price: 1250, metal: "Rose Gold", stone: "None",
//     description: "Delicate design inspired by the soft curves of a rose petal.", details: ["Exquisite Craftsmanship"],
//     variants: [{ color: "rose", url: "/src/assets/products/puwti izuk.png" }]
//   }),

//   // --- NECKLACES ---
//   createProduct({
//     id: "n1", slug: "pearl-essence-necklace", name: "Pearl Essence Necklace", category: "necklaces", collection: "Classique", price: 1800, metal: "Gold", stone: "Pearl",
//     description: "Lustrous sea pearls hand-selected for their exceptional brilliance.", details: ["Natural Pearls", "Gold Chain"],
//     variants: [{ color: "white", url: "/src/assets/products/marvarid marjon oq rang.png" }]
//   }),

//   // --- BRACELETS ---
//   createProduct({
//     id: "b1", slug: "luxury-gold-bangle", name: "Luxury Gold Bangle", category: "bracelets", collection: "Aurore", price: 3200, metal: "18K Gold", stone: "Diamond",
//     description: "A statement piece featuring intricate patterns and shimmering stones.", details: ["Hand-Finished", "Security Clasp"],
//     variants: [{ color: "gold", url: "/src/assets/products/oltin braslet.png" }]
//   }),

//   // --- WATCHES (LADY AURORE) ---
//   createProduct({
//     id: "w1", slug: "lady-aurore-watch", name: "Lady Aurore Elite", category: "watches", collection: "Aurore", price: 5800, metal: "Premium Steel", stone: "Sapphire",
//     description: "Sophisticated timepiece designed for the modern woman.", details: ["Swiss Movement", "Water Resistant"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/lady-aurore-gold.jpg" },
//       { color: "silver", url: "/src/assets/products/lady-aurore-white.jpg" },
//       { color: "rose", url: "/src/assets/products/lady-aurore-rose.jpg" },
//       { color: "black", url: "/src/assets/products/lady-aurore-black.jpg" }
//     ]
//   }),

//   // --- WATCHES (SKELETON IMPERIAL) ---
//   createProduct({
//     id: "w2", slug: "skeleton-imperial", name: "Skeleton Imperial", category: "watches", collection: "Classique", price: 7200, metal: "Titanium", stone: "Sapphire",
//     description: "A masterpiece of mechanical engineering showing the inner beauty of time.", details: ["Automatic Caliber", "Exposed Gears"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/skeleton-imperial-gold.jpg" },
//       { color: "silver", url: "/src/assets/products/skeleton-imperial-silver.jpg" },
//       { color: "rose", url: "/src/assets/products/skeleton-imperial-rose.jpg" },
//       { color: "black", url: "/src/assets/products/skeleton-imperial-black.jpg" }
//     ]
//   }),

//   // --- WATCHES (AUTOMATIQUE AURELIA) ---
//   createProduct({
//     id: "w3", slug: "automatique-aurelia", name: "Automatique Aurelia", category: "watches", collection: "Aurore", price: 4900, metal: "Gold Plated", stone: "None",
//     description: "Classic design meets modern automatic precision.", details: ["Self-Winding", "Leather Strap Compatible"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/automatique-aurelia-gold.jpg" },
//       { color: "silver", url: "/src/assets/products/automatique-aurelia-silver.jpg" },
//       { color: "black", url: "/src/assets/products/automatique-aurelia-black.jpg" },
//       { color: "blue", url: "/src/assets/products/automatique-aurelia-blue.jpg" }
//     ]
//   })
// ];

// export const collections = [
//   { slug: "aurore", name: "Aurore", tagline: "Golden Moments of Radiance" },
//   { slug: "classique", name: "Classique", tagline: "Timeless Heritage" }
// ];

// export const journal = [
//   {
//     id: "j1",
//     title: "The Art of Jewelry Care",
//     date: "May 2024",
//     excerpt: "Discover how to maintain the eternal shine of your precious pieces.",
//     image: "/src/assets/products/craftsmanship.jpg"
//   }
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);








































































//  export type Product = {
//    id: string;
//   slug: string;
//   name: string;
//   category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
//   collection: string;
//   price: number;
//   currency: "$";
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
// };

// const COLORS = {
//   gold:   { name: "Gold",        hex: "#D4AF37" },
//   silver: { name: "Silver",      hex: "#C0C0C0" },
//   rose:   { name: "Rose Gold",   hex: "#E5B09E" },
//   black:  { name: "Black",       hex: "#000000" },
//   blue:   { name: "Deep Blue",   hex: "#00008B" },
//   white:  { name: "Pure White",  hex: "#FFFFFF" },
//   green:  { name: "Emerald",     hex: "#50C878" },
// };

// const createProduct = (
//   p: Omit<Product, "image" | "colors" | "currency"> & { 
//     variants: { color: keyof typeof COLORS; url: string }[] 
//   }
// ): Product => {
//   const colors = p.variants.map((v) => ({
//     name: COLORS[v.color].name,
//     hex: COLORS[v.color].hex,
//     image: v.url
//   }));
//   return { ...p, currency: "$", image: colors[0].image, colors };
// };









// export const products: Product[] = [
//   // --- RINGS ---
//   createProduct({
//     id: "r1", slug: "diamond-engagement", name: "Diamond Solitaire Ring", category: "rings", collection: "Classique", price: 4500, metal: "18K Gold", stone: "Diamond",
//     description: "A timeless symbol of love and commitment, featuring a brilliant-cut diamond.", details: ["GIA Certified", "High Polish Finish"],
//     variants: [
//       { color: "gold", url: "/products/briliant uzukoltinrang.png" },
//       { color: "silver", url: "/products/briliant uzukkulurang.png" }
//     ]
//   }),
//   createProduct({
//     id: "r2", slug: "minimalist-band", name: "Minimalist Gold Band", category: "rings", collection: "Aurore", price: 900, metal: "14K Gold", stone: "None",
//     description: "Sleek and modern, this band is designed for effortless daily elegance.", details: ["Lightweight", "Comfort Fit"],
//     variants: [{ color: "gold", url: "/products/minimalist uzukodam rang.png" }]
//   }),
//   createProduct({
//     id: "r3", slug: "rose-petal-ring", name: "Rose Petal Ring", category: "rings", collection: "Aurore", price: 1250, metal: "Rose Gold", stone: "None",
//     description: "Delicate design inspired by the soft curves of a rose petal.", details: ["Exquisite Craftsmanship"],
//     variants: [{ color: "rose", url: "/products/puwti izuk.png" }]
//   }),

//   // --- NECKLACES ---
//   createProduct({
//     id: "n1", slug: "pearl-essence-necklace", name: "Pearl Essence Necklace", category: "necklaces", collection: "Classique", price: 1800, metal: "Gold", stone: "Pearl",
//     description: "Lustrous sea pearls hand-selected for their exceptional brilliance.", details: ["Natural Pearls", "Gold Chain"],
//     variants: [{ color: "white", url: "/products/marvarid marjon oq rang.png" }]
//   }),

//   // --- BRACELETS ---
//   createProduct({
//     id: "b1", slug: "luxury-gold-bangle", name: "Luxury Gold Bangle", category: "bracelets", collection: "Aurore", price: 3200, metal: "18K Gold", stone: "Diamond",
//     description: "A statement piece featuring intricate patterns and shimmering stones.", details: ["Hand-Finished", "Security Clasp"],
//     variants: [{ color: "gold", url: "/products/oltin braslet.png" }]
//   }),

//   // --- WATCHES (LADY AURORE) ---
//   createProduct({
//     id: "w1", slug: "lady-aurore-watch", name: "Lady Aurore Elite", category: "watches", collection: "Aurore", price: 5800, metal: "Premium Steel", stone: "Sapphire",
//     description: "Sophisticated timepiece designed for the modern woman.", details: ["Swiss Movement", "Water Resistant"],
//     variants: [
//       { color: "gold", url: "/products/lady-aurore-gold.jpg" },
//       { color: "silver", url: "/products/lady-aurore-white.jpg" },
//       { color: "rose", url: "/products/lady-aurore-rose.jpg" },
//       { color: "black", url: "/products/lady-aurore-black.jpg" }
//     ]
//   }),

//   // --- WATCHES (SKELETON IMPERIAL) ---
//   createProduct({
//     id: "w2", slug: "skeleton-imperial", name: "Skeleton Imperial", category: "watches", collection: "Classique", price: 7200, metal: "Titanium", stone: "Sapphire",
//     description: "A masterpiece of mechanical engineering showing the inner beauty of time.", details: ["Automatic Caliber", "Exposed Gears"],
//     variants: [
//       { color: "gold", url: "/products/skeleton-imperial-gold.jpg" },
//       { color: "silver", url: "/products/skeleton-imperial-silver.jpg" },
//       { color: "rose", url: "/products/skeleton-imperial-rose.jpg" },
//       { color: "black", url: "/products/skeleton-imperial-black.jpg" }
//     ]
//   }),

//   // --- WATCHES (AUTOMATIQUE AURELIA) ---
//   createProduct({
//     id: "w3", slug: "automatique-aurelia", name: "Automatique Aurelia", category: "watches", collection: "Aurore", price: 4900, metal: "Gold Plated", stone: "None",
//     description: "Classic design meets modern automatic precision.", details: ["Self-Winding", "Leather Strap Compatible"],
//     variants: [
//       { color: "gold", url: "/products/automatique-aurelia-gold.jpg" },
//       { color: "silver", url: "/products/automatique-aurelia-silver.jpg" },
//       { color: "black", url: "/products/automatique-aurelia-black.jpg" },
//       { color: "blue", url: "/products/automatique-aurelia-blue.jpg" }
//     ]
//   })
// ];

// // Pastdagi Journal qismidagi rasmni ham to'g'irlab qo'ying:
// export const journal = [
//   {
//     id: "j1",
//     title: "The Art of Jewelry Care",
//     date: "May 2024",
//     excerpt: "Discover how to maintain the eternal shine of your precious pieces.",
//     image: "/products/image.png" // O'zingizdagi rasm nomiga qarang
//   }
// ];




















































export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
  collection: string;
  price: number;
  currency: "$";
  metal: string;
  stone: string;
  description: string;
  details: string[];
  image: string;
  colors: { name: string; hex: string; image: string }[];
};

const COLORS = {
  gold:   { name: "Gold",        hex: "#D4AF37" },
  silver: { name: "Silver",      hex: "#C0C0C0" },
  rose:   { name: "Rose Gold",   hex: "#E5B09E" },
  black:  { name: "Black",       hex: "#000000" },
  blue:   { name: "Deep Blue",   hex: "#00008B" },
  white:  { name: "Pure White",  hex: "#FFFFFF" },
};

const createProduct = (
  p: Omit<Product, "image" | "colors" | "currency"> & { 
    variants: { color: keyof typeof COLORS; url: string }[] 
  }
): Product => {
  const colors = p.variants.map((v) => ({
    name: COLORS[v.color].name,
    hex: COLORS[v.color].hex,
    image: v.url
  }));
  return { ...p, currency: "$", image: colors[0].image, colors };
};

export const products: Product[] = [
  // --- RINGS (UZUKLAR) ---
  createProduct({
    id: "r1", slug: "diamond-solitaire", name: "Diamond Solitaire Ring", category: "rings", collection: "Classique", price: 4500, metal: "18K Gold", stone: "Diamond",
    description: "A timeless symbol of love and commitment.", details: ["GIA Certified", "High Polish"],
    variants: [
      { color: "gold", url: "/products/briliant-uzukoltinrang.png" },
      { color: "silver", url: "/products/briliant-uzukkulurang.png" }
    ]
  }),
  createProduct({
    id: "r2", slug: "minimalist-gold-band", name: "Minimalist Gold Band", category: "rings", collection: "Aurore", price: 900, metal: "14K Gold", stone: "None",
    description: "Sleek and modern daily elegance.", details: ["Comfort Fit"],
    variants: [{ color: "gold", url: "/products/minimalist-uzuk.png" }]
  }),

  // --- EARRINGS (ZIRAKLAR) ---
  createProduct({
    id: "e1", slug: "purple-gem-earrings", name: "Purple Gem Earrings", category: "earrings", collection: "Aurore", price: 2100, metal: "Silver", stone: "Amethyst",
    description: "Stunning violet stones set in polished silver.", details: ["Hand-set", "Nickel-free"],
    variants: [{ color: "silver", url: "/products/zirak-binafsha.png" }]
  }),
  createProduct({
    id: "e2", slug: "classic-gold-earrings", name: "Classic Gold Earrings", category: "earrings", collection: "Classique", price: 1500, metal: "14K Gold", stone: "None",
    description: "Pure gold elegance for any occasion.", details: ["14K Certified"],
    variants: [{ color: "gold", url: "/products/zirak-oltin.png" }]
  }),

  // --- NECKLACES (MARJONLAR) ---
  createProduct({
    id: "n1", slug: "pearl-essence", name: "Pearl Essence Necklace", category: "necklaces", collection: "Classique", price: 1800, metal: "Gold", stone: "Pearl",
    description: "Lustrous sea pearls with gold accents.", details: ["Natural Pearls"],
    variants: [{ color: "white", url: "/products/marvarid-marjon.png" }]
  }),

  // --- BRACELETS (BRASLETLAR) ---
  createProduct({
    id: "b1", slug: "luxury-gold-bangle", name: "Luxury Gold Bangle", category: "bracelets", collection: "Aurore", price: 3200, metal: "18K Gold", stone: "Diamond",
    description: "Intricate patterns in solid 18K gold.", details: ["Security Clasp"],
    variants: [{ color: "gold", url: "/products/oltin-braslet.png" }]
  }),

  // --- WATCHES (SOATLAR) ---
  createProduct({
    id: "w1", slug: "lady-aurore-elite", name: "Lady Aurore Elite", category: "watches", collection: "Aurore", price: 5800, metal: "Steel", stone: "Sapphire",
    description: "Swiss movement luxury timepiece.", details: ["Water Resistant", "Sapphire Glass"],
    variants: [
      { color: "gold", url: "/products/lady-aurore-gold.jpg" },
      { color: "silver", url: "/products/lady-aurore-white.jpg" },
      { color: "black", url: "/products/lady-aurore-black.jpg" }
    ]
  }),
  createProduct({
    id: "w2", slug: "skeleton-imperial", name: "Skeleton Imperial", category: "watches", collection: "Classique", price: 7200, metal: "Titanium", stone: "Sapphire",
    description: "Masterpiece of mechanical engineering.", details: ["Automatic", "Exposed Gears"],
    variants: [
      { color: "gold", url: "/products/skeleton-imperial-gold.jpg" },
      { color: "silver", url: "/products/skeleton-imperial-silver.jpg" }
    ]
  })
];

export const journal = [
  {
    id: "j1",
    title: "The Art of Jewelry Care",
    date: "May 2024",
    excerpt: "Discover how to maintain the eternal shine.",
    image: "/products/image.png"
  }
];


















































































// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
//   collection: string;
//   price: number;
//   currency: "$";
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
// };

// const COLORS = {
//   gold:   { name: "Gold",        hex: "#D4AF37" },
//   silver: { name: "Silver",      hex: "#C0C0C0" },
//   rose:   { name: "Rose Gold",   hex: "#E5B09E" },
//   black:  { name: "Black",       hex: "#000000" },
//   blue:   { name: "Deep Blue",   hex: "#00008B" },
//   white:  { name: "Pure White",  hex: "#FFFFFF" },
//   green:  { name: "Emerald",     hex: "#50C878" },
// };

// const createProduct = (
//   p: Omit<Product, "image" | "colors" | "currency"> & { 
//     variants: { color: keyof typeof COLORS; url: string }[] 
//   }
// ): Product => {
//   const colors = p.variants.map((v) => ({
//     name: COLORS[v.color].name,
//     hex: COLORS[v.color].hex,
//     image: v.url
//   }));
//   return { ...p, currency: "$", image: colors[0].image, colors };
// };

// export const products: Product[] = [
//   // --- EARRINGS ---
//   createProduct({
//     id: "e1", 
//     slug: "classic-stud-earrings", 
//     name: "Classic Stud Earrings", 
//     category: "earrings", 
//     collection: "Classique", 
//     price: 1550, 
//     metal: "18K Gold / Sterling Silver", 
//     stone: "Amethyst / None",
//     description: "Elegant earrings crafted for versatility. Choose between timeless 18K gold or sterling silver with a delicate purple stone accent.", 
//     details: ["Premium Finish", "Hypoallergenic", "Gift Box Included"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/zirakoltin.png" },
//       { color: "silver", url: "/src/assets/products/zirakkulurandbinafsahranglitoshi bor.png" }
//     ]
//   }),

//   // --- RINGS ---
//   createProduct({
//     id: "r1", slug: "diamond-engagement", name: "Diamond Solitaire Ring", category: "rings", collection: "Classique", price: 4500, metal: "18K Gold", stone: "Diamond",
//     description: "A timeless symbol of love and commitment, featuring a brilliant-cut diamond.", details: ["GIA Certified", "High Polish Finish"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/briliant uzukoltinrang.png" },
//       { color: "silver", url: "/src/assets/products/briliant uzukkulurang.png" }
//     ]
//   }),
//   createProduct({
//     id: "r2", slug: "minimalist-band", name: "Minimalist Gold Band", category: "rings", collection: "Aurore", price: 900, metal: "14K Gold", stone: "None",
//     description: "Sleek and modern, this band is designed for effortless daily elegance.", details: ["Lightweight", "Comfort Fit"],
//     variants: [{ color: "gold", url: "/src/assets/products/minimalist uzukodam rang.png" }]
//   }),
//   createProduct({
//     id: "r3", slug: "rose-petal-ring", name: "Rose Petal Ring", category: "rings", collection: "Aurore", price: 1250, metal: "Rose Gold", stone: "None",
//     description: "Delicate design inspired by the soft curves of a rose petal.", details: ["Exquisite Craftsmanship"],
//     variants: [{ color: "rose", url: "/src/assets/products/puwti izuk.png" }]
//   }),

//   // --- NECKLACES ---
//   createProduct({
//     id: "n1", slug: "pearl-essence-necklace", name: "Pearl Essence Necklace", category: "necklaces", collection: "Classique", price: 1800, metal: "Gold", stone: "Pearl",
//     description: "Lustrous sea pearls hand-selected for their exceptional brilliance.", details: ["Natural Pearls", "Gold Chain"],
//     variants: [{ color: "white", url: "/src/assets/products/marvarid marjon oq rang.png" }]
//   }),

//   // --- BRACELETS ---
//   createProduct({
//     id: "b1", slug: "luxury-gold-bangle", name: "Luxury Gold Bangle", category: "bracelets", collection: "Aurore", price: 3200, metal: "18K Gold", stone: "Diamond",
//     description: "A statement piece featuring intricate patterns and shimmering stones.", details: ["Hand-Finished", "Security Clasp"],
//     variants: [{ color: "gold", url: "/src/assets/products/oltin braslet.png" }]
//   }),

//   // --- WATCHES ---
//   createProduct({
//     id: "w1", slug: "lady-aurore-watch", name: "Lady Aurore Elite", category: "watches", collection: "Aurore", price: 5800, metal: "Premium Steel", stone: "Sapphire",
//     description: "Sophisticated timepiece designed for the modern woman.", details: ["Swiss Movement", "Water Resistant"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/lady-aurore-gold.jpg" },
//       { color: "silver", url: "/src/assets/products/lady-aurore-white.jpg" },
//       { color: "rose", url: "/src/assets/products/lady-aurore-rose.jpg" },
//       { color: "black", url: "/src/assets/products/lady-aurore-black.jpg" }
//     ]
//   }),
//   createProduct({
//     id: "w2", slug: "skeleton-imperial", name: "Skeleton Imperial", category: "watches", collection: "Classique", price: 7200, metal: "Titanium", stone: "Sapphire",
//     description: "A masterpiece of mechanical engineering showing the inner beauty of time.", details: ["Automatic Caliber", "Exposed Gears"],
//     variants: [
//       { color: "gold", url: "/src/assets/products/skeleton-imperial-gold.jpg" },
//       { color: "silver", url: "/src/assets/products/skeleton-imperial-silver.jpg" },
//       { color: "rose", url: "/src/assets/products/skeleton-imperial-rose.jpg" },
//       { color: "black", url: "/src/assets/products/skeleton-imperial-black.jpg" }
//     ]
//   })
// ];

// export const collections = [
//   { slug: "aurore", name: "Aurore", tagline: "Golden Moments of Radiance" },
//   { slug: "classique", name: "Classique", tagline: "Timeless Heritage" }
// ];

// export const journal = [
//   {
//     id: "j1",
//     title: "The Art of Jewelry Care",
//     date: "May 2024",
//     excerpt: "Discover how to maintain the eternal shine of your precious pieces.",
//     image: "/src/assets/products/craftsmanship.jpg"
//   }
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);













































// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: string;
//   collection: string;
//   price: number;
//   currency: string;
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
// };

// // 1. MAHSULOTLAR RO'YXATI
// export const products: Product[] = [
//   {
//     id: "r1",
//     slug: "classic-gold-ring",
//     name: "Classic Gold Ring",
//     category: "rings",
//     collection: "Classique",
//     price: 1200,
//     currency: "$",
//     metal: "18K Gold",
//     stone: "Diamond",
//     description: "A timeless masterpiece crafted in 18K yellow gold with a brilliant-cut diamond.",
//     details: ["Hand-polished finish", "GIA certified diamond", "Weight: 4.5g"],
//     image: "/src/assets/products/oltin braslet.png",
//     colors: [
//       { name: "Gold", hex: "#D4AF37", image: "/src/assets/products/oltin braslet.png" }
//     ]
//   },
//   {
//     id: "b1",
//     slug: "aurore-bracelet",
//     name: "Aurore Bracelet",
//     category: "bracelets",
//     collection: "Aurore",
//     price: 2500,
//     currency: "$",
//     metal: "14K Gold",
//     stone: "None",
//     description: "Minimalist bracelet perfect for everyday luxury.",
//     details: ["Adjustable size", "Ethically sourced gold"],
//     image: "/src/assets/products/zirakoltin.png",
//     colors: [
//       { name: "Rose Gold", hex: "#E5C2C2", image: "/src/assets/products/zirakoltin.png" }
//     ]
//   }
// ];

// // 2. COLLECTIONS RO'YXATI (Oq ekranni tuzatuvchi asosiy qism)
// export const collections = [
//   { 
//     slug: "aurore", 
//     name: "Aurore", 
//     tagline: "Golden Moments of Radiance",
//     image: "/src/assets/products/oltin braslet.png" 
//   },
//   { 
//     slug: "classique", 
//     name: "Classique", 
//     tagline: "Timeless Heritage",
//     image: "/src/assets/products/zirakoltin.png" 
//   }
// ];

// // 3. JOURNAL RO'YXATI (Agar Journal sahifasi bo'lsa)
// export const journal = [
//   {
//     id: "j1",
//     title: "The Art of Jewelry Care",
//     date: "May 2024",
//     excerpt: "Discover how to maintain the eternal shine of your pieces.",
//     image: "/src/assets/products/oltin braslet.png"
//   },
//   {
//     id: "j2",
//     title: "Sourcing Our Metals",
//     date: "April 2024",
//     excerpt: "We believe in transparency and ethical craftsmanship.",
//     image: "/src/assets/products/zirakoltin.png"
//   }
// ];

// // 4. YORDAMCHI FUNKSIYALAR
// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
// export const getCollectionProducts = (slug: string) => 
//   products.filter((p) => p.collection.toLowerCase() === slug.toLowerCase());
























// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: string;
//   collection: string;
//   price: number;
//   currency: string;
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
// };

// // 1. MAHSULOTLAR RO'YXATI
// export const products: Product[] = [
//   {
//     id: "r1",
//     slug: "classic-gold-ring",
//     name: "Classic Gold Ring",
//     category: "rings",
//     collection: "Classique",
//     price: 1200,
//     currency: "$",
//     metal: "18K Gold",
//     stone: "Diamond",
//     description: "A timeless masterpiece crafted in 18K yellow gold with a brilliant-cut diamond.",
//     details: ["Hand-polished finish", "GIA certified diamond", "Weight: 4.5g"],
//     image: "/src/assets/products/oltin braslet.png",
//     colors: [
//       { name: "Gold", hex: "#D4AF37", image: "/src/assets/products/oltin braslet.png" }
//     ]
//   },
//   {
//     id: "b1",
//     slug: "aurore-bracelet",
//     name: "Aurore Bracelet",
//     category: "bracelets",
//     collection: "Aurore",
//     price: 2500,
//     currency: "$",
//     metal: "14K Gold",
//     stone: "None",
//     description: "Minimalist bracelet perfect for everyday luxury.",
//     details: ["Adjustable size", "Ethically sourced gold"],
//     image: "/src/assets/products/zirakoltin.png",
//     colors: [
//       { name: "Rose Gold", hex: "#E5C2C2", image: "/src/assets/products/zirakoltin.png" }
//     ]
//   }
// ];

// // 2. COLLECTIONS RO'YXATI (Oq ekranni tuzatuvchi asosiy qism)
// export const collections = [
//   { 
//     slug: "aurore", 
//     name: "Aurore", 
//     tagline: "Golden Moments of Radiance",
//     image: "/src/assets/products/oltin braslet.png" 
//   },
//   { 
//     slug: "classique", 
//     name: "Classique", 
//     tagline: "Timeless Heritage",
//     image: "/src/assets/products/zirakoltin.png" 
//   }
// ];

// // 3. JOURNAL RO'YXATI (Agar Journal sahifasi bo'lsa)
// export const journal = [
//   {
//     id: "j1",
//     title: "The Art of Jewelry Care",
//     date: "May 2024",
//     excerpt: "Discover how to maintain the eternal shine of your pieces.",
//     image: "/src/assets/products/oltin braslet.png"
//   },
//   {
//     id: "j2",
//     title: "Sourcing Our Metals",
//     date: "April 2024",
//     excerpt: "We believe in transparency and ethical craftsmanship.",
//     image: "/src/assets/products/zirakoltin.png"
//   }
// ];

// // 4. YORDAMCHI FUNKSIYALAR
// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
// export const getCollectionProducts = (slug: string) => 
//   products.filter((p) => p.collection.toLowerCase() === slug.toLowerCase());

































// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: string;
//   collection: string;
//   price: number;
//   currency: string;
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
// };

// // 1. MAHSULOTLAR (JEWELRY VA WATCHES)
// export const products: Product[] = [
//   {
//     id: "j1",
//     slug: "classic-gold-ring",
//     name: "Classic Gold Ring",
//     category: "jewelry",
//     collection: "Classique",
//     price: 1200,
//     currency: "$",
//     metal: "18K Gold",
//     stone: "Diamond",
//     description: "A timeless masterpiece.",
//     details: ["GIA certified"],
//     image: "/src/assets/products/oltin braslet.png",
//     colors: [{ name: "Gold", hex: "#D4AF37", image: "/src/assets/products/oltin braslet.png" }]
//   },
//   {
//     id: "j2",
//     slug: "aurore-bracelet",
//     name: "Aurore Bracelet",
//     category: "jewelry",
//     collection: "Aurore",
//     price: 2500,
//     currency: "$",
//     metal: "14K Gold",
//     stone: "None",
//     description: "Minimalist luxury.",
//     details: ["Adjustable"],
//     image: "/src/assets/products/zirakoltin.png",
//     colors: [{ name: "Rose Gold", hex: "#E5C2C2", image: "/src/assets/products/zirakoltin.png" }]
//   },
//   {
//     id: "w1",
//     slug: "heritage-chrono",
//     name: "Heritage Chrono",
//     category: "watches", // BU ENDI WATCHES SAHIFASIDA CHIQADI
//     collection: "Classique",
//     price: 5500,
//     currency: "$",
//     metal: "Steel",
//     stone: "Sapphire Crystal",
//     description: "Precision Swiss-made chronograph.",
//     details: ["Automatic movement"],
//     image: "/src/assets/products/oltin braslet.png",
//     colors: [{ name: "Steel", hex: "#71706E", image: "/src/assets/products/oltin braslet.png" }]
//   },
//   {
//     id: "w2",
//     slug: "royal-diver",
//     name: "Royal Diver",
//     category: "watches",
//     collection: "Aurore",
//     price: 8900,
//     currency: "$",
//     metal: "18K Gold",
//     stone: "None",
//     description: "Luxury diving watch.",
//     details: ["Water resistant 200m"],
//     image: "/src/assets/products/zirakoltin.png",
//     colors: [{ name: "Gold", hex: "#D4AF37", image: "/src/assets/products/zirakoltin.png" }]
//   }
// ];

// // 2. COLLECTIONS
// export const collections = [
//   { slug: "aurore", name: "Aurore", tagline: "Golden Moments", image: "/src/assets/products/oltin braslet.png" },
//   { slug: "classique", name: "Classique", tagline: "Timeless Heritage", image: "/src/assets/products/zirakoltin.png" }
// ];

// // 3. JOURNAL (OQ EKRANNI TUZATISH UCHUN)
// export const journal = [
//   {
//     id: "j1",
//     slug: "art-of-jewelry-care",
//     title: "The Art of Jewelry Care",
//     category: "Craft",
//     date: "May 2024",
//     excerpt: "Discover how to maintain the eternal shine of your pieces.",
//     image: "/src/assets/products/oltin braslet.png"
//   },
//   {
//     id: "j2",
//     slug: "sourcing-metals",
//     title: "Sourcing Our Metals",
//     category: "Provenance",
//     date: "April 2024",
//     excerpt: "We believe in transparency and ethical craftsmanship.",
//     image: "/src/assets/products/zirakoltin.png"
//   }
// ];

// // 4. FUNKSIYALAR
// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
// export const getCollectionProducts = (slug: string) => 
//   products.filter((p) => p.collection.toLowerCase() === slug.toLowerCase());



















// export type Product = {
//   id: string;
//   slug: string;
//   name: string;
//   category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
//   collection: string;
//   price: number;
//   currency: "$";
//   badge?: "New" | "Iconic" | "Bestseller";
//   metal: string;
//   stone: string;
//   description: string;
//   details: string[];
//   image: string;
//   colors: { name: string; hex: string; image: string }[];
// };

// const COLORS = {
//   gold:   { name: "Gold",        hex: "#D4AF37" },
//   silver: { name: "Silver",      hex: "#C0C0C0" },
//   rose:   { name: "Rose Gold",   hex: "#E5B09E" },
//   black:  { name: "Black",       hex: "#000000" },
//   blue:   { name: "Deep Blue",   hex: "#00008B" },
//   white:  { name: "Pure White",  hex: "#FFFFFF" },
//   green:  { name: "Emerald",     hex: "#50C878" },
// };

// const createProduct = (
//   p: Omit<Product, "image" | "colors" | "currency"> & { 
//     variants: { color: keyof typeof COLORS; url: string }[] 
//   }
// ): Product => {
//   const colors = p.variants.map((v) => ({
//     name: COLORS[v.color].name,
//     hex: COLORS[v.color].hex,
//     image: v.url
//   }));
//   return { ...p, currency: "$", image: colors[0].image, colors };
// };

// // 1. PRODUCTS
// export const products: Product[] = [
//   createProduct({
//     id: "e1", slug: "classic-stud", name: "Classic Stud", category: "earrings", collection: "Classique", price: 1550, badge: "New",
//     metal: "18K Gold", stone: "Amethyst", description: "Elegant.", details: ["Premium"],
//     variants: [{ color: "gold", url: "../assets/products/zirakoltin.png" }]
//   }),
//   createProduct({
//     id: "r1", slug: "diamond-solitaire", name: "Diamond Solitaire", category: "rings", collection: "Classique", price: 4500, badge: "Iconic",
//     metal: "18K Gold", stone: "Diamond", description: "Timeless.", details: ["GIA"],
//     variants: [{ color: "gold", url: "../assets/products/briliant uzukoltinrang.png" }]
//   })
// ];

// // 2. COLLECTIONS (Collections.tsx dagi xatoni yo'qotadi)
// export const collections = [
//   { id: "c1", slug: "aurore", name: "Aurore", tagline: "Radiance", image: "../assets/hero-jewelry.jpg" },
//   { id: "c2", slug: "classique", name: "Classique", tagline: "Heritage", image: "../assets/hero-watch.jpg" }
// ];

// // 3. JOURNAL (Journal.tsx dagi xatoni yo'qotadi)
// export const journal = [
//   { id: "j1", title: "Care", date: "2026", excerpt: "Shine.", image: "../assets/craftsmanship.jpg" }
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);