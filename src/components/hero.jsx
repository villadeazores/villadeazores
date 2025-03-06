import React from "react";

export default function Hero() {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 h-screen w-full">
      <div className=" fixed -z-10 inset-0">
        <video
          className="min-w-full min-h-full relative object-cover"
          src="https://videos.pexels.com/video-files/8435714/8435714-uhd_2560_1440_30fps.mp4" // Replace with your video URL
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Color overlay */}
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-extralight text-2xl">Villa De</span>
              <br />
              <span className="fontTitle font-semibold md:text-9xl text-7xl text-cyan-50">
                Azores
              </span>
            </h1>
            {/* <p class="mt-5 font-sans text-base font-normal text-justify text-white text-opacity-70">
              Experience unparalleled luxury in this Goan villa, where
              breathtaking vistas harmonize with a seamless fusion of modern
              elegance and timeless Portuguese artistry.
            </p> */}
          </div>
        </div>
      </div>

      <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
        <a
          href="#"
          title=""
          className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-white hover:text-black bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
          role="button"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
