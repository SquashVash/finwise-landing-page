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
                <div className="absolute inset-0 h-full w-full bg-[#f0f4ff]">
                    <div className="relative w-[120%] left-1/2 -translate-x-[40%] rotate-[-6deg]">
                        <div className="grid grid-cols-4 gap-4 overflow-hidden h-[400vh]">
                            {[...cities, ...cities, ...cities, ...cities].map((city, index) => (
                                <div
                                    key={`scroll-${index}-${city}`}
                                    className={`rounded-2xl border-2 border-gray-200 bg-white/60 
                                             flex items-center justify-center text-xl font-semibold 
                                             text-gray-700 shadow-lg hover:bg-white/80 transition-all
                                             duration-300 aspect-square ${index % 4 % 2 === 0 ? 'animate-infiniteScroll' : 'animate-infiniteScrollReverse'}`}
                                >
                                    {city}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>
        </>
    );
};

export default HeroBackground; 