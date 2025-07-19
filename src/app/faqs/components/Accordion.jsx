"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("1");

  const content = [
    {
      id: "1",
      title: `How to get there`,
      text: [
        {
          description: `As you embark on your journey to Boho Marrakech, please bear in mind that this one-of-a-kind experience is set withing the stunning natural beauty of Lake Lalla Takerkoust, near Marrakech.`,
        },
        {
          description: `to best preserve this historical site, there will be no direct car access to the venue. All guests must walk a short distance along a well-lit path.`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "2",
      title: "Rideshare",
      text: [
        {
          description: `Due to there being no onsite parking, rideshare is strongly encouraged. Drop-off and pickup zones will be located outside the festival grounds.`,
        },
        {
          description: `For personal drop-off or pickup, please note that the location is the same as the rideshare adress. Be mindful of your surroundings when entering and exiting the vehicle.`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "3",
      title: "Getting to the box office",
      text: [
        {
          description: `You will need to walk a short distance up a well-lit path from the rideshare drop-off point to reach the box office.`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "4",
      title: "Dress Code",
      text: [
        {
          description: `NO SHORTS | NO FLIP FLOPS`,
        },
        {
          description: `We strongly recommend comfortable shoes due to the uneven terrain and the amount of walking involved.`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "5",
      title: "Table access & Security Policy",
      text: [
        {
          description: `The table wristbands on the deck are final and must correspond to pre-agreed arrangements.`,
        },
        {
          description: `A very limited number of table bands will be available at the door, priced according to the number of guests per table and the minimum spend. Availability will be subject to security and capacity limitations.`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
  ];

  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div className="w-full">
      <div className=" font-normal">
        {content.map((item, i) => (
          <div key={i} className={item.class}>
            <button
              type="button"
              className={`py-4 w-full flex items-center text-[23px] leading-[30px] font-sunn tracking-wider`}
              onClick={() => togglePara(item.id)}
            >
              {item.title}
              <div className={`ml-auto text-bgButton`}>
                {active === item.id ? (
                  <AiOutlineMinus size={22} />
                ) : (
                  <AiOutlinePlus size={22} />
                )}
              </div>
            </button>
            <div>
              <AnimateHeight
                duration={300}
                height={active === item.id ? "auto" : 0}
              >
                <div className="space-y-2 p-4 text-[14px] leading-[27px] border-t border-bgButton font-light text-justify ">
                  {item.text.map((text, i) => (
                    <p key={i}>{text.description}</p>
                  ))}
                </div>
              </AnimateHeight>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
