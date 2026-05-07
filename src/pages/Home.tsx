// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import heroImg from "@/assets/hero-jewelry.jpg";
// import watchImg from "@/assets/hero-watch.jpg";
// import craftImg from "@/assets/craftsmanship.jpg";
// import ringsImg from "@/assets/collection-rings.jpg";
// import necklacesImg from "@/assets/collection-necklaces.jpg";
// import earringsImg from "@/assets/collection-earrings.jpg";
// import ProductCard from "@/components/ProductCard";
// import { products } from "@/data/catalog";

// export default function Home() {
//   const featured = products.filter((p) => p.badge === "Iconic" || p.badge === "Bestseller").slice(0, 4);
//   const newArrivals = products.filter((p) => p.badge === "New").slice(0, 4);

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative h-[92vh] min-h-[640px] -mt-[5.5rem] flex items-end overflow-hidden">
//         <img
//           src={heroImg}
//           alt="Maison Aurélie diamond necklace campaign"
//           className="absolute inset-0 w-full h-full object-cover"
//           width={1080}
//           height={1920}
//         />
//         <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
//         <div className="container relative pb-20 md:pb-28 text-background">
//           <p className="text-[11px] tracking-luxury uppercase reveal mb-6">Aurore — Spring 2026</p>
//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl reveal reveal-delay-1">
//             Light, set in gold.
//           </h1>
//           <p className="mt-6 max-w-md text-base text-background/80 leading-relaxed reveal reveal-delay-2">
//             Heirloom pieces, hand-crafted in our Geneva atelier since 1892.
//           </p>
//           <div className="mt-10 flex flex-wrap gap-4 reveal reveal-delay-3">
//             <Link to="/jewelry" className="bg-background text-foreground px-8 py-4 text-xs tracking-luxury uppercase hover:bg-gold hover:text-background transition-silk">
//               Discover the collection
//             </Link>
//             <Link to="/atelier" className="border border-background/60 text-background px-8 py-4 text-xs tracking-luxury uppercase hover:border-gold hover:text-gold transition-silk">
//               The Atelier
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="container py-24 md:py-32 text-center max-w-3xl">
//         <p className="text-[11px] tracking-luxury uppercase text-gold mb-6">Maison Aurélie · Genève</p>
//         <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
//           Five generations,<br /><em className="text-gold">one obsession.</em>
//         </h2>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
//           Since 1892, our master jewellers and watchmakers have devoted themselves to a single
//           pursuit — to capture light in metal and stone, and to make it last.
//         </p>
//         <div className="gold-line w-24 mx-auto mt-12" />
//       </section>

//       {/* CATEGORIES */}
//       <section className="container pb-24">
//         <div className="grid md:grid-cols-3 gap-4 md:gap-6">
//           <CategoryCard image={ringsImg} label="Rings" href="/jewelry?cat=rings" />
//           <CategoryCard image={necklacesImg} label="Necklaces" href="/jewelry?cat=necklaces" tall />
//           <CategoryCard image={earringsImg} label="Earrings" href="/jewelry?cat=earrings" />
//         </div>
//       </section>

//       {/* FEATURED */}
//       <section className="container pb-24 md:pb-32">
//         <div className="flex items-end justify-between mb-12">
//           <div>
//             <p className="text-[11px] tracking-luxury uppercase text-gold mb-3">Iconic</p>
//             <h2 className="font-serif text-4xl md:text-5xl">Pieces that define us</h2>
//           </div>
//           <Link to="/jewelry" className="hidden md:flex items-center gap-2 text-xs tracking-luxury uppercase link-underline">
//             View all <ArrowRight size={14} />
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
//           {featured.map((p) => <ProductCard key={p.id} product={p} />)}
//         </div>
//       </section>

//       {/* WATCH SPLIT */}
//       <section className="relative grid md:grid-cols-2 items-stretch bg-secondary">
//         <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
//           <img src={watchImg} alt="Tourbillon de Genève" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
//         </div>
//         <div className="p-10 md:p-20 flex flex-col justify-center">
//           <p className="text-[11px] tracking-luxury uppercase text-gold mb-6">Haute Horlogerie</p>
//           <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
//             Tourbillon<br />de Genève
//           </h2>
//           <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
//             Eight months of work. Eighty-eight pieces in the world. A flying tourbillon
//             cradled in hand-engraved bridges of 18k rose gold.
//           </p>
//           <p className="font-serif text-2xl mb-10">€86,000</p>
//           <div className="flex gap-4">
//             <Link to="/watches" className="bg-foreground text-background px-8 py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-silk">
//               Discover Watches
//             </Link>
//             <Link to="/contact" className="border border-foreground px-8 py-4 text-xs tracking-luxury uppercase hover:border-gold hover:text-gold transition-silk">
//               Private viewing
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* NEW ARRIVALS */}
//       <section className="container py-24 md:py-32">
//         <div className="text-center mb-16">
//           <p className="text-[11px] tracking-luxury uppercase text-gold mb-3">Just arrived</p>
//           <h2 className="font-serif text-4xl md:text-5xl">The Aurore Edit</h2>
//         </div>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
//           {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
//         </div>
//       </section>

