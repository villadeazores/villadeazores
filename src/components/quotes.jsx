import React, { useEffect, useRef } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Quotes({ quote, author }) {
  const quoteRef = useRef(null);

  useEffect(() => {
    const splitWords = () => {
      if (!quoteRef.current) return;

      let quotewords = quote.split(" ");
      let wordCount = quotewords.length;
      quoteRef.current.innerHTML = "";

      for (let i = 0; i < wordCount; i++) {
        quoteRef.current.innerHTML += `<span>${quotewords[i]}</span>`;
        if (i < quotewords.length - 1) {
          quoteRef.current.innerHTML += " ";
        }
      }

      const words = quoteRef.current.querySelectorAll("span");
      fadeWords(words);
    };

    const getRandom = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const fadeWords = (words) => {
      words.forEach((word) => {
        word.animate(
          [
            {
              opacity: 0,
              filter: `blur(${getRandom(2, 5)}px)`,
            },
            {
              opacity: 1,
              filter: "blur(0px)",
            },
          ],
          {
            duration: 1000,
            delay: getRandom(500, 3300),
            fill: "forwards",
          }
        );
      });
    };

    splitWords();
  }, [quote]);

  return (
    <blockquote className="mt-4 text-base md:text-2xl lg:text-4xl flex flex-col justify-center items-center">
      <div>
        <FaQuoteLeft className="inline-block text-cyan-400 text-base mr-3" />
        <span
          ref={quoteRef}
          className="font-serif italic tracking-wide text-base "
        ></span>
        <FaQuoteRight className="inline-block text-cyan-400 text-base ml-3" />
      </div>
      <div>
        <cite className="block text-center font-sans mt-0 text-sm text-gray-400 not-italic">
          {author}
        </cite>
      </div>
    </blockquote>
  );
}
