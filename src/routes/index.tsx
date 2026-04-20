import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Utensils, Heart, Sparkles } from "lucide-react";
import hero from "@/assets/hero-restaurant.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import { dishes } from "@/lib/dishes";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Suvai Restaurant — Timeless Flavours, Warm Hospitality" },
      { name: "description", content: "A family restaurant serving authentic, soul-warming dishes in an elegant beige-toned setting." },
      { property: "og:title", content: "Royal Suvai Restaurant" },
      { property: "og:description", content: "Authentic family dining. Reserve your table today." },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={hero} alt="Royal Suvai dining room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/70" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-ornament text-cream/90 text-xs uppercase tracking-[0.4em] mb-6"
          >
            Family Restaurant
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-cream leading-[1.05] max-w-4xl"
          >
            Where every meal<br />
            <span className="text-gradient-gold italic">feels like home</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-cream/80 max-w-xl text-base md:text-lg"
          >
            A warm, elegant escape crafted for families and friends. Timeless recipes, gracious service, unforgettable evenings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 bg-cream text-foreground rounded-full px-7 py-3.5 font-medium hover:bg-accent transition-all hover:shadow-elegant"
            >
              Reserve a Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border border-cream/40 text-cream rounded-full px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-cream/40"
          />
        </motion.div>
      </section>

      {/* WELCOME */}
      <section className="py-24 md:py-32 bg-radial-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="divider-ornament text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Story</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              A table set with <em className="text-gradient-gold not-italic">love and tradition</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Royal Suvai, every recipe carries a memory. We bring together generations of culinary craft and modern warmth — creating a space where families gather, friends linger, and every plate tells a story.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { icon: Utensils, label: "Authentic Recipes" },
                { icon: Heart, label: "Family Owned" },
                { icon: Sparkles, label: "Elegant Setting" },
              ].map((f) => (
                <div key={f.label} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-secondary flex items-center justify-center mb-2">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-xs font-medium text-foreground/70">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                <img src={interior} alt="Restaurant interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream rounded-xl shadow-soft p-5 max-w-[180px] hidden sm:block">
                <div className="font-display text-3xl text-gradient-gold">10+</div>
                <div className="text-xs text-muted-foreground mt-1">Years of warm hospitality</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="divider-ornament text-xs uppercase tracking-[0.3em] text-muted-foreground">Signature</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A taste of the menu</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.slice(0, 3).map((d, i) => (
              <Reveal key={d.name} delay={i * 0.1}>
                <article className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
                  <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                    <span className="text-xs uppercase tracking-widest text-accent">{d.category}</span>
                    <h3 className="font-display text-2xl mt-1">{d.name}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors">
              Explore the full menu <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 md:p-20 text-center">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.78 0.13 78) 0%, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.78 0.13 78) 0%, transparent 40%)"
              }} />
              <div className="relative">
                <h2 className="font-display text-4xl md:text-5xl">Reserve your evening</h2>
                <p className="mt-4 text-primary-foreground/70 max-w-md mx-auto">
                  Tell us when you're coming — we'll have your table waiting.
                </p>
                <Link to="/booking" className="mt-8 inline-flex items-center gap-2 bg-cream text-foreground rounded-full px-8 py-4 font-medium hover:bg-accent transition-all">
                  Book a Table <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
