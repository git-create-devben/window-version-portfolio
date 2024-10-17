"use client";
import React, { useState, useEffect } from "react";
import Join from "@/app/join";
import { toast } from "react-hot-toast";
import { Button } from "./ui/button";
import Loading from "./mobilecomponents/loading";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic loading process
    const delay = setTimeout(() => {
      setLoading(false);
      toast.success("Welcome champ!");
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
          {/* <div className="loading-spinner text-3xl text-white">Loading...</div> */}
          <Loading/>
        </div>
      ) : (
        <Join />
      )}
    </div>
  );
};

export default LoadingScreen;
