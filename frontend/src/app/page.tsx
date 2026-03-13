"use client";
import CarrerGuide from "@/components/carrer-guide";
import Hero from "@/components/hero";
import Loading from "@/components/loading";
import PopularSearches from "@/components/popular-searches";
import TrendingRoles from "@/components/trending-roles";
import EmployerCTA from "@/components/employer-cta";
import ResumeAnalyzer from "@/components/resume-analyser";
import { useAppData } from "@/context/AppContext";
import React from "react";

const Home = () => {
  const { loading } = useAppData();
  if (loading) return <Loading />;
  return (
    <div>
      <Hero />
      <CarrerGuide />
      <ResumeAnalyzer />
      <PopularSearches />
      <TrendingRoles />
      <EmployerCTA />
    </div>
  );
};

export default Home;
