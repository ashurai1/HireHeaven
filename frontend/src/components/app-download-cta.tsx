"use client";
import React from "react";
import Image from "next/image";
import { Star, Download } from "lucide-react";

const AppDownloadCTA = () => {
  return (
    <section className="py-12 bg-background flex justify-center px-5">
      <div className="container max-w-6xl rounded-[32px] bg-[#eef2ff] overflow-hidden relative min-h-[320px] flex flex-col md:flex-row items-center border border-indigo-100 shadow-sm">

        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left relative z-10 order-2 md:order-1">

          {/* Logo + Brand */}
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/hireheaven-logo.png"
              alt="HireHeaven Logo"
              width={48}
              height={48}
              className="rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-xl font-black text-indigo-900 leading-none">HireHeaven</h3>
              <p className="text-xs text-indigo-500 font-semibold">Find Your Dream Job</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#1e2d7d] mb-4 leading-tight">
            Get the HireHeaven app!
          </h2>

          <p className="text-base text-indigo-900/70 mb-6 font-medium max-w-sm">
            Unlimited job applications · HRs contact you directly · Track your Applications
          </p>

          {/* Star Rating */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-lg font-black text-indigo-900">4.7</span>
              </div>
              <p className="text-xs text-indigo-500 font-semibold">7L+ Reviews</p>
            </div>
            <div className="w-px h-8 bg-indigo-200" />
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4 text-indigo-600" />
                <span className="text-lg font-black text-indigo-900">5cr+</span>
              </div>
              <p className="text-xs text-indigo-500 font-semibold">App downloads</p>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
            >
              {/* Apple Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="leading-tight">
                <div className="text-[9px] opacity-70 font-normal">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
            >
              {/* Google Play Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M3.18 23.76c.37.2.8.18 1.17-.03l11.24-6.51-2.5-2.5-9.91 9.04zM.1 1.17C.04 1.37 0 1.6 0 1.84v20.32c0 .25.04.47.1.68l.06.05L11.38 12v-.27L.16 1.12.1 1.17zm14.52 13.9l-3.74-3.74V12l3.74-3.74.08.05 4.43 2.52c1.26.72 1.26 1.89 0 2.61l-4.43 2.52-.08.05zM3.18.24L14.42 6.75l-2.5 2.5L2.35.21c.27-.13.57-.14.83.03z"/>
              </svg>
              <div className="leading-tight">
                <div className="text-[9px] opacity-70 font-normal">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className="w-full md:w-1/2 h-[280px] md:h-[400px] relative flex items-end justify-center order-1 md:order-2 pt-6 md:pt-0">
          <img
            src="/phone-mockup.png"
            alt="HireHeaven App"
            className="h-[120%] md:h-[130%] object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default AppDownloadCTA;
