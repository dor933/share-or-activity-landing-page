import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <svg viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
            <path d="M20 10L28 16V28H12V16L20 10Z" fill="white" opacity="0.9" />
            <path d="M17 22H23V28H17V22Z" fill="url(#logoGrad)" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#e91e8c" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>
          <span>מרכז טובה נר</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>למה המשחק</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>איך משחקים</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>המלצות</a></li>
          <li><a href="#cta" className="navbar-cta" onClick={() => setMenuOpen(false)}>להזמנה</a></li>
        </ul>

        <button className="mobile-menu-btn" aria-label="תפריט" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
