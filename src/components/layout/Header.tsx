import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

// The desktop nav only ever links to in-page anchors (the dot rail is the real
// section nav there), so it renders plain <Link>s — no item is ever a route.
const navigation = [
  { name: "About", path: "/#about" },
  { name: "Experience", path: "/#experience" },
  { name: "Projects", path: "/#projects" },
  { name: "Skills", path: "/#skills" },
  { name: "Contact", path: "/#contact" },
] as const;

// Mobile has no dot nav to jump between sections, so its menu covers all of
// them plus a real route to /projects — the one entry that needs <NavLink>'s
// active-state styling rather than a plain in-page anchor.
const mobileNavigation = navigation.map((item) =>
  item.name === "Projects" ? { name: "Projects", path: "/projects" } : item,
);

const desktopClass = (isActive: boolean) =>
  `px-4 py-1.5 text-sm font-medium transition-colors ${
    isActive ? "text-accent-600" : "text-slate-400 hover:text-slate-100"
  }`;

const mobileClass = (isActive: boolean) =>
  `rounded px-3 py-2 text-base font-medium ${
    isActive ? "text-accent-600" : "text-slate-400 hover:text-slate-100"
  }`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent-600 focus:px-3 focus:py-1.5 focus:text-sm focus:text-slate-950"
      >
        Skip to main content
      </a>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <Link
          to="/"
          aria-label="Home"
          className="font-mono text-sm font-medium tracking-tight text-slate-100 hover:text-accent-600 transition-colors"
        >
          JP
          <span className="text-accent-600"> · </span>
          2026
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={desktopClass(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-800 text-slate-400 hover:text-slate-100 md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-800 bg-slate-950 px-6 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {mobileNavigation.map((item) =>
              item.path === "/projects" ? (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => mobileClass(isActive)}
                >
                  {item.name}
                </NavLink>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileClass(false)}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
