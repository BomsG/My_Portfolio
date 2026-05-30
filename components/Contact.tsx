import React, { useState } from "react";
import { motion as motionBase } from "framer-motion";
const motion = motionBase as any;
import { RiMailSendFill, RiPhoneFill, RiMapFill, RiMailLine } from "react-icons/ri";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetch("https://formspree.io/f/mkgbdggz", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });
    if (res.ok) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    { icon: <RiMailLine size={18} />, title: "Email", value: "Bomageorge572@gmail.com", link: "mailto:Bomageorge572@gmail.com" },
    { icon: <RiPhoneFill size={18} />, title: "Phone", value: "+234 812 612 3121", link: "tel:+2348126123121" },
    { icon: <RiMapFill size={18} />, title: "Location", value: "Port-Harcourt, Nigeria", link: "https://maps.google.com/?q=Port+Harcourt+Nigeria" },
  ];

  const borderColor = (name: string) =>
    focusedField === name ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)";

  return (
    <section id="contact" className="py-32 px-6" style={{ background: "#111111" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3"
            style={{ color: "rgba(255,255,255,0.25)" }}>Let's Talk</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-[-0.03em]"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Get in Touch.
          </h2>
          <p className="text-base font-light mt-5 max-w-md leading-relaxed"
            style={{ color: "rgba(255,255,255,0.38)" }}>
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-0"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                target={info.title === "Location" ? "_blank" : undefined}
                rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-5 py-6 group hover:pl-2 transition-all duration-300"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.28em] mb-0.5"
                    style={{ color: "rgba(255,255,255,0.28)" }}>{info.title}</p>
                  <p className="text-sm font-medium text-white">{info.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-10">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-5"
                style={{ color: "rgba(255,255,255,0.25)" }}>Follow me</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { href: "https://github.com/BomsG", label: "GitHub" },
                  { href: "https://www.linkedin.com/in/boma-george-03b961260/", label: "LinkedIn" },
                  { href: "https://twitter.com", label: "Twitter" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-black"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.35)" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 rounded-[2.5rem] p-10"
            style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h4 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Message Sent!</h4>
                <p className="font-light" style={{ color: "rgba(255,255,255,0.38)" }}>Thank you — I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[9px] font-black uppercase tracking-[0.28em] mb-3"
                        style={{ color: "rgba(255,255,255,0.3)" }}>{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={(formState as any)[field.name]}
                        onChange={handleChange}
                        required
                        placeholder={field.placeholder}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent py-3 px-0 text-white focus:outline-none text-sm font-light transition-all duration-300"
                        style={{
                          borderBottom: `2px solid ${borderColor(field.name)}`,
                          color: "rgba(255,255,255,0.85)",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {[
                  { name: "subject", label: "Subject", placeholder: "Project inquiry..." },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-[9px] font-black uppercase tracking-[0.28em] mb-3"
                      style={{ color: "rgba(255,255,255,0.3)" }}>{field.label}</label>
                    <input
                      type="text"
                      name={field.name}
                      value={(formState as any)[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent py-3 px-0 text-white focus:outline-none text-sm font-light transition-all duration-300"
                      style={{ borderBottom: `2px solid ${borderColor(field.name)}` }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[9px] font-black uppercase tracking-[0.28em] mb-3"
                    style={{ color: "rgba(255,255,255,0.3)" }}>Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent py-3 px-0 text-white focus:outline-none text-sm font-light resize-none transition-all duration-300"
                    style={{ borderBottom: `2px solid ${borderColor("message")}` }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                  className="w-full py-4 text-black text-[11px] font-black uppercase tracking-[0.22em] rounded-2xl flex items-center justify-center gap-3 transition-all duration-300"
                  style={{
                    background: isSubmitting ? "rgba(255,255,255,0.7)" : "#ffffff",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <RiMailSendFill size={16} /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
