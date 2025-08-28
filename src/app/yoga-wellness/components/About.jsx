"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full lg:h-[80vh] flex md:flex-row flex-col py-2 px-8  xl:px-[200px] gap-3 ">
      <div className="relative w-full">
        <Image
          id="about-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1756375129/dar_ouzguita/yoga-large-2_vr4ae6.webp"
          height={100}
          width={100}
          alt="Boho house"
          priority
          className={`object-cover w-full h-full  md:block hidden`}
        />
        <Image
          id="about-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1756375132/dar_ouzguita/yoga-mobile-1_anqdkn.webp"
          height={100}
          width={100}
          alt="Boho house"
          priority
          className={`object-cover w-full h-full  md:hidden block`}
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-2 lg:p-12 xl:p-20 p-4 text-primary">
          <h1 className="font-playfair text-[20px]">{`Yoga`}</h1>
          <p className="text-[12px] xl:text-[15px] font-playfair  tracking-wider leading-[20px] xl:leading-[30px]  text-justify py-1 text-[#564138]">
            {t("yoga.yoga_1")}
          </p>
          <h1 className="font-playfair text-[20px]">{`Pilates`}</h1>
          <p className="text-[12px] xl:text-[15px] font-playfair  tracking-wider leading-[20px] xl:leading-[30px]  text-justify py-1 text-[#564138]">
            {t("yoga.yoga_2")}
          </p>
          <h1 className="font-playfair text-[20px]">{`Body Toning`}</h1>
          <p className="text-[12px] xl:text-[15px] font-playfair  tracking-wider leading-[20px] xl:leading-[30px]  text-justify py-1 text-[#564138]">
            {t("yoga.yoga_3")}
          </p>
          <h1 className="font-playfair text-[20px]">{`Breathwork & Sound Meditation`}</h1>
          <p className="text-[12px] xl:text-[15px] font-playfair  tracking-wider leading-[20px] xl:leading-[30px]  text-justify py-1 text-[#564138]">
            {t("yoga.yoga_4")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
