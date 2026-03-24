import { useState, useEffect, useRef } from "react";
import kgImg from "../../images/kg-students.jpg";
import seniorImg from "../../images/high-school-students.webp";
import matricImg from "../../images/matric-exam.webp";
import univerityImg from "../../images/university-students.jpg";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const services = [
  {
    id: 1,
    number: "01",
    title: "KG – Grade 8",
    description:
      "From kindergarten through Grade 8, our tutors focus on core literacy, numeracy, and growing each child's confidence in the classroom from the base. based on the curriculum of ethiopian education system.",
    image:
      kgImg,
  },
  {
    id: 2,
    number: "02",
    title: "Grade 9 – 12",
    description:
      "Senior phase demands focus and depth. We help Grade 9–12 students master challenging subjects, manage their workload, and develop the study discipline needed for long-term academic success with personalized tutoring.",
    image:
      seniorImg,
  },
  {
    id: 3,
    number: "03",
    title: "Matric & Ministry Preparation",
    description:
      "We know that now a days there are few student who pass ethiopian national exam. We provide intensive,support to matric students, helping prepare for the national exams with confidence.",
    image:
      matricImg,
  },
  {
    id: 4,
    number: "04",
    title: "university & Adult Learning",
    description:
      "After grade 12 university freshmen can get a bit hard to adjust to the new academic demands. We offer tutoring for university students , providing support in a wide range of subjects to help them succeed in their studies.",
    image:
      univerityImg,
  },
];

export default function ServicesSection() {
  const [sectionRef, inView] = useInView(0.08);
  const [hov, setHov] = useState(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-6 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-yellow-300 rounded" />
            <span className="text-yellow-600 text-xs font-bold tracking-[0.2em] uppercase">
              Our Services
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light text-slate-800 leading-tight">
            A programme for every stage
            <br />
            <em className="text-yellow-600">
              of your child's journey
            </em>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300
              ${hov === i ? "shadow-2xl -translate-y-2" : "shadow-md"}
              ${inView ? "opacity-100" : "opacity-0"}
              `}
            >
              {/* IMAGE (top half) - taller on desktop */}
              <div
                className={`flex-shrink-0 w-full aspect-[2/1] lg:aspect-[4/3] bg-cover bg-top transition-transform duration-700 ${
                  hov === i ? "scale-105" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${s.image})` }}
              />

              {/* CONTENT (bottom half) */}
              <div className="flex flex-col justify-end flex-1 p-6 bg-slate-900/95 text-white relative">
                {/* TOP ACCENT */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-yellow-300 transition-opacity duration-300 ${
                    hov === i ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span className="text-yellow-300/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  {s.number}
                </span>
                <h3 className="font-serif text-2xl font-bold leading-tight mb-4 whitespace-pre-line">
                  {s.title}
                </h3>
                <div
                  className={`h-[3px] bg-yellow-300 rounded mb-4 transition-all duration-300 ${
                    hov === i ? "w-14" : "w-8"
                  }`}
                />
                <p className="text-sm md:text-base leading-relaxed text-white/90 font-medium">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}