'use client';

import { Button } from "@/components/ui/button";
import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import NavBar from "@/components/ui/NavBar";
import Testimonial from "@/components/ui/Testimonial";
import VideoComponent from "@/components/ui/VideoComponent";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <NavBar />
      <Hero />
      <VideoComponent videoSrc="/assets/hello.mp4" />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
}
