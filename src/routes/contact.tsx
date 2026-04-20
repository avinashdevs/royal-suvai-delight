import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Royal Suvai Restaurant" },
      { name: "description", content: "Find us, call us, or message on WhatsApp. Royal Suvai Restaurant location and contact details." },
      { property: "og:title", content: "Contact Royal Suvai" },
      { property: "og:description", content: "Find us, call us, or reserve via WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="divider-ornament text-xs uppercase tracking-[0.3em] text-muted-foreground">Visit Us</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Come say hello</h1>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Reveal>
            <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
              <h2 className="font-display text-2xl mb-6">Get in touch</h2>
              <ul className="space-y-5">
                <ContactItem icon={Phone} label="Call us" value="+91 70105 01789" href="tel:+917010501789" />
                <ContactItem icon={MessageCircle} label="WhatsApp" value="Chat with us" href="https://wa.me/917010501789" />
                <ContactItem icon={Instagram} label="Instagram" value="@royalsuvairestaurantkpm" href="https://www.instagram.com/royalsuvairestaurantkpm?igsh=MThuNjVsN2d4ZGQ3aA==" />
                <ContactItem icon={MapPin} label="Location" value="Open in Google Maps" href="https://maps.app.goo.gl/Q7tEo7npa8Xu6JeMA?g_st=ac" />
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
              <h2 className="font-display text-2xl mb-6">Hours</h2>
              <ul className="space-y-3 text-sm">
                {[
                  ["Monday – Thursday", "11:00 AM – 10:30 PM"],
                  ["Friday", "11:00 AM – 11:00 PM"],
                  ["Saturday", "10:00 AM – 11:00 PM"],
                  ["Sunday", "10:00 AM – 10:30 PM"],
                ].map(([d, h]) => (
                  <li key={d} className="flex justify-between border-b border-border/50 pb-3">
                    <span className="text-foreground/80">{d}</span>
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[16/9] bg-muted">
            <iframe
              title="Royal Suvai Restaurant Location"
              src="https://www.google.com/maps?q=Royal+Suvai+Restaurant&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-4">
            <a href="https://maps.app.goo.gl/Q7tEo7npa8Xu6JeMA?g_st=ac" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
              <MapPin className="w-4 h-4" /> Open directions in Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function ContactItem({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
        <span className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
          <Icon className="w-5 h-5 text-foreground" />
        </span>
        <span className="flex-1">
          <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
          <span className="block text-foreground group-hover:text-accent transition-colors">{value}</span>
        </span>
      </a>
    </li>
  );
}
