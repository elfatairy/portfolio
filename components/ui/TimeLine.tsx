"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineDescription {
  title: string,
  content: string | string[]
}

interface TimelineEntry {
  id: number,
  date: string;
  title: string;
  desc: TimelineDescription[];
  otherClassNames: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h2 className="hidden md:block text-2l md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.date}
              </h2>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h2 className="md:hidden block text-2l mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.date}
              </h2>
              <div>
                <h3 className="text-xl mb-3 ">{item.title}</h3>
                <div className="flex flex-col gap-2">
                  {
                    item.desc.map((descItem, idx) => (
                      <div key={idx} className={`flex gap-[5px] ${Array.isArray(descItem.content)? 'flex-col' : ''}`}>
                        {
                          Array.isArray(descItem.content) ? <>
                            <span className="text-gray-300">{descItem.title}: </span>
                            <ul className="list-disc ml-5">
                              {
                                descItem.content.map((descItemBullet, index) => (
                                  <li key={index} className="text-gray-300">{descItemBullet}</li>
                                ))
                              }
                            </ul>
                          </>
                           : <p className="text-gray-300"><span>{descItem.title}: </span> {descItem.content}</p>
                        }
                      </div>
                    ))
                  }
                </div>
              </div>{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
