"use client";
import { useState, useRef, useEffect } from "react";

const companies = [
  { name: "Zomato", domain: "zomato.com" },
  { name: "Swiggy", domain: "swiggy.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "TCS", domain: "tcs.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Reliance Jio", domain: "jio.com" },
  { name: "HCL Technologies", domain: "hcltech.com" },
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "Paytm", domain: "paytm.com" },
  { name: "Ola", domain: "olacabs.com" },
  { name: "MakeMyTrip", domain: "makemytrip.com" },
  { name: "Razorpay", domain: "razorpay.com" },
  { name: "PhonePe", domain: "phonepe.com" },
  { name: "Freshworks", domain: "freshworks.com" },
  { name: "Zoho", domain: "zoho.com" },
  { name: "Nykaa", domain: "nykaa.com" },
  { name: "Meesho", domain: "meesho.com" },
];

export default function CompanyMarquee() {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!contentRef.current) return;

      // Speed: 1.5px per frame normal, 0.4px when hovered
      const speed = hovered ? 0.4 : 1.5;
      xPos.current -= speed;

      // Reset when half (the first track) has passed
      // We expect the content width to be precisely 2x the single set of logos
      const totalWidth = contentRef.current.scrollWidth / 2;
      if (Math.abs(xPos.current) >= totalWidth) {
        xPos.current = 0;
      }

      contentRef.current.style.transform = `translateX(${xPos.current}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [hovered]);

  return (
    <div className="w-full py-2 overflow-hidden">
      <div
        ref={containerRef}
        className="relative flex overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* The scrolling container */}
        <div ref={contentRef} className="flex shrink-0 items-center will-change-transform">
          {/* We render it twice for a seamless loop */}
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              {companies.map(({ name, domain }) => (
                <div
                  key={`${name}-${i}`}
                  title={name}
                  className="mx-6 flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default select-none"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                    alt={name}
                    width={48}
                    height={48}
                    className="h-10 md:h-12 w-auto transition-all duration-300 pointer-events-none"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
