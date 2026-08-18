import { type FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../../data/portfolio";
import { FORM_TIMEOUT, SECTION_REVEAL } from "../../constants/ui";

type Status = "" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not set.");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: personalInfo.name,
        },
        publicKey,
      );
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      if (import.meta.env.DEV) console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(""), FORM_TIMEOUT);
    }
  };

  return (
    <section
      id="contact"
      data-snap-section
      className="flex h-screen flex-col justify-center border-t border-slate-800 bg-slate-950 px-8 py-16 md:px-16"
      style={{ scrollSnapAlign: "start" }}
    >
      <motion.div {...SECTION_REVEAL} className="mx-auto w-full max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <p className="mb-1 text-[80px] font-black leading-none tracking-tighter text-slate-900 select-none">
              05
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
              Let&rsquo;s talk
            </h2>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-400">
              {personalInfo.availability}. Open to full-stack and
              backend-leaning roles in {personalInfo.location}.
            </p>

            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-300 transition-colors hover:text-accent-600"
              >
                <Mail className="h-4 w-4 text-slate-600" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-slate-300 transition-colors hover:text-accent-600"
              >
                <Phone className="h-4 w-4 text-slate-600" />
                {personalInfo.phone}
              </a>
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-slate-600" />
                {personalInfo.location}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition-colors hover:text-accent-600"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors hover:text-accent-600"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-4"
            aria-label="Contact form"
          >
            {status === "success" && (
              <p
                role="status"
                className="border border-accent-700 bg-accent-900/20 px-4 py-2 text-sm text-accent-300"
              >
                Message sent — I&rsquo;ll reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="border border-red-800 bg-red-900/20 px-4 py-2 text-sm text-red-300"
              >
                Something went wrong. Try email at{" "}
                <a className="underline" href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
                .
              </p>
            )}

            <Field
              id="contact-name"
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              autoComplete="name"
            />
            <Field
              id="contact-email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              autoComplete="email"
            />
            <Field
              id="contact-message"
              label="Message"
              multiline
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex w-fit items-center justify-center gap-2 border border-accent-600 px-5 py-2.5 text-sm font-semibold text-accent-600 transition-colors hover:bg-accent-600 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-600 border-t-transparent" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  multiline,
  autoComplete,
}: FieldProps) {
  const cls =
    "w-full rounded border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500/40";
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-[11px] font-medium uppercase tracking-wider text-slate-500"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          required
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${cls} resize-y`}
        />
      ) : (
        <input
          id={id}
          required
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
    </div>
  );
}
