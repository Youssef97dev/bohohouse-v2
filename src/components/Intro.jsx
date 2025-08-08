"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center  py-36 tracking-widest px-8 lg:px-[200px] lg:text-[16px] text-[16px] text-center gap-8">
      <h1 className="font-minionPro font-light text-[22px] leading-[33px]">
        {t("intro.experience")}
      </h1>
      <p className="font-light">{t("intro.text")}</p>
    </div>
  );
};

export default Intro;
