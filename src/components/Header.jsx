import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const mobileNavRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-200/80 dark:border-zinc-900/80 transition-colors duration-300">
      <header className="flex h-[72px] items-center justify-center px-6 md:px-16">
        <div className="flex w-full max-w-[1280px] items-center justify-between">
          <div className="flex items-start">
            <Link to="/" aria-label="Mohamed Amr — home">
              <div className="flex items-center gap-2">
                <div
                  className="w-[45px] h-[45px] rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background: "linear-gradient(to bottom, #999, #4d4d4d)",
                    boxShadow:
                      "inset 0px 4px 4px 0px rgba(255,255,255,0.5), inset 0px -4px 4px 0px rgba(77,77,77,0.2)",
                  }}
                >
                  MA
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-zinc-600 dark:text-zinc-400 transition-all duration-200 hover:text-black dark:hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-base text-zinc-600 dark:text-zinc-400 transition-all duration-200 hover:text-black dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center md:flex gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-gray-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FiSun className="size-5" />
              ) : (
                <FiMoon className="size-5" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FiSun className="size-5" />
              ) : (
                <FiMoon className="size-5" />
              )}
            </button>
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="p-3 transition-all duration-200 hover:scale-110 active:scale-95"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <FiX
                  className="size-6 text-[#4d4d4d] dark:text-zinc-400"
                  aria-hidden="true"
                />
              ) : (
                <FiMenu
                  className="size-6 text-[#4d4d4d] dark:text-zinc-400"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        ref={mobileNavRef}
        aria-hidden={!mobileOpen}
        className="absolute left-0 right-0 z-50 overflow-hidden border-b border-gray-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 shadow-lg md:hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "500px" : "0px",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-6 bg-white dark:bg-zinc-950">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-base text-zinc-600 dark:text-zinc-400 transition-all duration-200 hover:translate-x-0.5 hover:text-black dark:hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="py-3 text-base text-zinc-600 dark:text-zinc-400 transition-all duration-200 hover:translate-x-0.5 hover:text-black dark:hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
