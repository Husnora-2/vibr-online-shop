// import { X, Minus, Plus } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useStore } from "@/store/useStore";
// import { useEffect } from "react";

// export default function CartDrawer() {
//   const { cart, cartOpen, setCartOpen, removeFromCart, setQty } = useStore();

//   useEffect(() => {
//     document.body.style.overflow = cartOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [cartOpen]);

//   const subtotal = cart.reduce((n, i) => n + i.product.price * i.qty, 0);

//   return (
//     <>
//       <div
//         onClick={() => setCartOpen(false)}
//         className={`fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity ${
//           cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       />
//       <aside
//         className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
//           cartOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-6 border-b border-border">
//           <p className="text-xs tracking-luxury uppercase">Your Selection ({cart.length})</p>
//           <button onClick={() => setCartOpen(false)} aria-label="Close"><X size={18} /></button>
//         </div>

//         {cart.length === 0 ? (
//           <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
//             <p className="font-serif text-2xl mb-3">Your selection awaits</p>
//             <p className="text-sm text-muted-foreground mb-8">
//               Discover pieces crafted to last a lifetime.
//             </p>
//             <Link
//               to="/jewelry"
//               onClick={() => setCartOpen(false)}
//               className="text-xs tracking-luxury uppercase border-b border-foreground hover:text-gold hover:border-gold pb-1 transition-colors"
//             >
//               Explore Jewellery
//             </Link>
//           </div>
//         ) : (
//           <>
//             <div className="flex-1 overflow-y-auto p-6 space-y-6">
//               {cart.map(({ product, qty }) => (
//                 <div key={product.id} className="flex gap-4">
//                   <img src={product.image} alt={product.name} className="w-20 h-24 object-cover bg-secondary" />
//                   <div className="flex-1 flex flex-col">
//                     <p className="font-serif text-base">{product.name}</p>
//                     <p className="text-xs text-muted-foreground mb-2">{product.metal}</p>
//                     <p className="text-sm">€{product.price.toLocaleString("fr-FR")}</p>
//                     <div className="flex items-center gap-3 mt-auto">
//                       <div className="flex items-center border border-border">
//                         <button onClick={() => setQty(product.id, qty - 1)} className="px-2 py-1"><Minus size={12} /></button>
//                         <span className="px-3 text-sm">{qty}</span>
//                         <button onClick={() => setQty(product.id, qty + 1)} className="px-2 py-1"><Plus size={12} /></button>
//                       </div>
//                       <button onClick={() => removeFromCart(product.id)} className="text-xs text-muted-foreground hover:text-foreground underline">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="border-t border-border p-6 space-y-4">
//               <div className="flex justify-between text-sm">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span>€{subtotal.toLocaleString("fr-FR")}</span>
//               </div>
//               <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
//               <button className="w-full bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors">
//                 Secure Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </aside>
//     </>
//   );
// }





























// import { X, Minus, Plus, Send } from "lucide-react"; // Send ikonkasini qo'shdik
// import { Link } from "react-router-dom";
// import { useStore } from "@/store/useStore";
// import { useEffect } from "react";

// export default function CartDrawer() {
//   const { cart, cartOpen, setCartOpen, removeFromCart, setQty } = useStore();

//   useEffect(() => {
//     document.body.style.overflow = cartOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [cartOpen]);

//   const subtotal = cart.reduce((n, i) => n + i.product.price * i.qty, 0);

//   // Telegramga yuborish funksiyasi
//   const handleCheckout = () => {
//     const MY_TELEGRAM_USER = "SIZNING_USERNAME"; // Bu yerga o'z useringizni yozing

//     // Savatdagi mahsulotlarni matn ko'rinishiga keltiramiz
//     const itemsList = cart.map(({ product, qty }) => 
//       `• ${product.name} x${qty} — €${(product.price * qty).toLocaleString("fr-FR")}`
//     ).join("\n");

//     const message = `✨ YANGI BUYURTMA ✨\n\n` +
//                     `${itemsList}\n\n` +
//                     `💳 Jami summa: €${subtotal.toLocaleString("fr-FR")}\n\n` +
//                     `Sana: ${new Date().toLocaleString("uz-UZ")}`;

//     const telegramUrl = `https://t.me/${MY_TELEGRAM_USER}?text=${encodeURIComponent(message)}`;
    
//     // Telegramni yangi oynada ochish
//     window.open(telegramUrl, "_blank");
//   };

//   return (
//     <>
//       <div
//         onClick={() => setCartOpen(false)}
//         className={`fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity ${
//           cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       />
//       <aside
//         className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
//           cartOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-6 border-b border-border">
//           <p className="text-xs tracking-luxury uppercase">Your Selection ({cart.length})</p>
//           <button onClick={() => setCartOpen(false)} aria-label="Close"><X size={18} /></button>
//         </div>

