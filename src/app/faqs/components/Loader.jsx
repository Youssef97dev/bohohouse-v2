"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Accordion from "./Accordion";
import Hero from "./Hero";

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
          <div className="p-8">
            <Accordion />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Loader;