//       {/* ATELIER */}
//       <section className="relative grid md:grid-cols-2 items-stretch bg-foreground text-background">
//         <div className="p-10 md:p-20 flex flex-col justify-center order-2 md:order-1">
//           <p className="text-[11px] tracking-luxury uppercase text-gold mb-6">The Atelier</p>
//           <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
//             Hands that<br /><em className="text-gold">remember.</em>
//           </h2>
//           <p className="text-background/70 leading-relaxed mb-8 max-w-md">
//             Every Maison Aurélie piece passes through the hands of seven artisans —
//             stone-setters, polishers, engravers — each carrying knowledge passed
//             down five generations.
//           </p>
//           <Link to="/atelier" className="self-start border border-background/60 text-background px-8 py-4 text-xs tracking-luxury uppercase hover:border-gold hover:text-gold transition-silk">
//             Step inside →
//           </Link>
//         </div>
//         <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2">
//           <img src={craftImg} alt="Master jeweler at work" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="container py-24 md:py-32 text-center max-w-3xl">
//         <p className="text-gold text-3xl mb-8">✦ ✦ ✦</p>
//         <blockquote className="font-serif text-3xl md:text-4xl leading-relaxed italic">
//           “The most beautiful pieces I've ever owned. Maison Aurélie doesn't sell jewellery —
//           they craft heirlooms.”
//         </blockquote>
//         <p className="mt-8 text-xs tracking-luxury uppercase text-muted-foreground">
//           Vogue Paris · 2025
//         </p>
//       </section>
//     </>
//   );
// }

// function CategoryCard({ image, label, href, tall }: { image: string; label: string; href: string; tall?: boolean }) {
//   return (
//     <Link to={href} className={`group relative block overflow-hidden ${tall ? "md:row-span-2 md:aspect-auto aspect-[4/5]" : "aspect-[4/5]"}`}>
//       <img src={image} alt={label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-105" />
//       <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
//       <div className="absolute bottom-0 left-0 p-8 text-background">
//         <p className="text-[10px] tracking-luxury uppercase text-gold mb-2">Discover</p>
//         <p className="font-serif text-3xl md:text-4xl">{label}</p>
//       </div>
//     </Link>
//   );
// }











































































import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// Import yo'llari nisbiy qilib to'g'rilandi
import heroImg from "../assets/hero-jewelry.jpg";
import watchImg from "../assets/hero-watch.jpg";
import craftImg from "../assets/craftsmanship.jpg";
import ringsImg from "../assets/collection-rings.jpg";
import necklacesImg from "../assets/collection-necklaces.jpg";
import earringsImg from "../assets/collection-earrings.jpg";
import ProductCard from "../components/ProductCard";
// SHUNI ISHLATING - bu eng to'g'ri yo'l
import { products, collections, journal } from "@/data/catalog";

export default function Home() {
  // Mashhur va yangi mahsulotlarni ajratib olish
  const featured = products.filter((p) => p.badge === "Iconic" || p.badge === "Bestseller").slice(0, 4);
  const newArrivals = products.filter((p) => p.badge === "New").slice(0, 4);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative h-[92vh] min-h-[640px] -mt-[5.5rem] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Maison Aurélie diamond necklace campaign"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative pb-20 md:pb-28 text-background">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
            Aurore – Spring 2026
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl animate-fade-in-up [animation-delay:300ms]">
            Light, set in gold.
          </h1>
          <p className="mt-6 max-w-md text-base text-background/80 leading-relaxed animate-fade-in-up [animation-delay:500ms]">
            Heirloom pieces, hand-crafted in our Geneva atelier since 1892.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:700ms]">
            <Link to="/jewelry" className="bg-background text-foreground px-10 py-4 text-[10px] tracking-luxury uppercase hover:bg-gold transition-colors">
              Discover the collection
            </Link>
            <Link to="/atelier" className="border border-background/40 text-background px-10 py-4 text-[10px] tracking-luxury uppercase hover:bg-background hover:text-foreground transition-all">
              The Atelier
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="container py-24 md:py-32 text-center max-w-4xl">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 block">Maison Aurélie · Genève</span>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
          Five generations, <br /><em className="text-gold not-italic">one obsession.</em>
        </h2>
        <p className="text-base md:text-xl text-muted-foreground leading-relaxed font-light italic">
          Since 1892, our master jewellers and watchmakers have devoted themselves to a single pursuit — to capture light in metal and stone, and to make it last.
        </p>
        <div className="w-px h-24 bg-gold/30 mx-auto mt-12" />
      </section>

      {/* 3. CRAFTSMANSHIP VIDEO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-foreground">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.3]"
        >
          <source src="/craft-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-[10px] tracking-[0.4em] uppercase mb-4 block text-gold">The Art of Creation</span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-widest uppercase">Master Craftsmanship</h2>
          <p className="max-w-xl mx-auto italic font-serif text-lg md:text-xl opacity-90 mt-4">
            "Every masterpiece begins with a vision and ends with a legacy."
          </p>
        </div>
      </section>

      {/* 4. CATEGORIES GRID */}
      <section className="container py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <CategoryCard image={ringsImg} label="Rings" href="/jewelry?cat=rings" tall />
          <CategoryCard image={necklacesImg} label="Necklaces" href="/jewelry?cat=necklaces" />
          <CategoryCard image={earringsImg} label="Earrings" href="/jewelry?cat=earrings" />
        </div>
      </section>

      {/* 5. ICONIC PIECES */}
      <section className="container pb-24 md:pb-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Iconic</p>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-wider">Pieces that define us</h2>
          </div>
          <Link to="/jewelry" className="hidden md:flex items-center gap-3 text-[10px] tracking-luxury uppercase group">
            View all collections <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}

function CategoryCard({ image, label, href, tall }: { image: string; label: string; href: string; tall?: boolean }) {
  return (
    <Link to={href} className={`group relative block overflow-hidden ${tall ? "md:row-span-2 md:aspect-auto aspect-[4/5]" : "aspect-square"}`}>
      <img
        src={image}
        alt={label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
      <div className="absolute bottom-0 left-0 p-10 text-background translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
        <p className="text-[9px] tracking-[0.4em] uppercase text-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Explore</p>
        <p className="font-serif text-3xl md:text-4xl uppercase tracking-wider">{label}</p>
      </div>
    </Link>
  );
}