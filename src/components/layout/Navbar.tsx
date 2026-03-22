import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img
            src="/tova_ner_center.png"
            alt="מרכז טובה נר"
            className="navbar-logo-img"
          />
        </a>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              למה המשחק
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              איך משחקים
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              המלצות
            </a>
          </li>
          <li>
            <a
              href="https://private.invoice4u.co.il/newsite/he/clearing/public/i4u-clearing?ProductGuid=3eee5fd4-0be7-4ed8-8a84-81a219eb3d8d"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
              onClick={() => setMenuOpen(false)}
            >
              להזמנה
            </a>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          aria-label="תפריט"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
