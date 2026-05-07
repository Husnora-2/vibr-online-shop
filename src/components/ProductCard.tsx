// import { Link } from "react-router-dom";
// import { Heart } from "lucide-react";
// import type { Product } from "@/data/catalog";
// import { useStore } from "@/store/useStore";

// export default function ProductCard({ product }: { product: Product }) {
//   const wishlist = useStore((s) => s.wishlist);
//   const toggle = useStore((s) => s.toggleWishlist);
//   const liked = wishlist.includes(product.id);

//   return (
//     <div className="group">
//       <Link to={`/product/${product.slug}`} className="block">
//         <div className="relative aspect-[4/5] bg-secondary image-hover mb-5">
//           <img
//             src={product.image}
//             alt={product.name}
//             loading="lazy"
//             className="w-full h-full object-cover"
//           />
//           {product.badge && (
//             <span className="absolute top-4 left-4 text-[10px] tracking-luxury uppercase bg-background/90 backdrop-blur px-3 py-1.5">
//               {product.badge}
//             </span>
//           )}
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               toggle(product.id);
//             }}
//             aria-label="Wishlist"
//             className="absolute top-4 right-4 h-9 w-9 grid place-items-center bg-background/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-gold"
//           >
//             <Heart size={15} fill={liked ? "currentColor" : "none"} className={liked ? "text-gold" : ""} />
//           </button>
//         </div>
//         <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-1.5">
//           {product.collection}
//         </p>
//         <h3 className="font-serif text-xl mb-2 group-hover:text-gold transition-colors">
//           {product.name}
//         </h3>
//         <p className="text-sm text-muted-foreground">
//           {product.currency}{product.price.toLocaleString("fr-FR")}
//         </p>
//       </Link>
//     </div>
//   );
// }














import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Animatsiya uchun
import type { Product } from "@/data/catalog";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Boshlang'ich holat: ko'rinmas va 20px pastda
      whileInView={{ opacity: 1, y: 0 }} // Ekran ko'ringanda: paydo bo'ladi va o'z joyiga keladi
      viewport={{ once: true }} // Faqat bir marta animatsiya bo'ladi
      transition={{ duration: 0.6, ease: "easeOut" }} // Animatsiya davomiyligi
      className="group relative"
    >
      <Link to={`/product/${product.slug}`}>
        <div className="aspect-[4/5] bg-secondary overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <p className="text-[10px] tracking-luxury uppercase text-gold">{product.collection}</p>
          <h3 className="font-serif text-lg">{product.name}</h3>
          <p className="text-sm">€{product.price.toLocaleString("fr-FR")}</p>
        </div>
      </Link>
    </motion.div>
  );
}