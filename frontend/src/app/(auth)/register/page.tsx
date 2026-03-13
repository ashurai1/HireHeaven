"use client";
import { auth_service, useAppData } from "@/context/AppContext";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { Label } from "@/components/ui/label";
import { ArrowRight, Briefcase, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loading from "@/components/loading";
import { GoogleLogin } from "@react-oauth/google";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [requiresOnboarding, setRequiresOnboarding] = useState(false);
  const [googleToken, setGoogleToken] = useState("");

  const { isAuth, setUser, loading, setIsAuth } = useAppData();

  if (loading) return <Loading />;

  if (isAuth) return redirect("/");

  const handleGoogleSuccess = async (credentialResponse: any) => {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${auth_service}/api/auth/google-login`, {
        token: credentialResponse.credential,
      });

      if (data.requires_onboarding) {
        setGoogleToken(data.googleData.token);
        setRequiresOnboarding(true);
        toast("Please complete your profile to continue", { icon: "ℹ️" });
      } else {
        toast.success(data.message);
        Cookies.set("token", data.token, { expires: 15, secure: false, path: "/" });
        setUser(data.userObject);
        setIsAuth(true);
      }
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Google Sign-In failed.";
      toast.error(message);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleOnboardingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnLoading(true);
    
    const formData = new FormData();
    formData.append("token", googleToken);
    formData.append("role", role);
    formData.append("phoneNumber", phoneNumber);

    if (role === "jobseeker") {
      formData.append("bio", bio);
      if (resume) {
        formData.append("file", resume);
      }
    }

    try {
      const { data } = await axios.post(`${auth_service}/api/auth/google-register`, formData);
      toast.success(data.message);
      Cookies.set("token", data.token, { expires: 15, secure: false, path: "/" });
      setUser(data.registeredUser);
      setIsAuth(true);
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Onboarding failed.";
      toast.error(message);
    } finally {
      setBtnLoading(false);
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBtnLoading(true);
    const formData = new FormData();

    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);

    if (role === "jobseeker") {
      formData.append("bio", bio);
      if (resume) {
        formData.append("file", resume);
      }
    }
    try {
      const { data } = await axios.post(
        `${auth_service}/api/auth/register`,
        formData
      );

      toast.success(data.message);

      Cookies.set("token", data.token, {
        expires: 15,
        secure: false,
        path: "/",
      });
      setUser(data.registeredUser);
      setIsAuth(true);
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Server connection failed. Please try again.";
      toast.error(message);
      setIsAuth(false);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {requiresOnboarding ? "Complete Your Profile" : "Join HireHeaven"}
          </h1>
          <p className="text-sm opacity-70">
            {requiresOnboarding ? "Just a few more details to get started" : "Create your account to start a new journey"}
          </p>
        </div>
        <div className="border border-gray-400 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
          {requiresOnboarding ? (
            <form onSubmit={handleOnboardingSubmit} className="space-y-5 flex flex-col">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">I want to</Label>
                <div className="relative">
                  <Briefcase className="icon-style" />
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 border-2 border-gray-300 rounded-md bg-transparent"
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="jobseeker">Find a Job</option>
                    <option value="recruiter">Hire Talent</option>
                  </select>
                </div>
              </div>

              {role && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <div className="relative">
                      <Lock className="icon-style" />
                      <Input id="phone" type="number" placeholder="+91 1234567890" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="pl-10 h-11" />
                    </div>
                  </div>

                  {role === "jobseeker" && (
                    <div className="space-y-5 pt-4 border-t border-gray-400">
                      <div className="space-y-2">
                        <Label htmlFor="resume" className="text-sm font-medium">Resume (PDF)</Label>
                        <div className="relative">
                          <Lock className="icon-style" />
                          <Input id="resume" type="file" accept="application/pdf" onChange={(e) => { if (e.target.files && e.target.files[0]) setResume(e.target.files[0]); }} className="h-11 cursor-pointer" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                        <div className="relative">
                          <Lock className="icon-style" />
                          <Input id="bio" type="text" placeholder="Tell us about yourself..." value={bio} onChange={(e) => setBio(e.target.value)} required className="pl-10 h-11" />
                        </div>
                      </div>
                    </div>
                  )}

                  <Button disabled={btnLoading} className="w-full">
                    {btnLoading ? "Please Wait..." : "Complete Profile"}
                    <ArrowRight size={18} />
                  </Button>
                </div>
              )}
            </form>
          ) : (
          <form onSubmit={submitHandler} className="space-y-5 flex flex-col">
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">
                I want to
              </Label>
              <div className="relative">
                <Briefcase className="icon-style" />
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 border-2 border-gray-300 rounded-md bg-transparent "
                  required
                >
                  <option value="">Select your role</option>
                  <option value="jobseeker">Find a Job</option>
                  <option value="recruiter">Hire Talent</option>
                </select>
              </div>
            </div>

            {role && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <Mail className="icon-style" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="icon-style" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="icon-style" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10 pr-10 h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Lock className="icon-style" />
                    <Input
                      id="phone"
                      type="number"
                      placeholder="+91 1234567890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>

                {role === "jobseeker" && (
                  <div className="space-y-5 pt-4 border-t border-gray-400">
                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-sm font-medium">
                        Resume (PDF)
                      </Label>
                      <div className="relative">
                        <Lock className="icon-style" />
                        <Input
                          id="resume"
                          type="file"
                          accept="application/pdf"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setResume(e.target.files[0]);
                            }
                          }}
                          className="h-11 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-sm font-medium">
                        Bio
                      </Label>
                      <div className="relative">
                        <Lock className="icon-style" />
                        <Input
                          id="bio"
                          type="text"
                          placeholder="Tell us about yourself..."
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          required
                          className="pl-10 h-11"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button disabled={btnLoading} className="w-full">
                  {btnLoading ? "Please Wait..." : "Register"}
                  <ArrowRight size={18} />
                </Button>
              </div>
            )}
            
            <div className="flex items-center gap-4 my-2">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-sm text-gray-500">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <div className="flex justify-center flex-col items-center gap-2">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                  toast.error("Google Sign-In was unsuccessful");
                }}
              />
            </div>
          </form>
          )}

          <div className="mt-6 pt-6 border-t border-gray-400">
            <p className="text-center text-sm">
              Already have an account{" "}
              <Link
                href={"/register"}
                className="text-blue-500 font-medium hover:underline transition-all"
              >
                Login?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
