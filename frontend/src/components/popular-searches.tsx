import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const searchCategories = [
  {
    rank: "#1",
    title: "Jobs for Freshers",
    image: "/popular-searches/freshers.png",
    color: "bg-blue-500/10 text-blue-600",
    href: "/jobs?type=fresher",
  },
  {
    rank: "#2",
    title: "Work from home Jobs",
    image: "/popular-searches/wfh.png",
    color: "bg-purple-500/10 text-purple-600",
    href: "/jobs?type=remote",
  },
  {
    rank: "#3",
    title: "Part time Jobs",
    image: "/popular-searches/part-time.png",
    color: "bg-orange-500/10 text-orange-600",
    href: "/jobs?type=part-time",
  },
  {
    rank: "#4",
    title: "Jobs for Women",
    image: "/popular-searches/women.png",
    color: "bg-pink-500/10 text-pink-600",
    href: "/jobs?type=women",
  },
  {
    rank: "#5",
    title: "Full time Jobs",
    image: "/popular-searches/full-time.png",
    color: "bg-emerald-500/10 text-emerald-600",
    href: "/jobs?type=full-time",
  },
];

const PopularSearches = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background blobs for aesthetics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Popular Searches on{" "}
              <span className="text-primary italic">HireHeaven</span>
            </h2>
            <p className="text-lg opacity-60">
              Quickly find the most trending job opportunities that match your
              preferences and career goals.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            Explore all categories
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className={`group relative overflow-hidden rounded-3xl border border-border/50 bg-card hover:bg-accent/5 transition-all duration-500 p-8 flex flex-col justify-between h-[280px] hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${
                index === 0 ? "lg:col-span-2 md:col-span-2" : ""
              }`}
            >
              <div className="relative z-10">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${category.color}`}
                >
                  Trending at {category.rank}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  View all <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Ghost text background */}
              <div className="absolute bottom-4 left-6 text-6xl font-black opacity-[0.03] select-none pointer-events-none uppercase italic group-hover:opacity-[0.05] transition-opacity truncate max-w-[80%]">
                {category.title}
              </div>

              {/* Representative Image */}
              <div className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-[120%] h-[120%] translate-x-[15%] translate-y-[10%] group-hover:scale-110 group-hover:-translate-x-[5%] transition-transform duration-700 ease-out">
                    <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                    />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
