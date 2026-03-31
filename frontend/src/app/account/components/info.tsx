import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppData } from "@/context/AppContext";
import { AccontProps } from "@/type";
import {
  AlertTriangle,
  Briefcase,
  Camera,
  CheckCircle2,
  Crown,
  Edit,
  FileText,
  Mail,
  MapPin,
  NotepadText,
  Phone,
  RefreshCcw,
  UserIcon,
  Calendar,
  Contact,
  Home,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useRef, useState } from "react";

const Info: React.FC<AccontProps> = ({ user, isYourAccount }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const editRef = useRef<HTMLButtonElement | null>(null);
  const resumeRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [homeTown, setHomeTown] = useState("");

  const { updateProfilePic, updateResume, btnLoading, updateUser } =
    useAppData();

  const handleClick = () => {
    inputRef.current?.click();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      updateProfilePic(formData);
    }
  };

  const handleEditClick = () => {
    setName(user.name);
    setPhoneNumber(user.phone_number);
    setBio(user.bio || "");
    setDob(user.date_of_birth || "");
    setGender(user.gender || "");
    setCurrentLocation(user.current_location || "");
    setHomeTown(user.home_town || "");
    editRef.current?.click();
  };

  const updateProfileHandler = () => {
    updateUser(name, phoneNumber, bio, dob, gender, currentLocation, homeTown, user.institute_name, user.work_experience, user.education, user.internships);
  };

  const handleResumeClick = () => {
    resumeRef.current?.click();
  };

  const changeResume = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Please upload a pdf file");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      updateResume(formData);
    }
  };

  const router = useRouter();

  const isSubscribed = user.subscription && new Date(user.subscription).getTime() > Date.now();

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <Card className="p-6 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border-none">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="w-20 h-20 rounded-full border border-zinc-100 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src={user.profile_pic || "/user.png"}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {isYourAccount && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleClick}
                  className="absolute bottom-0 right-0 rounded-full h-7 w-7 shadow-md border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-transform bg-white text-zinc-600"
                >
                  <Camera size={12} />
                </Button>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  ref={inputRef}
                  onChange={changeHandler}
                />
              </>
            )}
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-bold text-zinc-900 dark:text-white capitalize">{user.name}</h1>
              {isSubscribed && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800">
                  <Crown size={10} className="text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-tight">Subscribed</span>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-zinc-500 text-[13px]">
                <Briefcase size={14} className="text-zinc-400" />
                <span>{user.institute_name || "Chandigarh Group of Colleges"}</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500 text-[13px]">
                <MapPin size={14} className="text-zinc-400" />
                <span>{user.current_location || "Mohali, PB"}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Personal Details Card */}
      <Card className="p-6 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900 border-none">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
            Personal Details
          </h3>
          {isYourAccount && (
            <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 h-auto p-0 font-bold flex items-center gap-1" onClick={handleEditClick}>
              <Edit size={14} /> Edit
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-tight">Email ID</p>
            <p className="text-[13px] font-semibold text-zinc-700 truncate">{user.email}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-tight">Mobile Number</p>
            <p className="text-[13px] font-semibold text-zinc-700">{user.phone_number}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-tight">Date of Birth</p>
            <p className="text-[13px] font-semibold text-zinc-700">{user.date_of_birth || "Add DOB"}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-tight">Gender</p>
            <p className="text-[13px] font-semibold text-zinc-700 capitalize">{user.gender || "Add Gender"}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-tight">Current Location</p>
            <p className="text-[13px] font-semibold text-zinc-700">{user.current_location || "Add Location"}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-tight">Home Town</p>
            <p className="text-[13px] font-semibold text-zinc-700">
              {user.home_town || "Add Home Town"}
            </p>
          </div>
        </div>
      </Card>

      {/* Resume Block */}
      {user.role === "jobseeker" && (
        <Card className={`p-4 border-zinc-100 dark:border-zinc-800 shadow-sm rounded-2xl ${!user.resume ? 'bg-zinc-50 border-dashed border' : 'bg-white border-none'}`}>
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center border ${!user.resume ? 'bg-zinc-100 border-zinc-200' : 'bg-red-50 border-red-100'}`}>
              <FileText size={20} className={!user.resume ? 'text-zinc-400' : 'text-red-500'} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[13px]">Resume</h4>
              <p className="text-[11px] text-zinc-500">{user.resume ? "Updated recently" : "Not uploaded yet"}</p>
            </div>
            <div className="flex items-center gap-2">
              {user.resume && (
                <a href={user.resume} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="h-8 px-3 rounded-xl font-bold text-xs">View</Button>
                </a>
              )}
              {isYourAccount && (
                <Button onClick={handleResumeClick} variant="ghost" size="sm" className="h-8 text-emerald-600 hover:text-emerald-700 font-bold text-xs p-0">
                  {user.resume ? "Update" : "Upload"}
                </Button>
              )}
              <input type="file" ref={resumeRef} className="hidden" accept="application/pdf" onChange={changeResume} />
            </div>
          </div>
        </Card>
      )}

      {/* Subscription Card */}
      <Card className="p-4 bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-2xl shadow-md border-none overflow-hidden relative group">
        <Crown size={60} className="absolute -right-2 -bottom-2 opacity-10 group-hover:scale-110 transition-transform" />
        <div className="relative z-10 space-y-3">
          <div>
            <h4 className="font-bold text-sm flex items-center gap-2">Premium Duo</h4>
            <p className="text-[11px] opacity-80">Unlock 2x more hiring chances</p>
          </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className={`w-full h-9 rounded-xl font-bold text-[12px] ${isSubscribed ? 'bg-emerald-500 text-white hover:bg-emerald-600 border-none' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
              onClick={() => router.push("/subscribe")}
            >
              {isSubscribed ? "Subscribed (Active)" : "Get Premium"}
            </Button>
        </div>
      </Card>

      {/* Dialog box for edit - Moved outside of the main list for clarity */}
      <Dialog>
        <DialogTrigger asChild>
          <Button ref={editRef} variant={"outline"} className="hidden">
            Edit Profile
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Edit profile</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <UserIcon size={16} /> Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="h-11"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone size={16} /> Phone
              </Label>
              <Input
                id="phone"
                type="number"
                placeholder="Enter your Phone Number"
                className="h-11"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob" className="text-sm font-medium flex items-center gap-2">
                <Calendar size={16} /> Date of Birth
              </Label>
              <Input
                id="dob"
                type="text"
                placeholder="e.g. 15th Nov 2004"
                className="h-11"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender" className="text-sm font-medium flex items-center gap-2">
                <Contact size={16} /> Gender
              </Label>
              <Input
                id="gender"
                type="text"
                placeholder="Male / Female / Other"
                className="h-11"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                <MapPin size={16} /> Current Location
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="e.g. Mohali, PB"
                className="h-11"
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hometown" className="text-sm font-medium flex items-center gap-2">
                <Home size={16} /> Home Town
              </Label>
              <Input
                id="hometown"
                type="text"
                placeholder="Enter your Home Town"
                className="h-11"
                value={homeTown}
                onChange={(e) => setHomeTown(e.target.value)}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="bio" className="text-sm font-medium flex items-center gap-2">
                <FileText size={16} /> Bio
              </Label>
              <Input
                id="bio"
                type="text"
                placeholder="Tell us about yourself"
                className="h-11"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              disabled={btnLoading}
              onClick={updateProfileHandler}
              className="w-full h-11"
              type="submit"
            >
              {btnLoading ? "Saving Changes..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Info;
