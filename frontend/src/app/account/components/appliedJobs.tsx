"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Application } from "@/type";
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  Eye,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface AppliedJobsProps {
  applications: Application[];
  isSidebar?: boolean;
}

const AppliedJobs: React.FC<AppliedJobsProps> = ({
  applications,
  isSidebar,
}) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case "hired":
        return {
          icon: CheckCircle2,
          color: "text-green-600 dark:bg-green-900/30",
          bg: "bg-green-100 dark:bg-green-900/30",
          border: "border-green-200 dark:border-green-800",
        };
      case "rejected":
        return {
          icon: XCircle,
          color: "text-red-600 dark:bg-red-900/30",
          bg: "bg-red-100 dark:bg-red-900/30",
          border: "border-red-200 dark:border-red-800",
        };
      default:
        return {
          icon: Clock,
          color: "text-yellow-600 dark:bg-yellow-900/30",
          bg: "bg-yellow-100 dark:bg-yellow-900/30",
          border: "border-yellow-200 dark:border-yellow-800",
        };
    }
  };
  if (isSidebar) {
    return (
      <div className="space-y-4">
        <div 
          onClick={() => {
            document.getElementById("applied-jobs-section")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer group rounded-xl px-2 -mx-2"
        >
          <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center shrink-0">
            <Briefcase size={20} className="text-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-zinc-800">My Applications</h4>
            <p className="text-[11px] text-zinc-500">Check all your applied jobs here</p>
          </div>
          <ChevronRight size={16} className="text-zinc-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden border-none">
        <div className="p-8 border-b border-zinc-50 dark:border-zinc-800 bg-zinc-50/50">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/30 flex items-center justify-center shrink-0">
              <Briefcase size={24} className="text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Applied Jobs</h1>
              <p className="text-sm font-bold text-zinc-500">
                You have submitted {applications.length} applications
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {applications && applications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((a) => {
                const statusConfig = getStatusConfig(a.status);
                const StatusIcon = statusConfig.icon;

                return (
                  <div
                    key={a.application_id}
                    className={`p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-emerald-500/30 transition-all bg-white dark:bg-zinc-900 group relative`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-1 flex-1 min-w-0">
                        <h3 className="text-base font-bold text-zinc-900 dark:text-white truncate pr-8">
                          {a.job_title}
                        </h3>
                        <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{a.job_location || "Remote"}</p>
                      </div>
                      <div className={`h-8 w-8 rounded-full border ${statusConfig.bg} ${statusConfig.border} flex items-center justify-center shrink-0`}>
                        <StatusIcon size={14} className={statusConfig.color} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-50 dark:border-zinc-800">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        <DollarSign size={12} />
                        <span className="font-bold text-[11px]">
                          ₹ {a.job_salary}
                        </span>
                      </div>
                      
                      <Link
                        href={`/jobs/${a.job_id}`}
                        className="text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-1 group/btn"
                      >
                        Details <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className={`text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full ${statusConfig.bg} ${statusConfig.color}`}>
                         {a.status}
                       </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-zinc-50 flex items-center justify-center border border-dashed border-zinc-200">
                <Briefcase size={32} className="text-zinc-300" />
              </div>
              <div className="max-w-[280px]">
                <h4 className="font-bold text-lg text-zinc-900">No applications yet</h4>
                <p className="text-sm text-zinc-500">Your applied roles will appear here. Start exploring jobs now!</p>
              </div>
              <Link href="/jobs">
                <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 font-bold px-6">Explore Jobs</Button>
              </Link>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AppliedJobs;
