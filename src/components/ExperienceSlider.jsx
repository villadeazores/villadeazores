"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ExperienceSlider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);
  const containerRef = useRef(null);

  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    if (index !== activeIndex) {
      setActiveIndex((index + slides.length) % slides.length);
    }
  };

  const goToNext = () => goToSlide(activeIndex + 1);
  const goToPrev = () => goToSlide(activeIndex - 1);

  const handleMouseMove = (e, index) => {
    if (activeIndex !== index) return;

    const slide = slideRefs.current[index];
    if (!slide) return;

    const rect = slide.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    slide.style.setProperty("--x", x);
    slide.style.setProperty("--y", y);
  };

  const handleMouseLeave = (index) => {
    const slide = slideRefs.current[index];
    if (slide) {
      slide.style.setProperty("--x", 0);
      slide.style.setProperty("--y", 0);
    }
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 50) {
      goToNext();
    } else if (touchStart.current - touchEnd.current < -50) {
      goToPrev();
    }
  };

  return (
    <div
      ref={containerRef}
      className="is-container relative h-full w-full flex items-center justify-center overflow-hidden bg-secondary"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="is-slider relative w-[70vmin] h-[70vmin] mx-auto">
        <ul
          className="is-track flex absolute transition-transform duration-600"
          style={{
            transform: `translateX(-${activeIndex * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => {
            const isActive = activeIndex === index;
            const isPrevious =
              (activeIndex - 1 + slides.length) % slides.length === index;
            const isNext = (activeIndex + 1) % slides.length === index;

            return (
              <li
                key={slide.id || index}
                ref={(el) => (slideRefs.current[index] = el)}
                className={`
                  is-slide flex flex-col items-center justify-center 
                  relative w-[70vmin] h-[70vmin] mr-24 text-center text-white 
                  transition-all duration-300 ease-out z-10
                  ${isActive ? "opacity-100" : "opacity-25"}
                  ${
                    isPrevious
                      ? "cursor-w-resize hover:opacity-50 hover:translate-x-[2%]"
                      : ""
                  }
                  ${
                    isNext
                      ? "cursor-e-resize hover:opacity-50 hover:-translate-x-[2%]"
                      : ""
                  }
                `}
                onClick={() => goToSlide(index)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="is-image-wrapper absolute w-full h-full left-0 top-0 overflow-hidden rounded-2xl bg-accent transition-transform duration-150 ease-out ">
                  <img
                    className="is-image absolute w-[110%] h-[110%] object-cover opacity-0 pointer-events-none select-none transition-all duration-600"
                    alt={slide.headline}
                    src={slide.src || "/placeholder.svg"}
                    onLoad={(e) => (e.target.style.opacity = 1)}
                    style={
                      isActive
                        ? {
                            transform: `translate(calc(var(--x, 0) / 20 * 1px), calc(var(--y, 0) / 20 * 1px))`,
                          }
                        : {}
                    }
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <article
                  className={`
                    is-content relative p-[4vmin] opacity-0 invisible transition-transform duration-600
                    ${isActive ? "is-active visible" : ""}
                  `}
                  style={
                    isActive
                      ? {
                          transform: `translate(calc(var(--x, 0) / 60 * -1px), calc(var(--y, 0) / 60 * -1px))`,
                        }
                      : {}
                  }
                >
                  <h2 className="is-headline text-[8vmin] font-extralight text-white/50">
                    {slide.headline}
                  </h2>
                  <button className="is-button mt-8 text-xs border-none rounded-xl bg-cyan-600 text-white cursor-pointer py-2 px-4 ">
                    {slide.button}
                  </button>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="is-controls flex justify-center absolute top-[calc(100%+1rem)] w-full">
          <button
            className="is-prev-btn flex items-center justify-center bg-transparent border-[3px] border-transparent rounded-full h-12 w-12 p-0 mx-2 hover:border-focus focus:border-focus focus:outline-none"
            title="Previous slide"
            onClick={goToPrev}
            aria-label="Go to previous slide"
          >
            <FiChevronLeft className="w-6 h-6 text-cyan-500" />
          </button>

          <button
            className="is-next-btn flex items-center justify-center bg-transparent border-[3px] border-transparent rounded-full h-12 w-12 p-0 mx-2 hover:border-focus focus:border-focus focus:outline-none"
            title="Next slide"
            onClick={goToNext}
            aria-label="Go to next slide"
          >
            <FiChevronRight className="w-6 h-6 text-cyan-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlider;