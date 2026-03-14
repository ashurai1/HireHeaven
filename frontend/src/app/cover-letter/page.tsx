"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Copy, Download, Sparkles, RefreshCw, Send, ShieldCheck, Zap } from "lucide-react";
import { toast } from "react-hot-toast";

export default function CoverLetterGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    hiringManager: "",
    jobDescription: "",
    tone: "professional",
    experienceYears: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tone: value }));
  };

  const generateLetter = () => {
    if (!formData.fullName || !formData.jobTitle || !formData.companyName) {
      toast.error("Please fill in at least your name, job title, and company name.");
      return;
    }

    setIsGenerating(true);
    
    // Simulating API call for generation
    setTimeout(() => {
      const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      const managerName = formData.hiringManager || "Hiring Manager";
      const expText = formData.experienceYears ? ` With my ${formData.experienceYears} years of experience in the field,` : "";
      
      let letterContent = "";
      
      if (formData.tone === "enthusiastic") {
        letterContent = `${date}\n\nDear ${managerName},\n\nI was absolutely thrilled to see the opening for the ${formData.jobTitle} position at ${formData.companyName}. As a long-time admirer of your company's innovative work, I would jump at the chance to bring my skills to your team!\n\n${expText} I have developed a deep passion for this work and a track record of delivering high-quality results. Your recent projects have truly inspired me, and I know I could hit the ground running and make immediate contributions.\n\nThank you so much for considering my application. I would love the opportunity to discuss how my enthusiasm and background make me a perfect fit for this role.\n\nBest regards,\n${formData.fullName}`;
      } else if (formData.tone === "confident") {
        letterContent = `${date}\n\nDear ${managerName},\n\nI am writing to express my strong interest in the ${formData.jobTitle} position at ${formData.companyName}. My exceptional background and proven ability to drive results make me an ideal candidate for this role.\n\n${expText} I have consistently outperformed expectations and led strategic initiatives that directly improved the bottom line. I am confident that my expertise aligns perfectly with the goals of ${formData.companyName}.\n\nI am eager to bring my high-level skills to your team. Let's connect to discuss how I can help your organization achieve its objectives.\n\nSincerely,\n${formData.fullName}`;
      } else {
        // Professional (default)
        letterContent = `${date}\n\nDear ${managerName},\n\nI am writing to apply for the ${formData.jobTitle} position at ${formData.companyName}. With a strong background in this industry, I am very interested in the opportunity to contribute to your team.\n\n${expText} I have developed a solid foundation of skills that make me a strong fit for the responsibilities outlined in your job description. I admire ${formData.companyName}'s commitment to excellence and would be honored to join your organization.\n\nThank you for taking the time to review my application. I look forward to the possibility of discussing this opportunity with you.\n\nBest regards,\n${formData.fullName}`;
      }

      setGeneratedLetter(letterContent);
      setIsGenerating(false);
      toast.success("Cover letter generated successfully!");
    }, 1500);
  };

  const copyToClipboard = () => {
    if (!generatedLetter) return;
    navigator.clipboard.writeText(generatedLetter);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4 text-blue-600 dark:text-blue-400">
            <FileText size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
            Smart Cover Letter Builder
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Generate tailored, impactful cover letters in seconds. Just tell us about the job and let our tool do the heavy lifting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Input Form Column */}
          <div className="space-y-6">
            <Card className="p-6 border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <ShieldCheck className="text-blue-500" size={20} />
                <h2 className="text-lg font-bold">Your Details & Job Info</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="e.g. John Doe" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-slate-50 dark:bg-slate-800/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experienceYears">Years of Experience</Label>
                  <Input 
                    id="experienceYears" 
                    name="experienceYears" 
                    placeholder="e.g. 3" 
                    type="number"
                    value={formData.experienceYears}
                    onChange={handleInputChange}
                    className="bg-slate-50 dark:bg-slate-800/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title Applying For <span className="text-red-500">*</span></Label>
                  <Input 
                    id="jobTitle" 
                    name="jobTitle" 
                    placeholder="e.g. Frontend Developer" 
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="bg-slate-50 dark:bg-slate-800/50 border-blue-100 dark:border-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                  <Input 
                    id="companyName" 
                    name="companyName" 
                    placeholder="e.g. Google" 
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="bg-slate-50 dark:bg-slate-800/50 border-blue-100 dark:border-blue-900"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-5">
                <Label htmlFor="hiringManager">Hiring Manager Name (Optional)</Label>
                <Input 
                  id="hiringManager" 
                  name="hiringManager" 
                  placeholder="e.g. Sarah Jenkins or 'Hiring Team'" 
                  value={formData.hiringManager}
                  onChange={handleInputChange}
                  className="bg-slate-50 dark:bg-slate-800/50"
                />
              </div>

              <div className="space-y-2 mb-5">
                <Label htmlFor="jobDescription">Key Skills / Job Highlights</Label>
                <Textarea 
                  id="jobDescription" 
                  name="jobDescription" 
                  placeholder="Paste a few key requirements from the job description..." 
                  className="min-h-[100px] bg-slate-50 dark:bg-slate-800/50 resize-y"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2 mb-8">
                <Label>Letter Tone</Label>
                <Select value={formData.tone} onValueChange={handleToneChange}>
                  <SelectTrigger className="bg-slate-50 dark:bg-slate-800/50">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional & Direct</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic & Passionate</SelectItem>
                    <SelectItem value="confident">Confident & Bold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={generateLetter} 
                disabled={isGenerating}
                className="w-full h-12 text-md font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Generating Magic...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Cover Letter
                  </>
                )}
              </Button>
            </Card>
          </div>

          {/* Preview Column */}
          <div className="h-full">
            <Card className="h-full min-h-[600px] flex flex-col border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 overflow-hidden relative">
              
              {/* Top Action Bar */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <Zap className="text-amber-500" size={18} />
                  <span className="font-semibold text-sm">Preview</span>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={copyToClipboard}
                    disabled={!generatedLetter}
                    className="h-8 text-xs bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <Copy size={14} className="mr-1.5" /> Copy
                  </Button>
                  {/* Download could be implemented with jsPDF similar to Resume Builder */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    disabled={!generatedLetter}
                    className="h-8 text-xs bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900"
                    onClick={() => {
                      setTimeout(() => {
                        window.print();
                      }, 100);
                    }}
                  >
                    <Download size={14} className="mr-1.5" /> Save PDF
                  </Button>
                </div>
              </div>

              {/* Document Area */}
              <div 
                className="flex-1 p-8 md:p-12 overflow-y-auto bg-[#f8fafc] dark:bg-slate-950/50 flex justify-center print:bg-white print:p-0 cover-letter-print-area"
              >
                {generatedLetter ? (
                  <div className="w-full max-w-[550px] bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-sm text-sm text-slate-800 dark:text-slate-300 whitespace-pre-wrap font-serif leading-relaxed print:shadow-none print:border-none print:max-w-none print:text-black">
                    {generatedLetter}
                  </div>
                ) : (
                  <div className="w-full max-w-[550px] bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-sm flex flex-col items-center justify-center text-center opacity-60">
                    <Send className="text-slate-300 dark:text-slate-600 mb-4" size={48} />
                    <h3 className="text-lg font-medium text-slate-400 dark:text-slate-500 mb-2">Ready to Draft</h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 max-w-xs">
                      Fill out the form on the left and click generate to create a professional cover letter tailored to your dream job.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
