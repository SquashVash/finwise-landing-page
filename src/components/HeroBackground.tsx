import React from 'react';

const cities = [
    'Tokyo', 'New York', 'London', 'Paris', 'Sydney', 
    'Dubai', 'Singapore', 'Mumbai', 'Rio', 'Cairo',
    'Berlin', 'Toronto', 'Seoul', 'Madrid', 'Bangkok',
    'Moscow', 'Rome', 'Amsterdam', 'Istanbul', 'Shanghai',
    'Vancouver', 'Vienna', 'Barcelona', 'Hong Kong', 'Stockholm',
    'Oslo', 'Copenhagen', 'Melbourne', 'San Francisco', 'Chicago'
];

const HeroBackground: React.FC = () => {
    return (
        <>
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="absolute inset-0 h-full w-full bg-[#f0f4ff]">
                    <div className="relative w-[200%] sm:w-[140%] left-1/2 -translate-x-[40%] -translate-y-[5%] rotate-[-6deg]">
                        <div className="grid grid-cols-4 gap-x-1 gap-y-1 sm:gap-x-2 sm:gap-y-2 md:gap-4 overflow-hidden h-[400vh]">
                            {[...cities, ...cities].map((city, index) => (
                                <div
                                    key={`scroll-${index}-${city}`}
                                    className={`rounded-2xl border-2 border-gray-200 
                                             flex items-center justify-center text-xl font-semibold 
                                             text-white shadow-lg hover:opacity-90 transition-opacity
                                             duration-300 aspect-square bg-cover bg-center
                                             will-change-transform contain-paint
                                             ${index % 4 % 2 === 0 ? 'animate-infiniteScroll' : 'animate-infiniteScrollReverse'}`}
                                    style={{
                                        backgroundImage: `url('/images/cities/${city.toLowerCase().replace(' ', '-')}.webp')`,
                                        transform: 'translateZ(0)'
                                    }}
                                >
                                    {city}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    );
};

export default HeroBackground; 