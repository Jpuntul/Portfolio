import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "About", path: "/#about", isRoute: false },
  { name: "Experience", path: "/#experience", isRoute: false },
  { name: "Projects", path: "/#projects", isRoute: false },
  { name: "Skills", path: "/#skills", isRoute: false },
  { name: "Contact", path: "/#contact", isRoute: false },
] as const;

// Mobile has no dot nav to jump between sections, so its menu covers all of them.
const mobileNavigation = [
  { name: "About", path: "/#about", isRoute: false },
  { name: "Experience", path: "/#experience", isRoute: false },
  { name: "Projects", path: "/projects", isRoute: true },
  { name: "Skills", path: "/#skills", isRoute: false },
  { name: "Contact", path: "/#contact", isRoute: false },
] as const;

const desktopClass = (isActive: boolean) =>
  `px-4 py-1.5 text-sm font-medium transition-colors ${
    isActive ? "text-accent-600" : "text-slate-400 hover:text-slate-100"
  }`;

const mobileClass = (isActive: boolean) =>
  `rounded px-3 py-2 text-base font-medium ${
    isActive ? "text-accent-600" : "text-slate-500 hover:text-slate-100"
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
          className="font-mono text-sm font-bold tracking-tight text-slate-100 hover:text-accent-600 transition-colors"
        >
          JP
          <span className="text-accent-600"> · </span>
          2026
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) =>
            item.isRoute ? (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => desktopClass(isActive)}
              >
                {item.name}
              </NavLink>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={desktopClass(false)}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-800 text-slate-500 hover:text-slate-100 md:hidden"
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
              item.isRoute ? (
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
