import { useState, useEffect, useRef } from "react";
import matricImg from "../../images/matric-result-3.png";
import ministryImg from "../../images/ministry-6.png";
import mtricImg2 from "../../images/matric-result-4.png";
import matricImg3 from "../../images/matric-result-5.png";
import studentImg from "../../images/student-img.png";
import noImg from "../../images/no-img.png";
import ministry88 from "../../images/ministry-88.png";
import studentImg2 from "../../images/student-1.jpg";

const testimonials = [
  {
    id: 1,
    name: "Afomiya Tefera",
    school: "Cruise School",
    quote: "በ12ኛ ክፍል ፈተና ውጤቴ ላይ በጣም እፈራ ነበር። ነገር ግን በ Bright Home Tutor እገዛ ፍርሃቴን አሸንፌ በሀገር አቀፍ ፈተና ከፍተኛ ውጤት ማምጣት ቻልኩ። ለዚህ ስኬቴ ሁሉ ምስጋናዬ ለ Bright Home Tutor ነው!",
    image: matricImg3,
    score: "501",
    subject: "Matric",
  },
  {
    id: 2,
    name: "Yohana Tesfaye",
    school: "Safari School",
    quote: "Grade 11 was a challenging year, but with the help of Bright Home Tutor, I was able to achieve excellent results across all my subjects. The tutors were patient, supportive.",
    image: studentImg,
    score: "97",
    subject: "Avarage",
  },
  {
    id: 3,
    name: "Bonsa Mulugeta",
    school: "Mentor accademy",
    quote: "ልጄ በ8ኛ ክፍል ሚኒስትሪ ፈተና ጥሩ ውጤት ማምጣቱ በጣም ደስተኛ ነኝ። ይህን ስኬት ለማግኘት የ Bright Home Tutor አስተማሪዎች ትጋትና ትምህርታዊ ድጋፍ ትልቅ ሚና አጫውቷል። ለልጄ ወደፊት ጉዞ መሰረቱን አጠንክረውልን። ከልቤ አመሰግናለሁ!",
    image: ministryImg,
    score: "99.86",
    subject: "Ministry",
  },
  {
    id: 4,
    name: "Beka Mulugeta",
    school: "Safari School",
    quote: "We couldn't be happier with our child's performance in Grade 9! The improvement was remarkable, and they finished the year with excellent grades. Bright Home Tutor provided the support.",
    image: noImg,
    score: "92%",
    subject: "Avarage",
  },
  {
    id: 5,
    name: "Abel Negus",
    school: "St Mary's School",
    quote: "ልጄ በ8ኛ ክፍል ሚኒስትሪ ፈተና ያመጣው ውጤት በጣም አስደሰተኝ። ከመፈተኑ በፊት ብዙ ትጋት አሳይቶ ነበር ነገር ግን የ Bright Home Tutor ድጋፍ ለውጤቱ ቁልፍ ሚና ተጫውቷል።",
    image: ministry88,
    score: "95.75",
    subject: "Ministry",
  },
  {
    id: 6,
    name: "Arsema Bekele",
    school: "Young Roots School",
    quote: "My child is in Grade 9 and has shown such wonderful improvement since starting with Bright Home Tutor. Their reading and math skills have grown so much, and more importantly, they now enjoy learning. ",
    image: studentImg2,
    score: "90+",
    subject: "All subjects",
  }
];

export default function TestimonialCarousel() {
  const [progress, setProgress] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef(performance.now());

  useEffect(() => {
    const speed = 0.007; // Slower speed for smoother flow
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Smooth easing for progress
      setProgress((prev) => {
        let newProgress = prev + speed * delta;
        // Keep progress in a reasonable range to prevent floating point issues
        if (newProgress > 10000) newProgress -= 10000;
        return newProgress;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Calculate visible cards based on window width
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 1;
      return 1; // Show one main card with smooth transitions
    }
    return 1;
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-yellow-50 overflow-hidden flex flex-col items-center">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-800">
          Results that speak{" "}
          <span className="text-yellow-600 italic">for themselves</span>
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-6xl flex justify-center items-center min-h-[520px]">
        {testimonials.map((t, i) => {
          const total = testimonials.length;
          
          // Get the current position with circular wrapping
          let pos = (i - progress / 180) % total;
          
          // Normalize position to [-total/2, total/2] range for circular behavior
          if (pos < -total / 2) pos += total;
          if (pos > total / 2) pos -= total;
          
          // Increased spacing between cards (from 420 to 520)
          const spacing = 520;
          const x = pos * spacing;
          
          // Dynamic scaling and opacity for smoother transitions
          const absPos = Math.abs(pos);
          const scale = absPos === 0 ? 1 : Math.max(0.7, 1 - absPos * 0.12);
          const opacity = absPos < 1.2 ? 1 : Math.max(0, 1 - (absPos - 0.8) * 0.8);
          
          // Blur effect for cards far from center
          const blur = absPos > 1 ? `${Math.min(4, (absPos - 1) * 3)}px` : "0px";
          
          // Z-index based on distance from center
          const zIndex = Math.floor(30 - absPos * 5);
          
          return (
            <div
              key={t.id}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${x}px) scale(${scale})`,
                opacity,
                filter: `blur(${blur})`,
                zIndex: zIndex,
                pointerEvents: absPos < 0.5 ? "auto" : "none",
              }}
            >
              <div className="w-[380px] md:w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                {/* IMAGE */}
                <div className="relative h-60">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40" />
                  
                  <div className="absolute top-4 right-4 bg-yellow-300 px-4 py-2 rounded-xl shadow-lg">
                    <p className="font-bold text-yellow-900 text-lg">{t.score}</p>
                    <p className="text-xs uppercase text-yellow-800 font-semibold">
                      {t.subject}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-semibold text-slate-800 text-lg">
                    {t.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">
                    {t.school}
                  </p>

                  <div className="text-yellow-400 mb-3 flex">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-slate-600 italic leading-relaxed text-xl">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => {
            const currentIndex = Math.round((progress / 180) % testimonials.length);
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                  // Snap to specific testimonial
                  const targetProgress = idx * 180;
                  setProgress(targetProgress);
                }}
                className={`transition-all duration-300 rounded-full ${
                  isActive 
                    ? "w-8 h-2 bg-yellow-500" 
                    : "w-2 h-2 bg-yellow-300 hover:bg-yellow-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
      
      {/* Optional: Navigation Arrows */}
      <div className="flex gap-4 mt-12">
        <button
          onClick={() => setProgress(prev => prev - 180)}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setProgress(prev => prev + 180)}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}