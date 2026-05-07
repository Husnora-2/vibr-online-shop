// import { useParams, Link } from "react-router-dom";
// import { Heart, Truck, ShieldCheck, Gem } from "lucide-react";
// import { getProduct, products } from "@/data/catalog";
// import { useStore } from "@/store/useStore";
// import ProductCard from "@/components/ProductCard";
// import NotFound from "./NotFound";

// export default function ProductPage() {
//   const { slug } = useParams();
//   const product = slug ? getProduct(slug) : undefined;
//   const addToCart = useStore((s) => s.addToCart);
//   const wishlist = useStore((s) => s.wishlist);
//   const toggle = useStore((s) => s.toggleWishlist);

//   if (!product) return <NotFound />;
//   const liked = wishlist.includes(product.id);
//   const related = products.filter((p) => p.collection === product.collection && p.id !== product.id).slice(0, 4);

//   return (
//     <>
//       <div className="container pt-8">
//         <nav className="text-xs text-muted-foreground tracking-editorial uppercase">
//           <Link to="/" className="hover:text-foreground">Home</Link>
//           <span className="mx-2">/</span>
//           <Link to={`/${product.category === "watches" ? "watches" : "jewelry"}`} className="hover:text-foreground">
//             {product.category === "watches" ? "Watches" : "Jewellery"}
//           </Link>
//           <span className="mx-2">/</span>
//           <span className="text-foreground">{product.name}</span>
//         </nav>
//       </div>

//       <section className="container grid lg:grid-cols-2 gap-10 lg:gap-20 py-12 lg:py-16">
//         <div className="space-y-4">
//           <div className="aspect-[4/5] bg-secondary overflow-hidden">
//             <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
//           </div>
//           <div className="grid grid-cols-3 gap-4">
//             {[product.image, product.image, product.image].map((src, i) => (
//               <div key={i} className="aspect-square bg-secondary overflow-hidden">
//                 <img src={src} alt="" className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="lg:sticky lg:top-28 self-start">
//           <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">{product.collection}</p>
//           <h1 className="font-serif text-4xl md:text-5xl mb-4">{product.name}</h1>
//           <p className="text-2xl font-serif mb-8">€{product.price.toLocaleString("fr-FR")}</p>

//           <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

//           <div className="space-y-3 mb-10 text-sm">
//             <Row label="Metal" value={product.metal} />
//             <Row label="Stone" value={product.stone} />
//             <Row label="Reference" value={`AU-${product.id.toUpperCase()}`} />
//           </div>

//           <div className="flex gap-3 mb-10">
//             <button
//               onClick={() => addToCart(product)}
//               className="flex-1 bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors"
//             >
//               Add to selection
//             </button>
//             <button
//               onClick={() => toggle(product.id)}
//               aria-label="Wishlist"
//               className="aspect-square h-[52px] grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors"
//             >
//               <Heart size={18} fill={liked ? "currentColor" : "none"} className={liked ? "text-gold" : ""} />
//             </button>
//           </div>

//           <Link to="/contact" className="block text-center w-full border border-foreground py-4 text-xs tracking-luxury uppercase hover:border-gold hover:text-gold transition-colors mb-12">
//             Request a private viewing
//           </Link>

//           <div className="border-t border-border pt-8">
//             <h3 className="font-serif text-xl mb-4">Details</h3>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               {product.details.map((d) => <li key={d}>— {d}</li>)}
//             </ul>
//           </div>

//           <div className="grid grid-cols-3 gap-3 mt-10 pt-8 border-t border-border">
//             <Service icon={<Truck size={18} />} label="Complimentary delivery" />
//             <Service icon={<ShieldCheck size={18} />} label="Lifetime warranty" />
//             <Service icon={<Gem size={18} />} label="Certified stones" />
//           </div>
//         </div>
//       </section>

//       {related.length > 0 && (
//         <section className="container py-24">
//           <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">From the same collection</h2>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
//             {related.map((p) => <ProductCard key={p.id} product={p} />)}
//           </div>
//         </section>
//       )}
//     </>
//   );
// }

