import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} private?`,
        answer: "Yes! Your data stays **on your device**, and we don’t track or store your searches. GeoMuse is designed to help you explore the world **without sacrificing privacy**.",
    },
    {
        question: `Does GeoMuse work offline?`,
        answer: "Yes! Once you save a location, it remains available **even when you're offline**, so you can still see all your saved places on the map. However, the **AI-powered chat requires an internet connection** to fetch real-time recommendations.",
    },    
    {
        question: "Can I use GeoMuse for trip planning?",
        answer: "Yes! Create lists of places you want to visit, organize them by category, and visualize them **on a map**. GeoMuse makes it easy to plan your next adventure.",
    },
];
