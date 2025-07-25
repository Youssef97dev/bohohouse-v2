"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const About = () => {
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
      id="about"
      className="w-full h-full lg:h-[80vh] flex md:flex-row flex-col py-2 px-5 lg:px-28 gap-3"
    >
      <div className="relative w-full">
        <Image
          id="about-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1740674397/casalalla-v2/casa_8_crsxvk.jpg"
          height={1000}
          width={1000}
          alt="Boho house"
          priority
          className={`object-cover w-full h-full  md:block hidden`}
        />
        <Image
          id="about-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761710/dar_ouzguita/boho_house_18_wrism4.jpg"
          height={1000}
          width={1000}
          alt="Boho house"
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
            {`Awakening to your own gratitude, discovering a sense of calling, finding deep peace – these moments often bloom in the stillness of unexpected places. Boho House, resting on the sun-kissed shores of Lake Lalla Takerkoust, is such a sanctuary. Here, far from the whirlwind of Marrakech, the lake's tranquil expanse and the raw beauty of the surrounding hills hold a special kind of magic. It’s a place designed not just for rest, but to cradle that fragile feeling of being profoundly lucky. Time slows, the soul breathes, and in the quiet communion with water, sky, and earth, you realize a deep-seated peace was waiting for you all along.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
