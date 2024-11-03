"use client";

import React, { useEffect, useState } from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { CardStack } from "./ui/CardStack";

const Clients = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
        checkScreenSize();
    }, []);

    return (
        <section id="testimonials" className="py-20">
            <h1 className="heading">
                Kind words from
                <span className="text-purple"> satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
                    className="h-[53vh] md:h-[35rem] pt-12 sm:pt-0 pb-7 sm:pb-0 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    {
                        isSmallScreen ?
                        <CardStack 
                            items={testimonials}
                        /> :
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    }
                </div>
            </div>
        </section>
    );
};

export default Clients;