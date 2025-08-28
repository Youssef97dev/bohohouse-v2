"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Intro from "./Intro";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="">
          <Navbar />
          <Hero />
          <Intro />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Loader;
