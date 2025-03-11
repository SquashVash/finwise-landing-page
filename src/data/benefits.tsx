import { FiMessageCircle, FiZap, FiSearch, FiBookmark, FiMap, FiNavigation, } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Discover Hidden Gems Simply By Asking",
        description: "No need to type rigid search terms—just ask like you're talking to a friend. GeoMuse understands natural language and gives tailored recommendations.",
        bullets: [
            {
                title: "Natural Language Search",
                description: "Ask things like 'Cool coffee shops nearby' or 'Hidden gems in Tokyo' and get instant, AI-curated suggestions.",
                icon: <FiMessageCircle size={26} />
            },
            {
                title: "Smart Context Awareness",
                description: "GeoMuse learns your preferences and adapts over time, making each search more relevant.",
                icon: <FiZap size={26} />
            },
            {
                title: "Effortless Discovery",
                description: "Find the perfect spot without endless scrolling—just tell GeoMuse what you're in the mood for.",
                icon: <FiSearch size={26} />
            }
        ],
        imageSrc: "/images/mockup-1-option1.webp"
    },
    {
        title: "Your Own Travel Wishlist, Mapped Out",
        description: "Save places you want to visit and see them all around you on an interactive map.",
        bullets: [
            {
                title: "Custom Location Lists",
                description: "Save and categorize spots you want to check out—whether it’s a café, a hiking trail, or a hidden speakeasy.",
                icon: <FiBookmark size={26} />
            },
            {
                title: "Map-Based View",
                description: "See all your saved locations in one place, making it easy to plan your day at a glance.",
                icon: <FiMap size={26} />
            },
            {
                title: "Seamless Navigation",
                description: "Easily open saved places in Google Maps for directions with just one tap.",
                icon: <FiNavigation size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    }
    
]