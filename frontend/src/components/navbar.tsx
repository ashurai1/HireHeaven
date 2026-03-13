"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogOut, Menu, User, X, ChevronDown, ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle";
import { useAppData } from "@/context/AppContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuth, user, setIsAuth, setUser, loading, logoutUser } =
    useAppData();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    logoutUser();
  };
  return (
    <nav className="z-50 sticky top-0 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center gap-1 group">
              <div className="text-2xl font-bold tracking-tight">
                <span className="bg-linear-to-r from bg-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Hire
                </span>
                <span className="text-red-500">Heaven</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7 ml-8 mr-auto">
            <Link href={"/"} className="text-[15px] font-medium text-gray-700 hover:text-green-700 transition-colors">
              Home
            </Link>

            {/* Jobs Dropdown */}
            <div className="relative group flex items-center h-16 cursor-pointer">
              <Link href={"/jobs"} className="text-[15px] h-full font-medium text-green-700 flex items-center gap-1 group-hover:text-green-800 transition-colors">
                 Jobs <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute top-16 left-0 w-[450px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                 <div className="bg-white border border-gray-100 rounded-xl shadow-lg flex overflow-hidden">
                   {/* Column 1 */}
                   <div className="w-1/2 p-2 border-r border-gray-100 bg-gray-50/50">
                      <Link href={"/jobs"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-white hover:text-green-700 rounded-lg transition-colors">Jobs For You</Link>
                      <Link href={"/jobs"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-white hover:text-green-700 rounded-lg transition-colors">Work From Home Jobs</Link>
                      <Link href={"/jobs"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-white hover:text-green-700 rounded-lg transition-colors">Part Time Jobs</Link>
                      <Link href={"/jobs"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-white hover:text-green-700 rounded-lg transition-colors">Freshers Jobs</Link>
                      <Link href={"/jobs"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-white hover:text-green-700 rounded-lg transition-colors">Jobs for women</Link>
                      <Link href={"/jobs"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-white hover:text-green-700 rounded-lg transition-colors">Full Time Jobs</Link>
                      <Link href={"/jobs"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-white hover:text-green-700 rounded-lg transition-colors">Night Shift Jobs</Link>
                   </div>
                   {/* Column 2 */}
                   <div className="w-1/2 p-2 bg-white">
                      <Link href={"/jobs"} className="flex justify-between items-center px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Jobs By City <ChevronRight size={14} className="opacity-40"/></Link>
                      <Link href={"/jobs"} className="flex justify-between items-center px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Jobs By Department <ChevronRight size={14} className="opacity-40"/></Link>
                      <Link href={"/jobs"} className="flex justify-between items-center px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Jobs By Company <ChevronRight size={14} className="opacity-40"/></Link>
                      <Link href={"/jobs"} className="flex justify-between items-center px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Jobs By Qualification <ChevronRight size={14} className="opacity-40"/></Link>
                      <Link href={"/jobs"} className="flex justify-between items-center px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Others <ChevronRight size={14} className="opacity-40"/></Link>
                   </div>
                 </div>
              </div>
            </div>



            <Link href={"/degree"} className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700 hover:text-green-700 transition-colors">
              Degree <span className="px-[5px] py-[1.5px] text-[10px] font-bold text-white bg-[#ff5a36] rounded-[4px] tracking-wider relative -top-[1px]">NEW</span>
            </Link>

            {/* Resume Tools Dropdown */}
            <div className="relative group flex items-center h-16 cursor-pointer">
              <Link href={"/resume-builder"} className="text-[15px] h-full font-medium text-gray-700 flex items-center gap-1 group-hover:text-green-700 transition-colors">
                 Resume Tools <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
               {/* Dropdown Menu */}
               <div className="absolute top-16 left-0 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                 <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-2 overflow-hidden">
                    <Link href={"/resume-builder"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Resume Builder</Link>
                    <Link href={"/resume-builder"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Resume Templates</Link>
                    <Link href={"/resume-builder"} className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">Cover Letter</Link>
                 </div>
               </div>
            </div>
          </div>

          {/* Right side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {loading ? (
              ""
            ) : (
              <>
                {isAuth ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Avatar className="h-9 w-9 ring-2 ring-offset-2 ring-offset-background ring-blue-500/20 cursor-pointer hover:ring-blue-500/40 transition-all">
                          <AvatarImage
                            src={user ? (user.profile_pic as string) : ""}
                            alt={user ? user.name : ""}
                          />
                          <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600">
                            {user?.name?.charAt(0).toUpperCase() || "U"}
                          </AvatarFallback>
                        </Avatar>
                      </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-56 p-2" align="end">
                      <div className="px-3 py-2 mb-2 border-b">
                        <p className="text-sm font-semibold">
                          {user && user.name}
                        </p>
                        <p className="text-xs opacity-60 truncate">
                          {user && user.email}
                        </p>
                      </div>

                      <Link href={"/account"}>
                        <Button
                          className="w-full justify-start gap-2"
                          variant={"ghost"}
                        >
                          <User size={16} /> My Profile
                        </Button>
                      </Link>

                      <Button
                        className="w-full justify-start gap-2 mt-1"
                        variant={"ghost"}
                        onClick={logoutHandler}
                      >
                        <LogOut size={16} />
                        Logout
                      </Button>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link href={"/login"}>
                    <Button className="gap-2">
                      <User size={16} />
                      Sign In
                    </Button>
                  </Link>
                )}
              </>
            )}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />

            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div
        className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-3 py-3 space-y-1 bg-background/95 backdrop-blur-md">
          {/* isauth or user */}
          <Link href={"/"} onClick={toggleMenu} className="block px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">
              Home
          </Link>

          <Link href={"/jobs"} onClick={toggleMenu} className="block px-4 py-3 text-[15px] font-medium text-green-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">
              Jobs
          </Link>
          

          <Link href={"/degree"} onClick={toggleMenu} className="flex items-center gap-2 px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">
              Degree <span className="px-[5px] py-[1.5px] text-[10px] font-bold text-white bg-[#ff5a36] rounded-[4px] tracking-wider">NEW</span>
          </Link>
          
          <Link href={"/resume-builder"} onClick={toggleMenu} className="block px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors">
              Resume Tools
          </Link>

          <div className="border-t my-2 pt-2 border-gray-100"></div>

          {isAuth ? (
            <>
              <Link href={"/account"} onClick={toggleMenu}>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start gap-3 h-11"
                >
                  <User size={18} /> My Profile
                </Button>
              </Link>
              <Button
                variant={"destructive"}
                className="w-full justify-start gap-3 h-11"
                onClick={() => {
                  logoutHandler();
                  toggleMenu();
                }}
              >
                <LogOut size={18} /> Logout
              </Button>
            </>
          ) : (
            <Link href={"/login"} onClick={toggleMenu}>
              <Button className="w-full justify-start gap-3 h-11 mt-2">
                <User size={18} /> SignIn
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
