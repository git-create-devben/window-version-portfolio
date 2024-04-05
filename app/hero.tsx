import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import Footer from "@/components/footer";
import RealTimeDate from "@/components/Date";

export function Hero() {
  return (
    <div className="h-[100vh] w-full  flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-30"
        fill="white"
      />
      <RealTimeDate/>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        DEV⚡BEN 
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Front-end developer 💡 building the future of the web 🌐 one pixel at a time 🖥️.
        </p>
      </div>
      <Footer/>
    </div>
  );
}
