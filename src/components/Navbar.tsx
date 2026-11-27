"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="nav-shell">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Home">
          K<span>.</span>S
        </Link>
        <div className="nav-links">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link className={active ? "nav-link active" : "nav-link"} href={link.href} key={link.href}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="download-button" href="/cv">
            <Download size={16} /> CV
          </Link>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
