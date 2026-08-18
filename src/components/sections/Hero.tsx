import { Link } from "react-router-dom";
import { personalInfo } from "../../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      data-snap-section
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-950"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Corner — top left */}
      <div className="absolute left-6 top-20 text-[11px] leading-relaxed text-slate-400 md:left-12 md:top-24">
        <span className="block">{personalInfo.title}</span>
        <span className="block">
          {personalInfo.university} · {personalInfo.graduated}
        </span>
      </div>

      {/* Corner — top right */}
      <div className="absolute right-6 top-20 text-right text-[11px] leading-relaxed text-slate-400 md:right-12 md:top-24">
        <span className="block">{personalInfo.location}</span>
        <span className="block">{personalInfo.citizenship}</span>
      </div>

      {/* Main name block */}
      <div className="text-center">
        <div className="relative inline-block px-8 py-6 md:px-14 md:py-8">
          {/* Outline — draws clockwise once on load, then breathes with a slow glow */}
          <div aria-hidden="true">
            <span className="hero-box-top pointer-events-none absolute left-0 top-0 h-px w-full bg-accent-600" />
            <span className="hero-box-right pointer-events-none absolute right-0 top-0 h-full w-px bg-accent-600" />
            <span className="hero-box-bottom pointer-events-none absolute bottom-0 left-0 h-px w-full bg-accent-600" />
            <span className="hero-box-left pointer-events-none absolute left-0 top-0 h-full w-px bg-accent-600" />
          </div>

          <h1
            className="font-extrabold leading-[0.88] tracking-[-0.06em] text-slate-100"
            style={{ fontSize: "clamp(56px, 11vw, 148px)" }}
          >
            JUTI
            <span className="text-accent-600">PONG</span>
            <br />
            PUN
            <span className="text-accent-600">TU</span>
            LENG
          </h1>
        </div>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 md:text-base">
          Full-Stack Engineer · Backend Systems · Real-time Apps
        </p>
      </div>

      {/* Bottom row */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span
            className="block h-1.5 w-1.5 rounded-full bg-accent-600"
            style={{ boxShadow: "0 0 6px #f8c000" }}
          />
          {personalInfo.availability}
        </div>

        <Link
          to="/projects"
          className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-accent-600"
        >
          View work ↓
        </Link>
      </div>
    </section>
  );
}
