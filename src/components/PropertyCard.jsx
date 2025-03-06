"use client";

import React, { useState, useEffect } from "react";
import { BiBed, BiBath } from "react-icons/bi";
import { TbRulerMeasure } from "react-icons/tb";

const PropertyCard = ({ property = {}, isActive }) => {
  // Ensure property has all required fields with defaults
  property = {
    title: property.title || "Property Title",
    description: property.description || "No description available",
    image: property.image || "/placeholder.svg",
    amenities: property.amenities || { beds: 0, bathrooms: 0, area: "0x0 m²" },
    ...property,
  };
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // When the slide becomes active, expand the card
    if (isActive) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [isActive]);

  return (
    <div className="booking-slider-item bg-cyan-700/50 relative overflow-hidden w-full rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-[320px] sm:max-w-[340px] mx-auto h-full">
      

      <a
        href="/"
        className="booking-slider-item-image block overflow-hidden transition-all duration-600 ease-out"
        style={{
          height: expanded ? "260px" : "160px",
        }}
        title={property.title}
        onClick={(e) => e.preventDefault()}
      >
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="block w-full h-full object-cover object-center transform-origin-center transition-transform duration-600 ease-out hover:scale-105"
        />
      </a>

      <div className="booking-slider-item-content p-4 sm:p-5 flex flex-col h-[calc(100%-180px)]">
        

        <h2 className="booking-slider-item-title font-semibold text-base leading-tight mb-3 truncate">
          <a
            href="/"
            className="block text-white no-underline transition-opacity duration-300 ease-out hover:opacity-75"
            title={property.title}
            onClick={(e) => e.preventDefault()}
          >
            {property.title}
          </a>
        </h2>


        <div className="booking-slider-item-text text-xs font-light leading-relaxed text-[#d0d4d4] line-clamp-2 mb-1 h-10">
          {property.description}
        </div>

        <div
          className="booking-slider-item-footer overflow-hidden transition-all duration-600 ease-in mt-2"
          style={{
            maxHeight: expanded ? "120px" : "0",
          }}
        >
          <div className="booking-slider-item-footer-inner pt-1">
            <div className="booking-slider-item-amenities flex items-center justify-between gap-2 py-1 border-t border-b border-white/10 mb-0">
              <div className="booking-slider-item-amenity flex items-center gap-1.5 font-medium text-xs leading-[1.4] text-[#bbbcbf]">
                <div className="booking-slider-item-amenity-icon flex-shrink-0 w-4">
                  <BiBed className="w-full h-auto text-[#bbbcbf]" />
                </div>
                <div className="booking-slider-item-amenity-text">
                  {property.amenities?.beds || 0} Beds
                </div>
              </div>

              <div className="booking-slider-item-amenity flex items-center gap-1.5 font-medium text-xs leading-[1.4] text-[#bbbcbf]">
                <div className="booking-slider-item-amenity-icon flex-shrink-0 w-4">
                  <BiBath className="w-full h-auto text-[#bbbcbf]" />
                </div>
                <div className="booking-slider-item-amenity-text">
                  {property.amenities?.bathrooms || 0} Baths
                </div>
              </div>

              <div className="booking-slider-item-amenity flex items-center gap-1.5 font-medium text-xs leading-[1.4] text-[#bbbcbf]">
                <div className="booking-slider-item-amenity-icon flex-shrink-0 w-4">
                  <TbRulerMeasure className="w-full h-auto text-[#bbbcbf]" />
                </div>
                <div className="booking-slider-item-amenity-text">
                  {property.amenities?.area || "0x0 m²"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
