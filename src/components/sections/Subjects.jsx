import { useState } from "react";
import mathImg from "../../images/maths.png";
import physicsImg from "../../images/physics.webp";
import englishImg from "../../images/english.png";
import biologyImg from "../../images/biology.png";
import amharicImg from "../../images/amharic.png";
import chemistryImg from "../../images/chemistry.webp";
import scienceImg from "../../images/science.webp";
import moreImg from "../../images/more.webp";
const subjects = [
  {
    name: "Mathematics",
    img: mathImg,
    desc: "from KG - grade 12",
  },
  {
    name: "Physics",
    img: physicsImg,
    desc: "from grade 7- grade 12",
  },
  {
    name: "English",
    img: englishImg,
    desc: "From KG - grade 12",
  },
  {
    name: "Biology",
    img: biologyImg,
    desc: "from grade 7 - grade 12",
  },
  {
    name: "Amharic",
    img: amharicImg,
    desc: "From KG - grade 12",
  },
  {
    name: "Chemistry",
    img: chemistryImg,
    desc: "from grade 7 - grade 12",
  },
  {
    name: "Science",
    img: scienceImg,
    desc: "From KG - grade 6",
  },
  {
    name: "More Subjects",
    img: moreImg,
    desc: "And many more subjects ",
  },
];

export default function Subjects() {
  const [hov, setHov] = useState(null);

  return (
    <section id="subjects" className="py-20 md:py-28 px-4 md:px-6 bg-yellow-50">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-yellow-600 text-xs font-bold tracking-[0.22em] uppercase mb-3">
            Our Subjects
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 font-serif">
            We teach{" "}
            <span className="text-yellow-600">Many subjects</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            ልምድ ያላቸው አስተማሪዎች ድክመትዎን ለይተው እንዲያስተካክሉ ይረዱዎታል
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {subjects.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className={`
                bg-white rounded-xl overflow-hidden
                border transition-all duration-300 cursor-pointer
                ${hov === i
                  ? "border-yellow-400 shadow-lg scale-[1.02]"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                }
              `}
            >
              {/* IMAGE */}
              <div className="relative h-32 md:h-40 overflow-hidden bg-gray-50">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    transform: hov === i ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 md:p-5">
                <h3 className="font-semibold text-slate-800 text-xl md:text-2xl mb-1 ">
                  {s.name}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm line-clamp-2">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div onClick={() => {window.location.href = "#contact"}} className="text-center mt-12 md:mt-16">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            ይደውሉልን
          </button>
        </div>
      </div>
    </section>
  );
}