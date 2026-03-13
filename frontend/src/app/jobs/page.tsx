"use client";
import { Job } from "@/type";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { job_service, useAppData } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CompanyLogo from "@/components/CompanyLogo";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Filter,
  MapPin,
  Search,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import Loading from "@/components/loading";
import JobCard from "@/components/job-card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const locations: string[] = [
  "Delhi",
  "Mumbai",
  "Banglore",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Chennai",
  "Remote",
];

const JobsPage = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const { user, applications } = useAppData();
  const router = useRouter();
  
  const token = Cookies.get("token");
  const ref = useRef<HTMLButtonElement>(null);

  async function fetchJobs() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${job_service}/api/job/all?title=${title}&location=${location}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [title, location]);

  const clickEvent = () => {
    ref.current?.click();
  };

  const clearFilter = () => {
    setTitle("");
    setLocation("");
    fetchJobs();
    ref.current?.click();
  };

  const hasActiveFilters = title || location;
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar: Filters */}
          <aside className="w-full lg:w-1/4">
            <Card className="p-6 border-none shadow-sm sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Filter size={20} className="text-blue-600" />
                  Filters ({hasActiveFilters ? "1" : "0"})
                </h2>
                {hasActiveFilters && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilter}
                    className="text-blue-600 hover:text-blue-700 h-8 px-2 text-xs font-bold"
                  >
                    Clear all
                  </Button>
                )}
              </div>

              {/* Location Filter */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center justify-between">
                    Distance
                    <ChevronRight size={14} className="rotate-90 opacity-40" />
                  </h3>
                  <div className="space-y-2">
                    {["Within 10 km", "Within 20 km", "Within 50 km"].map((d) => (
                      <div className="flex items-center gap-3" key={d}>
                        <input
                          type="radio"
                          id={`dist-${d}`}
                          name="distance"
                          className="w-4 h-4 accent-blue-600"
                        />
                        <label htmlFor={`dist-${d}`} className="text-sm cursor-pointer font-medium">{d}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center justify-between">
                    Location
                    <ChevronRight size={14} className="rotate-90 opacity-40" />
                  </h3>
                  <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="loc-all"
                        name="location"
                        checked={location === ""}
                        onChange={() => setLocation("")}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <label htmlFor="loc-all" className="text-sm cursor-pointer font-medium">All</label>
                    </div>
                    {locations.map((loc) => (
                      <div className="flex items-center gap-3" key={loc}>
                        <input
                          type="radio"
                          id={`loc-${loc}`}
                          name="location"
                          checked={location === loc}
                          onChange={() => setLocation(loc)}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <label htmlFor={`loc-${loc}`} className="text-sm cursor-pointer font-medium">{loc}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Date posted
                  </h3>
                  <div className="space-y-2">
                    {["All", "Last 24 hours", "Last 3 days", "Last 7 days"].map((t) => (
                      <div className="flex items-center gap-3" key={t}>
                        <input
                          type="radio"
                          id={`date-${t}`}
                          name="date"
                          defaultChecked={t === "All"}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <label htmlFor={`date-${t}`} className="text-sm cursor-pointer font-medium">{t}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Work Mode
                  </h3>
                  <div className="space-y-2">
                    {["Work from home", "Work from office", "Work from field"].map((m) => (
                      <div className="flex items-center gap-3" key={m}>
                        <input
                          type="checkbox"
                          id={`mode-${m}`}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`mode-${m}`} className="text-sm cursor-pointer font-medium">{m}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Work Type
                  </h3>
                  <div className="space-y-2">
                    {["Full time", "Part time", "Internship"].map((t) => (
                      <div className="flex items-center gap-3" key={t}>
                        <input
                          type="checkbox"
                          id={`type-${t}`}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`type-${t}`} className="text-sm cursor-pointer font-medium">{t}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Work Shift
                  </h3>
                  <div className="space-y-2">
                    {["Day shift", "Night shift"].map((s) => (
                      <div className="flex items-center gap-3" key={s}>
                        <input
                          type="checkbox"
                          id={`shift-${s}`}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`shift-${s}`} className="text-sm cursor-pointer font-medium">{s}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center justify-between">
                    Department
                    <ChevronRight size={14} className="rotate-90 opacity-40" />
                  </h3>
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground opacity-50" size={14} />
                    <Input 
                      type="text" 
                      placeholder="Search" 
                      className="pl-9 bg-secondary/20 border-none shadow-none text-sm h-9"
                    />
                  </div>
                  <div className="space-y-2.5">
                    {[
                      "Admin / Back Office / Com...",
                      "Advertising / Communication",
                      "Aviation & Aerospace",
                      "Banking / Insurance / Finan...",
                      "Beauty, Fitness & Personal ...",
                    ].map((d) => (
                      <div className="flex items-center gap-3" key={d}>
                        <input
                          type="checkbox"
                          id={`dept-${d}`}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700"
                        />
                        <label htmlFor={`dept-${d}`} className="text-sm cursor-pointer font-medium text-foreground leading-none">{d}</label>
                      </div>
                    ))}
                    <button className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline mt-1">
                      Show 38 more <ChevronRight size={12} />
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center justify-between">
                    Sort By
                    <ChevronRight size={14} className="rotate-90 opacity-40" />
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      { id: "relevant", label: "Relevant" },
                      { id: "salary-desc", label: "Salary - High to low" },
                      { id: "date-desc", label: "Date posted - New to Old" },
                    ].map((s) => (
                      <div className="flex items-center gap-3" key={s.id}>
                        <input
                          type="radio"
                          id={`sort-${s.id}`}
                          name="sort"
                          defaultChecked={s.id === "relevant"}
                          className="w-4 h-4 accent-blue-600 dark:bg-slate-800 dark:border-slate-700"
                        />
                        <label htmlFor={`sort-${s.id}`} className="text-sm cursor-pointer font-medium text-foreground">{s.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Center Content: Job Listings */}
          <main className="w-full lg:w-2/4">
            <div className="mb-6">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Search by job title or company..."
                  className="pl-12 h-14 bg-card border-none shadow-sm rounded-xl text-lg"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <h2 className="text-xl font-bold text-foreground mb-4">
                Showing {jobs.length} jobs based on your filters
              </h2>

              {loading ? (
                <div className="py-20 text-center flex flex-col items-center justify-center">
                   <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                   <p className="text-muted-foreground font-medium">Crunching latest jobs...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                      <React.Fragment key={job.job_id}>
                        <JobCard job={job} />
                        {index === 2 && (
                          <Card className="p-8 border-none shadow-lg bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden relative group">
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                              <div className="flex-1 space-y-4 text-center md:text-left">
                                <h3 className="text-2xl font-black leading-tight">Apply to 100+ Jobs on the App</h3>
                                <p className="text-blue-100 text-sm font-medium">Connect with HRs daily and track your applications in real-time.</p>
                                 <div className="flex flex-col gap-4">
                                  <div className="flex -space-x-3">
                                    {["google.com", "meta.com", "amazon.com", "netflix.com", "apple.com"].map((domain) => (
                                      <CompanyLogo 
                                        key={domain}
                                        name={domain.split('.')[0]} 
                                        logoUrl={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} 
                                        className="-ml-3 first:ml-0 size-10 rounded-full border-2 border-primary"
                                      />
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-blue-600 flex items-center justify-center text-[10px] font-bold shadow-md relative z-10">
                                      50k+
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                                    <img 
                                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                                      alt="App Store" 
                                      className="h-10 w-auto cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-sm rounded-lg" 
                                    />
                                    <img 
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png" 
                                      alt="Play Store" 
                                      className="h-10 w-auto cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-sm rounded-lg" 
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-32 h-44 bg-white/10 rounded-t-2xl border-x-4 border-t-4 border-white/20 p-2 flex-shrink-0 relative transition-transform group-hover:-rotate-3 duration-500">
                                 <div className="w-full h-full bg-white/20 rounded-t-xl flex flex-col items-center justify-center gap-2">
                                    <div className="w-10 h-10 bg-white/40 rounded-lg animate-pulse"></div>
                                    <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                                 </div>
                              </div>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                          </Card>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <Card className="p-12 text-center border-dashed bg-secondary/20">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background mb-4 text-muted-foreground">
                        <Briefcase size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">No jobs matched</h3>
                      <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                      <Button onClick={clearFilter} variant="link" className="text-blue-600 mt-2">Clear all filters</Button>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </main>

          {/* Right Sidebar: Profile & CTA */}
          <aside className="w-full lg:w-1/4 space-y-6">
            {/* User Profile Card */}
            <Card className="p-6 border-none shadow-xl bg-white dark:bg-slate-900/50 backdrop-blur-sm text-center relative overflow-hidden group">
              {/* Animated background decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <div className="mx-auto w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-emerald-400 mb-4 shadow-lg">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center relative overflow-hidden ring-2 ring-white dark:ring-slate-900">
                    {user?.profile_pic ? (
                      <img src={user.profile_pic} alt={user.name} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <Users size={40} className="text-blue-500/40" />
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-foreground mb-1 tracking-tight">Hi, {user?.name || "Guest"}</h3>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 opacity-80">
                  {user ? "Ready for your next move?" : "Log in to track your progress"}
                </p>
                
                <Button 
                  onClick={() => router.push(user ? "/account" : "/login")}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group/btn"
                >
                  {user ? (
                    <>
                      <TrendingUp size={18} className="group-hover/btn:translate-y-[-2px] transition-transform" />
                      Update profile
                    </>
                  ) : (
                    <>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      Login now
                    </>
                  )}
                </Button>
                
                {user && (
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-xs font-bold text-foreground">{applications.length || 0}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Applied</p>
                    </div>
                    <div className="w-[1px] h-4 bg-border/50"></div>
                    <div className="text-center">
                      <p className="text-xs font-bold text-foreground">12</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Matches</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Application Tracking Card */}
            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-none shadow-sm p-6 overflow-hidden relative group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-[#1C6E6E] dark:text-emerald-400">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex -space-x-2">
                    {["zomato.com", "swiggy.com", "uber.com"].map(domain => (
                      <CompanyLogo 
                        key={domain}
                        name={domain.split('.')[0]} 
                        logoUrl={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} 
                        className="size-7 rounded-full border-2 border-emerald-50 dark:border-emerald-950"
                      />
                    ))}
                  </div>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1C6E6E] dark:text-emerald-400 mb-1">Track your</h4>
                <p className="text-lg font-extrabold text-[#114E4E] dark:text-emerald-50 mb-4 text-balance">
                  {applications.length || 3} Active Applications
                </p>
                
                <div className="space-y-3 mb-5">
                  {[
                    { name: "Zomato", status: "Interviewing", domain: "zomato.com" },
                    { name: "Uber", status: "Applied", domain: "uber.com" }
                  ].map((app, i) => (
                    <div key={app.name} className="flex items-center justify-between bg-white/50 dark:bg-black/20 p-2.5 rounded-xl border border-emerald-100/50 dark:border-emerald-900/20 shadow-sm transition-all hover:scale-[1.02]">
                      <div className="flex items-center gap-3">
                        <CompanyLogo 
                          name={app.name} 
                          logoUrl={`https://www.google.com/s2/favicons?domain=${app.domain}&sz=128`} 
                          size="sm"
                          className="bg-white"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#114E4E] dark:text-emerald-50">{app.name}</p>
                          <p className="text-[10px] text-emerald-600/70 dark:text-emerald-400/70">{app.status}</p>
                        </div>
                      </div>
                      <ChevronRight size={14} className="text-emerald-400" />
                    </div>
                  ))}
                </div>

                <Link href="/dashboard" className="w-full bg-[#1C6E6E] hover:bg-[#155353] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white flex items-center justify-center gap-2 h-11 rounded-lg font-bold transition-all">
                  Manage applications
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/20 rounded-full -mr-8 -mt-8 opacity-50"></div>
            </Card>

            {/* Mobile App CTA */}
            <Card className="p-0 border-none shadow-md bg-card overflow-hidden group">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Connect with HRs directly</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Track your Applications</span>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xl font-black">4.7</span>
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">7L reviews</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1.5 mb-1">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-xl font-black">5 cr+</span>
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">App downloads</p>
                  </div>
                </div>

                <div className="relative mx-auto w-40 h-52 bg-slate-100 dark:bg-slate-800 rounded-t-3xl border-x-4 border-t-4 border-slate-800 dark:border-slate-700 p-2 overflow-hidden shadow-2xl transition-transform group-hover:-translate-y-2 duration-500">
                  <div className="w-full h-full bg-blue-600 rounded-t-2xl flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl mb-3 flex items-center justify-center">
                       <Briefcase className="text-white" size={24} />
                    </div>
                    <div className="w-full h-1 bg-white/30 rounded-full mb-2"></div>
                    <div className="w-2/3 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/20 p-6 border-t flex flex-col gap-3">
                <p className="text-xs font-bold text-center text-muted-foreground mb-1">Download it from</p>
                <div className="flex gap-2">
                   <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 w-auto object-contain cursor-pointer transition-transform hover:scale-105 active:scale-95 rounded-md" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png" alt="Play Store" className="h-10 w-auto object-contain cursor-pointer transition-transform hover:scale-105 active:scale-95 rounded-md" />
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
