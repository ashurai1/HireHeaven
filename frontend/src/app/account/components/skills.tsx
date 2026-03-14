"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppData } from "@/context/AppContext";
import { AccontProps } from "@/type";
import { Award, Plus, Sparkle, X } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Skills: React.FC<AccontProps> = ({ user, isYourAccount }) => {
  const { addSkill, btnLoading, removeSkill } = useAppData();
  const [skill, setSkill] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addSkillHandler = async () => {
    if (!skill.trim()) {
      alert("Please enter a skill");
      return;
    }
    await addSkill(skill, setSkill);
    setIsDialogOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addSkillHandler();
    }
  };

  const removeSkillHandler = (skillToRemove: string) => {
    if (confirm(`Are you sure you want to remove ${skillToRemove} ?`)) {
      removeSkill(skillToRemove);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-3">
      <Card className="p-8 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/30">
              <Award className="text-blue-500" size={22} />
            </div>
            {isYourAccount ? "Your Skills" : "User Skills"}
          </h3>
          {isYourAccount && (
            <Button 
              onClick={() => setIsDialogOpen(true)} 
              variant="outline" 
              size="sm" 
              className="rounded-full font-bold border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              <Plus size={16} className="mr-1" /> Add Skills
            </Button>
          )}
        </div>

        <CardContent className="p-0">
          {user.skills && user.skills.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {user.skills.map((e, i) => (
                <div
                  className="group relative inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/50 rounded-xl hover:border-blue-500 hover:bg-blue-50/10 duration-200 transition-all pl-4 pr-3 py-2"
                  key={i}
                >
                  <span className="font-bold text-sm text-zinc-700 dark:text-zinc-300">{e}</span>

                  {isYourAccount && (
                    <button
                      onClick={() => removeSkillHandler(e)}
                      className="h-6 w-6 rounded-full text-zinc-400 hover:text-red-500 flex items-center justify-center transition-all hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-3 bg-zinc-50/50 dark:bg-zinc-800/20 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-700">
              <div className="p-4 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <Award size={32} className="text-zinc-300" />
              </div>
              <div className="max-w-[250px]">
                <p className="text-sm font-bold">
                  {isYourAccount ? "Add your skills" : "No skills added yet"}
                </p>
                <p className="text-xs text-zinc-500">
                  {isYourAccount ? "Showcase your expertise and abilities" : "The user hasn't added any skills yet"}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-3xl p-8 border-zinc-200 dark:border-zinc-800">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-black tracking-tight">Add Skills</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-5 py-2">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Skill Name</Label>
              <div className="relative">
                <Sparkle
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                />
                <Input
                  type="text"
                  placeholder="e.g. React, Node.js, Python..."
                  className="rounded-xl h-12 pl-10 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 font-medium"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
          </div>

          <DialogFooter className="mt-8">
            <Button 
              onClick={addSkillHandler} 
              disabled={!skill.trim() || btnLoading}
              className="w-full h-14 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xl shadow-zinc-200 dark:shadow-none"
            >
              {btnLoading ? "Adding..." : "Add Skill"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Skills;
