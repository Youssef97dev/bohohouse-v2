"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756371692/dar_ouzguita/boho-4_nayaqm.webp",
    text: "AS ABOVE SO BELOW",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756371985/dar_ouzguita/boho-5_ht6tlt.webp",
    text: "HAVEN OF TRANQUILITY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756371170/dar_ouzguita/boho-2_vb8x6x.webp",
    text: "WILDERNESS VALLEY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756372100/dar_ouzguita/boho-6_vm87bs.webp",
    text: "Offering an authentic taste",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756372176/dar_ouzguita/boho-7_zewz4a.webp",
    text: "HAVEN OF TRANQUILITY",
  },
];

const imagesMobile = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756372492/dar_ouzguita/boho-1_akgyw0.webp",
    text: "AS ABOVE SO BELOW",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756372493/dar_ouzguita/boho-2_pdhtun.webp",
    text: "HAVEN OF TRANQUILITY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756372493/dar_ouzguita/boho-3_h2a8vm.webp",
    text: "WILDERNESS VALLEY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756372499/dar_ouzguita/boho-4_izlqiv.webp",
    text: "Offering an authentic taste",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1756372495/dar_ouzguita/boho-5_ucsjyr.webp",
    text: "HAVEN OF TRANQUILITY",
  },
];

const SmallGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full px-5 lg:px-28 pt-3">
      <div className="relative w-full h-screen hidden lg:block">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 w-full h-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`boho house`}
              height={2000}
              width={2000}
              priority
              className="object-cover w-full h-full shadow-md "
            />
            <div className="absolute top-1/2 w-full text-center text-white text-[75px] font-sunn">
              {image.text}
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full h-screen lg:hidden block">
        {imagesMobile.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 w-full h-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`boho house`}
              height={800}
              width={800}
              priority
              className="object-cover w-full h-full shadow-md "
            />
            <div className="absolute top-1/2 w-full text-center text-white text-[45px] font-sunn">
              {image.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallGallery;
