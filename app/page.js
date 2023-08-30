"use client";
import { useState } from "react";
import PostSection from "../components/postSection/PostSection";
import Image from "next/image";
import logo from "../public/logo/logo.png";
import postLogo from "../public/logo/post-logo.png";

const Home = () => {
  //Create a state for the create post button and the postpilot logo
  const [createPost, setCreatePost] = useState(false);

  // Create a function for the handleClick that triggers the state change
  const handleClick = () => {
    setCreatePost(true);
  };
  return (
    <div className="relative bg-white w-full h-[852px] overflow-hidden text-left text-mini text-white font-poppins">
      <div className="absolute top-[109px] w-full flex flex-row items-start justify-center gap-[10px] cursor-pointer">
        {/* Add logo image with also onClick handler to be able to fire the handleClick function */}
        <div className="relative w-[159px] h-[51px]" />
        {/* Show the logo if createPost is false and the extended pilot logo when createPost is true */}
        {createPost ? (
          <Image
            className="absolute"
            alt="test"
            src={postLogo}
            width={159}
            height={51}
            onClick={handleClick}
          />
        ) : (
          <Image
            className="absolute"
            alt="test"
            src={logo}
            width={50}
            height={50}
            onClick={handleClick}
          />
        )}{" "}
      </div>
      <section className="absolute w-full top-[358px] flex flex-col items-center justify-center gap-[16px] text-left text-[14px] text-black font-poppins">
        <div className="relative text-[#000000] text-sm leading-5 font-[400] font-poppins">
          click to generate your first post idea
        </div>

        <div className="absolute top-[37px] flex flex-row px-0 box-border items-center justify-center">
          <div
            className="flex items-center justify-center font-semibold  rounded-lg bg-[#3579F6] w-[344px] h-[63px] text-white leading-5 text-15px font-poppins"
            onClick={handleClick}
          >
            Generate Post Idea
          </div>
        </div>
      </section>

      {/* Show the PostSection only if the createPost state is true */}
      <section className="absolute top-[318px] left-[16px] flex flex-col items-center justify-start gap-[16px] text-left text-[14px] text-black font-poppins">
      {createPost && <PostSection />}
      </section>

      {/* The footer section */}

      <div className="absolute top-[793px] left-[calc(50%_-_90.5px)] text-xs text-center text-[#666666]">
        <span>Designed with ❤️ by </span>
        <span className="text-[#007bff]">Post Pilot</span>
      </div>
    </div>
  );
};

export default Home;
