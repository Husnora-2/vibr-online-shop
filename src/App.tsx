import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import Collections from "./pages/Collections";
import Journal from "./pages/Journal";
import Atelier from "./pages/Atelier";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/jewelry"
              element={
                <CatalogPage
                  title="Fine Jewellery"
                  eyebrow="The Collection"
                  subtitle="Rings, necklaces, earrings and bracelets — each piece hand-crafted in our Geneva atelier."
                  filterCategory={["rings", "necklaces", "earrings", "bracelets"]}
                />
              }
            />
            <Route
              path="/watches"
              element={
                <CatalogPage
                  title="Haute Horlogerie"
                  eyebrow="Swiss Watchmaking"
                  subtitle="In-house movements, hand-finished and assembled in Geneva."
                  filterCategory={["watches"]}
                />
              }
            />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/atelier" element={<Atelier />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;



































// import { useState } from "react";

// export default function Account() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userEmail, setUserEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   // KIRISH FUNKSIYASI
//   const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email") as string;
    
//     if (email) {
//       // Emailni '@' belgisidan ajratib ism yasash
//       const extractedName = email.split('@')[0];
//       const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
      
//       setUserEmail(email);
//       setUserName(formattedName);
//       setIsLoggedIn(true);
//     }
//   };

//   // PROFILNI TAHRIRLASH
//   const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const newName = formData.get("newName") as string;
//     if (newName) setUserName(newName);
//     setIsEditModalOpen(false);
//   };

//   if (!isLoggedIn) {
//     return (
//       <section className="container py-24 max-w-md mx-auto min-h-[80vh]">
//         <div className="text-center mb-10">
//           <h1 className="font-serif text-4xl mb-2">Sign In</h1>
//           <p className="text-muted-foreground text-sm">Access your Maison Aurélie account</p>
//         </div>
//         <form className="space-y-6 bg-secondary/20 p-8 border border-black/5" onSubmit={handleSignIn}>
//           <input name="email" type="email" placeholder="email@example.com" className="w-full bg-transparent border-b border-black/20 py-2 outline-none focus:border-gold" required />
//           <input name="password" type="password" placeholder="Password" className="w-full bg-transparent border-b border-black/20 py-2 outline-none focus:border-gold" required />
//           <button type="submit" className="w-full bg-black text-white py-4 text-xs tracking-widest uppercase hover:bg-gold transition-all">
//             Sign In
//           </button>
//         </form>
//       </section>
//     );
//   }

//   return (
//     <section className="container py-20 min-h-screen">
//       {/* HEADER */}
//       <div className="flex justify-between items-start mb-20">
//         <div>
//           <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">Member Space</p>
//           <h1 className="font-serif text-6xl md:text-8xl italic">Bonjour, {userName}</h1>
//         </div>
//         <div className="flex gap-4 pt-4">
//           <button onClick={() => setIsEditModalOpen(true)} className="text-[10px] uppercase border-b border-black pb-1 hover:text-gold transition-all">Edit Profile</button>
//           <button onClick={() => setIsLoggedIn(false)} className="text-[10px] uppercase border-b border-black pb-1 hover:text-gold transition-all">Sign Out</button>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-3 gap-16">
//         <div className="lg:col-span-2 space-y-12">
//           <h2 className="text-xs tracking-widest uppercase border-b pb-4">Recent Activity</h2>
//           <div className="bg-secondary/10 p-8 border border-gold/10 flex justify-between items-center">
//             <div className="flex gap-6 items-center">
//               <div className="w-20 h-20 bg-white p-2">
//                 <img src="/src/assets/products/oltin braslet.png" className="w-full h-full object-contain" alt="item" />
//               </div>
//               <div>
//                 <h3 className="font-serif text-xl italic">Classic Gold Ring</h3>
//                 <p className="text-[10px] text-muted-foreground uppercase mt-1">Status: Out for Delivery</p>
//               </div>
//             </div>
//             <p className="font-serif">$1,200</p>
//           </div>
//         </div>

//         <div className="space-y-10">
//           <div className="bg-black text-white p-8">
//             <h3 className="text-gold text-[10px] tracking-widest uppercase mb-4">Maison Status</h3>
//             <p className="font-serif text-3xl mb-2">Silver Tier</p>
//             <div className="w-full bg-white/20 h-[1px] mb-2"><div className="bg-gold w-2/3 h-full"></div></div>
//             <p className="text-[9px] text-white/50 uppercase">Registered: {userEmail}</p>
//           </div>
//         </div>
//       </div>

//       {/* MODAL WINDOW */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white p-10 max-w-sm w-full shadow-2xl">
//             <h3 className="font-serif text-2xl mb-6">Update Profile</h3>
//             <form onSubmit={handleUpdateProfile} className="space-y-6">
//               <input name="newName" type="text" defaultValue={userName} className="w-full border-b border-black/10 py-2 outline-none focus:border-gold" placeholder="New Name" required />
//               <div className="flex gap-4">
//                 <button type="button" onClick={() => setIsEditModalOpen(false)} className="flex-1 py-3 border border-black/10 text-[10px] uppercase">Cancel</button>
//                 <button type="submit" className="flex-1 py-3 bg-black text-white text-[10px] uppercase">Save</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


































