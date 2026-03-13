"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const EmployerCTA = () => {
  return (
    <section className="py-12 bg-background flex justify-center px-5">
      <div className="container max-w-6xl rounded-[32px] bg-[#f0f9f6] overflow-hidden relative min-h-[320px] flex flex-col md:flex-row items-center border border-emerald-100 shadow-sm">
        
        {/* Left side - Representative Image */}
        <div className="w-full md:w-1/2 h-[240px] md:h-[320px] relative flex items-end justify-center md:pt-6">
          <img
            src="/popular-searches/full-time.png"
            alt="HireHeaven for Employers"
            className="h-[110%] object-contain object-bottom drop-shadow-xl transform scale-110 origin-bottom md:translate-x-12"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
          <div className="bg-emerald-100/80 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            HireHeaven For Employers
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-[#1e4d3b] mb-4 leading-tight">
            Want to hire?
          </h2>
          
          <p className="text-base text-emerald-900/70 mb-8 font-medium max-w-sm">
            Find the best candidates from our pool of 50k+ active job seekers!
          </p>

          <Link
            href="/post-job"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 border border-emerald-200 px-8 py-3 rounded-full font-bold text-base hover:bg-emerald-50 hover:shadow-md transition-all group"
          >
            Post job
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Decorative elements to match the screenshot vibe */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default EmployerCTA;
