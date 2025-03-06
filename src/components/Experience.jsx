import React from "react";
import ExperienceSlider from "./ExperienceSlider";
import "./experience.css";

import SPA from "../assets/images/landscape1.jpg"
import GARDEN from "../assets/images/pathway3.jpg"
import POOL from "../assets/images/pool3.jpg"
import SAUNA from "../assets/images/pathway2.jpg"

// Custom slides data (optional)
const customSlides = [
  {
    id: "spa",
    headline: "Spa & Wellness",
    button: "Explore",
    src: SPA,
  },
  {
    id: "nature",
    headline: "Garden by the fountain",
    button: "Explore",
    src: GARDEN,
  },
  {
    id: "pool",
    headline: "Swimming Pool",
    button: "Explore",
    src: POOL,
  },
  {
    id: "sauna",
    headline: "Sauna & Steam Room",
    button: "Explore",
    src: SAUNA,
  },
];

export default function Experience() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex flex-row justify-center items-center p-4 mt-2 ">
        <div className="absolute md:text-6xl lg:text-6xl text-4xl font-extrabold text-cyan-200/20  ">
          Experiences
        </div>
        <div className="absolute lg:text-6xl text-6xl text-cyan-600 fontLux">
          Our Experiences
        </div>
      </div>
      <ExperienceSlider slides={customSlides} />
    </div>
  );
}
