import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, type Product } from "@/data/catalog";

type Props = {
  title: string;
  eyebrow: string;
  subtitle: string;
  filterCategory?: Product["category"][];
};

export default function CatalogPage({ title, eyebrow, subtitle, filterCategory }: Props) {
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat");
  const [sort, setSort] = useState<"featured" | "asc" | "desc">("featured");

  const list = useMemo(() => {
    let l = products;
    if (filterCategory) l = l.filter((p) => filterCategory.includes(p.category));
    if (cat) l = l.filter((p) => p.category === cat);
    if (sort === "asc") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "desc") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [filterCategory, cat, sort]);

  const cats: { key: Product["category"]; label: string }[] = filterCategory
    ? filterCategory.map((c) => ({ key: c, label: c[0].toUpperCase() + c.slice(1) }))
    : [];

  return (
    <>
      <section className="container pt-16 md:pt-24 pb-12 text-center">
        <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">{title}</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
      </section>

      <section className="container">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-border mb-12">
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => { params.delete("cat"); setParams(params); }}
              className={`text-xs tracking-luxury uppercase transition-colors ${!cat ? "text-gold" : "hover:text-gold"}`}
            >
              All
            </button>
            {cats.map((c) => (
              <button
                key={c.key}
                onClick={() => { params.set("cat", c.key); setParams(params); }}
                className={`text-xs tracking-luxury uppercase transition-colors ${cat === c.key ? "text-gold" : "hover:text-gold"}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs tracking-luxury uppercase text-muted-foreground">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-transparent text-xs tracking-luxury uppercase border-b border-border focus:border-gold py-1 pr-6 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="asc">Price ↑</option>
              <option value="desc">Price ↓</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 pb-32">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
