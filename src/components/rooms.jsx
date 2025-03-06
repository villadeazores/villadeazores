import React from "react";

import BED1 from "../assets/images/bedroom1.jpg";
import BED2 from "../assets/images/bedroom2.jpg";
import BED3 from "../assets/images/bedroom3.jpg";
import BED4 from "../assets/images/bedroom4.jpg";

import PropertySlider from "./PropertySlider";

export default function Rooms() {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Country Room",
      description:
        "Ideal for seaside enthusiasts, offering comfort and easy access to the promenade.",
      image: BED1,
      amenities: {
        beds: "King",
        bathrooms: 3,
        area: "8x10 m²",
      },
    },
    {
      id: 2,
      title: "Tranquil Room",
      description:
        "Surrounded by nature, this charming cottage provides tranquility and beautiful scenic views.",
      image: BED2,
      amenities: {
        beds: "King",
        bathrooms: 2,
        area: "6x8 m²",
      },
    },
    {
      id: 3,
      title: "Serene Room",
      address: "45 Oakwood Drive, YO23 2LD",
      description:
        "A serene getaway with expansive views, ideal for families seeking nature and comfort.",
      image: BED3,
      amenities: {
        beds: "King",
        bathrooms: 2,
        area: "8x16 m²",
      },
    },
    {
      id: 4,
      title: "Vintage Room",
      description:
        "Ideal for seaside enthusiasts, offering comfort and easy access to the promenade.",
      image: BED4,
      amenities: {
        beds: "King",
        bathrooms: 3,
        area: "8x10 m²",
      },
    },
    {
      id: 5,
      title: "Countryside Room",
      description:
        "Surrounded by nature, this charming cottage provides tranquility and beautiful scenic views.",
      image: BED1,
      amenities: {
        beds: "King",
        bathrooms: 2,
        area: "6x8 m²",
      },
    },
    {
      id: 6,
      title: "Retreat Room",
      description:
        "A serene getaway with expansive views, ideal for families seeking nature and comfort.",
      image: BED2,
      amenities: {
        beds: "King",
        bathrooms: 2,
        area: "8x16 m²",
      },
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <section className="base-template">
        <div className="base-template-wrapper max-w-[1560px] mx-auto px-4 sm:px-5">
          <div className="relative flex flex-row justify-center items-center p-4 m-10 ">
            <div className="absolute md:text-6xl lg:text-6xl text-4xl font-extrabold text-cyan-200/20 ">
              ROOMS
            </div>
            <div className="absolute lg:text-6xl text-6xl text-cyan-600 fontLux">
              our rooms
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">
            Find Your Perfect Vacation Home Away From Home
          </h1>
          <div className="base-template-text mb-[30px] sm:mb-[40px] text-center text-white max-w-2xl mx-auto">
            Explore a wide selection of our rooms designed to suit your
            lifestyle.
            <br className="hidden sm:block" />
            Experience comfort, convenience, and unforgettable moments in
            beautifully crafted spaces.
          </div>

          <div className="base-template-content">
            <PropertySlider properties={properties || []} />
          </div>
        </div>
      </section>
    </div>
  );
}
