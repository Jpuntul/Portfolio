import { type FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolio";
import { FORM_TIMEOUT } from "../constants/ui";
import { usePageMeta } from "../hooks/usePageMeta";

type Status = "" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  usePageMeta({
    title: "Contact · Jutipong Puntuleng",
    description:
      "Get in touch. Available for full-time software engineering roles from August 2026.",
  });
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
          subject: form.subject,
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
    <main id="main">
      <section className="relative isolate overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[40vh] bg-gradient-to-b from-accent-50/60 to-transparent dark:from-accent-900/10" />

        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wider text-accent-700 dark:text-accent-400">
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Let&rsquo;s talk
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {personalInfo.availability}. Open to full-stack and backend-leaning
            roles in Montréal or Bangkok (or remote).
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              The fastest way to reach me
            </h2>
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactItem
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={personalInfo.location}
            />
            <ContactItem
              icon={<FaLinkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="linkedin.com/in/jpuntul"
              href={personalInfo.linkedin}
            />
            <ContactItem
              icon={<FaGithub className="h-4 w-4" />}
              label="GitHub"
              value="github.com/Jpuntul"
              href={personalInfo.github}
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-3 dark:border-slate-800 dark:bg-slate-900"
            aria-label="Contact form"
          >
            {status === "success" && (
              <p
                role="status"
                className="rounded-lg border border-accent-200 bg-accent-50 px-4 py-2 text-sm text-accent-800 dark:border-accent-700 dark:bg-accent-900/30 dark:text-accent-200"
              >
                Message sent — I&rsquo;ll reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-800 dark:border-red-800 dark:bg-red-900/30 dark:text-red-200"
              >
                Something went wrong. Try email at{" "}
                <a className="underline" href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
                .
              </p>
            )}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                autoComplete="name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                autoComplete="email"
              />
            </div>
            <Field
              id="subject"
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
            />
            <Field
              id="message"
              label="Message"
              multiline
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
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
      </section>
    </main>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 transition-colors dark:border-slate-800 dark:bg-slate-900">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block hover:[&>div]:border-accent-500"
    >
      {inner}
    </a>
  ) : (
    inner
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
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white";
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          required
          rows={5}
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
