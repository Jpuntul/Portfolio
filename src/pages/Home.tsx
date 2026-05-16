import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Jutipong Puntuleng — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building backend systems, real-time apps, and developer tools. Concordia B.Eng. Software Engineering, 2026.",
  });
  return (
    <main id="main">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
