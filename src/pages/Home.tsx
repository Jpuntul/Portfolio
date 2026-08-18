import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import { usePageMeta } from "../hooks/usePageMeta";

const SECTION_COUNT = 6;

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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(
              entry.target as HTMLElement,
            );
            dots?.forEach((dot, i) => {
              dot.style.background = i === idx ? "#f8c000" : "#0c1428";
            });
          }
        });
      },
      { root: main, threshold: 0.5 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
        {Array.from({ length: SECTION_COUNT }, (_, i) => (
          <span
            key={i}
            data-dot
            style={{ background: i === 0 ? "#f8c000" : "#0c1428" }}
            className="block h-1.5 w-1.5 rounded-full transition-all duration-300"
          />
        ))}
      </div>

      <main
        id="main"
        ref={mainRef}
        className="h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
