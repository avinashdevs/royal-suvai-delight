import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import interior from "@/assets/restaurant-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Royal Suvai Restaurant" },
      { name: "description", content: "Royal Suvai — a family restaurant built on warmth, tradition and timeless recipes." },
      { property: "og:title", content: "About Royal Suvai" },
      { property: "og:description", content: "A family restaurant built on warmth and tradition." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="divider-ornament text-xs uppercase tracking-[0.3em] text-muted-foreground">About Us</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">
            Built on <em className="text-gradient-gold not-italic">warmth</em>
          </h1>
        </Reveal>

        <Reveal>
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-elegant mb-16">
            <img src={interior} alt="Royal Suvai interior" className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-3xl mb-4">Our story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Royal Suvai began as a small family kitchen with a simple promise — that every guest should feel at home. Today, that promise still shapes every dish, every greeting, every quiet evening shared around our tables.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl mb-4">Our philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe great food is more than ingredients — it's intention. From sourcing the freshest produce to plating with care, we cook the way we'd cook for our own family. Because that's exactly what you are to us.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
