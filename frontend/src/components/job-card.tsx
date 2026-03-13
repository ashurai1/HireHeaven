"use client";
import { useAppData } from "@/context/AppContext";
import { Job } from "@/type";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Flame,
  Languages,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import CompanyLogo from "./CompanyLogo";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { user, btnLoading, applyJob, applications } = useAppData();

  const applyJobHandler = (id: number) => {
    applyJob(id);
  };

  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (applications && job.job_id) {
      applications.forEach((item: any) => {
        if (item.job_id === job.job_id) setApplied(true);
      });
    }
  }, [applications, job.job_id]);

  return (
    <Link href={`/jobs/${job.job_id}`} className="block w-full">
      <Card className="w-full hover:shadow-md transition-all duration-300 border hover:border-blue-400 group relative overflow-hidden bg-card cursor-pointer">
        <CardHeader className="p-4 sm:p-5 space-y-3">
          {/* Top Badges */}
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#D97706] bg-[#FFFBEB] dark:bg-orange-950/30 px-2 py-0.5 rounded-sm border border-[#FEF3C7] dark:border-orange-900/40 shadow-sm">
              <Flame size={12} className="fill-orange-500 text-orange-600 animate-pulse" /> Urgently hiring
            </span>
            {job.is_active && (
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded-sm border border-blue-100 dark:border-blue-900/40 shadow-sm">
                <CheckCircle size={12} className="text-blue-600 dark:text-blue-500" /> Fast HR reply
              </span>
            )}
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4 items-start flex-1 min-w-0">
              {/* Company Logo */}
              <CompanyLogo 
                name={job.company_name} 
                logoUrl={job.company_logo} 
                className="transition-transform group-hover:scale-105"
              />

              {/* Job Title and Company */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-foreground line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground line-clamp-1">
                  {job.company_name}
                </p>
              </div>
            </div>

            {/* Right Arrow */}
            <div className="shrink-0 pt-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <ChevronRight size={24} />
            </div>
          </div>

          {/* Job Details Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-muted-foreground/60" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign size={16} className="text-muted-foreground/60" />
              <span className="font-semibold text-foreground">₹ {job.salary}</span>
              <span className="text-xs">monthly</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary border text-xs font-medium">
              <Briefcase size={12} />
              {job.job_type || "Full Time"}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/60 dark:bg-secondary/40 border text-[11px] font-semibold text-muted-foreground">
              <Users size={12} className="opacity-70" />
              Any experience
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/60 dark:bg-secondary/40 border text-[11px] font-semibold text-muted-foreground">
              <Languages size={12} className="opacity-70" />
              Basic English
            </div>
          </div>
        </CardHeader>

        {/* Status indicator */}
        {job.is_active === false && (
          <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest shadow-sm">
            Closed
          </div>
        )}
      </Card>
    </Link>
  );
};

export default JobCard;
