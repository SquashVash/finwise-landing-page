"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface IconConfig {
    imageSrc: string;
    size: number;
    position: {
        top: string;
        left: string;
    };
    initialOffset: {
        x: number;
        y: number;
    };
}

const icons: IconConfig[] = [
    // 🍔 Burger - Most Used
    { imageSrc: "/images/burger.svg", size: 10, position: { top: "16%", left: "20%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/burger.svg", size: 10, position: { top: "37%", left: "50%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/burger.svg", size: 10, position: { top: "65%", left: "40%" }, initialOffset: { x: 0, y: -100 } },

    // 🍺 Pint - Most Used
    { imageSrc: "/images/pint.svg", size: 10, position: { top: "15%", left: "75%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/pint.svg", size: 10, position: { top: "50%", left: "5%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/pint.svg", size: 10, position: { top: "75%", left: "60%" }, initialOffset: { x: 0, y: -100 } },

    // 🍕 Pizza - Most Used
    { imageSrc: "/images/pizza.svg", size: 10, position: { top: "20%", left: "45%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/pizza.svg", size: 10, position: { top: "55%", left: "80%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/pizza.svg", size: 10, position: { top: "75%", left: "25%" }, initialOffset: { x: 0, y: -100 } },

    // 🍣 Maki - Most Used
    { imageSrc: "/images/maki.svg", size: 10, position: { top: "30%", left: "10%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/maki.svg", size: 10, position: { top: "60%", left: "70%" }, initialOffset: { x: 0, y: -100 } },

    // 🛍️ Shopping Bag - Most Used
    { imageSrc: "/images/shopping-bag.svg", size: 10, position: { top: "25%", left: "17%" }, initialOffset: { x: 0, y: -100 } },
    { imageSrc: "/images/shopping-bag.svg", size: 10, position: { top: "37%", left: "35%" }, initialOffset: { x: 0, y: -100 } },

    // 🏋️ Weightlifting - Few
    { imageSrc: "/images/weightlifting.svg", size: 10, position: { top: "50%", left: "65%" }, initialOffset: { x: 0, y: -100 } },

    // 🍸 Martini - Few
    { imageSrc: "/images/martini.svg", size: 10, position: { top: "70%", left: "5%" }, initialOffset: { x: 0, y: -100 } },

    // 🎡 Ferris Wheel - Few
    { imageSrc: "/images/ferris-wheel.svg", size: 10, position: { top: "40%", left: "85%" }, initialOffset: { x: 0, y: -100 } },

    // 🧘 Yoga - Few
    { imageSrc: "/images/yoga.svg", size: 10, position: { top: "73%", left: "45%" }, initialOffset: { x: 0, y: -100 } },

    // 🎳 Bowling - Used Once
    { imageSrc: "/images/bowling.svg", size: 10, position: { top: "15%", left: "35%" }, initialOffset: { x: 0, y: -100 } },

    // 🚤 Boat - Used Once
    { imageSrc: "/images/boat.svg", size: 10, position: { top: "45%", left: "20%" }, initialOffset: { x: 0, y: -100 } },

    // 🏠 House - Used Once
    { imageSrc: "/images/house.svg", size: 10, position: { top: "35%", left: "75%" }, initialOffset: { x: 0, y: -100 } }
];

const getRandomDuration = () => {
    return 0.8 + Math.random() * 0.8; // Random duration between 0.8 and 1.6 seconds
};

const iconVariants = {
    offscreen: ({ initialOffset }: { initialOffset: { x: number; y: number } }) => ({
        x: initialOffset.x,
        y: initialOffset.y,
        opacity: 0,
        scale: 0.5,
    }),
    onscreen: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 0.5,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: getRandomDuration(),
        }
    }
}

const FloatingIcons = () => {
    return (
        <>
            {icons.map((config, index) => (
                <motion.div
                    key={index}
                    className="absolute p-2 rounded-full shadow-lg"
                    style={{
                        top: config.position.top,
                        left: config.position.left,
                    }}
                    custom={{ initialOffset: config.initialOffset }}
                    variants={iconVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ 
                        once: true,
                        amount: "all",
                        margin: "-100px"
                    }}
                >
                    <Image 
                        src={config.imageSrc}
                        alt={`Floating icon ${index + 1}`}
                        width={config.size}
                        height={config.size}
                        className="w-auto h-auto"
                    />
                </motion.div>
            ))}
        </>
    )
}

export default FloatingIcons 