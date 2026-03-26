// Facebook Icon
const FacebookIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-600">
    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
  </svg>
);
// Instagram Icon
const InstagramIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-600">
    <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor"/>
    <circle cx="12" cy="12" r="5" fill="#fff"/>
    <circle cx="12" cy="12" r="3.2" fill="currentColor"/>
    <circle cx="17" cy="7" r="1.2" fill="#fff"/>
  </svg>
);
import { useState } from "react";

// Contact icons - same as footer
const PhoneIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-600">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);
const MailIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-600">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const TelegramIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-600">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const TikTokIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-600">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

/* ─── CONTACT COMPONENT ────────────────────────────── */
function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const subjectsList = [
    "Mathematics", "Science", "English", "History", 
    "Geography", "Computer Science", "Arts", "Music"
  ];

  const grades = ["Select grade", "Grade K", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    // Basic validation
    if (!formData.parentName || !formData.email || !formData.phone) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields (Parent Name, Phone, and Email)"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      
      const response = await fetch('https://formsubmit.co/ajax/miki123mbt@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          grade: formData.grade,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Tutoring Inquiry from ${formData.parentName}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll contact you within 24 hours."
        });
        // Reset form
        setFormData({
          parentName: "",
          phone: "",
          email: "",
          grade: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[60px] md:py-[100px] px-4 md:px-6 bg-slate-50">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[48px] lg:gap-[72px] items-start">
        {/* Left Side - Contact Info */}
        <div>
          <p className="text-yellow-600 text-[2rem] mb-15 tracking-[0.22em] uppercase mb-3.5">
            Contact Us
          </p>
          
          
          {[ 
            { Icon: PhoneIcon, value: '09 91 21 26 49', href: 'tel:0991212649' },
            { Icon: PhoneIcon, value: '+251 95 576 7342', href: 'tel:+251955767342' },
            { Icon: MailIcon, value: 'hello@brighthometutors.com', href: 'mailto:hello@brighthometutors.com' },
            { Icon: TelegramIcon, value: 'join telegram Channel 35,000+ subscribers', href: 'https://t.me/Brighthometutors22' },
            { Icon: TikTokIcon, value: 'Follow us on TikTok', href: 'https://tiktok.com/@Brighthometutors22' },
            { Icon: FacebookIcon, value: 'Like us on Facebook', href: 'https://facebook.com/brighthometutors' },
            { Icon: InstagramIcon, value: 'Follow us on Instagram', href: 'https://instagram.com/brighthometutors' }
          ].map(c => {
            const content = (
              <>
                <div className="flex-shrink-0 w-16 h-16 min-w-[64px] min-h-[64px] flex items-center justify-center rounded-xl bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
                  <c.Icon size={40} />
                </div>
                <span className="text-slate-900 text-[1.35rem] leading-tight">
                  {c.value}
                </span>
              </>
            );
            return c.href ? (
              <a
                key={c.href}
                href={c.href}
                className="flex items-center gap-4 mb-[18px] group no-underline min-h-[80px] p-2 -m-2 rounded-lg hover:bg-yellow-50/50 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={c.value} className="flex items-center gap-4 mb-[18px] min-h-[80px] p-2">
                {content}
              </div>
            );
          })}
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="bg-yellow-50 border-[1.5px] border-yellow-100 rounded-[28px] p-[28px] md:p-[42px_44px] shadow-[0_12px_48px_rgba(0,0,0,0.06)]">
          <h3 className="font-bold text-slate-900 text-[1.7rem] mb-6">Email Us</h3>
          
          {/* Parent Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            <div>
              <label className="text-[1.1rem] text-slate-500 font-semibold block mb-1.5">
                Parent Name *
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Hussen Ali"
                className="w-full border-[1.5px] border-slate-200 rounded-[12px] px-3.5 py-[15px] text-[1.1rem] text-slate-900 outline-none bg-white focus:border-yellow-300 focus:shadow-[0_0_0_3px_rgba(253,224,71,0.18)] placeholder:text-[1.1rem]"
                required
              />
            </div>
            <div>
              <label className="text-[1.1rem] text-slate-500 font-semibold block mb-1.5">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+251 ..."
                className="w-full border-[1.5px] border-slate-200 rounded-[12px] px-3.5 py-[15px] text-[1.1rem] text-slate-900 outline-none bg-white focus:border-yellow-300 focus:shadow-[0_0_0_3px_rgba(253,224,71,0.18)] placeholder:text-[1.1rem]"
                required
              />
            </div>
          </div>
          
          {/* Email */}
          <div className="mb-3.5">
            <label className="text-[1.1rem] text-slate-500 font-semibold block mb-1.5">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Hussen@example.com"
              className="w-full border-[1.5px] border-slate-200 rounded-[12px] px-3.5 py-[15px] text-[1.1rem] text-slate-900 outline-none bg-white focus:border-yellow-300 focus:shadow-[0_0_0_3px_rgba(253,224,71,0.18)] placeholder:text-[1.1rem]"
              required
            />
          </div>
          
          {/* Grade & Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            <div>
                <label className="text-[1.1rem] text-slate-500 font-semibold block mb-1.5">
                Child's Grade
              </label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                  className="w-full border-[1.5px] border-slate-200 rounded-[12px] px-3.5 py-[15px] text-[1.1rem] text-slate-900 outline-none bg-white focus:border-yellow-300 placeholder:text-[1.1rem]"
              >
                {grades.map(grade => (
                  <option key={grade} value={grade === "Select grade" ? "" : grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
            <div>
                <label className="text-[1.1rem] text-slate-500 font-semibold block mb-1.5">
                Subject Needed
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                  className="w-full border-[1.5px] border-slate-200 rounded-[12px] px-3.5 py-[15px] text-[1.1rem] text-slate-900 outline-none bg-white focus:border-yellow-300 placeholder:text-[1.1rem]"
              >
                <option value="">Select subject</option>
                {subjectsList.map(subject => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Message */}
          <div className="mb-5">
            <label className="text-[1.1rem] text-slate-500 font-semibold block mb-1.5">
              Anything else?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="e.g. upcoming exam, specific struggles, preferred days..."
              className="w-full border-[1.5px] border-slate-200 rounded-[12px] px-3.5 py-[15px] text-[1.1rem] text-slate-900 outline-none resize-none bg-white focus:border-yellow-300 focus:shadow-[0_0_0_3px_rgba(253,224,71,0.18)] placeholder:text-[1.1rem]"
            />
          </div>
          
          {/* Status Message */}
          {submitStatus.message && (
            <div className={`mb-4 p-3 rounded-lg text-sm ${
              submitStatus.type === "success" 
                ? "bg-green-100 text-green-800 border border-green-200" 
                : "bg-red-100 text-red-800 border border-red-200"
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-yellow-300 text-yellow-900 border-none font-bold text-[0.9rem] py-3.5 px-0 rounded-[12px] cursor-pointer transition-all duration-200 ${
              isSubmitting 
                ? "opacity-70 cursor-not-allowed" 
                : "hover:bg-yellow-400 hover:shadow-[0_6px_22px_rgba(253,224,71,0.6)]"
            } shadow-[0_4px_16px_rgba(253,224,71,0.4)]`}
          >
            {isSubmitting ? "Sending..." : "Send Message →"}
          </button>
          <p className="text-center text-slate-400 text-[0.73rem] mt-3">
            No commitment required · We'll call within 24 hours
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;