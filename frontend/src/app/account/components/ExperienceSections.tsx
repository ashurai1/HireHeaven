import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Pencil, 
  Trash2,
  Calendar,
  Building2,
  MapPin,
  X
} from "lucide-react";
import { User } from "@/type";
import { useAppData } from "@/context/AppContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ExperienceSectionsProps {
  user: User;
  isYourAccount: boolean;
}

const ExperienceSections: React.FC<ExperienceSectionsProps> = ({ user, isYourAccount }) => {
  const { updateUser, btnLoading } = useAppData();

  // State for Dialogs
  const [openSection, setOpenSection] = useState<"education" | "experience" | "internship" | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState<any>({});

  const handleOpenDialog = (section: "education" | "experience" | "internship", index: number | null = null) => {
    setOpenSection(section);
    setEditingIndex(index);
    if (index !== null) {
      const data = section === "education" ? user.education?.[index] :
                   section === "experience" ? user.work_experience?.[index] :
                   user.internships?.[index];
      setFormData(data || {});
    } else {
      setFormData({});
    }
  };

  const handleClose = () => {
    setOpenSection(null);
    setEditingIndex(null);
    setFormData({});
  };

  const handleSave = async () => {
    let updatedList = [];
    if (openSection === "education") {
      updatedList = [...(user.education || [])];
      if (editingIndex !== null) updatedList[editingIndex] = formData;
      else updatedList.push(formData);
      await updateUser(user.name, user.phone_number, user.bio || "", user.date_of_birth, user.gender, user.current_location, user.home_town, user.institute_name, user.work_experience, updatedList, user.internships);
    } else if (openSection === "experience") {
      updatedList = [...(user.work_experience || [])];
      if (editingIndex !== null) updatedList[editingIndex] = formData;
      else updatedList.push(formData);
      await updateUser(user.name, user.phone_number, user.bio || "", user.date_of_birth, user.gender, user.current_location, user.home_town, user.institute_name, updatedList, user.education, user.internships);
    } else if (openSection === "internship") {
      updatedList = [...(user.internships || [])];
      if (editingIndex !== null) updatedList[editingIndex] = formData;
      else updatedList.push(formData);
      await updateUser(user.name, user.phone_number, user.bio || "", user.date_of_birth, user.gender, user.current_location, user.home_town, user.institute_name, user.work_experience, user.education, updatedList);
    }
    handleClose();
  };

  const handleDelete = async (section: "education" | "experience" | "internship", index: number) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    
    if (section === "education") {
      const updatedList = user.education?.filter((_, i) => i !== index);
      await updateUser(user.name, user.phone_number, user.bio || "", user.date_of_birth, user.gender, user.current_location, user.home_town, user.institute_name, user.work_experience, updatedList, user.internships);
    } else if (section === "experience") {
      const updatedList = user.work_experience?.filter((_, i) => i !== index);
      await updateUser(user.name, user.phone_number, user.bio || "", user.date_of_birth, user.gender, user.current_location, user.home_town, user.institute_name, updatedList, user.education, user.internships);
    } else if (section === "internship") {
      const updatedList = user.internships?.filter((_, i) => i !== index);
      await updateUser(user.name, user.phone_number, user.bio || "", user.date_of_birth, user.gender, user.current_location, user.home_town, user.institute_name, user.work_experience, user.education, updatedList);
    }
  };

  return (
    <div className="space-y-6">
      {/* Education Section */}
      <Card className="p-6 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 border-none">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-bold text-zinc-800">Education</h3>
          {isYourAccount && (
            <Button onClick={() => handleOpenDialog("education")} variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 h-auto p-0 font-bold flex items-center gap-1">
              <Plus size={16} /> Add
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {user.education && user.education.length > 0 ? (
            user.education.map((edu, index) => (
              <div key={index} className="flex gap-4 group relative">
                <div className="h-10 w-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-700">
                  <GraduationCap size={20} className="text-zinc-400" />
                </div>
                <div className="flex-1 space-y-1 pb-4 border-b border-zinc-50 last:border-0 dark:border-zinc-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-zinc-900">{edu.degree}</h4>
                      <p className="text-xs text-zinc-500 font-medium">{edu.institute}</p>
                    </div>
                    {isYourAccount && (
                      <Button onClick={() => handleOpenDialog("education", index)} variant="ghost" size="sm" className="h-auto p-0 text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-1">
                        <Pencil size={12} /> Edit
                      </Button>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-medium">{edu.startYear} - {edu.endYear || "Present"}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/20 border border-dashed border-zinc-200 flex items-center justify-center py-8">
               <p className="text-xs font-bold text-zinc-400">No education details added yet</p>
            </div>
          )}
        </div>
      </Card>

      {/* Work Experience Section */}
      <Card className="p-6 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 border-none">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-bold text-zinc-800">Work Experience</h3>
          {isYourAccount && (
            <Button onClick={() => handleOpenDialog("experience")} variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 h-auto p-0 font-bold flex items-center gap-1">
              <Plus size={16} /> Add
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {user.work_experience && user.work_experience.length > 0 ? (
            user.work_experience.map((exp, index) => (
              <div key={index} className="flex gap-4 group relative">
                <div className="h-10 w-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-700">
                  <Briefcase size={20} className="text-zinc-400" />
                </div>
                <div className="flex-1 space-y-1 pb-4 border-b border-zinc-50 last:border-0 dark:border-zinc-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-zinc-900">{exp.designation}</h4>
                      <p className="text-xs text-zinc-500 font-medium">{exp.company}</p>
                    </div>
                    {isYourAccount && (
                      <Button onClick={() => handleOpenDialog("experience", index)} variant="ghost" size="sm" className="h-auto p-0 text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-1">
                        <Pencil size={12} /> Edit
                      </Button>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-medium">{exp.startDate} - {exp.endDate || "Present"}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-50/10 dark:bg-emerald-950/20 border border-emerald-50 dark:border-emerald-900/20 flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-emerald-100 flex items-center justify-center shrink-0">
                <Briefcase size={20} className="text-emerald-500" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-zinc-800">Have you started working yet?</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">You have not added any experience since completing your education.</p>
                </div>
                <Button onClick={() => handleOpenDialog("experience")} variant="outline" size="sm" className="h-8 rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold px-4 text-xs">
                  Add Experience
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Internship Section */}
      <Card className="p-6 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 border-none">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-bold text-zinc-800">Internship</h3>
          {isYourAccount && (
            <Button onClick={() => handleOpenDialog("internship")} variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 h-auto p-0 font-bold flex items-center gap-1">
              <Plus size={16} /> Add
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {user.internships && user.internships.length > 0 ? (
            user.internships.map((intern, index) => (
              <div key={index} className="flex gap-4 group relative">
                <div className="h-10 w-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-700">
                  <Briefcase size={20} className="text-zinc-400" />
                </div>
                <div className="flex-1 space-y-1 pb-4 border-b border-zinc-50 last:border-0 dark:border-zinc-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-zinc-900">{intern.role}</h4>
                      <p className="text-xs text-zinc-500 font-medium">{intern.company}</p>
                    </div>
                    {isYourAccount && (
                      <Button onClick={() => handleOpenDialog("internship", index)} variant="ghost" size="sm" className="h-auto p-0 text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-1">
                        <Pencil size={12} /> Edit
                      </Button>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-medium">{intern.duration}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/20 border border-dashed border-zinc-200 flex items-center justify-center py-8">
               <p className="text-xs font-bold text-zinc-400">No internships added yet</p>
            </div>
          )}
        </div>
      </Card>

      {/* Unified Dialog for Forms */}
      <Dialog open={!!openSection} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="sm:max-w-[425px] rounded-3xl p-8 border-zinc-200 dark:border-zinc-800">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-black tracking-tight">
              {editingIndex !== null ? "Edit" : "Add"} {openSection === "education" ? "Education" : openSection === "experience" ? "Work Experience" : "Internship"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-5 py-2">
            {openSection === "education" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Institution Name</Label>
                  <Input 
                    value={formData.institute || ""} 
                    onChange={(e) => setFormData({...formData, institute: e.target.value})}
                    placeholder="e.g. Chandigarh Group of Colleges" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Degree</Label>
                  <Input 
                    value={formData.degree || ""} 
                    onChange={(e) => setFormData({...formData, degree: e.target.value})}
                    placeholder="e.g. B.Tech Computer Science" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Start Year</Label>
                    <Input 
                      value={formData.startYear || ""} 
                      onChange={(e) => setFormData({...formData, startYear: e.target.value})}
                      placeholder="2022" 
                      className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">End Year</Label>
                    <Input 
                      value={formData.endYear || ""} 
                      onChange={(e) => setFormData({...formData, endYear: e.target.value})}
                      placeholder="2025" 
                      className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                    />
                  </div>
                </div>
              </>
            )}

            {openSection === "experience" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Company Name</Label>
                  <Input 
                    value={formData.company || ""} 
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g. Google" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Designation</Label>
                  <Input 
                    value={formData.designation || ""} 
                    onChange={(e) => setFormData({...formData, designation: e.target.value})}
                    placeholder="e.g. Senior Developer" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Start Date</Label>
                    <Input 
                      value={formData.startDate || ""} 
                      style={{ colorScheme: 'dark' }}
                      type="month"
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">End Date</Label>
                    <Input 
                      value={formData.endDate || ""} 
                      style={{ colorScheme: 'dark' }}
                      type="month"
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      placeholder="Present" 
                      className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Description</Label>
                  <Input 
                    value={formData.description || ""} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe your role and achievements" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
              </>
            )}

            {openSection === "internship" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Company Name</Label>
                  <Input 
                    value={formData.company || ""} 
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g. Microsoft" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Internship Role</Label>
                  <Input 
                    value={formData.role || ""} 
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    placeholder="e.g. Frontend Intern" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Duration (e.g. Jun 24 - Aug 24)</Label>
                  <Input 
                    value={formData.duration || ""} 
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    placeholder="e.g. 3 Months (June - August)" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Key Takeaways</Label>
                  <Input 
                    value={formData.description || ""} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="What did you learn?" 
                    className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  />
                </div>
              </>
            )}
          </div>

          <DialogFooter className="mt-8">
            <Button 
              onClick={handleSave} 
              disabled={btnLoading}
              className="w-full h-14 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xl shadow-zinc-200 dark:shadow-none"
            >
              {btnLoading ? "Saving..." : "Save Details"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExperienceSections;
