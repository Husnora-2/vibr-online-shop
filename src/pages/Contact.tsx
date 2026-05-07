// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// const boutiques = [
//   { city: "Genève", address: "12 Rue du Rhône, 1204 Genève", phone: "+41 22 310 18 92", note: "Flagship Maison" },
//   { city: "Paris", address: "8 Place Vendôme, 75001 Paris", phone: "+33 1 42 86 18 92" },
//   { city: "London", address: "15 Old Bond Street, Mayfair, W1S 4AS", phone: "+44 20 7493 1892" },
//   { city: "Tokyo", address: "Ginza 6-9-7, Chuo-ku, Tokyo", phone: "+81 3 6263 1892" },
//   { city: "Dubai", address: "The Dubai Mall, Fashion Avenue", phone: "+971 4 339 1892" },
//   { city: "New York", address: "655 Madison Avenue, NY 10065", phone: "+1 212 891 1892" },
// ];

// export default function Contact() {
//   return (
//     <>
//       <section className="container pt-16 md:pt-24 pb-16 text-center">
//         <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Boutiques & Contact</p>
//         <h1 className="font-serif text-5xl md:text-7xl mb-6">Visit the Maison</h1>
//         <p className="text-muted-foreground max-w-xl mx-auto">
//           Six addresses in the world's most beautiful cities — and a private appointment whenever you wish.
//         </p>
//       </section>

//       <section className="container grid lg:grid-cols-2 gap-16 lg:gap-24 pb-32">
//         {/* Boutiques */}
//         <div>
//           <h2 className="font-serif text-3xl md:text-4xl mb-10">Our boutiques</h2>
//           <div className="space-y-8">
//             {boutiques.map((b) => (
//               <div key={b.city} className="border-b border-border pb-8 last:border-0">
//                 <div className="flex items-baseline justify-between mb-2">
//                   <h3 className="font-serif text-2xl">{b.city}</h3>
//                   {b.note && <span className="text-[10px] tracking-luxury uppercase text-gold">{b.note}</span>}
//                 </div>
//                 <p className="text-sm text-muted-foreground mb-1 flex gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> {b.address}</p>
//                 <p className="text-sm text-muted-foreground flex gap-2"><Phone size={14} className="mt-0.5 shrink-0" /> {b.phone}</p>
//                 <p className="text-sm text-muted-foreground flex gap-2 mt-1"><Clock size={14} className="mt-0.5 shrink-0" /> Mon — Sat · 10h — 19h</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Form */}
//         <div className="bg-secondary p-8 md:p-12 self-start lg:sticky lg:top-28">
//           <h2 className="font-serif text-3xl md:text-4xl mb-3">Request a private appointment</h2>
//           <p className="text-sm text-muted-foreground mb-8">
//             We'll contact you within 24 hours to confirm.
//           </p>
//           <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//             <Field label="Full name" />
//             <Field label="Email" type="email" />
//             <Field label="Phone" />
//             <div>
//               <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">Boutique</label>
//               <select className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none">
//                 {boutiques.map((b) => <option key={b.city}>{b.city}</option>)}
//               </select>
//             </div>
//             <div>
//               <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">Message</label>
//               <textarea rows={4} className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none resize-none" />
//             </div>
//             <button className="w-full bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors mt-6">
//               Send request
//             </button>
//             <p className="text-xs text-muted-foreground flex gap-2 pt-2"><Mail size={12} className="mt-0.5" /> concierge@maison-aurelie.com</p>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// function Field({ label, type = "text" }: { label: string; type?: string }) {
//   return (
//     <div>
//       <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">{label}</label>
//       <input type={type} className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none" />
//     </div>
//   );
// }















import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const boutiques = [
  { city: "Genève", address: "12 Rue du Rhône, 1204 Genève", phone: "+41 22 310 18 92", note: "Flagship Maison" },
  { city: "Paris", address: "8 Place Vendôme, 75001 Paris", phone: "+33 1 42 86 18 92" },
  { city: "London", address: "15 Old Bond Street, Mayfair, W1S 4AS", phone: "+44 20 7493 1892" },
  { city: "Tokyo", address: "Ginza 6-9-7, Chuo-ku, Tokyo", phone: "+81 3 6263 1892" },
  { city: "Dubai", address: "The Dubai Mall, Fashion Avenue", phone: "+971 4 339 1892" },
  { city: "New York", address: "655 Madison Avenue, NY 10065", phone: "+1 212 891 1892" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      boutique: formData.get("boutique"),
      message: formData.get("message"),
    };

    const text = `🏢 Yangi xabar (Contact Page):\n\n👤 Ism: ${data.name}\n📧 Email: ${data.email}\n📞 Tel: ${data.phone}\n📍 Butik: ${data.boutique}\n💬 Xabar: ${data.message}`;

    const CHAT_ID = "6190695028";
    const TOKEN = "7547146473:AAHw59P9h96Fw6E8f0qjX8G_eU2P2eZ_o7w";

    try {
      const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text }),
      });

      if (response.ok) {
        alert("Xabaringiz muvaffaqiyatli yuborildi!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
      }
    } catch (error) {
      alert("Internet bilan muammo yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="container pt-16 md:pt-24 pb-16 text-center">
        <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Boutiques & Contact</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Visit the Maison</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Six addresses in the world's most beautiful cities — and a private appointment whenever you wish.
        </p>
      </section>

      <section className="container grid lg:grid-cols-2 gap-16 lg:gap-24 pb-32">
        {/* Boutiques */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Our boutiques</h2>
          <div className="space-y-8">
            {boutiques.map((b) => (
              <div key={b.city} className="border-b border-border pb-8 last:border-0">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl">{b.city}</h3>
                  {b.note && <span className="text-[10px] tracking-luxury uppercase text-gold">{b.note}</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-1 flex gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> {b.address}</p>
                <p className="text-sm text-muted-foreground flex gap-2"><Phone size={14} className="mt-0.5 shrink-0" /> {b.phone}</p>
                <p className="text-sm text-muted-foreground flex gap-2 mt-1"><Clock size={14} className="mt-0.5 shrink-0" /> Mon — Sat · 10h — 19h</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-secondary p-8 md:p-12 self-start lg:sticky lg:top-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Request a private appointment</h2>
          <p className="text-sm text-muted-foreground mb-8">
            We'll contact you within 24 hours to confirm.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Field label="Full name" name="full_name" required />
            <Field label="Email" type="email" name="email" required />
            <Field label="Phone" name="phone" required />
            <div>
              <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">Boutique</label>
              <select name="boutique" className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none">
                {boutiques.map((b) => <option key={b.city} value={b.city}>{b.city}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">Message</label>
              <textarea name="message" rows={4} className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none resize-none" required />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-foreground text-background py-4 text-xs tracking-luxury uppercase hover:bg-gold transition-colors mt-6 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send request"}
            </button>
            <p className="text-xs text-muted-foreground flex gap-2 pt-2"><Mail size={12} className="mt-0.5" /> concierge@maison-aurelie.com</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-luxury uppercase text-muted-foreground block mb-2">{label}</label>
      <input 
        name={name}
        type={type} 
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-gold py-2 focus:outline-none" 
      />
    </div>
  );
}