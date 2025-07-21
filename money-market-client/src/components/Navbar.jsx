import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";

const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

function setTheme(theme) {
  if (theme === "system") {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.removeItem("theme");
  } else {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }
}

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return "system";
}

export default function Navbar() {
  const [theme, setThemeState] = useState(getInitialTheme());

  useEffect(() => {
    setTheme(theme);
    // Listen for system theme changes if "system" is selected
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => setTheme("system");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="flex items-center gap-4">
        {/* Theme Toggle Dropdown */}
        <div className="relative">
          <Button variant="outline" className="px-2" tabIndex={0}>
            <span className="sr-only">Toggle theme</span>
            {theme === "light" && <span>☀️</span>}
            {theme === "dark" && <span>🌙</span>}
            {theme === "system" && <span>💻</span>}
          </Button>
          <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border rounded shadow z-10">
            {themes.map((t) => (
              <button
                key={t.value}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === t.value ? "font-bold" : ""}`}
                onClick={() => setThemeState(t.value)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <Button variant="outline" asChild>
          <a href="/login">Sign In</a>
        </Button>
        <Button asChild>
          <a href="/register">Sign Up</a> 
        </Button>
      </div>
    </nav>
  );
}