//         {cart.length === 0 ? (
//           <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
//             <p className="font-serif text-2xl mb-3">Your selection awaits</p>
//             <p className="text-sm text-muted-foreground mb-8">
//               Discover pieces crafted to last a lifetime.
//             </p>
//             <Link
//               to="/jewelry"
//               onClick={() => setCartOpen(false)}
//               className="text-xs tracking-luxury uppercase border-b border-foreground hover:text-gold hover:border-gold pb-1 transition-colors"
//             >
//               Explore Jewellery
//             </Link>
//           </div>
//         ) : (
//           <>
//             <div className="flex-1 overflow-y-auto p-6 space-y-6">
//               {cart.map(({ product, qty }) => (
//                 <div key={product.id} className="flex gap-4">
//                   <img src={product.image} alt={product.name} className="w-20 h-24 object-cover bg-secondary" />
//                   <div className="flex-1 flex flex-col">
//                     <p className="font-serif text-base">{product.name}</p>
//                     <p className="text-xs text-muted-foreground mb-2">{product.metal}</p>
//                     <p className="text-sm">€{product.price.toLocaleString("fr-FR")}</p>
//                     <div className="flex items-center gap-3 mt-auto">
//                       <div className="flex items-center border border-border">
//                         <button onClick={() => setQty(product.id, qty - 1)} className="px-2 py-1"><Minus size={12} /></button>
//                         <span className="px-3 text-sm">{qty}</span>
//                         <button onClick={() => setQty(product.id, qty + 1)} className="px-2 py-1"><Plus size={12} /></button>
//                       </div>
//                       <button onClick={() => removeFromCart(product.id)} className="text-xs text-muted-foreground hover:text-foreground underline">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="border-t border-border p-6 space-y-4">
//               <div className="flex justify-between text-sm">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span className="font-medium">€{subtotal.toLocaleString("fr-FR")}</span>
//               </div>
//               <p className="text-xs text-muted-foreground">Shipping and taxes calculated via Telegram.</p>
              
//               {/* Yangilangan Tugma */}
//               <button 
//                 onClick={handleCheckout}
//                 className="w-full bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors flex items-center justify-center gap-2"
//               >
//                 <Send size={14} />
//                 Order via Telegram
//               </button>
//             </div>
//           </>
//         )}
//       </aside>
//     </>
//   );
// }


























// import { X, Minus, Plus, Send } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useStore } from "@/store/useStore";
// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // Animatsiya kutubxonalari

// export default function CartDrawer() {
//   const { cart, cartOpen, setCartOpen, removeFromCart, setQty } = useStore();

//   useEffect(() => {
//     document.body.style.overflow = cartOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [cartOpen]);

//   const subtotal = cart.reduce((n, i) => n + i.product.price * i.qty, 0);

//   // Telegramga buyurtma yuborish funksiyasi
// import { Send } from "lucide-react";
// import { useStore } from "@/store/useStore";

// export default function CartDrawer() {
//   const { cart, subtotal } = useStore(); // Store'dan ma'lumotlarni oling

//   const handleCheckout = () => {
//     const TG_USER = "Aronn_7"; // FAQAT USERNAME
    
//     const items = cart.map(i => `• ${i.product.name} (x${i.qty})`).join("\n");
//     const fullMessage = `✨ NEW ORDER ✨\n\n${items}\n\nTotal: $${subtotal}`;

//     window.open(`https://t.me/${TG_USER}?text=${encodeURIComponent(fullMessage)}`, "_blank");
//   };

//   return (
//     // ... UI kodlaringiz
//     <button onClick={handleCheckout} className="w-full bg-black text-white py-4 flex items-center justify-center gap-2">
//       <Send size={14} /> Checkout via Telegram
//     </button>
//   );
// }

//   return (
//     <>
//       {/* Orqa fon (Overlay) */}
//       <AnimatePresence>
//         {cartOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setCartOpen(false)}
//             className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
//           />
//         )}
//       </AnimatePresence>

//       {/* Savat Paneli (Drawer) */}
//       <aside
//         className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
//           cartOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-6 border-b border-border">
//           <p className="text-xs tracking-luxury uppercase">Your Selection ({cart.length})</p>
//           <button onClick={() => setCartOpen(false)} aria-label="Close"><X size={18} /></button>
//         </div>

