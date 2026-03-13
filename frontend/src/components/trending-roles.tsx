"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  ChefHat, 
  UtensilsCrossed, 
  Monitor, 
  UserCircle, 
  Wrench, 
  Activity, 
  PenTool, 
  Scissors, 
  Edit3,
  TrendingUp,
  Briefcase,
  Store,
  Truck,
  ShieldCheck,
  Hammer,
  Zap,
  Globe,
  Plus
} from "lucide-react";

const allRoles = [
  { role: "Cook / Chef / Baker", openings: "677 openings", icon: <ChefHat className="w-5 h-5" />, href: "/jobs?role=cook" },
  { role: "Restaurant Staff", openings: "633 openings", icon: <UtensilsCrossed className="w-5 h-5" />, href: "/jobs?role=restaurant" },
  { role: "Admin / Office Assistant", openings: "554 openings", icon: <Monitor className="w-5 h-5" />, href: "/jobs?role=admin" },
  { role: "Receptionist", openings: "532 openings", icon: <UserCircle className="w-5 h-5" />, href: "/jobs?role=receptionist" },
  { role: "Technician", openings: "482 openings", icon: <Wrench className="w-5 h-5" />, href: "/jobs?role=technician" },
  { role: "Business Development", openings: "2116 openings", icon: <TrendingUp className="w-5 h-5" />, href: "/jobs?role=sales" },
  { role: "Retail Sales", openings: "1613 openings", icon: <Store className="w-5 h-5" />, href: "/jobs?role=retail" },
  { role: "Logistics", openings: "1531 openings", icon: <Truck className="w-5 h-5" />, href: "/jobs?role=delivery" },
  { role: "Back Office", openings: "1125 openings", icon: <Briefcase className="w-5 h-5" />, href: "/jobs?role=backoffice" },
  { role: "Marketing", openings: "1056 openings", icon: <Globe className="w-5 h-5" />, href: "/jobs?role=marketing" },
  { role: "Pharmacist", openings: "142 openings", icon: <Activity className="w-5 h-5" />, href: "/jobs?role=pharmacist" },
  { role: "Security Guard", openings: "135 openings", icon: <ShieldCheck className="w-5 h-5" />, href: "/jobs?role=security" },
  { role: "AC Technician", openings: "128 openings", icon: <Zap className="w-5 h-5" />, href: "/jobs?role=ac-tech" },
  { role: "Welder", openings: "108 openings", icon: <Hammer className="w-5 h-5" />, href: "/jobs?role=welder" },
  { role: "Hardware Engineer", openings: "106 openings", icon: <Monitor className="w-5 h-5" />, href: "/jobs?role=it" },
  { role: "Tailor", openings: "67 openings", icon: <Scissors className="w-5 h-5" />, href: "/jobs?role=tailor" },
];

const Row = ({ roles, speedMultiplier = 1 }: { roles: typeof allRoles, speedMultiplier?: number }) => {
  const [hovered, setHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!contentRef.current) return;
      
      const baseSpeed = hovered ? 0.3 : 1.2;
      xPos.current -= baseSpeed * speedMultiplier;

      const totalWidth = contentRef.current.scrollWidth / 2;
      if (Math.abs(xPos.current) >= totalWidth) {
        xPos.current = 0;
      }

      contentRef.current.style.transform = `translateX(${xPos.current}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [hovered, speedMultiplier]);

  return (
    <div
      className="relative flex overflow-hidden whitespace-nowrap cursor-default my-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={contentRef} className="flex shrink-0 items-center py-2 will-change-transform">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center shrink-0">
            {roles.map((item, idx) => (
              <Link
                key={`${item.role}-${i}-${idx}`}
                href={item.href}
                className="mx-4 flex items-center justify-between p-4 px-6 min-w-[280px] bg-card border border-border/40 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:bg-background group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transform group-hover:scale-110 transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[15px] font-light group-hover:font-bold text-foreground transition-all duration-300">
                      {item.role}
                    </h3>
                    <p className="text-[11px] text-muted-foreground/60 group-hover:text-primary transition-colors">
                      {item.openings}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TrendingRoles() {
  const row1 = allRoles.slice(0, Math.ceil(allRoles.length / 2));
  const row2 = allRoles.slice(Math.ceil(allRoles.length / 2));

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 relative z-30 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
          Trending job roles on <span className="text-primary italic">HireHeaven</span>
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-48 z-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-48 z-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

        <Row roles={row1} speedMultiplier={1} />
        <Row roles={row2} speedMultiplier={0.8} />
      </div>

      <div className="container mx-auto px-5 mt-16 flex justify-center z-30 relative">
        <Link
          href="/jobs"
          className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 flex items-center gap-2 group transform hover:-translate-y-1 active:scale-95"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
          Explore all job roles
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
