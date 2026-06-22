import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isHome || scrolled
          ? "border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
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
          className="font-mono text-sm font-bold tracking-tight text-slate-100 hover:text-accent-600 transition-colors"
        >
          JP
          <span className="text-accent-600"> · </span>
          2026
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent-600"
                    : "text-slate-400 hover:text-slate-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
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
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded px-3 py-2 text-base font-medium ${
                    isActive
                      ? "text-accent-600"
                      : "text-slate-500 hover:text-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
