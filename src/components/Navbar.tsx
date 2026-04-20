import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/booking", label: "Reserve" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-border/60 py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold">
              Royal Suvai
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative"
                activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navdot"
                        className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1.5 h-1.5 rounded-full bg-accent"
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
            <Link
              to="/booking"
              className="ml-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-elegant"
            >
              Book a Table
            </Link>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-foreground hover:bg-secondary transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-elegant flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-display text-2xl text-gradient-gold">Royal Suvai</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 p-6 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-display text-3xl text-foreground hover:text-gradient-gold border-b border-border/50"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6">
                <Link
                  to="/booking"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-full bg-primary text-primary-foreground py-4 font-medium"
                >
                  Reserve Your Table
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
