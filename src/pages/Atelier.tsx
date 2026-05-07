import craftImg from "@/assets/craftsmanship.jpg";
import heroImg from "@/assets/hero-jewelry.jpg";
import { Link } from "react-router-dom";

export default function Atelier() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] -mt-[5.5rem] flex items-end overflow-hidden">
        <img src={craftImg} alt="Atelier" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="container relative pb-16 text-background">
          <p className="text-[11px] tracking-luxury uppercase mb-4">Since 1892</p>
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl">A house built by hand.</h1>
        </div>
      </section>

      <section className="container py-24 md:py-32 grid md:grid-cols-2 gap-16 max-w-5xl">
        <div>
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Heritage</p>
          <h2 className="font-serif text-4xl md:text-5xl">From a single bench in Geneva to seven generations of craft.</h2>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>
            In 1892, in a small atelier on Rue du Rhône, Aurélien Marchand set down his
            tools and made his first ring — a single solitaire for his bride. He never
            imagined the house that would follow.
          </p>
          <p>
            Today, four generations later, every Maison Aurélie piece still passes
            through the hands of human artisans. Stone-setters trained for fifteen years.
            Polishers who can feel the difference of a single micron.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container max-w-5xl">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Seven hands, one piece.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={s.title}>
                <p className="font-serif text-5xl text-gold mb-4">0{i + 1}</p>
                <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="image-hover aspect-[4/5] bg-secondary">
          <img src={heroImg} alt="Bespoke" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Bespoke</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">A piece, made for one.</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every great jewel begins with a conversation. Our designers will work
            with you over months — sketching, sourcing rare stones, hand-carving wax
            models — to create a piece unlike any other in the world.
          </p>
          <Link to="/contact" className="bg-foreground text-background px-8 py-4 text-xs tracking-luxury uppercase inline-block hover:bg-gold transition-colors">
            Begin a commission
          </Link>
        </div>
      </section>
    </>
  );
}

const steps = [
  { title: "Design", text: "Sketches and gouaches, refined until each line is right." },
  { title: "Stone selection", text: "We travel to source — Muzo, Mogok, Antwerp — meeting cutters and miners in person." },
  { title: "Wax model", text: "A 3D wax is hand-carved and worn, before metal is ever touched." },
  { title: "Casting", text: "Lost-wax casting in 18k gold or platinum, alloyed in our own crucibles." },
  { title: "Setting", text: "Each stone is hand-set under loupe by master setters." },
  { title: "Polishing & finishing", text: "Eight stages of polish, by hand, until the metal mirrors light itself." },
];
