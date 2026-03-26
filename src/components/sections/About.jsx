import { useState, useEffect, useRef } from "react";
import img1 from "../../images/student-1.jpg";
import img2 from "../../images/teacher-img.webp";

/* ─── CHECK ICON ─────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#FDE047" />
      <polyline
        points="4.5,9 7.5,12 13.5,6"
        fill="none"
        stroke="#713F12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── QUOTE ICON ─────────────────────────────────────── */
function QuoteIcon({ size = 40, color = "#FEF3C7" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M6 28 C6 22 10 16 17 13 L18.5 15.5 C15 17 13 19.5 13 22 C13 22.5 13.1 23 13.3 23.4 C13.8 23.1 14.5 23 15 23 C17.8 23 20 25.2 20 28 C20 30.8 17.8 33 15 33 C11.1 33 6 30.5 6 28Z"
        fill={color}
      />
      <path
        d="M22 28 C22 22 26 16 33 13 L34.5 15.5 C31 17 29 19.5 29 22 C29 22.5 29.1 23 29.3 23.4 C29.8 23.1 30.5 23 31 23 C33.8 23 36 25.2 36 28 C36 30.8 33.8 33 31 33 C27.1 33 22 30.5 22 28Z"
        fill={color}
      />
    </svg>
  );
}

/* ─── LAMP ICON ──────────────────────────────────────── */
function LampIcon({ size = 20, color = "#CA8A04" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 2L15 2L18 9H6L9 2Z" fill={color} opacity="0.9" />
      <rect x="11" y="9" width="2" height="7" fill={color} opacity="0.7" />
      <rect x="9" y="16" width="6" height="1.5" rx="0.75" fill={color} />
      <path d="M12 9 Q8 11 7 14 Q9 13 12 13 Q15 13 17 14 Q16 11 12 9Z" fill={color} opacity="0.3" />
    </svg>
  );
}

/* ─── USE INTERSECTION OBSERVER ─────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── DATA ───────────────────────────────────────────── */
const features = [
  "ባለሙያ መምህራን፦ በየዘርፋቸው ውጤታማ እና ረጅም ልምድ ያላቸው።",
  "Personalised learning plans for every student",
  "ግላዊ ክትትል፦ የተማሪውን ደካማ ጎን ለይቶ የሚያጠናክር ስልት።",
  "One-on-one undivided attention",
  "ታማኝነት፦ በወላጆች ዘንድ ተመራጭ የሚያደርገን ጥራት ያለው አገልግሎት።",
  "All subjects, all grade levels K–12 and university prep",
  "ምቾት፦ ለተማሪው እና ለወላጆች በሚመች ሰዓትና ቦታ።"
];

const stats = [
  { value: "2,000+", label: "ተማሪዎች", suffix: "" },
  { value: "10+", label: "ልምድ", suffix: "" },
  { value: "98%", label: "Satisfaction Rate", suffix: "" },
  { value: "150+", label: "Expert Tutors", suffix: "" },
];



