"use client";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { job_service, useAppData } from "@/context/AppContext";
import { Application, Job } from "@/type";
import axios from "axios";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  DollarSign,
  MapPin,
  Users,
  Flame,
  Zap,
  Share2,
  Clock,
  GraduationCap,
  Banknote,
  Navigation,
  CheckCircle,
  FileText,
  Building,
  ChevronRight
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import Link from "next/link";

const JobPage = () => {
  const { id } = useParams();
  const { user, isAuth, applyJob, applications, btnLoading } = useAppData();
  const router = useRouter();

  const [job, setJob] = useState<Job | null>(null);

  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (applications && id) {
      applications.forEach((item: any) => {
        if (item.job_id.toString() === id) setApplied(true);
      });
    }
  }, [applications, id]);

  const applyJobHandler = (id: number) => {
    if (!isAuth) {
      toast.error("Please login to apply for this job");
      router.push("/login");
      return;
    }
    applyJob(id);
  };

  const [loading, setLoading] = useState(true);

  async function fetchSingleJob() {
    try {
      const { data } = await axios.get(`${job_service}/api/job/${id}`);
      setJob(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSingleJob();
  }, [id]);

  const [jobApplications, setJobApplications] = useState<Application[]>([]);

  const token = Cookies.get("token");

  async function fetchJobApplications() {
    try {
      const { data } = await axios.get(
        `${job_service}/api/job/application/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobApplications(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user && job && user.user_id === job.posted_by_recuriter_id) {
      fetchJobApplications();
    }
  }, [user, job]);

  const [filterStatus, setFilterStatus] = useState("All");

  const filteredApplications =
    filterStatus === "All"
      ? jobApplications
      : jobApplications.filter((app) => app.status === filterStatus);

  const [value, setValue] = useState("");

  const updateApplicationHandler = async (id: number) => {
    if (value === "") return toast.error("Please give valid value");

    try {
      const { data } = await axios.put(
        `${job_service}/api/job/application/update/${id}`,
        { status: value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);
      fetchJobApplications();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-4 pb-12 font-sans">
      {loading ? (
        <Loading />
      ) : (
        <>
          {job && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <ChevronRight size={14} />
                <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
                <ChevronRight size={14} />
                <span className="text-gray-900 font-medium line-clamp-1">{job.title}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Header Card */}
                  <Card className="p-4 sm:p-6 border-0 shadow-sm rounded-xl bg-white">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-3 sm:gap-4 items-start w-full">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border bg-white p-1.5 sm:p-2 flex shrink-0 shadow-sm">
                          <img src={job.company_logo} alt={job.company_name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 line-clamp-2">{job.title}</h1>
                          <p className="text-sm text-gray-600 font-medium">{job.company_name}</p>
                          
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5 whitespace-nowrap">
                              <MapPin size={16} className="text-gray-400" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5 whitespace-nowrap">
                              <Banknote size={16} className="text-gray-400" />
                              <span>{job.salary ? `₹${job.salary}` : "Not disclosed"} {job.salary && <span className="text-xs">monthly</span>}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-100/80 text-xs font-semibold text-gray-700">
                        <Building size={14} className="text-gray-500" /> {job.work_location === "Remote" ? "Work from Home" : "Work from Office"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-100/80 text-xs font-semibold text-gray-700">
                        <Clock size={14} className="text-gray-500" /> {job.job_type || "Full Time"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-100/80 text-xs font-semibold text-gray-700">
                        <GraduationCap size={14} className="text-gray-500" /> Freshers
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-100/80 text-xs font-semibold text-gray-700">
                        <FileText size={14} className="text-gray-500" /> Basic English
                      </span>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                      {(!user || user.role === "jobseeker") && job.is_active && (
                        <div className="flex-1 max-w-sm order-1 sm:order-none">
                          {applied ? (
                            <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg h-11 sm:h-12 font-bold text-base shadow flex items-center gap-2 cursor-default pointer-events-none">
                              <CheckCircle2 size={18} /> Applied
                            </Button>
                          ) : (
                            <Button 
                              onClick={() => applyJobHandler(job.job_id)}
                              disabled={btnLoading}
                              className="w-full bg-[#1b8354] hover:bg-[#146b43] text-white rounded-lg h-11 sm:h-12 font-bold text-base shadow-md transition-all active:scale-95"
                            >
                              {btnLoading ? "Processing..." : "Apply for job"}
                            </Button>
                          )}
                        </div>
                      )}

                      {(user && user.role === "recruiter") && (
                        <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm border border-blue-100 md:max-w-sm">
                          <CheckCircle2 size={18} className="text-blue-500" /> You posted this job
                        </div>
                      )}

                      {!job.is_active && (
                         <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-red-50 text-red-700 rounded-lg font-medium text-sm border border-red-100 md:max-w-sm">
                           This job is closed
                         </div>
                      )}

                      <Button variant="outline" className="h-11 sm:h-12 px-5 border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center gap-2 font-semibold order-2 sm:order-none rounded-lg shrink-0">
                        <Share2 size={18} /> Share
                      </Button>
                    </div>
                  </Card>

                  {/* Job Highlights */}
                  <Card className="p-5 sm:p-6 border-0 shadow-sm rounded-xl bg-white">
                    <h2 className="text-base font-bold text-gray-900 mb-5">Job highlights</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                      <div className="flex items-start gap-3">
                        <Flame size={20} className="text-[#ea580c] shrink-0 mt-0.5 animate-pulse" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Urgently hiring</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap size={20} className="text-[#4f46e5] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Fast HR reply</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users size={20} className="text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{(job.openings * 3) + 12} applicants</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#1b8354] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Benefits include: Health Insurance, PF</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Job Description */}
                  <Card className="p-5 sm:p-6 border-0 shadow-sm rounded-xl bg-white">
                    <h2 className="text-base font-bold text-gray-900 mb-4">Job Description</h2>
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                      {job.description}
                    </div>
                  </Card>

                  {/* Job Role */}
                  <Card className="p-5 sm:p-6 border-0 shadow-sm rounded-xl bg-white">
                    <h2 className="text-base font-bold text-gray-900 mb-5">Job role</h2>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Building2 size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">Work location</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">{job.location}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Briefcase size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">Department</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">{job.role || "General"}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Navigation size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">Role / Category</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">{job.role}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Clock size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">Employment type</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">{job.job_type}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Job Requirements */}
                  <Card className="p-5 sm:p-6 border-0 shadow-sm rounded-xl bg-white">
                    <h2 className="text-base font-bold text-gray-900 mb-5">Job requirements</h2>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Briefcase size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">Experience</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">Freshers</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <GraduationCap size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">Education</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">Graduate</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <FileText size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">English level</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">Basic English</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Users size={16} className="text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">Gender</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-6">Any gender</p>
                      </div>
                    </div>
                  </Card>

                  {/* About Company */}
                  <Card className="p-5 sm:p-6 border-0 shadow-sm rounded-xl bg-white">
                    <h2 className="text-base font-bold text-gray-900 mb-5">About company</h2>
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-[18px] h-[18px] bg-purple-100 rounded text-purple-700 flex items-center justify-center font-bold text-[10px] shrink-0 ml-0.5">
                            {job.company_name.charAt(0)}
                          </div>
                          <p className="text-xs text-gray-500 font-semibold">Name</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-7">{job.company_name}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Building2 size={16} className="text-gray-400 shrink-0 ml-0.5" />
                          <p className="text-xs text-gray-500 font-semibold">Address</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 pl-7">{job.location}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                  {/* Promo Banner */}
                  <Card className="p-5 border border-orange-100 shadow-sm rounded-xl bg-[#fffaf0]">
                    <h3 className="font-bold text-gray-900 text-sm mb-5 text-center">Get your dream job in 2 simple steps:</h3>
                    <div className="flex items-center justify-between text-center px-1">
                      <div className="flex flex-col items-center gap-2.5">
                        <div className="w-12 h-12 bg-orange-100/80 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                          <Briefcase size={22} className="fill-orange-500/10" />
                        </div>
                        <p className="text-[11px] font-bold text-orange-900 leading-snug">Apply for<br/>job</p>
                      </div>
                      <div className="w-10 h-px bg-orange-200" />
                      <div className="flex flex-col items-center gap-2.5">
                        <div className="w-12 h-12 bg-orange-100/80 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                           <Clock size={22} className="fill-orange-500/10" />
                        </div>
                        <p className="text-[11px] font-bold text-orange-900 leading-snug">Schedule<br/>interview</p>
                      </div>
                      <div className="w-10 h-px bg-orange-200" />
                      <div className="flex flex-col items-center gap-2.5">
                        <div className="w-12 h-12 bg-orange-100/80 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                          <Zap size={22} className="fill-orange-500/10" />
                        </div>
                        <p className="text-[11px] font-bold text-orange-900 leading-snug">Get<br/>hired</p>
                      </div>
                    </div>
                  </Card>

                  {/* App Download Promo */}
                  <Card className="p-6 border-0 shadow-sm rounded-xl bg-white hidden lg:block overflow-hidden relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0" />
                     <h3 className="font-bold text-blue-900 text-sm mb-4 relative z-10">Download HireHeaven app</h3>
                     <div className="relative z-10">
                        <ul className="text-xs text-gray-700 space-y-3 mb-6 font-medium">
                           <li className="flex items-center gap-2">
                             <div className="w-1 h-1 bg-blue-500 rounded-full" />
                             Unlimited job applications
                           </li>
                           <li className="flex items-center gap-2">
                             <div className="w-1 h-1 bg-blue-500 rounded-full" />
                             Connect with HRs directly
                           </li>
                           <li className="flex items-center gap-2">
                             <div className="w-1 h-1 bg-blue-500 rounded-full" />
                             Track your applications
                           </li>
                        </ul>
                        
                        <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 border mt-4">
                           <div className="text-center">
                              <p className="text-base font-bold text-gray-900 flex items-center gap-1 justify-center">
                                 4.9 <Flame size={14} className="text-orange-500 fill-orange-500" />
                              </p>
                              <p className="text-[10px] text-gray-500">10k+ reviews</p>
                           </div>
                           <div className="w-px h-8 bg-gray-200" />
                           <div className="text-center">
                              <p className="text-base font-bold text-gray-900 flex items-center justify-center gap-1">
                                 1L+ <Zap size={14} className="text-blue-500 fill-blue-500" />
                              </p>
                              <p className="text-[10px] text-gray-500">App downloads</p>
                           </div>
                        </div>

                        <Button className="w-full bg-slate-900 hover:bg-black text-white font-semibold flex items-center gap-2 h-11 text-sm mt-4 rounded-lg shadow-sm">
                           Download from Play Store
                        </Button>
                     </div>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {user && job && user.user_id === job.posted_by_recuriter_id && (
        <div className="w-[90%] md:w-2/3 container mx-auto mt-8 mb-8">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-2xl font-bold">All Applications</h2>
            <div className="flex items-center gap-2">
              <label htmlFor="filter-status" className="text-sm font-medium">
                Filter:
              </label>
              <select
                id="filter-status"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="p-2 border-2 border-gray-300 rounded-md bg-background"
              >
                <option value="All">All Status</option>
                <option value="Submitted">Submitted</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {jobApplications && jobApplications.length > 0 ? (
            <>
              <div className="space-y-4">
                {filteredApplications.map((e) => (
                  <div
                    className="p-4 rounded-lg border-2 bg-background"
                    key={e.application_id}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${e.status === "Hired"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600"
                            : e.status === "Rejected"
                              ? "bg-red-100 dark:bg-red-900/30 text-red-600"
                              : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600"
                          }`}
                      >
                        {e.status}
                      </span>
                    </div>

                    <div className="flex gap-3 mb-3">
                      <Link
                        target="_blank"
                        href={e.resume}
                        className="text-blue-500 hover:underline text-sm"
                      >
                        View Resume
                      </Link>

                      <Link
                        target="_blank"
                        href={`/account/${e.applicant_id}`}
                        className="text-blue-500 hover:underline text-sm"
                      >
                        View Profile
                      </Link>
                    </div>

                    {/* update Status */}
                    <div className="flex gap-2 pt-3 border-t">
                      <select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="flex-1 p-2 border-2 border-gray-300 rounded-md bg-background"
                      >
                        <option value="">Update status</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Hired">Hired</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                      <Button
                        disabled={btnLoading}
                        onClick={() =>
                          updateApplicationHandler(e.application_id)
                        }
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredApplications.length === 0 && (
                <p className="text-center py-8 opacity-70">
                  No application with status {filterStatus}
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-center py-8 opacity-70">No application Yet.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default JobPage;
