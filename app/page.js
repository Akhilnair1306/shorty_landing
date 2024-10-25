'use client';

import { Button } from "@/components/ui/button";
import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import NavBar from "@/components/ui/NavBar";
import RetroGrid from "@/components/ui/retro-grid";
import Testimonial from "@/components/ui/Testimonial";
import VideoComponent from "@/components/ui/VideoComponent";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <NavBar />
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background ">
      <div className=" z-10 whitespace-pre-wrap ">
      <Hero />
      </div>
      <RetroGrid />
      </div>
      <VideoComponent videoSrc="/assets/hello.mp4" />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
}
