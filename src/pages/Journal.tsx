import { journal } from "@/data/catalog";
import craftImg from "@/assets/craftsmanship.jpg";
import heroImg from "@/assets/hero-jewelry.jpg";
import watchImg from "@/assets/hero-watch.jpg";
import ringsImg from "@/assets/collection-rings.jpg";

const images = [heroImg, craftImg, watchImg, ringsImg];

export default function Journal() {
  return (
    <>
      <section className="container pt-16 md:pt-24 pb-16 text-center">
        <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Le Journal</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Stories from the atelier</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Craft, provenance and the people behind each piece.
        </p>
      </section>

      <section className="container pb-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {journal.map((a, i) => (
            <article key={a.slug} className={`group ${i === 0 ? "md:col-span-2" : ""}`}>
              <div className={`image-hover bg-secondary mb-6 ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img src={images[i % images.length]} alt={a.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <p className="text-[10px] tracking-luxury uppercase text-gold mb-3">{a.category} · {a.date}</p>
              <h2 className={`font-serif mb-4 group-hover:text-gold transition-colors ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                {a.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{a.excerpt}</p>
              <span className="text-xs tracking-luxury uppercase link-underline">Read the story →</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
