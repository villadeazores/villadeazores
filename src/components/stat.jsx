import React, { useEffect } from "react";
import { FaSwimmingPool } from "react-icons/fa";
import {
  FaBed,
  FaShower,
  FaPeopleGroup,
} from "react-icons/fa6";


export default function Stat() {
  const statsData = [
    { value: 14, label: "Guests", icon: FaPeopleGroup },
    { value: 6, label: "Rooms", icon: FaBed },
    { value: 6, label: "Baths", icon: FaShower },
    { value: 1, label: "Pool", icon: FaSwimmingPool },
  ];

  useEffect(() => {
    const adjustPositions = () => {
      statsData.forEach((stat, index) => {
        const tbox = document.getElementById(`tbox-${index}`);
        const sbox = document.getElementById(`sbox-${index}`);

        if (tbox && sbox) {
          const aa = tbox.offsetWidth;
          const ab = tbox.offsetHeight;
          const ba = sbox.offsetWidth;
          const bb = sbox.offsetHeight;

          sbox.style.right = Math.ceil(aa / 2) - Math.ceil(ba / 2) + "px";
          sbox.style.top = Math.ceil(ab / 2) - Math.ceil(bb / 2) + "px";
        }
      });
    };

    adjustPositions();
    window.addEventListener("resize", adjustPositions);

    return () => {
      window.removeEventListener("resize", adjustPositions);
    };
  }, []);

  return (
    <section className="w-full text-white">
      <div className="w-full md:w-5/6 mx-auto">
        <div className="flex flex-row px-2 py-8 md:px-6 md:py-12 text-white">
          {statsData.map((stat, index) => (
            <div
              key={index}
              id={`tbox-${index}`}
              className="relative w-full md:w-1/4 py-6 px-6 text-center flex flex-col items-center"
            >
              <stat.icon className="absolute text-5xl md:text-8xl text-cyan-600/50 opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />

              <h1 className="relative z-10 text-3xl text-white md:text-7xl font-semibold">
                {stat.value}
              </h1>
              <div
                id={`sbox-${index}`}
                className="absolute z-20 w-auto px-2 pt-24 text-white rounded-md p-1"
              >
                <p className="text-base font-extrabold">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
