import React from "react";

export default function Header() {
  return (
    <header class="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
      <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div class="flex items-center justify-between">
          <div class="flex flex-shrink-0">
            <a
              href="#"
              title="Azores"
              class="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary text-white font-bold italic text-2xl fontTitle"
            >
              {/* <img
                class="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg"
                alt="BakerStreet"
              /> */}
              Azores
            </a>
          </div>

          <div class="md:hidden">
            <button
              type="button"
              class="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div class="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
            <a
              href="#"
              title=""
              class="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              {" "}
              About{" "}
            </a>

            <a
              href="#"
              title=""
              class="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              {" "}
              Services{" "}
            </a>

            <a
              href="#"
              title=""
              class="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              {" "}
              Contacts{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
