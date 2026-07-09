import { useState } from "react";
import { Phone, Send, CheckCircle, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { SectionLabel } from "../SectionLabel";
import type { ContactContent, Lang } from "../../types";

interface ContactProps {
  content: ContactContent;
  lang: Lang;
  phoneNumber: string;
}

const socialLinks = {
  ig: "https://www.instagram.com/reza_mesgarzadeh?igsh=MXJ2MWJzYXYwY3dmZA==",
  li: "https://www.linkedin.com/in/reza-mesgarzadeh-b875b2380/",
  yt: "https://youtube.com/@user-pn8vg8go9e?si=HwnfYvWSxKdt9lAI",
  ap: "https://www.aparat.com/reza_mesgarzdeh",
  te: "https://t.me/Reza_mesgarzadeh",
  wa: "https://wa.me/989123254266"
};

export default function Contact({ content, lang, phoneNumber }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", phone: "09123254266", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "09123254266", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <SectionLabel icon={<Send className="w-4 h-4" />} label={lang === "fa" ? "تماس" : "CONTACT"} />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3"
              style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
            >
              {content.title}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10">{content.subtitle}</p>

            <div className="space-y-5">
              {/* Phone card */}
              <div className="flex items-center gap-5 p-6 bg-card border border-border/60 rounded-xl hover:border-accent/20 transition-colors shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-telecom-green/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-telecom-green" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                    {lang === "fa" ? "تماس مستقیم" : "Direct Call"}
                  </p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-xl lg:text-2xl font-bold font-mono text-foreground hover:text-accent transition-colors"
                    dir="ltr"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                {[
                  { href: socialLinks.ig, icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                  { href: socialLinks.li, icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                  { href: socialLinks.yt, icon: <Youtube className="w-4 h-4" />, label: "YouTube" },
                  { href: socialLinks.te, icon: <FaTelegramPlane className="w-4 h-4" />, label: "telegram" },
                  { href: socialLinks.wa, icon: <FaWhatsapp className="w-4 h-4" />, label: "Whatsapp" },
                  { href: socialLinks.ap, icon: <SiAparat className="w-4 h-4" />, label: "Aparat" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 border border-border/60 bg-card hover:border-accent/30 hover:text-accent hover:bg-accent/5 text-muted-foreground transition-all rounded-xl text-sm font-semibold shadow-sm"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card border border-border/60 rounded-xl p-6 lg:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-14 h-14 text-telecom-green mx-auto mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {lang === "fa" ? "درخواست ارسال شد!" : "Request Submitted!"}
                </h3>
                <p className="text-muted-foreground">
                  {lang === "fa" ? "به زودی با شما تماس خواهیم گرفت." : "We will contact you soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{content.name}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-input-background border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{content.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-input-background border border-border/60 rounded-xl text-foreground font-mono focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{content.service}</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 bg-input-background border border-border/60 rounded-xl text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    required
                  >
                    <option value="">—</option>
                    {content.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{content.message}</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-input-background border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-telecom-green hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  {content.submit}
                  <Send className="w-4 h-4" />
                </button>
                <div className="text-center text-sm text-muted-foreground">
                  {content.orCall}{" "}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="font-mono font-bold text-accent hover:text-accent/80 transition-colors"
                    dir="ltr"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