// function Row({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex justify-between border-b border-border pb-3">
//       <span className="text-muted-foreground">{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// }
// function Service({ icon, label }: { icon: React.ReactNode; label: string }) {
//   return (
//     <div className="text-center">
//       <div className="text-gold mx-auto mb-2 grid place-items-center">{icon}</div>
//       <p className="text-[10px] tracking-luxury uppercase text-muted-foreground leading-snug">{label}</p>
//     </div>
//   );
// }





































import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart, Truck, ShieldCheck, Gem, Send } from "lucide-react";
import { getProduct, products } from "@/data/catalog";
import { useStore } from "@/store/useStore";
import ProductCard from "@/components/ProductCard";
import NotFound from "./NotFound";

export default function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;
  
  // State for color selection
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  const addToCart = useStore((s) => s.addToCart);
  const wishlist = useStore((s) => s.wishlist);
  const toggle = useStore((s) => s.toggleWishlist);

  // Update selected color when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product || !selectedColor) return <NotFound />;

  const liked = wishlist.includes(product.id);
  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  // Telegram link (O'zingizning username yoki botingizni yozing)
  const telegramLink = `https://t.me/username_yoki_bot?text=Assalomu alaykum! Men mana bu mahsulot haqida ma'lumot olmoqchi edim: ${product.name} (${selectedColor.name})`;

  return (
    <>
      <div className="container pt-8">
        <nav className="text-xs text-muted-foreground tracking-editorial uppercase">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/${product.category === "watches" ? "watches" : "jewelry"}`} className="hover:text-foreground">
            {product.category === "watches" ? "Watches" : "Jewellery"}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="container grid lg:grid-cols-2 gap-10 lg:gap-20 py-12 lg:py-16">
        {/* LEFT: IMAGES */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-secondary overflow-hidden transition-all duration-500">
            <img 
              src={selectedColor.image} 
              alt={product.name} 
              className="w-full h-full object-cover animate-in fade-in duration-700" 
            />
          </div>
          {/* Color Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {product.colors.map((color, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedColor(color)}
                className={`aspect-square overflow-hidden border-2 transition-all ${selectedColor.name === color.name ? 'border-gold' : 'border-transparent'}`}
              >
                <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: INFO */}
        <div className="lg:sticky lg:top-28 self-start">
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">{product.collection}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{product.name}</h1>
          <p className="text-2xl font-serif mb-8">{product.currency}{product.price.toLocaleString("fr-FR")}</p>

          <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

          {/* Color Selector Dots */}
          <div className="mb-8">
            <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-3">Select Variant: {selectedColor.name}</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border transition-all flex items-center justify-center ${selectedColor.name === color.name ? 'border-gold p-1' : 'border-border'}`}
                >
                  <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} title={color.name} />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-10 text-sm">
            <Row label="Metal" value={`${product.metal} (${selectedColor.name})`} />
            <Row label="Stone" value={product.stone} />
            <Row label="Reference" value={`AU-${product.id.toUpperCase()}`} />
          </div>

          <div className="flex gap-3 mb-4">
            <button
              onClick={() => addToCart({ ...product, image: selectedColor.image })}
              className="flex-1 bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors"
            >
              Add to selection
            </button>
            <button
              onClick={() => toggle(product.id)}
              aria-label="Wishlist"
              className="aspect-square h-[52px] grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <Heart size={18} fill={liked ? "#c9a14a" : "none"} className={liked ? "text-gold" : ""} />
            </button>
          </div>

          <a 
            href={telegramLink} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-foreground py-4 text-xs tracking-luxury uppercase hover:border-gold hover:text-gold transition-colors mb-12"
          >
            <Send size={14} />
            Order via Telegram
          </a>

          <div className="border-t border-border pt-8">
            <h3 className="font-serif text-xl mb-4">Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {product.details.map((d) => <li key={d}>— {d}</li>)}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-10 pt-8 border-t border-border">
            <Service icon={<Truck size={18} />} label="Complimentary delivery" />
            <Service icon={<ShieldCheck size={18} />} label="Lifetime warranty" />
            <Service icon={<Gem size={18} />} label="Certified stones" />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container py-24">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">From the same collection</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-right ml-4">{value}</span>
    </div>
  );
}

