"use client";
import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Footer from "@/components/Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="relative flex flex-col justify-center items-center gap-2 md:gap-0">
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Loader;
