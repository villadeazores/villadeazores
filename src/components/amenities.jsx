import React from "react";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
  FaDumbbell,
  FaSpa,
  FaConciergeBell,
  FaChild,
  FaTv,
  FaHotTub,
  FaCoffee,
  FaShuttleVan,
} from "react-icons/fa";
import Quotes from "./quotes";

export default function Amenities() {
  const amenitiesData = [
    { icon: FaWifi, label: "Wi-Fi", description: "High-speed internet." },
    { icon: FaSwimmingPool, label: "Pool", description: "Refreshing pool." },
    { icon: FaParking, label: "Parking", description: "Convenient parking." },
    { icon: FaUtensils, label: "Kitchen", description: "On-site kitchen." },
    { icon: FaDumbbell, label: "Gym", description: "Well-equipped gym." },
    { icon: FaSpa, label: "Spa", description: "Relaxing spa." },
    {
      icon: FaConciergeBell,
      label: "Concierge",
      description: "Personal assistance.",
    },
    { icon: FaChild, label: "Kids Club", description: "Fun for kids." },
    {
      icon: FaTv,
      label: "Entertainment",
      description: "In-room entertainment.",
    },
    { icon: FaHotTub, label: "Hot Tub", description: "Relaxing hot tub." },
    { icon: FaCoffee, label: "Coffee", description: "Fresh coffee." },
    { icon: FaShuttleVan, label: "Shuttle", description: "Airport shuttle." },
  ];

  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex flex-row justify-center items-center p-4 mt-2 ">
            <div className="absolute md:text-6xl lg:text-6xl text-4xl font-extrabold text-cyan-200/50  ">
              AMENITIES
            </div>
            <div className="absolute lg:text-6xl text-6xl text-cyan-600 fontLux">
              our amenities
            </div>
            
          </div>
          <div className="relative flex justify-center items-center text-black p-4">
              <Quotes
                quote="/uh-men-i-tee / noun"
                author="Luxury living at its finest. Experience the ultimate in opulence, features that soothe & pamper your soul."
              />
            </div>

          <div className="grid grid-cols-3 mt-10 text-center sm:mt-16 sm:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4 xl:mt-24">
            {amenitiesData.map((amenity, index) => (
              <div key={index} className="md:p-4 lg:p-6">
                <amenity.icon className="mx-auto text-3xl text-cyan-500" />
                <h3 className="mt-6 text-lg font-bold text-gray-500 font-pj">
                  {amenity.label}
                </h3>
                <p className="mt-3 text-sm text-gray-400 font-pj">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
