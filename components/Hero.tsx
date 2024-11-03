import React from 'react'
import { FaLocationArrow } from "react-icons/fa6"
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './MagicButton'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] absolute left-0 top-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="absolute -top-[80px]">
                    <img src="/picture.jpeg" width={510} height={305} alt="Omar Hassan's Picture" className="rounded-xl"/>
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60' />
                </div>
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 relative">
                        Shaping the Future of the Web
                    </p>

                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words={"Building the Web of Tomorrow, Today"} />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100 relative">
                        Hi, I&apos;m Omar Hassan, a Full Stack MERN Developer
                    </p>
                    
                    <a href="/CV.pdf" download>
                        <MagicButton
                            title="Download my CV"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero