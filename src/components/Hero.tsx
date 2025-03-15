import React from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data/hero';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <HeroBackground />

            <div className="text-center">
                <h1 className="text-6xl md:text-8xl md:leading-tight font-bold text-white max-w-2xl md:max-w-5xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-xl text-white max-w-2xl mx-auto">{heroDetails.subheading}</p>
                
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-12 md:mt-16 mx-auto z-10'
                />
            </div>
        </section>
    );
};

export default Hero;
