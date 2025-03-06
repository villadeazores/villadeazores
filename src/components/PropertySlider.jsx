"use client";

import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import PropertyCard from "./PropertyCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Register Swiper web components
register();

const PropertySlider = ({ properties = [] }) => {
  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    // Function to update slidesPerView based on window width
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(3);
      }
    };

    // Initialize with current window size
    updateSlidesPerView();

    // Add resize listener
    window.addEventListener("resize", updateSlidesPerView);

    // Initialize Swiper
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 16,
      speed: 600,
      observer: true,
      watchOverflow: true,
      watchSlidesProgress: true,
      centeredSlides: false,
      loop: false,
      pagination: {
        clickable: true,
        bulletClass: "slider-pagination-item",
        bulletActiveClass: "active",
        modifierClass: "slider-pagination",
      },
      breakpoints: {
        // Mobile - 1 slide
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
          centeredSlides: true,
        },
        // // Large Mobile - 1 Slide
        // 456: {
        //   slidesPerView: 1,
        //   spaceBetween: 16,
        //   centeredSlides: true,
        // },
        // Small tablets - 2 slides
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false,
        },
        // Tablets/Small laptops - 3 slides
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: false,
        },
        // Desktops - 3 slides
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false,
        },
      },
      on: {
        slideChange: (swiper) => {
          setActiveIndex(swiper.activeIndex);
        },
      },
    };

    // Set Swiper parameters
    Object.assign(swiperElRef.current, swiperParams);

    // Initialize Swiper
    swiperElRef.current.initialize();

    // Setup navigation
    if (prevRef.current && nextRef.current) {
      prevRef.current.addEventListener("click", () => {
        swiperElRef.current.swiper.slidePrev();
      });

      nextRef.current.addEventListener("click", () => {
        swiperElRef.current.swiper.slideNext();
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="booking-slider relative px-4 md:px-12 lg:px-[98px]">
      {/* Slider Navigation */}
      <div className="slider-nav flex justify-between items-center w-full absolute top-1/2 left-0 -translate-y-1/2 z-10 pointer-events-none px-2 md:px-4">
        <div
          ref={prevRef}
          className={`slider-nav-item flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm pointer-events-auto cursor-pointer transition-all duration-300 ease-out ${
            activeIndex === 0
              ? "opacity-50 pointer-events-none"
              : "hover:scale-110 hover:bg-black/50"
          }`}
          title="Previous"
          tabIndex="0"
        >
          <FiChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[3px]" />
        </div>
        <div
          ref={nextRef}
          className={`slider-nav-item flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm pointer-events-auto cursor-pointer transition-all duration-300 ease-out ${
            properties && activeIndex >= properties.length - slidesPerView
              ? "opacity-50 pointer-events-none"
              : "hover:scale-110 hover:bg-black/50"
          }`}
          title="Next"
          tabIndex="0"
        >
          <FiChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[3px]" />
        </div>
      </div>

      {/* Swiper Component */}
      <swiper-container
        ref={swiperElRef}
        init="false"
        class="booking-slider-slider"
      >
        {properties && properties.length > 0 ? (
          properties.map((property) => (
            <swiper-slide
              key={property.id}
              class="booking-slider-slide flex items-center justify-center py-4 min-h-[400px] sm:min-h-[450px]"
            >
              <PropertyCard property={property} isActive={true} />
            </swiper-slide>
          ))
        ) : (
          <swiper-slide class="booking-slider-slide flex items-center justify-center min-h-[450px]">
            <div className="text-gray-500 text-center p-8">
              No properties available
            </div>
          </swiper-slide>
        )}
      </swiper-container>

      {/* Slider Pagination */}
      <div className="slider-pagination flex items-center justify-center flex-wrap gap-2 pt-6"></div>
    </div>
  );
};

export default PropertySlider;