//         {cart.length === 0 ? (
//           <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
//             <p className="font-serif text-2xl mb-3">Your selection awaits</p>
//             <p className="text-sm text-muted-foreground mb-8">
//               Discover pieces crafted to last a lifetime.
//             </p>
//             <button
//               onClick={() => setCartOpen(false)}
//               className="text-xs tracking-luxury uppercase border-b border-foreground hover:text-gold hover:border-gold pb-1 transition-colors"
//             >
//               Start Shopping
//             </button>
//           </div>
//         ) : (
//           <>
//             <div className="flex-1 overflow-y-auto p-6 space-y-6">
//               <AnimatePresence>
//                 {cart.map(({ product, qty }, index) => (
//                   <motion.div
//                     key={product.id}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex gap-4"
//                   >
//                     <img src={product.image} alt={product.name} className="w-20 h-24 object-cover bg-secondary" />
//                     <div className="flex-1 flex flex-col">
//                       <p className="font-serif text-base">{product.name}</p>
//                       <p className="text-xs text-muted-foreground mb-2">{product.metal}</p>
//                       <p className="text-sm font-medium">€{product.price.toLocaleString("fr-FR")}</p>
                      
//                       <div className="flex items-center gap-3 mt-auto pt-2">
//                         <div className="flex items-center border border-border">
//                           <button onClick={() => setQty(product.id, qty - 1)} className="px-2 py-1 hover:bg-secondary"><Minus size={12} /></button>
//                           <span className="px-3 text-sm">{qty}</span>
//                           <button onClick={() => setQty(product.id, qty + 1)} className="px-2 py-1 hover:bg-secondary"><Plus size={12} /></button>
//                         </div>
//                         <button 
//                           onClick={() => removeFromCart(product.id)} 
//                           className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             <div className="border-t border-border p-6 space-y-4 bg-background">
//               <div className="flex justify-between text-sm">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span className="font-serif text-base">€{subtotal.toLocaleString("fr-FR")}</span>
//               </div>
//               <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
//                 Shipping and taxes calculated via Telegram.
//               </p>
//               <button 
//                 onClick={handleCheckout}
//                 className="w-full bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors flex items-center justify-center gap-2"
//               >
//                 <Send size={14} />
//                 Order via Telegram
//               </button>
//             </div>
//           </>
//         )}
//       </aside>
//     </>
//   );
// }











import { X, Minus, Plus, Send } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, setQty } = useStore();

  // Sahifa aylanishini bloklash
  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen]);

  // Jami summani hisoblash
  const subtotal = cart.reduce((n, i) => n + i.product.price * i.qty, 0);

  // Telegramga buyurtma yuborish
  const handleCheckout = () => {
    // MUHIM: @ belgisiz yozing
    const TG_USER = "Aronn_7"; 
    
    const itemsList = cart.map(({ product, qty }) =>
      `• ${product.name} x${qty} — $${(product.price * qty).toLocaleString()}`
    ).join("\n");

    const message = `✨ YANGI BUYURTMA ✨\n\n` +
                    `${itemsList}\n\n` +
                    `💳 Jami summa: $${subtotal.toLocaleString()}\n\n` +
                    `Sana: ${new Date().toLocaleString("uz-UZ")}`;

    const telegramUrl = `https://t.me/${TG_USER}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <>
      {/* Orqa fon (Overlay) */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Savat Paneli (Drawer) */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <p className="text-xs tracking-luxury uppercase">Your Selection ({cart.length})</p>
          <button onClick={() => setCartOpen(false)}><X size={18} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <p className="font-serif text-2xl mb-3">Your selection awaits</p>
            <p className="text-sm text-muted-foreground mb-8">
              Discover pieces crafted to last a lifetime.
            </p>
            <button
              onClick={() => setCartOpen(false)}
              className="text-xs tracking-luxury uppercase border-b border-foreground hover:text-gold hover:border-gold pb-1 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <AnimatePresence>
                {cart.map(({ product, qty }, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <img src={product.image} alt={product.name} className="w-20 h-24 object-cover bg-secondary" />
                    <div className="flex-1 flex flex-col">
                      <p className="font-serif text-base">{product.name}</p>
                      <p className="text-xs text-muted-foreground mb-2">{product.metal}</p>
                      <p className="text-sm font-medium">$ {product.price.toLocaleString()}</p>
                      
                      <div className="flex items-center gap-3 mt-auto pt-2">
                        <div className="flex items-center border border-border">
                          <button onClick={() => setQty(product.id, qty - 1)} className="px-2 py-1 hover:bg-secondary"><Minus size={12} /></button>
                          <span className="px-3 text-sm">{qty}</span>
                          <button onClick={() => setQty(product.id, qty + 1)} className="px-2 py-1 hover:bg-secondary"><Plus size={12} /></button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(product.id)} 
                          className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-border p-6 space-y-4 bg-background">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-base">$ {subtotal.toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
                Shipping and taxes calculated via Telegram.
              </p>
              <button 
                onClick={handleCheckout}
                className="w-full bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Order via Telegram
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}


















