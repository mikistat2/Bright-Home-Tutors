import { useState, useEffect } from "react";
import bgImage from "../../images/bright-bg-img.jpg";
import brighLogo from "../../images/bright-logo-new.png";



// Lamp Icon Component
const LampIcon = ({ size = 20, color = "#713F12" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" fill={color}/>
  </svg>
);

// Contact section icons - big and touch-friendly (min 44px for touch targets)
const PhoneIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);
const MailIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const TelegramIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const TikTokIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const contactInfo = [
    { Icon: PhoneIcon, value: '+251 95 576 7342', href: 'tel:+251 95 576 7342' },
    { Icon: PhoneIcon, value: '0991212649', href: 'tel:0991212649' },
    { Icon: TelegramIcon, value: 'Message on Telegram', href: 'https://t.me/brighthometutors' },
    
  ];

 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 text-white text-2xl md:text-6xl  overflow-hidden">
      {/* Background Image with Half Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      />
      
      {/* Gradient Overlay for Better Readability */}
      {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImage})`,
    opacity: 3 // 👈 VERY transparent
  }}
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-slate-900/95" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 pt-[72px] px-6 pb-8">
        <div className="max-w-[1160px] mx-auto">
          {/* Top Section - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-white/10">
            {/* Brand Info */}
            <div className="flex flex-col items-start gap-2 min-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-26 h-26 flex items-center justify-center  shadow-md">
                  <img src={brighLogo} alt="Bright Home Tutors Logo" className="w-26 h-26 object-contain" />
                </div>
                <span className="font-semibold text-[1.3rem] md:text-[1.5rem]" style={{fontFamily: 'Georgia, serif'}}>
                  Bright Home <span className="text-yellow-300">Tutors</span>
                </span>
              </div>
              <p className="text-white/60 text-[1rem] leading-[1.75] max-w-[320px] mt-1">
                Helping students shine with personalized home tutoring in Ethiopia.<br/>We build confidence, master subjects, and achieve academic success together.
              </p>
            </div>
            
            {/* Navigation Links */}
            <div>
              <p className="text-yellow-300/70 text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-[18px]">
                Quick Links
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                {navigationLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/50 text-[1rem] no-underline transition-all duration-200 hover:text-yellow-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>


            {/* Contact Info - big touch-friendly icons */}
            <div>
              <p className="text-yellow-300/70 text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-[18px]">
                Contact Us
              </p>
              <div className="space-y-5">
                {contactInfo.map(info => {
                  const content = (
                    <>
                      <div className="flex-shrink-0 w-16 h-16 min-w-[64px] min-h-[64px] flex items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 group-active:bg-white/25 transition-colors">
                        <info.Icon size={40} />
                      </div>
                      <span className="text-white/70 text-[1.35rem] leading-tight">
                        {info.value}
                      </span>
                    </>
                  );
                  return info.href ? (
                    <a
                      key={info.href}
                      href={info.href}
                      className="flex items-center gap-4 no-underline group min-h-[80px] p-2 -m-2 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.value} className="flex items-center gap-4 min-h-[80px] p-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          

          {/* Bottom Section */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
            <p className="text-white/30 text-[0.95rem] text-center md:text-left">
              © {year} Bright Home Tutors. All rights reserved.
            </p>
            
            <div className="flex gap-5 flex-wrap justify-center">
             
                <a
                  
                  href="https://t.me/Purpleew_eed"
                  className="text-white/30 text-[0.95rem] no-underline transition-colors duration-200 hover:text-white/60"
                >
                  Developer: <span>Mikiyas Dawit <span className="inline-block align-middle"><TelegramIcon size={20} color="orange"/></span>  </span>
                </a>
              
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/30 hover:text-yellow-300 transition-all duration-300 text-[0.95rem]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <svg 
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;