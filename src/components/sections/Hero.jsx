import { useState, useEffect, useRef } from "react";

/* ─── LAMP SVG ICON ─────────────────────────────────── */
function LampIcon({ size = 18, color = "#FDE047" }) {
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

/* ─── ARROW ICON ────────────────────────────────────── */
function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── SLIDE DATA ─────────────────────────────────────── */
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=85",
    eyebrow: "ከ 100 በላየ አስጠኝዎች! ",
    headline: ["የልጅዎ የትምህርት ብርሃን", "ብሩህ አስጠኝዎች!"],
    sub: "ልጅዎ በትምህርቱ የላቀ ውጤት እንዲያስመዘግብ እና በራስ የመተማመን መንፈሱ እንዲዳብር አስፈላኒውን ቅድመ ሁኔታ አዘጋጅተን እየጠበቅንዎት ነው።",
    cta: "አሁኑኑ ይደውሉልን",
    ctaSecondary: "Contact Us",
    ctaSecondaryHref: "#contact",
  },
  
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=85",
    eyebrow: "Personalised Learning at Home",
    headline: ["Unlock Every Child's", "Brightest Potential"],
    sub: "Expert tutors, flexible schedules, and proven methods — all delivered to your doorstep.",
    cta: "​09-91-21-26-49",
    ctaSecondary: "Call us",
    ctaSecondaryHref: "#Contact",
  },

  {
    id: 3,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=85",
    eyebrow: "Grades K–12 · All Subjects",
    headline: ["በስነ-ምግባር እና በ እውቀት ", "የታነጹ አስተማሪዎች!"],
    sub: "በእኛ የሰለጠኑ፣ በስነ-ምግባር የታነጹ እና የብዙ ዓመታት የማስተማር ልምድ ያላቸውን ብቁ መምህራን ከተማሪ ወላጆች ጋር እናገናኛለን።.",
    cta: "አስተማሪዎች ያግኙ",
    ctaSecondary: "Get teachers",
    ctaSecondaryHref: "#contact",
  },
  
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=85",
    eyebrow: "University Prep & Test Coaching",
    headline: ["Results You Can", "See & Measure"],
    sub: "Track progress weekly with detailed reports and direct tutor communication.",
    cta: "Contact Us",
    ctaSecondary: "Call us",
    ctaSecondaryHref: "#Contact",
  },
];