/* ══════════════════════════════════════════════════════
   ABOUT SECTION
══════════════════════════════════════════════════════ */
export default function AboutSection() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [hovStat, setHovStat] = useState(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "108px 24px",
        background: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Subtle decorative bg circles ── */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(253,224,71,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(253,224,71,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── SECTION LABEL ── */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 10,
            marginBottom: 64,
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ height: 1, width: 40, background: "#FDE047" }} />
          <span style={{
            color: "#CA8A04", fontSize: "0.9rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
          }}>About Us</span>
        </div>

        {/* ══ MAIN GRID ══ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px 80px",
          alignItems: "start",
        }} className="about-grid">

          {/* ── LEFT: TEXT + FEATURES ── */}
          <div
            style={{
              opacity: sectionInView ? 1 : 0,
              transform: sectionInView ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s 0.1s ease, transform 0.7s 0.1s ease",
            }}
          >
            

            {/* Body copy */}
            <p style={{
              color: "black", fontSize: "1.4rem", lineHeight: 1.82,
              marginBottom: 16,
            }}>
              <span className="text-amber-400 text-3xl text-bold">ብሩህ አስጠኚዎች ድርጅት</span>ብሩህ አስጠኚዎች ድርጅት በአዲስ አበባ የቤት ለቤት እና ኦንላይን የማስጠናት አገልግሎት የሚሰጥ ድርጅት ሲሆን በመምህራን አና ከዩኒቨርስቲ በጥሩ ዉጤት በተመረቁ ወጣቶች ለሁለት አመታት የተማሪዎችን ውጤት በማሻሻል ብዙ ስራዎችን ሰርተናል.ለብሄራዊ ተፈታኞች ልዩ ትኩረት መስጠታችን እና ከወላጆች ጋር አንድ ላይ መስራታችን ልዩ 𝒚ደርገናል.

            አስጠኚዎቻችን በደንብ የሰለጠኑ ብቻ ሳይሆን ተማሪዎች እንዲያድጉ ለማስተማር እና ለመርዳት ጥልቅ ፍቅር ያላቸው ናቸው። ከእያንዳንዱ ተማሪ ጋር ለመገናኘት ጊዜ ይወስዳሉ እና ደረጃ በደረጃ ይደግፏቸዋል።

            <br></br>
            <br></br>

            መማርን ቀላል እና የበለጠ ውጤታማ ለማድረግ የታመኑ የማስተማር ዘዴዎችን ከዘመናዊ መሳሪያዎች ጋር እንጠቀማለን። ይህ ተማሪዎች ትምህርታቸውን እንዲቀጥሉ ብቻ ሳይሆን በልበ ሙሉነት ወደፊት እንዲራመዱ እና በጊዜ ሂደት ስኬታማ እንዲሆኑ ይረዳል።
            </p>

            {/* Feature checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
              {features.map((f, i) => (
                <div
                  key={f}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    opacity: sectionInView ? 1 : 0,
                    transform: sectionInView ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.5s ${0.2 + i * 0.07}s ease, transform 0.5s ${0.2 + i * 0.07}s ease`,
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <CheckIcon />
                  </div>
                  <span style={{ color: "#334155", fontSize: "1.2rem", fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  background: "linear-gradient(135deg,#FDE047,#FACC15)",
                  color: "#713F12", fontWeight: 700, fontSize: "0.9rem",
                  padding: "13px 28px", borderRadius: 999,
                  textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(250,204,21,0.4)",
                  transition: "all 0.22s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(250,204,21,0.6)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "0 4px 18px rgba(250,204,21,0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <LampIcon size={15} color="#713F12" />
                Contact Us
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: "#475569", fontSize: "0.9rem", fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#CA8A04"}
                onMouseLeave={e => e.currentTarget.style.color = "#475569"}
              >
                Email Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: STATS + PULL QUOTE ── */}
          <div
            style={{
              opacity: sectionInView ? 1 : 0,
              transform: sectionInView ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s 0.2s ease, transform 0.7s 0.2s ease",
            }}
          >
            {/* Stats 2×2 grid */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 16, marginBottom: 28,
            }}>
              {stats.map((st, i) => (
                <div
                  key={st.label}
                  onMouseEnter={() => setHovStat(i)}
                  onMouseLeave={() => setHovStat(null)}
                  style={{
                    background: hovStat === i
                      ? "linear-gradient(135deg,#FDE047,#FEF3C7)"
                      : i % 2 === 0 ? "#FFFBEB" : "#fff",
                    border: `1.5px solid ${hovStat === i ? "#FDE047" : i % 2 === 0 ? "#FEF3C7" : "#F1F5F9"}`,
                    borderRadius: 20,
                    padding: "28px 24px",
                    textAlign: "center",
                    boxShadow: hovStat === i
                      ? "0 12px 36px rgba(253,224,71,0.22)"
                      : "0 2px 12px rgba(0,0,0,0.04)",
                    transform: hovStat === i ? "translateY(-4px)" : "translateY(0)",
                    transition: "all 0.3s cubic-bezier(0.34,1.4,0.64,1)",
                    cursor: "default",
                    opacity: sectionInView ? 1 : 0,
                    animationDelay: `${0.3 + i * 0.08}s`,
                  }}
                >
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
                    fontWeight: 700,
                    color: hovStat === i ? "#713F12" : "#1E293B",
                    lineHeight: 1,
                    marginBottom: 8,
                    transition: "color 0.3s",
                  }}>
                    {st.value}
                  </p>
                  <p style={{
                    color: hovStat === i ? "#92400E" : "#64748B",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    transition: "color 0.3s",
                  }}>
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Image collage */}
            <div style={{ position: "relative", height: 260, marginBottom: 28 }}>
              {/* Main image */}
              <img
                src={img1}
                alt="Tutoring session"
                style={{
                  position: "absolute", left: 0, top: 0,
                  width: "50%", height: "100%",
                  objectFit: "cover", objectPosition: "top",
                  borderRadius: 18,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  objectFit: "top",
                }}
              />
              {/* Secondary image */}
              <img
                    src={img2}
                    alt="Teacher helping student"
                style={{
                  position: "absolute", right: 0, bottom: 0,
                  width: "60%", height: "75%",
                  objectFit: "cover", objectPosition: "top",
                  borderRadius: 18,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  border: "4px solid #fff",
                }}
              />
              {/* Yellow accent badge */}
              <div style={{
                position: "absolute", top: 16, right: "34%",
                background: "#FDE047",
                borderRadius: 12, padding: "10px 14px",
                boxShadow: "0 6px 20px rgba(253,224,71,0.5)",
                zIndex: 5, textAlign: "center",
              }}>
                <p style={{ fontFamily: "Georgia,serif", fontSize: "1.3rem", fontWeight: 700, color: "#713F12", lineHeight: 1 }}>10+</p>
                <p style={{ color: "#92400E", fontSize: "0.62rem", fontWeight: 600, marginTop: 2, whiteSpace: "nowrap" }}>Yrs Experience</p>
              </div>
            </div>

            {/* Testimonial removed as requested */}
          </div>

        </div>
      </div>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}