import { Link } from "react-router-dom";
import { collections, products } from "@/data/catalog";

export default function Collections() {
  return (
    <>
      <section className="container pt-16 md:pt-24 pb-16 text-center">
        <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Our Collections</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Stories in gold</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Five families of pieces, each born of a singular obsession — light, geometry, history, intimacy, time.
        </p>
      </section>

      <section className="container space-y-24 pb-32">
        {collections.map((c, i) => {
          const items = products.filter((p) => p.collection.toLowerCase() === c.name.toLowerCase()).slice(0, 3);
          const reverse = i % 2 === 1;
          return (
            <div key={c.slug} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="grid grid-cols-2 gap-3">
                {items.slice(0, 3).map((p, idx) => (
                  <Link key={p.id} to={`/product/${p.slug}`} className={`block image-hover bg-secondary ${idx === 0 ? "col-span-2 aspect-[4/3]" : "aspect-square"}`}>
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">{c.tagline}</p>
                <h2 className="font-serif text-4xl md:text-6xl mb-6">{c.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">{c.description}</p>
                <Link to={`/jewelry`} className="text-xs tracking-luxury uppercase border-b border-foreground hover:text-gold hover:border-gold pb-1 transition-colors">
                  Explore the collection →
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
