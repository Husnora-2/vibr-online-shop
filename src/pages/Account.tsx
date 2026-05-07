// export default function Account() {
//   return (
//     <section className="container py-16 md:py-24 min-h-[60vh] max-w-md">
//       <div className="text-center mb-12">
//         <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Welcome</p>
//         <h1 className="font-serif text-5xl mb-3">Your account</h1>
//         <p className="text-muted-foreground text-sm">Sign in to access your selection, orders and private appointments.</p>
//       </div>
//       <form className="space-y-5 bg-secondary p-8" onSubmit={(e) => e.preventDefault()}>
//         <div>
//           <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">Email</label>
//           <input type="email" className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none" />
//         </div>
//         <div>
//           <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">Password</label>
//           <input type="password" className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none" />
//         </div>
//         <button className="w-full bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors mt-6">
//           Sign in
//         </button>
//         <p className="text-xs text-center text-muted-foreground pt-2">
//           New to the Maison? <a className="text-gold link-underline cursor-pointer">Create an account</a>
//         </p>
//       </form>
//     </section>
//   );
// }





















































import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  // Handle Sign In
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Sahifa yangilanib ketishini to'xtatadi
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    if (email) {
      const extractedName = email.split('@')[0];
      const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
      
      setUserEmail(email);
      setUserName(formattedName);
      setIsLoggedIn(true);
      window.scrollTo(0, 0); // Sahifani tepaga qaytaradi
    }
  };

  if (!isLoggedIn) {
    return (
      <section className="container py-16 md:py-24 min-h-[70vh] max-w-md animate-in fade-in duration-500">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4 italic">Maison Aurélie</p>
          <h1 className="font-serif text-5xl mb-3">Sign In</h1>
          <p className="text-muted-foreground text-sm tracking-wide">Enter your credentials to access the Maison.</p>
        </div>
        
        <form className="space-y-6 bg-secondary/30 p-10 border border-black/5 shadow-sm" onSubmit={handleSignIn}>
          <div className="space-y-1">
            <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block">Email Address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="example@maison.com" 
              className="w-full bg-transparent border-b border-black/10 focus:border-gold py-3 outline-none transition-all" 
              required 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block">Password</label>
            <input 
              name="password" 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-transparent border-b border-black/10 focus:border-gold py-3 outline-none transition-all" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-black text-white py-5 text-[10px] tracking-widest uppercase hover:bg-gold transition-all duration-300 font-bold active:scale-[0.98]">
            Enter the Atelier
          </button>
        </form>
      </section>
    );
  }

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      {/* TEPADAGI BANNER */}
      <div className="bg-black text-[10px] text-white py-3 text-center tracking-[0.2em] uppercase">
        Worldwide Delivery &bull; Lifetime Maintenance &bull; Private Appointments
      </div>

      <section className="container py-16 md:py-24 min-h-[100vh]">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-10">
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold font-medium italic">L'Espace Privé — Member since 2026</p>
            <h1 className="font-serif text-6xl md:text-8xl leading-none">Bonjour, <br /> {userName}</h1>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 border border-black/10 text-[10px] tracking-widest uppercase hover:bg-secondary transition-all">Edit Profile</button>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="px-8 py-4 bg-black text-white text-[10px] tracking-widest uppercase hover:bg-gold transition-all shadow-xl active:scale-95"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
            {/* BUYURTMALAR */}
            <section>
              <div className="flex justify-between items-end mb-10 border-b border-black/5 pb-4">
                <h2 className="text-xs tracking-[0.3em] uppercase font-bold">Orders & Tracking</h2>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Archive (0)</span>
              </div>
              <div className="group flex items-center justify-between p-8 bg-secondary/10 border border-transparent hover:border-gold/20 transition-all">
                <div className="flex gap-10 items-center">
                  <div className="w-24 h-24 bg-white p-4 shadow-sm group-hover:scale-105 transition-transform">
                    <img src="/src/assets/products/oltin braslet.png" className="w-full h-full object-contain" alt="item" />
                  </div>
                  <div>
                    <p className="text-[9px] text-gold uppercase tracking-[0.2em] font-bold mb-1">Out for Delivery</p>
                    <h3 className="font-serif text-2xl italic">Classic Gold Ring</h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Order #ORD-99120</p>
                  </div>
                </div>
                <div className="text-right space-y-3">
                  <p className="font-serif text-xl">$1,200</p>
                  <button className="text-[10px] text-white bg-black px-6 py-2 uppercase tracking-widest hover:bg-gold transition-all">Track</button>
                </div>
              </div>
            </section>

            {/* SEVIMLI MAHSULOTLAR */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase mb-10 border-b border-black/5 pb-4 font-bold">Your Private Selection</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <Link to="/jewelry" className="group">
                  <div className="aspect-[3/4] bg-secondary/30 mb-6 flex items-center justify-center p-8 relative overflow-hidden">
                    <img src="/src/assets/products/zirakoltin.png" className="max-h-full object-contain group-hover:scale-110 transition-transform duration-1000" alt="item" />
                    <div className="absolute top-4 right-4 text-black/10 hover:text-gold transition-colors font-sans cursor-pointer">✕</div>
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">High Jewellery</p>
                  <h4 className="font-serif text-lg italic underline-offset-4 group-hover:underline">Aurore Earrings</h4>
                </Link>
              </div>
            </section>
          </div>

          {/* O'NG USTUN */}
          <div className="lg:col-span-4 space-y-16">
            <div className="p-10 bg-[#1a1a1a] text-white space-y-8 shadow-2xl">
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Maison Status</h3>
              <div className="space-y-4">
                <p className="font-serif text-4xl">Silver Tier</p>
                <div className="w-full bg-white/10 h-[1px]">
                  <div className="bg-gold w-2/3 h-full"></div>
                </div>
                <p className="text-[9px] text-white/40 tracking-widest uppercase">Spend $1,300 more to reach Gold</p>
              </div>
            </div>

            <div className="p-10 border border-gold/20 bg-gold/5 space-y-6">
              <h3 className="font-serif text-2xl">Concierge Service</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed uppercase tracking-widest">
                Our master jewellers are ready to assist with custom pieces.
              </p>
              <button className="w-full py-4 border border-black text-[10px] tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                Request a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}