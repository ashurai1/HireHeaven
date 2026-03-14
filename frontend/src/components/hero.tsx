import { Search, MapPin, Briefcase, Star } from "lucide-react";
import React from "react";
import CompanyMarquee from "./CompanyMarquee";

const Hero = () => {
  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <section className="relative overflow-hidden bg-[#faf8fd]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-8">
          
          {/* Main Text & Search Section */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 lg:pl-10 relative z-10 w-full">
            
            {/* Top Green Text */}
            <div className="text-[#008f5d] font-bold tracking-widest text-sm uppercase flex items-center gap-2">
              INDIA'S #1 JOB PLATFORM
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-[52px] lg:text-[56px] font-[800] text-[#1e152e] leading-[1.1] tracking-tight mt-2 min-w-full">
              Your job search ends here
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 font-medium mt-1">
              Discover 50 lakh+ career opportunities
            </p>

            {/* Search Bar Container */}
            <div className="w-full max-w-3xl mt-8 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-2 md:p-2.5 flex flex-col md:flex-row items-center gap-3 md:gap-0">
              
              {/* Job Title */}
              <div className="flex-1 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 w-full md:w-auto">
                <Search className="text-gray-400 w-5 h-5 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search jobs by 'title'" 
                  className="w-full bg-transparent outline-none text-[15px] font-medium text-gray-800 placeholder:text-gray-400"
                />
              </div>

              <div className="hidden md:block w-[1px] h-8 bg-gray-200 mx-1 shrink-0"></div>

              {/* Experience */}
              <div className="flex-1 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 w-full md:w-auto border-t md:border-t-0 border-gray-100">
                <Briefcase className="text-gray-400 w-5 h-5 shrink-0" />
                <select defaultValue="" className="w-full bg-transparent outline-none text-[15px] font-medium text-gray-600 appearance-none cursor-pointer">
                  <option value="" disabled>Your Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              <div className="hidden md:block w-[1px] h-8 bg-gray-200 mx-1 shrink-0"></div>

              {/* Location */}
              <div className="flex-1 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 w-full md:w-auto border-t md:border-t-0 border-gray-100">
                <MapPin className="text-gray-400 w-5 h-5 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search for an area or..." 
                  className="w-full bg-transparent outline-none text-[15px] font-medium text-gray-800 placeholder:text-gray-400"
                />
              </div>

              {/* Search Button */}
              <button className="w-full md:w-auto mt-2 md:mt-0 bg-[#008f5d] hover:bg-[#007b4f] text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors shrink-0 whitespace-nowrap">
                Search jobs
              </button>
            </div>

            {/* Trust and Supported By */}
            <div className="w-full pt-10 grid grid-cols-1 gap-6 mt-4">
               {/* Proud to Support */}
               <div className="flex flex-col items-center md:items-start gap-4">
                  <h3 className="text-[#1e152e] font-bold text-lg md:text-xl">Proud to Support</h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 mt-1">
                     
                     {/* Ministry of Labour */}
                     <div className="flex items-center gap-2 grayscale brightness-0 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png" className="w-[30px] h-[40px] object-contain" alt="Emblem" />
                        <div className="flex flex-col items-start leading-[1.1]">
                           <span className="text-[7.5px] font-medium tracking-tight">श्रम एवं रोजगार मंत्रालय</span>
                           <span className="text-[7.5px] font-bold tracking-tight">GOVERNMENT OF INDIA</span>
                           <span className="text-[8.5px] font-black tracking-wide -mt-[1px]">MINISTRY OF LABOUR &</span>
                           <span className="text-[8.5px] font-black tracking-wide -mt-[1px]">EMPLOYMENT</span>
                        </div>
                     </div>

                     {/* AICTE */}
                     <div className="flex items-center justify-center h-[40px] grayscale brightness-0 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/200px-All_India_Council_for_Technical_Education_logo.png" className="h-full object-contain" alt="AICTE" />
                     </div>

                     {/* Startup India */}
                     <div className="flex items-center gap-1.5 h-[40px] grayscale brightness-0 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png" className="w-[30px] h-[40px] object-contain" alt="Emblem" />
                        <div className="flex flex-col items-start leading-[1.1]">
                           <span className="text-[17px] font-black tracking-tighter text-[#1e152e]">DPIIT</span>
                           <span className="text-[10px] font-bold text-orange-600 tracking-tight">#startupindia</span>
                        </div>
                     </div>

                  </div>
               </div>

               {/* Trusted Text */}
               <div className="w-full pt-4">
                  <h3 className="text-[#1e152e] font-bold text-lg md:text-xl text-center md:text-left mb-2">
                    Trusted by 1000+ enterprises and <br className="hidden md:block lg:hidden" /> 7 lakh+ MSMEs for hiring
                  </h3>
                  <CompanyMarquee />
               </div>
            </div>
            
          </div>

          {/* Right Image Section */}
          <div className="flex-1 w-full relative mt-16 md:mt-0 flex justify-center lg:justify-end max-w-sm md:max-w-none mx-auto pr-0 lg:pr-10">
            <div className="relative w-[320px] md:w-[400px] lg:w-[450px]">
              
              {/* The main hero image */}
              <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-none">
                <img 
                  src="/hero_guy_app.png" 
                  alt="Job search celebration" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              {/* Sticky App Info Card - Fixed to viewport like Apna */}
              {showBanner && (
                <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#f4effc]/95 backdrop-blur-sm rounded-[24px] p-4 pr-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white flex gap-4 w-[340px] transform hover:-translate-y-1 transition-transform z-[100]">
                  
                  {/* Close button X */}
                  <button 
                    onClick={() => setShowBanner(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>

                 {/* QR Code pseudo-block */}
                 <div className="bg-white p-1 rounded-xl shadow-sm shrink-0 flex flex-col items-center border border-gray-100 pb-2">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://hireheaven.local&color=000000&bgcolor=ffffff&margin=1" alt="QR Code" className="w-[85px] h-[85px] rounded-lg" />
                    <span className="text-[11px] text-[#1e152e] mt-1.5 font-semibold tracking-tight">Scan the QR</span>
                 </div>

                 {/* Ratings and Buttons Info */}
                 <div className="flex-1 flex flex-col justify-center relative top-1">
                    <div className="text-[12px] text-gray-400 font-semibold mb-1.5 flex items-center gap-1"><span>Or</span> <span className="text-gray-800">download app</span></div>
                    
                    {/* App Buttons */}
                    <div className="flex gap-2 mb-3">
                       <button className="bg-black text-white px-2 py-1.5 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                          <svg className="w-[66px] h-[19px]" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.47,15.11C17.45,11.51 20.37,9.75 20.5,9.66C18.82,7.21 16.14,6.84 15.21,6.81C13.06,6.59 10.97,8.08 9.87,8.08C8.75,8.08 7.02,6.84 5.25,6.88C3.01,6.91 0.94,8.18 0.44,10.23C-0.78,14.65 1.57,21.57 3.39,24.19C4.26,25.44 5.26,26.86 6.58,26.81C7.84,26.77 8.32,26.01 9.85,26.01C11.37,26.01 11.83,26.81 13.16,26.79C14.52,26.77 15.42,25.48 16.27,24.23C17.29,22.75 17.71,21.31 17.74,21.25C17.69,21.22 14.53,20.02 14.51,16.4L17.47,15.11Z" fill="#fff"/>
                            <path d="M13.88,4.52C14.57,3.68 15.04,2.5 14.91,1.33C13.88,1.37 12.62,2.02 11.89,2.88C11.3,3.57 10.74,4.78 10.9,5.93C12.05,6.01 13.19,5.36 13.88,4.52Z" fill="#fff"/>
                            <text x="25" y="16" fill="#fff" fontSize="8" fontFamily="Arial, sans-serif" fontWeight="bold">Download on the</text>
                            <text x="25" y="28" fill="#fff" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="bold">App Store</text>
                          </svg>
                       </button>
                       <button className="bg-black text-white px-2 py-1.5 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                          <svg className="w-[70px] h-[19px]" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.37,2.26C0.91,2.75 0.63,3.48 0.63,4.39L0.63,28.61C0.63,29.52 0.91,30.25 1.37,30.74L1.48,30.84L16.29,16.24L16.29,15.93L1.48,1.16L1.37,2.26Z" fill="#42a5f5"/>
                            <path d="M21.24,21.13L16.29,16.24L16.29,15.93L21.24,11.04L21.39,11.12L27.24,14.41C28.91,15.35 28.91,16.88 27.24,17.82L21.39,21.05L21.24,21.13Z" fill="#ffca28"/>
                            <path d="M21.39,21.05L16.29,16.08L1.37,30.74C1.84,31.25 2.62,31.31 3.52,30.8L21.39,21.05Z" fill="#f44336"/>
                            <path d="M21.39,11.12L3.52,1.37C2.62,0.85 1.84,0.91 1.37,1.43L16.29,16.08L21.39,11.12Z" fill="#4caf50"/>
                            <text x="32" y="15" fill="#fff" fontSize="8" fontFamily="sans-serif">GET IT ON</text>
                            <text x="32" y="27" fill="#fff" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Google Play</text>
                          </svg>
                       </button>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center mt-1 justify-between w-full">
                       
                       {/* App Icon (Actual Logo) */}
                       <div className="w-6 h-6 bg-white rounded overflow-hidden flex items-center justify-center shrink-0 border border-gray-100 shadow-sm mr-1.5">
                          <img src="/icon.png" alt="App Icon" className="w-full h-full object-contain" />
                       </div>

                       <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                             <span className="font-extrabold text-[13px] text-[#1e152e]">4.7</span>
                             <Star className="w-[10px] h-[10px] fill-[#1e152e] text-[#1e152e]" />
                          </div>
                          <span className="text-[9px] text-gray-500 font-medium leading-[1]">7L reviews</span>
                       </div>

                       <div className="w-[1px] h-6 bg-gray-200 mx-1.5 shrink-0"></div>

                       <div className="flex flex-col pr-1">
                          <div className="flex items-center gap-1">
                             <span className="font-extrabold text-[13px] text-[#1e152e]">5Cr+</span>
                          </div>
                          <span className="text-[9px] text-gray-500 font-medium leading-[1]">Downloads</span>
                       </div>

                    </div>
                 </div>
                 
              </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
