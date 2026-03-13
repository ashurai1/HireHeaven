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
      <Card className="p-8 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/30">
              <GraduationCap className="text-orange-500" size={22} />
            </div>
            Education
          </h3>
          {isYourAccount && (
            <Button onClick={() => handleOpenDialog("education")} variant="outline" size="sm" className="rounded-full font-bold border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
              <Plus size={16} className="mr-1" /> Add
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {user.education && user.education.length > 0 ? (
            user.education.map((edu, index) => (
              <div key={index} className="flex gap-4 group relative">
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-full bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center border border-orange-100 dark:border-orange-900/30">
                    <GraduationCap size={20} className="text-orange-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-1 pb-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-base">{edu.institute || "Institution Name"}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{edu.degree}</p>
                    </div>
                    {isYourAccount && (
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button onClick={() => handleOpenDialog("education", index)} variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"><Pencil size={14}/></Button>
                        <Button onClick={() => handleDelete("education", index)} variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-500"><Trash2 size={14}/></Button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 font-bold tracking-tight bg-zinc-100 dark:bg-zinc-800 w-fit px-2 py-0.5 rounded-md">{edu.startYear} - {edu.endYear || "Present"}</p>
                </div>
              </div>
            ))
          ) : (
             <div className="flex flex-col items-center justify-center py-6 text-center space-y-2 bg-zinc-50/50 dark:bg-zinc-800/20 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-700">
                <p className="text-sm font-bold text-zinc-400">No education details added yet</p>
             </div>
          )}
        </div>
      </Card>

      {/* Work Experience Section */}
      <Card className="p-8 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <Briefcase className="text-blue-500" size={22} />
            </div>
            Work Experience
          </h3>
          {isYourAccount && (
            <Button onClick={() => handleOpenDialog("experience")} variant="outline" size="sm" className="rounded-full font-bold border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
              <Plus size={16} className="mr-1" /> Add
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {user.work_experience && user.work_experience.length > 0 ? (
            user.work_experience.map((exp, index) => (
              <div key={index} className="flex gap-4 group relative">
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                    <Briefcase size={20} className="text-blue-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-1 pb-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-base">{exp.company}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{exp.designation}</p>
                    </div>
                    {isYourAccount && (
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button onClick={() => handleOpenDialog("experience", index)} variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"><Pencil size={14}/></Button>
                        <Button onClick={() => handleDelete("experience", index)} variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-500"><Trash2 size={14}/></Button>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs text-zinc-500 font-bold tracking-tight bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">{exp.startDate} - {exp.endDate || "Present"}</p>
                    {exp.location && <p className="text-xs text-zinc-400 flex items-center gap-1"><MapPin size={10}/> {exp.location}</p>}
                  </div>
                  {exp.description && <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">{exp.description}</p>}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-3 bg-zinc-50/50 dark:bg-zinc-800/20 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-700">
              <div className="p-4 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <Briefcase size={32} className="text-zinc-300" />
              </div>
              <div className="max-w-[200px]">
                <p className="text-sm font-bold">Add your work experience</p>
                <p className="text-xs text-zinc-500">60% of recruiters look for work history</p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Internships Section */}
      <Card className="p-8 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/30">
              <Award className="text-purple-500" size={22} />
            </div>
            Internships
          </h3>
          {isYourAccount && (
            <Button onClick={() => handleOpenDialog("internship")} variant="outline" size="sm" className="rounded-full font-bold border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
              <Plus size={16} className="mr-1" /> Add
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {user.internships && user.internships.length > 0 ? (
            user.internships.map((intern, index) => (
              <div key={index} className="flex gap-4 group relative">
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-full bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center border border-purple-100 dark:border-purple-900/30">
                    <Award size={20} className="text-purple-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-1 pb-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-base">{intern.company}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{intern.role}</p>
                    </div>
                    {isYourAccount && (
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button onClick={() => handleOpenDialog("internship", index)} variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"><Pencil size={14}/></Button>
                        <Button onClick={() => handleDelete("internship", index)} variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-500"><Trash2 size={14}/></Button>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs text-zinc-500 font-bold tracking-tight bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">{intern.duration}</p>
                  </div>
                  {intern.description && <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">{intern.description}</p>}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-3 bg-zinc-50/50 dark:bg-zinc-800/20 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-700">
              <div className="p-4 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <Award size={32} className="text-zinc-300" />
              </div>
              <div className="max-w-[200px]">
                <p className="text-sm font-bold">Add your internships</p>
                <p className="text-xs text-zinc-500">Stand out with practical exposure</p>
              </div>
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
              {btnLoading ? "Savng..." : "Save Details"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExperienceSections;
