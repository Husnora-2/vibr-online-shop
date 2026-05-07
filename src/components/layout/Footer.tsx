// import { Link } from "react-router-dom";
// import { Instagram, Facebook, Youtube } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-foreground text-background mt-32">
//       <div className="container py-20">
//         {/* Newsletter */}
//         <div className="text-center max-w-xl mx-auto mb-16 pb-16 border-b border-background/15">
//           <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">La Lettre</p>
//           <h3 className="font-serif text-3xl md:text-4xl mb-4">Private invitations, first.</h3>
//           <p className="text-sm text-background/70 mb-8 leading-relaxed">
//             Receive previews of new pieces, atelier stories and invitations to private viewings.
//           </p>
//           <form className="flex border-b border-background/30 focus-within:border-gold transition-colors">
//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="flex-1 bg-transparent py-3 text-sm placeholder:text-background/40 focus:outline-none"
//             />
//             <button className="text-xs tracking-luxury uppercase text-gold hover:text-background transition-colors px-4">
//               Subscribe →
//             </button>
//           </form>
//         </div>

//         <div className="grid md:grid-cols-4 gap-12">
//           <div>
//             <p className="font-serif text-2xl mb-4">Maison Aurélie</p>
//             <p className="text-sm text-background/60 leading-relaxed">
//               Fine jewellery and Swiss watchmaking, crafted in our Geneva atelier since 1892.
//             </p>
//             <div className="flex gap-4 mt-6">
//               <a className="hover:text-gold transition-colors" aria-label="Instagram"><Instagram size={18} strokeWidth={1.4} /></a>
//               <a className="hover:text-gold transition-colors" aria-label="Facebook"><Facebook size={18} strokeWidth={1.4} /></a>
//               <a className="hover:text-gold transition-colors" aria-label="Youtube"><Youtube size={18} strokeWidth={1.4} /></a>
//             </div>
//           </div>

//           <FCol title="Discover" links={[["Jewellery","/jewelry"],["Watches","/watches"],["Collections","/collections"],["New Arrivals","/jewelry"]]} />
//           <FCol title="The Maison" links={[["Our Atelier","/atelier"],["Heritage","/atelier"],["Journal","/journal"],["Boutiques","/contact"]]} />
//           <FCol title="Services" links={[["Private Appointments","/contact"],["Bespoke Commissions","/atelier"],["After-Sales Care","/contact"],["Contact","/contact"]]} />
//         </div>

//         <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 justify-between text-xs text-background/50">
//           <p>© 2026 Maison Aurélie SA. Genève, Switzerland.</p>
//           <div className="flex gap-6">
//             <a className="hover:text-background">Privacy</a>
//             <a className="hover:text-background">Terms</a>
//             <a className="hover:text-background">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FCol({ title, links }: { title: string; links: [string, string][] }) {
//   return (
//     <div>
//       <p className="text-[11px] tracking-luxury uppercase text-gold mb-5">{title}</p>
//       <ul className="space-y-3">
//         {links.map(([l, h]) => (
//           <li key={l}>
//             <Link to={h} className="text-sm text-background/70 hover:text-background transition-colors">
//               {l}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




























import { Link } from "react-router-dom";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 mt-32">
      <div className="container grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <p className="font-serif text-2xl">Maison Aurélie</p>
          <p className="text-sm text-background/60">Fine jewellery and Swiss watchmaking since 1892.</p>
          <div className="flex gap-4">
            <a href="https://t.me/Aronn_7" target="_blank" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
              <Send size={18} />
            </a>
          </div>
        </div>

        <FCol title="Discover" links={[["Jewellery","/jewelry"],["Watches","/watches"]]} />
        <FCol title="The Maison" links={[["Our Atelier","/atelier"],["Heritage","/atelier"]]} />
        <FCol title="Services" links={[["Contact","/contact"],["Shipping","/contact"]]} />
      </div>
      <div className="container mt-16 pt-8 border-t border-background/10 text-[10px] text-background/40 uppercase tracking-widest flex justify-between">
        <p>© 2026 Maison Aurélie SA.</p>
        <div className="flex gap-6"><a>Privacy</a><a>Terms</a></div>
      </div>
    </footer>
  );
}

function FCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="space-y-5">
      <p className="text-gold text-[10px] tracking-widest uppercase">{title}</p>
      <ul className="space-y-3">
        {links.map(([l, h]) => (
          <li key={l}><Link to={h} className="text-sm text-background/60 hover:text-background transition-colors">{l}</Link></li>
        ))}
      </ul>
    </div>
  );
}
