"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, ChevronLeft, Download, FileText, CheckCircle2, CheckCircle } from "lucide-react";

export default function ResumeBuilder() {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    personal: { name: "", email: "", phone: "", linkedin: "", summary: "" },
    experience: [{ company: "", role: "", duration: "", description: "" }],
    education: [{ school: "", degree: "", year: "" }],
    skills: "",
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const updatePersonal = (field: string, value: string) => {
    setResumeData({ ...resumeData, personal: { ...resumeData.personal, [field]: value } });
  };

  const steps = [
    { id: 1, name: "Personal Info" },
    { id: 2, name: "Experience" },
    { id: 3, name: "Education" },
    { id: 4, name: "Final Polish" },
  ];

  return (
    <div className="min-h-screen bg-background pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight text-foreground mb-4">
            Build Your <span className="text-blue-600">Dream Resume</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our AI-optimized builder ensures your resume passes Applicant Tracking Systems (ATS) while looking crisp and modern.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 dark:bg-gray-800 -z-10 translate-y-[-50%] rounded-full"></div>
            <div 
              className="absolute left-0 top-1/2 h-1 bg-blue-600 -z-10 translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
            
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-colors duration-300 ${
                  step >= s.id 
                    ? "bg-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900/40" 
                    : "bg-white text-gray-400 border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-800"
                }`}>
                  {step > s.id ? <CheckCircle2 size={20} /> : s.id}
                </div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${step >= s.id ? "text-blue-600 dark:text-blue-500" : "text-muted-foreground"}`}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form Area */}
          <Card className="p-8 border-none shadow-xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="h-11 bg-gray-50 dark:bg-slate-800/50" value={resumeData.personal.name} onChange={(e) => updatePersonal('name', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-11 bg-gray-50 dark:bg-slate-800/50" value={resumeData.personal.email} onChange={(e) => updatePersonal('email', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="h-11 bg-gray-50 dark:bg-slate-800/50" value={resumeData.personal.phone} onChange={(e) => updatePersonal('phone', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn/Portfolio</Label>
                    <Input id="linkedin" placeholder="linkedin.com/in/johndoe" className="h-11 bg-gray-50 dark:bg-slate-800/50" value={resumeData.personal.linkedin} onChange={(e) => updatePersonal('linkedin', e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea id="summary" placeholder="A brief summary of your expertise and goals..." className="min-h-[120px] bg-gray-50 dark:bg-slate-800/50 resize-none" value={resumeData.personal.summary} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updatePersonal('summary', e.target.value)} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Work Experience</h2>
                <div className="p-4 border border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl space-y-4 relative group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Job Title</Label>
                      <Input placeholder="Senior Software Engineer" className="h-11 bg-white dark:bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input placeholder="Google" className="h-11 bg-white dark:bg-slate-800" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Duration</Label>
                      <Input placeholder="Jan 2021 - Present" className="h-11 bg-white dark:bg-slate-800" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Description</Label>
                      <Textarea placeholder="Describe your achievements and impact..." className="min-h-[100px] bg-white dark:bg-slate-800 resize-none" />
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-dashed border-2 hover:bg-blue-50 dark:hover:bg-slate-800 h-12 text-blue-600">
                  + Add another experience
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education & Skills</h2>
                <div className="p-4 border rounded-xl space-y-4 bg-gray-50/50 dark:bg-slate-800/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <Label>School / University</Label>
                      <Input placeholder="Stanford University" className="h-11 bg-white dark:bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <Label>Degree</Label>
                      <Input placeholder="B.S. Computer Science" className="h-11 bg-white dark:bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <Label>Graduation Year</Label>
                      <Input placeholder="2022" className="h-11 bg-white dark:bg-slate-800" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Label>Top Skills (comma separated)</Label>
                  <Textarea placeholder="React, Node.js, TypeScript, UI/UX..." className="bg-gray-50 dark:bg-slate-800/50" />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 text-center py-10 animate-in fade-in scale-95 duration-500">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-black text-foreground">You're all set!</h2>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Your resume looks fantastic. We've optimized the layout for the best possible ATS score.
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/50">
              <Button 
                variant="ghost" 
                onClick={prevStep} 
                disabled={step === 1}
                className="gap-2 font-medium"
              >
                <ChevronLeft size={16} /> Back
              </Button>
              <Button 
                onClick={step === 4 ? () => {
                  setTimeout(() => window.print(), 100);
                } : nextStep} 
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-md hover:shadow-lg transition-all"
              >
                {step === 4 ? (
                  <>Download PDF <Download size={16} /></>
                ) : (
                  <>Next Step <ChevronRight size={16} /></>
                )}
              </Button>
            </div>
          </Card>

          {/* Live Preview Area */}
          <div className="hidden lg:block relative print:block print:w-full print:absolute print:inset-0 print:z-50 print:bg-white resume-print-area">
            <div className="sticky top-24 print:static print:w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 dark:opacity-40 print:hidden"></div>
              <Card className="relative h-[650px] print:h-auto print:min-h-screen bg-white rounded-2xl print:rounded-none p-8 shadow-2xl print:shadow-none flex flex-col items-center justify-center print:justify-start text-center print:text-left overflow-hidden border border-gray-200 print:border-none">
                {/* Simulated Paper Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] mix-blend-multiply"></div>
                
                {resumeData.personal.name ? (
                  <div className="w-full h-full text-left space-y-4 z-10 animate-in fade-in duration-700">
                    <div className="border-b pb-4 mb-4">
                      <h1 className="text-2xl font-serif font-bold text-gray-900">{resumeData.personal.name}</h1>
                      <div className="flex gap-3 text-xs text-gray-500 mt-2 font-sans">
                        {resumeData.personal.email && <span>{resumeData.personal.email}</span>}
                        {resumeData.personal.phone && <span>• {resumeData.personal.phone}</span>}
                      </div>
                    </div>
                    {resumeData.personal.summary && (
                      <div className="text-sm text-gray-700 leading-relaxed font-sans">{resumeData.personal.summary}</div>
                    )}
                    {/* Placeholder lines for the rest of the resume */}
                    <div className="space-y-3 mt-8">
                       <div className="w-1/3 h-5 bg-gray-200 rounded animate-pulse"></div>
                       <div className="w-full h-3 bg-gray-100 rounded"></div>
                       <div className="w-5/6 h-3 bg-gray-100 rounded"></div>
                       <div className="w-4/6 h-3 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                ) : (
                  <div className="z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      <FileText size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-400 mb-2">Live Preview</h3>
                    <p className="text-sm text-gray-400 max-w-[200px]">Start typing on the left to see your resume update in real-time.</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
