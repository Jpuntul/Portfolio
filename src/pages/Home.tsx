import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import { usePageMeta } from "../hooks/usePageMeta";

// One list drives both the sections and the dot rail, so they cannot drift.
const SECTIONS = [Hero, About, Experience, Projects, Skills, Contact];

export default function Home() {
  usePageMeta({
    title: "Jutipong Puntuleng — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building backend systems, real-time apps, and developer tools. Concordia B.Eng. Software Engineering, 2026.",
  });

  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Section dot indicators
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const sections = main.querySelectorAll<HTMLElement>("[data-snap-section]");
    const dots = dotsRef.current?.querySelectorAll<HTMLElement>("[data-dot]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.querySelector("[data-reveal]")?.classList.add("in");
          }
        }

        // A fast flick can batch several transitions into one callback, and
        // entries have no ordering guarantee — pick the most-visible section
        // rather than letting whichever came last win.
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!active) return;

        const idx = Array.prototype.indexOf.call(sections, active.target);
        dots?.forEach((dot, i) => {
          dot.classList.toggle("bg-accent-600", i === idx);
          dot.classList.toggle("bg-slate-500", i !== idx);
        });
      },
      // The 0 entry matters: a section taller than ~6.67x the container never
      // reaches 0.15, and a reveal that depends on a threshold the element
      // cannot reach is a blank screen. 0 fires on any intersection at all.
      { root: main, threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));

    // Opt in to the hidden-then-reveal treatment only once the observer exists
    // and is watching. Sections are readable by default, so no-JS, a missing
    // IntersectionObserver, or a throw above all degrade to "visible" rather
    // than "blank" — which only holds if this runs last.
    main.classList.add("js-reveal");

    return () => {
      observer.disconnect();
      main.classList.remove("js-reveal");
    };
  }, []);

  // Deep-links (nav clicks, old /about and /contact bookmarks) land on the right section.
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    el?.scrollIntoView({ block: "start" });
  }, [location.hash]);

  return (
    <>
      {/* Dot nav — fixed to viewport */}
      <div
        ref={dotsRef}
        className="fixed right-6 top-1/2 z-40 -translate-y-1/2 hidden md:flex flex-col gap-2"
        aria-hidden="true"
      >
        {SECTIONS.map((_, i) => (
          <span
            key={i}
            data-dot
            className={`block h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              i === 0 ? "bg-accent-600" : "bg-slate-500"
            }`}
          />
        ))}
      </div>

      <main
        id="main"
        ref={mainRef}
        // The skip link targets this. Without tabIndex it only moves the
        // sequential-navigation start point, and browsers disagree about whether
        // a scroll container is focusable at all.
        tabIndex={-1}
        className="h-dvh snap-y snap-proximity overflow-y-scroll focus:outline-none md:snap-mandatory"
      >
        {SECTIONS.map((Section, i) => (
          <Section key={i} />
        ))}
      </main>
    </>
  );
}
