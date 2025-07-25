"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Wedding from "./Wedding";
import SectionEv from "./SectionEv";
import Experts from "./Experts";

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
          <Wedding />
          <SectionEv />
          <Experts />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Loader;