/* ══════════════════════════════════════════════════════
   HERO SECTION
══════════════════════════════════════════════════════ */
export default function HeroSection() {
  const [cur, setCur] = useState(0);
  const [ctaHov, setCtaHov] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCur(c => (c + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer.current);
  }, []);

  const s = heroSlides[cur];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
      }}
    >
      {/* ── SLIDE BACKGROUNDS ───────────────────────────── */}
      {heroSlides.map((sl, i) => (
        <div
          key={sl.id}
          style={{
            position: "absolute", inset: 0,
            opacity: i === cur ? 1 : 0,
            zIndex: i === cur ? 1 : 0,
            transition: "opacity 1.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Photo */}
          <div
            style={{
              position: "absolute", inset: 0,
              backgroundImage: `url(${sl.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: i === cur ? "scale(1.06)" : "scale(1)",
              transition: "transform 7s ease",
            }}
          />
          {/* Dark overlay — multi-layer */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,15,30,0.85) 0%, rgba(5,15,30,0.58) 55%, rgba(5,15,30,0.35) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,15,30,0.7) 0%, transparent 40%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,15,30,0.2) 0%, transparent 50%)" }} />
        </div>
      ))}

      {/* ── AMBIENT YELLOW GLOW ─────────────────────────── */}
      <div
        style={{
          position: "absolute", zIndex: 2,
          top: "42%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "min(860px, 90vw)", height: 520,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(253,224,71,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
          filter: "blur(2px)",
        }}
      />

      {/* ── MAIN CONTENT ────────────────────────────────── */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 3,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center",
          padding: "0 clamp(20px,5vw,80px)",
        }}
      >
        {/* Eyebrow badge */}
        <div
          key={`eyebrow-${cur}`}
          style={{
            display: "inline-flex", alignItems: "center", gap: 9,
            border: "1px solid rgba(253,224,71,0.35)",
            background: "rgba(253,224,71,0.07)",
            backdropFilter: "blur(10px)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 28,
            animation: "hFadeUp 0.7s ease both",
          }}
        >
          <LampIcon size={16} color="#FDE047" />
          <span style={{
            color: "#FDE047",
            fontSize: "clamp(0.62rem, 1.2vw, 0.75rem)",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}>
            {s.eyebrow}
          </span>
          <span style={{
            width: 5, height: 5, borderRadius: "50%",
            background: "#FDE047", opacity: 0.65,
            animation: "pulseDot 2.2s ease-in-out infinite",
          }} />
        </div>

        {/* Headline */}
        <h1
          key={`h1-${cur}`}
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(2.6rem, 6.5vw, 5.6rem)",
            color: "#fff",
            lineHeight: 1.08,
            marginBottom: 22,
            animation: "hFadeUp 0.75s 0.08s ease both",
            maxWidth: 900,
          }}
        >
          {s.headline[0]}
          <br />
          <em style={{ color: "#FDE047", fontStyle: "italic", fontWeight: 400 }}>
            {s.headline[1]}
          </em>
        </h1>

        {/* Sub text */}
        <p
          key={`sub-${cur}`}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 300,
            maxWidth: 560,
            lineHeight: 1.78,
            marginBottom: 48,
            animation: "hFadeUp 0.75s 0.16s ease both",
          }}
        >
          {s.sub}
        </p>

        {/* CTA BUTTONS */}
        <div
          key={`cta-${cur}`}
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
            animation: "hFadeUp 0.75s 0.24s ease both",
          }}
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            onMouseEnter={() => setCtaHov("primary")}
            onMouseLeave={() => setCtaHov(null)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: ctaHov === "primary"
                ? "linear-gradient(135deg,#FCD34D,#FDE047)"
                : "linear-gradient(135deg,#FDE047,#FACC15)",
              color: "#713F12",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
              letterSpacing: "0.04em",
              padding: "15px clamp(24px,3vw,40px)",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: ctaHov === "primary"
                ? "0 10px 36px rgba(253,224,71,0.6), 0 0 0 3px rgba(253,224,71,0.2)"
                : "0 6px 24px rgba(253,224,71,0.42)",
              transform: ctaHov === "primary" ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
              transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <LampIcon size={15} color="#713F12" />
            {s.cta}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 22, height: 22,
                borderRadius: "50%",
                background: "rgba(113,63,18,0.15)",
                transform: ctaHov === "primary" ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.25s ease",
              }}
            >
              <ArrowRight size={12} />
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href={s.ctaSecondaryHref || "#services"}
            onMouseEnter={() => setCtaHov("secondary")}
            onMouseLeave={() => setCtaHov(null)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: ctaHov === "secondary"
                ? "1.5px solid rgba(255,255,255,0.7)"
                : "1.5px solid rgba(255,255,255,0.32)",
              background: ctaHov === "secondary"
                ? "rgba(255,255,255,0.14)"
                : "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              fontWeight: 500,
              fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
              letterSpacing: "0.04em",
              padding: "15px clamp(24px,3vw,40px)",
              borderRadius: 999,
              textDecoration: "none",
              transform: ctaHov === "secondary" ? "translateY(-3px)" : "translateY(0)",
              transition: "all 0.25s ease",
            }}
          >
            {s.ctaSecondary}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 22, height: 22,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                transform: ctaHov === "secondary" ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.25s ease",
              }}
            >
              <ArrowRight size={12} />
            </span>
          </a>
        </div>
      </div>

      {/* ── KEYFRAMES ────────────────────────────────────── */}
      <style>{`
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.35); }
        }
      `}</style>
    </section>
  );
}