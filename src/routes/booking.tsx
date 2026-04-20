import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, User, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Royal Suvai Restaurant" },
      { name: "description", content: "Book your table at Royal Suvai. Quick reservation via WhatsApp." },
      { property: "og:title", content: "Reserve a Table — Royal Suvai" },
      { property: "og:description", content: "Book your table in seconds via WhatsApp." },
    ],
  }),
  component: BookingPage,
});

const WHATSAPP = "917010501789";

function BookingPage() {
  const [form, setForm] = useState({
    name: "", phone: "", date: "", time: "", guests: "2", notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      "*New Table Reservation — Royal Suvai*",
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Date:* ${form.date}`,
      `*Time:* ${form.time}`,
      `*Guests:* ${form.guests}`,
      form.notes ? `*Special Requests:* ${form.notes}` : "",
      "",
      "Kindly confirm my reservation. Thank you!",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="divider-ornament text-xs uppercase tracking-[0.3em] text-muted-foreground">Reservations</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Reserve your table</h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Fill in your details and we'll confirm your booking instantly via WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.form
            onSubmit={submit}
            className="bg-card rounded-3xl shadow-elegant p-8 md:p-10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field icon={User} label="Full Name" required>
                <input required value={form.name} onChange={update("name")} type="text" placeholder="Your name" className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60" />
              </Field>
              <Field icon={Phone} label="Phone Number" required>
                <input required value={form.phone} onChange={update("phone")} type="tel" placeholder="+91 ..." className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60" />
              </Field>
              <Field icon={Calendar} label="Date" required>
                <input required value={form.date} onChange={update("date")} type="date" min={today} className="w-full bg-transparent outline-none text-foreground" />
              </Field>
              <Field icon={Clock} label="Time" required>
                <input required value={form.time} onChange={update("time")} type="time" className="w-full bg-transparent outline-none text-foreground" />
              </Field>
              <Field icon={Users} label="Guests" required>
                <select required value={form.guests} onChange={update("guests")} className="w-full bg-transparent outline-none text-foreground">
                  {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                  <option value="15+">15+ Guests</option>
                </select>
              </Field>
            </div>
            <Field icon={MessageSquare} label="Special Requests (optional)">
              <textarea value={form.notes} onChange={update("notes")} rows={3} placeholder="Birthday, anniversary, dietary needs..." className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60 resize-none" />
            </Field>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-2xl px-6 py-4 font-medium hover:bg-primary/90 transition-all hover:shadow-elegant"
            >
              Confirm via WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-xs text-center text-muted-foreground">
              You'll be redirected to WhatsApp with your reservation details pre-filled.
            </p>
          </motion.form>
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  icon: Icon, label, required, children,
}: { icon: React.ComponentType<{ className?: string }>; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block group">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <div className="mt-2 flex items-start gap-3 px-4 py-3 rounded-xl bg-secondary border border-transparent focus-within:border-accent transition-colors">
        <Icon className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
        {children}
      </div>
    </label>
  );
}
