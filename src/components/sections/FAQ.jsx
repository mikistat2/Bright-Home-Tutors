import { useState } from "react";

const faqs = [
  {
    q: "How do I know which tutor is right for my child?",
    a: "After completing our intake form, our team matches your child with the most suitable tutor. You can always request a change if needed.",
  },
  
  {
    q: "What if my child doesn’t get along with their tutor?",
    a: "No problem. We’ll rematch you at no cost. The right connection is important to us.",
  },
  {
    q: "How long are the sessions?",
    a: "Sessions are typically 60 or 90 minutes depending on the student’s needs.",
  },
  
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-bold text-yellow-600 uppercase mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-800">
            Questions we{" "}
            <span className="text-yellow-600 italic">hear often</span>
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300
                ${
                  isOpen
                    ? "border-yellow-300 bg-white shadow-md"
                    : "border-slate-200 bg-white/70 hover:bg-white"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-medium text-slate-800 pr-4">
                    {faq.q}
                  </span>

                  {/* ICON */}
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300
                    ${
                      isOpen
                        ? "bg-yellow-300 text-yellow-900 rotate-45"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    +
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}