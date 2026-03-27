import { useState, useEffect, useRef } from "react";
import logo from "../../images/bright-logo-new.png";

/* ─── LAMP SVG ICON ─────────────────────────────────── */
function LampIcon({ size = 22, color = "#713F12" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 2L15 2L18 9H6L9 2Z" fill={color} opacity="0.95" />
      <rect x="11" y="9" width="2" height="7" fill={color} opacity="0.75" />
      <rect x="9" y="16" width="6" height="1.5" rx="0.75" fill={color} />
      <path d="M12 9 Q8 11 7 14 Q9 13 12 13 Q15 13 17 14 Q16 11 12 9Z" fill={color} opacity="0.3" />
      <line x1="12" y1="1" x2="12" y2="0.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="17" y1="3" x2="17.7" y2="2.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="7" y1="3" x2="6.3" y2="2.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Subjects", href: "#subjects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled: scrolledProp }) {
  const [scrolled, setScrolled] = useState(scrolledProp ?? false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);
  const drawerRef = useRef(null);

  /* ── scroll tracking ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section tracking ── */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveLink(`#${e.target.id}`); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);                                                          

  /* ── lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── close drawer on outside click ── */
  useEffect(() => {
    const handler = e => {
      if (menuOpen && drawerRef.current && !drawerRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const isActive = href => activeLink === href;

  return (
    <>
      {/*   MAIN NAV*/}
      <nav
        className="fixed left-0 right-0 z-50 transition-all duration-500"
        style={{
          top: scrolled ? 0 : 10,
          padding: scrolled ? "6px 0" : "10px 0",
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.05)" : "none",
        }}
      >

        <div className=" navbars max-w-7xl mx-auto px-6 flex items-center justify-between gap-3 w-full">
          {/* LOGO + PHONE (LEFT) */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <div style={{
              width: 100,
              height: 80,
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img src={logo} alt="Bright Tutore Logo" style={{ width: 180, height: 80, objectFit: 'cover', background: 'transparent', borderRadius: '12px' }} />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span
                className="font-semibold tracking-tight navbar-logo-text"
                style={{
                  fontFamily: 'Georgia,serif',
                  fontSize: '1.6rem',
                  color: scrolled ? '#1E293B' : '#fff',
                  letterSpacing: '0.01em',
                }}
              >
                Bright Home <span style={{ color: '#FDE047' }}>Tutors</span>
              </span>
              
            </div>
          </div>

          {/* NAV LINKS (RIGHT, desktop only) */}
          <ul className="hidden lg:flex items-center gap-2 ml-auto">
            {navLinks.map(link => (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative flex items-center px-3 py-2 rounded-lg transition-all duration-200"
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: isActive(link.href)
                      ? "#CA8A04"
                      : scrolled
                      ? hoveredLink === link.href ? "#CA8A04" : "#475569"
                      : hoveredLink === link.href ? "#FDE047" : "rgba(255,255,255,0.82)",
                    background: hoveredLink === link.href
                      ? scrolled ? "rgba(253,224,71,0.1)" : "rgba(255,255,255,0.08)"
                      : "transparent",
                  }}
                >
                  {link.label}
                  {/* Active dot indicator */}
                  {isActive(link.href) && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 rounded-full"
                      style={{ width: 4, height: 4, background: "#FDE047" }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* PHONE BUTTON (desktop only, right) */}
          <a href="tel:+442079460000" className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ml-4" style={{ background: 'linear-gradient(135deg,#FDE047,#FACC15)', color: '#713F12', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 3px 14px rgba(250,204,21,0.18)', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FDE047"/><path fill="#713F12" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
            <span>0991212649</span>
          </a>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl transition-all duration-200"
            style={{
              background: menuOpen ? "#FEF9C3" : scrolled ? "#F8FAFC" : "rgba(255,255,255,0.12)",
              border: `1.5px solid ${menuOpen ? "#FDE047" : scrolled ? "#E2E8F0" : "rgba(255,255,255,0.2)"}`,
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-[5px]">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="block rounded-full transition-all duration-300 origin-center"
                  style={{
                    width: 18, height: 2,
                    background: menuOpen ? "#CA8A04" : scrolled ? "#1E293B" : "#fff",
                    transform: menuOpen
                      ? i === 0 ? "translateY(7px) rotate(45deg)"
                      : i === 2 ? "translateY(-7px) rotate(-45deg)"
                      : "scaleX(0)"
                      : "scaleX(1)",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* ── SCROLLED PROGRESS BAR ── */}
        <div
          className="absolute bottom-0 left-0 h-px transition-opacity duration-300"
          style={{
            width: "100%",
            background: "linear-gradient(90deg, transparent, #FDE047 30%, #FDE047 70%, transparent)",
            opacity: scrolled ? 0.4 : 0,
          }}
        />
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE OVERLAY BACKDROP
      ══════════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-400"
        style={{
          background: "rgba(15,23,42,0.5)",
          backdropFilter: menuOpen ? "blur(4px)" : "none",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ══════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════ */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
        style={{
          width: "min(360px, 88vw)",
          background: "#fff",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: menuOpen ? "-8px 0 48px rgba(0,0,0,0.15)" : "none",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5 flex-shrink-0"
          style={{ borderBottom: "1px solid #F1F5F9" }}
        >
          <div className="flex items-center gap-3">
            
            <span style={{ fontFamily: "Georgia,serif", fontSize: "2rem", fontWeight: 600, color: "#1E293B" }}>
              Bright Home <span style={{ color: "#CA8A04" }}>Tutors</span>
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#64748B", fontSize: "1.1rem" }}
            onMouseEnter={e => e.currentTarget.style.background = "#FEF9C3"}
            onMouseLeave={e => e.currentTarget.style.background = "#F8FAFC"}
          >✕</button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-4 py-4 overflow-y-auto">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 mb-1 transition-all duration-200"
              style={{
                textDecoration: "none",
                background: isActive(link.href) ? "#FFFBEB" : "transparent",
                border: `1px solid ${isActive(link.href) ? "#FDE047" : "transparent"}`,
                color: isActive(link.href) ? "#CA8A04" : "#1E293B",
                fontWeight: isActive(link.href) ? 600 : 500,
                fontSize: "0.95rem",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.3s ${i * 0.05 + 0.1}s ease, transform 0.3s ${i * 0.05 + 0.1}s ease, background 0.2s, color 0.2s`,
              }}
              onMouseEnter={e => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.background = "#FFFBEB";
                  e.currentTarget.style.color = "#CA8A04";
                }
              }}
              onMouseLeave={e => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1E293B";
                }
              }}
            >
              <span>{link.label}</span>
              {isActive(link.href) ? (
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#FDE047" }}
                />
              ) : (
                <span style={{ color: "#CBD5E1", fontSize: "0.85rem" }}>→</span>
              )}
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="flex-shrink-0 px-4 pb-6 pt-2" style={{ borderTop: "1px solid #F1F5F9" }}>
          {/* Phone */}
          <a
            href="tel:0991212649"
            className="flex items-center gap-3 px-4 py-3 rounded-xl mb-3 transition-colors"
            style={{
              textDecoration: "none",
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              color: "#475569",
              fontSize: "0.88rem",
              fontWeight: 500,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#FFFBEB"; e.currentTarget.style.borderColor = "#FDE047"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#E2E8F0"; }}
          >
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
              style={{ background: "#FEF9C3" }}
            >📞</span>
            <div>
              <div style={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Call us</div>
              <div style={{ color: "#1E293B", fontWeight: 600 }}>09 91 21 26 49</div>
            </div>
          </a>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full font-bold rounded-2xl transition-all duration-200"
            style={{
              background: "linear-gradient(135deg,#FDE047,#FACC15)",
              color: "#713F12",
              padding: "15px",
              textDecoration: "none",
              fontSize: "0.95rem",
              boxShadow: "0 4px 16px rgba(250,204,21,0.4)",
            }}
          >
            <LampIcon size={16} color="#713F12" />
            Contact us
          </a>
          <p className="text-center mt-2" style={{ color: "#94A3B8", fontSize: "0.72rem" }}>
            No commitment · Response within 24 hrs
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .navbar-logo-text {
            font-size: 1.4rem !important;
          }
          .navbars{
          gap: 2
          }
        }
        @media (min-width: 1024px) {
          .lg\\:hidden { display: none !important; }
        }
        @media (max-width: 1023px) {
          .lg\\:flex { display: none !important; }
          .hidden.lg\\:flex { display: none !important; }
        }
      `}</style>
    </>
  );
}