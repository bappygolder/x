"use client"
import { useCallback } from "react";

import HeadSection from "../components/HeadSection";
import PostSection from "../components/PostSection";

const Home = () => {
  return (
    <div className="relative bg-white w-full h-[852px] overflow-hidden text-left text-mini text-white font-poppins">
        <HeadSection />
      <PostSection />
     
      <div className="absolute top-[803px] left-[calc(50%_-_90.5px)] text-xs text-center text-[#666666]">
        <span>Designed with ❤️ by </span>
        <span className="text-[#007bff]">Post Pilot</span>
      </div>
    </div>
  );
};

export default Home;
