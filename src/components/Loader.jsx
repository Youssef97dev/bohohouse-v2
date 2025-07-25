"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Rooms from "./Rooms";
import Footer from "./Footer";
import SmallGallery from "./SmallGallery";
import Where from "./Where";

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
          <About />
          <Rooms />
          <Events />
          <SmallGallery />
          <Where />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Loader;
