"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  name: string;
  logoUrl?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ 
  name, 
  logoUrl, 
  className,
  size = "md" 
}) => {
  const [error, setError] = useState(false);

  const getInitial = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-lg",
    lg: "w-16 h-16 text-2xl"
  };

  // Generate a consistent color based on the company name
  const getBGColor = (name: string) => {
    const colors = [
        "bg-blue-500", "bg-emerald-500", "bg-indigo-500", 
        "bg-violet-500", "bg-amber-500", "bg-rose-500"
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // If we have a logo URL and no error so far, try to show the image
  if (logoUrl && !error) {
    return (
      <div className={cn(
        "rounded-lg border bg-white dark:bg-slate-200 flex items-center justify-center p-1.5 shrink-0 shadow-sm overflow-hidden",
        sizes[size],
        className
      )}>
        <img
          src={logoUrl}
          alt={name}
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  // Fallback: Stylized initial with background
  return (
    <div className={cn(
      "rounded-lg flex items-center justify-center font-bold text-white shrink-0 shadow-sm uppercase tracking-tighter",
      getBGColor(name),
      sizes[size],
      className
    )}>
      {getInitial(name)}
    </div>
  );
};

export default CompanyLogo;
