import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-3xl text-gradient-gold mb-3">Royal Suvai</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            A family restaurant celebrating timeless flavours, warm hospitality,
            and unforgettable evenings.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-accent" />
              <a href="https://maps.app.goo.gl/Q7tEo7npa8Xu6JeMA?g_st=ac" target="_blank" rel="noreferrer" className="hover:text-accent">View on Google Maps</a>
            </li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-accent" />
              <a href="tel:+917010501789" className="hover:text-accent">+91 70105 01789</a>
            </li>
            <li className="flex gap-3"><Instagram className="w-4 h-4 mt-0.5 text-accent" />
              <a href="https://www.instagram.com/royalsuvairestaurantkpm?igsh=MThuNjVsN2d4ZGQ3aA==" target="_blank" rel="noreferrer" className="hover:text-accent">@royalsuvairestaurantkpm</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="text-primary-foreground/80 hover:text-accent">Menu</Link></li>
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent">About</Link></li>
            <li><Link to="/booking" className="text-primary-foreground/80 hover:text-accent">Reserve a Table</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Royal Suvai Restaurant. Crafted with warmth.
      </div>
    </footer>
  );
}
