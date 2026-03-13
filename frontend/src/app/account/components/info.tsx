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

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <Card className="p-6 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl overflow-hidden bg-white dark:bg-zinc-900">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-zinc-50 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src={user.profile_pic ? user.profile_pic : "/user.png"}
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
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-md border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-transform"
                >
                  <Camera size={14} />
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

          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{user.name}</h1>
              {isYourAccount && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                  onClick={handleEditClick}
                >
                  <Edit size={16} />
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-medium">
                <Briefcase size={14} />
                <span className="capitalize">{user.institute_name || "Chandigarh Group of Colleges"}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-medium">
                <MapPin size={14} />
                <span>{user.current_location || "Mohali, PB"}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Personal Details Card */}
      <Card className="p-8 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl bg-white dark:bg-zinc-900">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          Personal Details
          {isYourAccount && (
            <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 h-auto p-0 font-bold ml-auto" onClick={handleEditClick}>
              Update
            </Button>
          )}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email ID</p>
            <p className="text-sm font-medium truncate">{user.email}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Mobile Number</p>
            <p className="text-sm font-medium">{user.phone_number}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Date of Birth</p>
            <p className="text-sm font-medium">{user.date_of_birth || "Not specified"}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Gender</p>
            <p className="text-sm font-medium capitalize">{user.gender || "Not specified"}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Current Location</p>
            <p className="text-sm font-medium">{user.current_location || "Not specified"}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Home Town</p>
            <p className="text-sm font-medium text-blue-500 cursor-pointer hover:underline font-bold">
              {user.home_town || "Add Home Town"}
            </p>
          </div>
        </div>
      </Card>

      {/* Resume Block */}
      {user.role === "jobseeker" && (
        <Card className={`p-6 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl ${!user.resume ? 'bg-zinc-50/50 dark:bg-zinc-800/10 border-dashed border-2' : 'bg-white dark:bg-zinc-900 border'}`}>
          <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${!user.resume ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700' : 'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50'}`}>
              <FileText size={24} className={!user.resume ? 'text-zinc-400' : 'text-red-500'} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">Resume</h4>
              <p className="text-xs text-zinc-500">{user.resume ? "Updated recently" : "No resume uploaded yet"}</p>
            </div>
            <div className="flex items-center gap-2">
              {user.resume && (
                <a
                  href={user.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-full font-bold">
                    View
                  </Button>
                </a>
              )}
              {isYourAccount && (
                <>
                  <Button onClick={handleResumeClick} variant={!user.resume ? "default" : "ghost"} size="sm" className={`h-9 font-bold ${user.resume ? 'text-blue-500 hover:text-blue-600' : ''}`}>
                    {user.resume ? "Update" : "Upload Resume"}
                  </Button>
                  <input
                    type="file"
                    ref={resumeRef}
                    className="hidden"
                    accept="application/pdf"
                    onChange={changeResume}
                  />
                </>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Subscription Block - simplified for sidebar feel */}
      {isYourAccount && user.role === "jobseeker" && (
        <Card className="p-6 bg-blue-600 text-white rounded-2xl shadow-lg border-none overflow-hidden relative group">
          <Crown size={80} className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform" />
          <div className="relative z-10">
            <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
              Premium Duo
              {user.subscription && new Date(user.subscription).getTime() > Date.now() && <CheckCircle2 size={16} className="text-blue-200" />}
            </h4>
            <p className="text-sm opacity-80 mb-4">Unlock double the hiring chances</p>
            <Button 
                variant="secondary" 
                size="sm" 
                className="w-full h-10 rounded-xl font-bold bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => router.push("/subscribe")}
            >
              {user.subscription && new Date(user.subscription).getTime() > Date.now() ? "View Plan" : "Get Premium"}
            </Button>
          </div>
        </Card>
      )}

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
