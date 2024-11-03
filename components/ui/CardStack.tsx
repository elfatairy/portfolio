"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const flip = () => {
    console.log("flipper");
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  }


  const startFlipping = () => {
    interval = setInterval(() => {
      flip();
    }, 22000);
  };

  return (
    <div className="relative  h-full w-[90vw]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-full w-[90vw] rounded-3xl p-4 shadow-xl rounded-2xl border border-b-0  border-slate-800 shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
            onClick={() => {flip()}}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* change text color, text-lg */}
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {card.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                {/* add this div for the profile img */}
                <div className="me-3">
                  <img src={card.image} alt="profile" className="w-[50px] h-[50px] rounded-full" />
                </div>
                <span className="flex flex-col gap-1">
                  {/* change text color, font-normal to font-bold, text-xl */}
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {card.name}
                  </span>
                  {/* change text color */}
                  <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                    {card.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </motion.div>
        );
      })}
    </div>
  );
};
