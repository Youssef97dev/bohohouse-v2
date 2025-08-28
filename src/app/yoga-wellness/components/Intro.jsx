"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center  py-36 tracking-widest px-8 lg:px-[200px] lg:text-[16px] text-[16px] lg:text-center gap-8 text-justify">
      <p className="font-playfair text-[18px]">{t("yoga.desc_1")}</p>
      <p className="font-playfair text-[14px]">{t("yoga.desc_2")}</p>
      <p className="font-playfair text-[14px]">{t("yoga.desc_3")}</p>
      <p className="font-playfair text-[14px]">{t("yoga.desc_4")}</p>
      <Link
        href="#"
        className={`text-center border border-black bg-bgButton text-black py-3 lg:py-2 px-5 uppercase text-[15px]`}
      >
        {t("yoga.button")}
      </Link>
    </div>
  );
};

export default Intro;
