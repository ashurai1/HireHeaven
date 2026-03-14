"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Download, Eye } from "lucide-react";
import Link from "next/link";

const ResumeThumbnail = ({ colorClass, layout }: { colorClass: string, layout: string }) => {
  if (layout === 'creative') {
    return (
      <div className="w-full h-full bg-white p-3 flex flex-col gap-3">
        {/* Header split */}
        <div className="flex justify-between items-start border-b border-gray-100 pb-2">
          <div className="space-y-1.5 w-2/3">
            <div className="h-3 w-4/5 bg-slate-800 rounded-full"></div>
            <div className={`h-1.5 w-1/2 ${colorClass} rounded-full`}></div>
          </div>
          <div className={`w-8 h-8 rounded-full ${colorClass} opacity-20`}></div>
        </div>
        {/* Two columns */}
        <div className="flex gap-2 flex-1">
          {/* Left col */}
          <div className="w-1/3 flex flex-col gap-2 border-r border-slate-100 pr-2">
             <div className="h-2 w-full bg-slate-200 rounded-sm"></div>
             <div className="h-1.5 w-full bg-slate-100 rounded-sm"></div>
             <div className="h-1.5 w-4/5 bg-slate-100 rounded-sm"></div>
             <div className="h-2 w-full bg-slate-200 rounded-sm mt-2"></div>
             <div className="h-1.5 w-full bg-slate-100 rounded-sm"></div>
          </div>
          {/* Right col */}
          <div className="w-2/3 flex flex-col gap-2">
             <div className={`h-2 w-1/3 ${colorClass} rounded-sm opacity-80`}></div>
             <div className="h-1.5 w-full bg-slate-100 rounded-sm"></div>
             <div className="h-1.5 w-full bg-slate-100 rounded-sm"></div>
             <div className="h-1.5 w-5/6 bg-slate-100 rounded-sm"></div>
             <div className={`h-2 w-1/3 ${colorClass} rounded-sm mt-2 opacity-80`}></div>
             <div className="h-1.5 w-full bg-slate-100 rounded-sm"></div>
             <div className="h-1.5 w-4/5 bg-slate-100 rounded-sm"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (layout === 'tech') {
    return (
      <div className="w-full h-full bg-slate-50 p-3 flex flex-col gap-2">
        {/* Header side */}
        <div className={`w-full p-2 ${colorClass} rounded-sm flex items-center gap-2`}>
           <div className="w-5 h-5 rounded-full bg-white/30"></div>
           <div className="space-y-1 flex-1">
             <div className="h-2 w-1/2 bg-white/90 rounded-full"></div>
             <div className="h-1 w-1/3 bg-white/60 rounded-full"></div>
           </div>
        </div>
        {/* Content */}
        <div className="flex-1 mt-1 space-y-3 px-1">
           <div>
             <div className="h-2 w-1/4 bg-slate-300 rounded-sm mb-1.5"></div>
             <div className="h-1.5 w-full bg-slate-200 rounded-sm mb-1"></div>
             <div className="h-1.5 w-full bg-slate-200 rounded-sm mb-1"></div>
           </div>
           <div>
             <div className="h-2 w-1/4 bg-slate-300 rounded-sm mb-1.5"></div>
             <div className="h-1.5 w-full bg-slate-200 rounded-sm mb-1"></div>
             <div className="h-1.5 w-5/6 bg-slate-200 rounded-sm mb-1"></div>
           </div>
           <div className="flex gap-1 flex-wrap pt-1">
             <div className={`h-2 w-8 ${colorClass} rounded-full opacity-50`}></div>
             <div className={`h-2 w-12 ${colorClass} rounded-full opacity-50`}></div>
             <div className={`h-2 w-10 ${colorClass} rounded-full opacity-50`}></div>
             <div className={`h-2 w-8 ${colorClass} rounded-full opacity-50`}></div>
           </div>
        </div>
      </div>
    );
  }

  // default 'professional'
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col gap-3">
      {/* Header center */}
      <div className="flex flex-col items-center border-b border-gray-100 pb-3">
        <div className="h-3 w-1/2 bg-slate-700 rounded-full mb-1.5"></div>
        <div className={`h-1.5 w-1/3 ${colorClass} rounded-full mb-1 opacity-80`}></div>
        <div className="flex gap-2">
           <div className="h-1 w-6 bg-slate-200 rounded-full"></div>
           <div className="h-1 w-6 bg-slate-200 rounded-full"></div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 space-y-3 mt-1">
         <div>
           <div className="h-2 w-1/4 bg-slate-600 rounded-sm mb-1.5"></div>
           <div className="h-1.5 w-full bg-slate-100 rounded-sm mb-1"></div>
           <div className="h-1.5 w-full bg-slate-100 rounded-sm mb-1"></div>
           <div className="h-1.5 w-3/4 bg-slate-100 rounded-sm mb-1"></div>
         </div>
         <div>
           <div className="h-2 w-1/4 bg-slate-600 rounded-sm mb-1.5"></div>
           <div className="flex justify-between mb-1">
              <div className="h-1.5 w-1/3 bg-slate-300 rounded-sm"></div>
              <div className="h-1.5 w-1/4 bg-slate-200 rounded-sm"></div>
           </div>
           <div className="h-1.5 w-full bg-slate-100 rounded-sm mb-1"></div>
           <div className="h-1.5 w-5/6 bg-slate-100 rounded-sm mb-1"></div>
         </div>
      </div>
    </div>
  );
};

export default function ResumeTemplates() {
  const templates = [
    {
      id: 1,
      name: "Modern Executive",
      category: "Professional",
      color: "bg-blue-600",
      layout: "professional",
      popular: true,
    },
    {
      id: 2,
      name: "Creative Minimalist",
      category: "Creative",
      color: "bg-rose-500",
      layout: "creative",
      popular: true,
    },
    {
      id: 3,
      name: "Tech Innovator",
      category: "Tech & IT",
      color: "bg-indigo-600",
      layout: "tech",
      popular: false,
    },
    {
      id: 4,
      name: "Classic Corporate",
      category: "Banking & Finance",
      color: "bg-emerald-600",
      layout: "professional",
      popular: false,
    },
    {
      id: 5,
      name: "Startup Hustler",
      category: "Tech & IT",
      color: "bg-purple-600",
      layout: "tech",
      popular: false,
    },
    {
      id: 6,
      name: "Design Portfolio",
      category: "Creative",
      color: "bg-orange-500",
      layout: "creative",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-10 pb-20 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 -z-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400/20 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            <Sparkles size={14} className="mr-1" /> Handcrafted Designs
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Stand out with <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Premium Templates</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from our collection of ATS-friendly, beautiful resume templates designed by industry experts to get you hired faster.
          </p>
        </div>

        {/* Filters/Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All Templates", "Professional", "Creative", "Tech & IT", "Banking & Finance"].map((category, i) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                i === 0
                  ? "bg-foreground text-background shadow-md"
                  : "bg-white dark:bg-slate-800 text-muted-foreground hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card 
              key={template.id} 
              className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden relative cursor-pointer hover:-translate-y-2"
            >
              {template.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-[#ff5a36] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Image Container with Hover Overlay */}
              <div className="relative h-[400px] w-full overflow-hidden bg-gray-100 dark:bg-slate-800 p-6 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Simulated Document Preview */}
                <div className="relative w-[210px] h-[297px] bg-white shadow-xl group-hover:scale-105 transition-transform duration-500 rounded-sm overflow-hidden border border-gray-200">
                    <ResumeThumbnail colorClass={template.color} layout={template.layout} />
                </div>

                {/* Hover Action Buttons */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex gap-3 justify-center">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900 shadow-xl">
                    <Eye size={16} className="mr-2" /> Preview
                  </Button>
                  <Link href="/resume-builder">
                    <Button size="sm" className={`${template.color} hover:opacity-90 text-white shadow-xl`}>
                      Use Template <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-5 flex items-center justify-between bg-white dark:bg-slate-900 relative z-20">
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-blue-600 transition-colors">{template.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{template.category}</p>
                </div>
                <div className={`w-8 h-8 rounded-full ${template.color} flex items-center justify-center opacity-10 group-hover:opacity-100 transition-opacity duration-300`}>
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Card className="p-10 border-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl font-black mb-4">Not sure where to start?</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">Use our AI-powered resume builder. Just enter your details and we'll format it perfectly for you.</p>
                <Link href="/resume-builder">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 h-14 px-8 text-lg font-bold shadow-xl rounded-xl">
                    Create Resume Automatically
                  </Button>
                </Link>
             </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
