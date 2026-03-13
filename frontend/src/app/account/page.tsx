"use client";
import Loading from "@/components/loading";
import { useAppData } from "@/context/AppContext";
import React, { useEffect } from "react";
import Info from "./components/info";
import Skills from "./components/skills";
import Company from "./components/company";
import { useRouter } from "next/navigation";
import AppliedJobs from "./components/appliedJobs";
import ExperienceSections from "./components/ExperienceSections";

const AccountPage = () => {
  const { isAuth, user, loading, applications } = useAppData();

  const router = useRouter();

  useEffect(() => {
    if (!isAuth && !loading) {
      router.push("/login");
    }
  }, [isAuth, router, loading]);

  if (loading) return <Loading />;
  return (
    <>
      {user && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 items-start">
            {/* Left Sidebar */}
            <div className="space-y-6 sticky top-8">
              <Info user={user} isYourAccount={true} />
              {user.role === "jobseeker" && (
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    My Activities
                  </h3>
                  <AppliedJobs applications={applications} isSidebar={true} />
                </div>
              )}
            </div>

            {/* Right Main Content */}
            <div className="space-y-8">
              {user.role === "jobseeker" && (
                <>
                  <ExperienceSections user={user} isYourAccount={true} />
                  <Skills user={user} isYourAccount={true} />
                </>
              )}
              {user.role === "recruiter" && <Company />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPage;
