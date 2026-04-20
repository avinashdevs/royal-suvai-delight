import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dishes, type Dish } from "@/lib/dishes";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Royal Suvai Restaurant" },
      { name: "description", content: "Explore our signature dishes — from crisp starters to soul-warming mains." },
      { property: "og:title", content: "Menu — Royal Suvai Restaurant" },
      { property: "og:description", content: "Explore our signature dishes." },
    ],
  }),
  component: MenuPage,
});

const categories = ["All", "Starters", "Mains", "Specials"] as const;
type Cat = (typeof categories)[number];

function MenuPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="divider-ornament text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Menu</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Crafted with care</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every dish is made fresh, with seasonal ingredients and timeless technique.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                active === c ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {active === c && (
                <motion.span layoutId="catPill" className="absolute inset-0 bg-primary rounded-full" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((d, i) => (
              <DishCard key={d.name} dish={d} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
      </div>
      <div className="p-6">
        <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-medium">{dish.category}</span>
        <h3 className="mt-2 font-display text-2xl">{dish.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
      </div>
    </motion.article>
  );
}