function Service({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="text-center">
      <div className="text-gold mx-auto mb-2 grid place-items-center">{icon}</div>
      <p className="text-[10px] tracking-luxury uppercase text-muted-foreground leading-snug">{label}</p>
    </div>
  );
}
































// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Heart, Truck, ShieldCheck, Gem, Send } from "lucide-react";
// import { getProduct, products } from "@/data/catalog";
// import { useStore } from "@/store/useStore";
// import ProductCard from "@/components/ProductCard";
// import NotFound from "./NotFound";

// export default function ProductPage() {
//   const { slug } = useParams();
//   const product = slug ? getProduct(slug) : undefined;
//   const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

//   useEffect(() => {
//     if (product) setSelectedColor(product.colors[0]);
//   }, [product, slug]);

//   if (!product || !selectedColor) return <NotFound />;

//   const addToCart = useStore((s) => s.addToCart);
//   const toggle = useStore((s) => s.toggleWishlist);
//   const liked = useStore((s) => s.wishlist.includes(product.id));

//   const TG_USERNAME = "@Aronn_7"; // O'ZINGIZNIKINI YOZING
//   const telegramLink = `https://t.me/${TG_USERNAME}?text=${encodeURIComponent(
//     `Assalomu alaykum! Buyurtma bermoqchiman:\n\n🏷 ${product.name}\n🎨 Rangi: ${selectedColor.name}\n💰 Narxi: $${product.price.toLocaleString()}`
//   )}`;

//   return (
//     <>
//       <div className="container pt-8 text-xs uppercase tracking-widest text-muted-foreground">
//         <Link to="/" className="hover:text-foreground">Home</Link> / {product.name}
//       </div>

//       <section className="container grid lg:grid-cols-2 gap-12 py-12">
//         <div className="space-y-4">
//           <div className="aspect-[4/5] bg-secondary overflow-hidden">
//             <img 
//               key={selectedColor.image}
//               src={selectedColor.image || product.image} 
//               className="w-full h-full object-cover animate-in fade-in duration-500"
//               onError={(e) => { (e.target as HTMLImageElement).src = product.image }}
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.colors.map((c, i) => (
//               <button key={i} onClick={() => setSelectedColor(c)} className={`border-2 ${selectedColor.name === c.name ? 'border-gold' : 'border-transparent'}`}>
//                 <img src={c.image} className="w-full h-full object-cover" />
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="space-y-8">
//           <div>
//             <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2">{product.collection}</p>
//             <h1 className="font-serif text-4xl mb-2">{product.name}</h1>
//             <p className="text-2xl font-serif">$ {product.price.toLocaleString()}</p>
//           </div>

//           <div className="flex gap-3">
//             {product.colors.map((c) => (
//               <button key={c.name} onClick={() => setSelectedColor(c)} className={`w-8 h-8 rounded-full border-2 ${selectedColor.name === c.name ? 'border-gold p-1' : 'border-transparent'}`}>
//                 <div className="w-full h-full rounded-full" style={{ backgroundColor: c.hex }} />
//               </button>
//             ))}
//           </div>

//           <div className="flex gap-3">
//             <button onClick={() => addToCart({ ...product, image: selectedColor.image, name: `${product.name} (${selectedColor.name})` })} className="flex-1 bg-foreground text-background py-4 uppercase text-[10px] tracking-widest hover:bg-gold transition-colors">
//               Add to selection
//             </button>
//             <button onClick={() => toggle(product.id)} className="px-5 border border-border hover:text-gold transition-colors">
//               <Heart size={20} fill={liked ? "#c9a14a" : "none"} className={liked ? "text-gold" : ""} />
//             </button>
//           </div>

//           <a href={telegramLink} target="_blank" className="flex items-center justify-center gap-2 w-full border border-foreground py-4 uppercase text-[10px] tracking-widest hover:bg-foreground hover:text-background transition-all">
//             <Send size={14} /> Order via Telegram
//           </a>

//           <div className="border-t border-border pt-6 space-y-2 text-sm text-muted-foreground">
//              <p>Metal: {product.metal} ({selectedColor.name})</p>
//              <p>Stone: {product.stone}</p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






