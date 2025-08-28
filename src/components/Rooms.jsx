"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Rooms = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    const imageElement = document.querySelector("#about-image");

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);
  return (
    <div
      id="rooms"
      className="w-full h-full lg:h-[80vh] flex md:flex-row-reverse flex-col py-2 px-5 lg:px-28 gap-3"
    >
      <div className="relative w-full">
        <Image
          id="about-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1756371170/dar_ouzguita/boho-2_vb8x6x.webp"
          height={500}
          width={500}
          alt=""
          priority
          className={`object-cover w-full h-full  md:block hidden`}
        />
        <Image
          id="about-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761705/dar_ouzguita/boho_house_20_dxux68.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full  md:hidden block`}
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-4 text-primary">
          {/*<h1 className="text-[20px] lg:text-[20px] leading-[28px] tracking-[2px] font-minionPro font-light mb-5 text-bgButton text-justify">
            {t("about.title")}
          </h1>*/}
          <p className="text-[16px] lg:text-[15px] lg:font-light  tracking-wider leading-[25px] lg:leading-[30px]  text-justify py-1 text-[#564138]">
            {t("rooms.content_1")}
          </p>
          <Link
            href="/book-room"
            className=" text-left mt-4 py-2 px-8 uppercase tracking-widest border-b border-bgButton text-bgButton text-[12px] leading-[34px] hover:bg-bgButton hover:text-white duration-200 transition-all ease-out"
          >
            {t("rooms.button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
