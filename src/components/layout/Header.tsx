import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { useStore } from "@/store/useStore";
// SHUNI ISHLATING - bu eng to'g'ri yo'l
import { products, collections, journal } from "@/data/catalog";


const nav = [
  { to: "/jewelry", label: "Jewellery" },
  { to: "/watches", label: "Watches" },
  { to: "/collections", label: "Collections" },
  { to: "/journal", label: "Journal" },
  { to: "/atelier", label: "Atelier" },
  { to: "/contact", label: "Boutiques" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cart = useStore((s) => s.cart);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const wishlist = useStore((s) => s.wishlist);
  const location = useLocation();
  const transparent = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const count = cart.reduce((n, i) => n + i.qty, 0);

  return (
    <>
      {/* Top announcement */}
      <div className="bg-foreground text-background text-[11px] tracking-luxury uppercase py-2 text-center overflow-hidden">
        <div className="flex whitespace-nowrap marquee gap-16">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16 shrink-0">
              <span>Complimentary worldwide delivery</span>
              <span className="text-gold">✦</span>
              <span>Lifetime maintenance on every piece</span>
              <span className="text-gold">✦</span>
              <span>Private appointments in Geneva · Paris · Tokyo</span>
              <span className="text-gold">✦</span>
              <span>New collection — Aurore 2026</span>
              <span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-silk ${
          transparent
            ? "bg-transparent"
            : "bg-background/85 backdrop-blur-md border-b border-border"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {nav.slice(0, 3).map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-xs tracking-editorial uppercase link-underline ${
                    isActive ? "text-gold" : ""
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/" className="flex flex-col items-center group">
            <span className="font-serif text-2xl md:text-3xl leading-none tracking-tight">
              Maison Aurélie
            </span>
            <span className="text-[9px] tracking-luxury uppercase text-muted-foreground mt-1">
              Genève · 1892
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {nav.slice(3).map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-xs tracking-editorial uppercase link-underline ${
                    isActive ? "text-gold" : ""
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-3">
            
            <Link to="/account" className="p-2 hover:text-gold transition-colors hidden sm:block" aria-label="Account">
              <User size={18} strokeWidth={1.4} />
            </Link>
            <Link to="/wishlist" className="p-2 hover:text-gold transition-colors relative" aria-label="Wishlist">
              <Heart size={18} strokeWidth={1.4} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 text-[9px] bg-gold text-background rounded-full h-4 w-4 grid place-items-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="p-2 hover:text-gold transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.4} />
              {count > 0 && (
                <span className="absolute top-0 right-0 text-[9px] bg-gold text-background rounded-full h-4 w-4 grid place-items-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container py-6 flex flex-col gap-4">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="text-sm tracking-editorial uppercase py-2"
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
