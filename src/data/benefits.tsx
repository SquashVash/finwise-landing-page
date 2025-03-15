import { FiMessageCircle, FiZap, FiSearch, FiBookmark, FiMap, FiNavigation, } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Discover Hidden Gems Simply By Asking",
        description: "Forget clunky search terms—just ask like you would a friend. GeoMuse understands what you mean and finds spots you'll love.",
        bullets: [
            {
                title: "Search the Way You Talk",
                description: "No need for exact phrases. Just say, \"Cool coffee shops nearby\" or \"Hidden gems in Tokyo,\" and let AI do the work.",
                icon: <FiMessageCircle size={26} />
            },
            {
                title: "Find & Save Instantly—No Switching Apps",
                description: "Search and save in one place—no more jumping between ChatGPT and Google Maps. Just tap, and it's on your list.",
                icon: <FiSearch size={26} />
            },
            {
                title: "Smarter Over Time",
                description: "GeoMuse learns what you like and tailors suggestions to your vibe—so the more you use it, the better it gets.",
                icon: <FiZap size={26} />
            },
        ],
        imageSrc: "/images/mockup-1-option1.webp"
    },
    {
        title: "Your Travel Wishlist, Brought to Life",
        description: "Save must-visit spots and see them all on an interactive map—so you never forget a place you want to check out.",
        bullets: [
            {
                title: "Save Locations With One Tap",
                description: "Found a spot? Tap once to save—no copy-pasting, no hassle.",
                icon: <FiBookmark size={26} />
            },
            {
                title: "See It All on a Map",
                description: "See every saved spot at a glance, so you can plan your day in seconds",
                icon: <FiMap size={26} />
            },
            {
                title: "One-Tap Directions",
                description: "When you're ready to go, just tap to start navigating to any saved location.",
                icon: <FiNavigation size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    }
    
]