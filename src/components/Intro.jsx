"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center  py-36 tracking-widest px-8 lg:px-[400px] lg:text-[16px] text-[16px] text-center gap-8">
      <h1 className="font-minionPro font-light text-[22px] leading-[33px]">{`Experience the real vibe of Lack Lalla Takerkoust and Agafay Desert`}</h1>
      <p className="font-light">{`Sometimes, the soul finds its quietest revelation not in the clamor, but in the spacious hush. It arrives unexpectedly, like sunlight catching the ripples on Lake Lalla Takerkoust – a sudden awareness of profound luck, a gentle nudge towards what truly matters. At Boho House, cradled by the vastness of the water and the ancient gaze of the Atlas Mountains, that feeling isn't just left to chance. It's nurtured. In the rhythm of gentle waves, the warmth of earth-toned walls, and the endless sky stretching above the serene lake, peace settles deep within, whispering that you are exactly where you need to be.`}</p>
    </div>
  );
};

export default Intro;
