import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useStore } from "@/store/useStore";
import { products } from "@/data/catalog";
import ProductCard from "@/components/ProductCard";

export default function Wishlist() {
  const ids = useStore((s) => s.wishlist);
  const items = products.filter((p) => ids.includes(p.id));

  return (
    <section className="container py-16 md:py-24 min-h-[60vh]">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">My selection</p>
        <h1 className="font-serif text-5xl md:text-7xl">Wishlist</h1>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <Heart size={32} className="mx-auto text-gold mb-6" />
          <p className="text-muted-foreground mb-8">No pieces saved yet.</p>
          <Link to="/jewelry" className="text-xs tracking-luxury uppercase border-b border-foreground pb-1 hover:text-gold hover:border-gold">
            Discover the collection →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  );
}
