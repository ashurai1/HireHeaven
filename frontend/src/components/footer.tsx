"use client";
import React from "react";
import Link from "next/link";
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      {/* Upper Footer: Categories & Links */}
      <div className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8">
          
          {/* Column 1: Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Download HireHeaven App</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Free Job Alerts</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Vulnerability Disclosure Policy</Link></li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-primary transition-colors">User Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4 & 5: Hidden on mobile, shown on larger screens if needed, 
              or we can use this space for more categories like in the screenshot */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Trending Jobs</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Consulting Jobs</Link>
              <Link href="#" className="hover:text-primary transition-colors">Content & Journalism Jobs</Link>
              <Link href="#" className="hover:text-primary transition-colors">Customer Support Jobs</Link>
              <Link href="#" className="hover:text-primary transition-colors">Data Science & Analytics Jobs</Link>
              <Link href="#" className="hover:text-primary transition-colors">CSR & Social Service Jobs</Link>
              <Link href="#" className="hover:text-primary transition-colors">Delivery / Driver Jobs</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Footer: Socials & App QR */}
      <div className="bg-[#e0f2fe] dark:bg-[#0c4a6e] text-slate-900 dark:text-sky-50 py-12">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Social Block */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-sky-600 rounded-lg p-1 shadow-sm">
                   <span className="text-white font-black text-xl px-2">HireHeaven</span>
                </div>
                <span className="text-2xl font-bold text-sky-900 dark:text-sky-100 hidden sm:inline">Follow us on social media</span>
              </div>
              <div className="flex gap-5">
                <Link href="#" className="text-sky-700 dark:text-sky-300 hover:text-sky-500 transition-all transform hover:scale-110"><Facebook size={28} /></Link>
                <Link href="#" className="text-sky-800 dark:text-sky-200 hover:text-sky-600 transition-all transform hover:scale-110"><Linkedin size={28} /></Link>
                <Link href="#" className="text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-all transform hover:scale-110"><Twitter size={28} /></Link>
                <Link href="#" className="text-pink-600 dark:text-pink-400 hover:text-pink-500 transition-all transform hover:scale-110"><Instagram size={28} /></Link>
                <Link href="#" className="text-red-600 dark:text-red-400 hover:text-red-500 transition-all transform hover:scale-110"><Youtube size={28} /></Link>
              </div>
            </div>

            {/* App Download Block */}
            <div className="bg-white/40 dark:bg-sky-950/40 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-sky-200 dark:border-sky-800 max-w-2xl w-full shadow-sm">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-sky-950 dark:text-white mb-3 tracking-tight">Apply on the go</h3>
                <p className="text-sky-800/60 dark:text-sky-200/60 text-sm mb-6 font-medium">Get real time job updates on our App</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Link href="#" className="transition-all hover:scale-105 active:scale-95">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                      alt="Download on the App Store" 
                      className="h-10 w-auto shadow-sm rounded-md" 
                    />
                  </Link>
                  <Link href="#" className="transition-all hover:scale-105 active:scale-95">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Get it on Google Play" 
                      className="h-10 w-auto shadow-sm rounded-md" 
                    />
                  </Link>
                </div>
              </div>
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-sky-100">
                 {/* QR Code Placeholder */}
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://hireheaven.com" alt="QR Code" width={100} height={100} />
              </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="mt-12 pt-8 border-t border-sky-200 dark:border-sky-800 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] md:text-xs text-sky-900/40 dark:text-sky-100/40 font-bold uppercase tracking-widest">
             <p>© {new Date().getFullYear()} HireHeaven | All rights reserved</p>
             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="/privacy-policy" className="hover:text-sky-600 transition-colors">Privacy Policy</Link>
                <Link href="/terms-conditions" className="hover:text-sky-600 transition-colors">T&C</Link>
                <Link href="/rewards-terms" className="hover:text-sky-600 transition-colors">Rewards T&C</Link>
                <Link href="/ai-prep-terms" className="hover:text-sky-600 transition-colors">AI Prep T&C</Link>
                <p className="text-sky-800">Created by Ashwani Rai</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
