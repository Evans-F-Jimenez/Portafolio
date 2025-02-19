"use client"

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSlider() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div className="w-full max-w-lg mx-auto overflow-hidden relative bg-red-500/50 p-4 rounded-lg mb-10">
            <div className="space-y-8">
                <div className='text-2xl font-bold mb-4 text-black-500 text-center'>Projects</div>
                <motion.div
                    ref={ref}
                    className="flex gap-4 cursor-grab p-4"
                    drag="x"
                    dragConstraints={{ left: -600, right: 0 }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="flex-none w-48 h-56 bg-cover bg-center rounded-lg shadow-lg"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                </motion.div>
                <div className='text-2xl font-bold mb-4 text-black-500 text-center'>Social</div>
                <motion.div
                    ref={ref}
                    className="flex gap-4 cursor-grab p-4"
                    drag="x"
                    dragConstraints={{ left: -600, right: 0 }}
                >
                    {images2.map((image, index) => (
                        <motion.div
                            key={index}
                            className="flex-none w-48 h-56 bg-cover bg-center rounded-lg shadow-lg"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}


const images = [
    "/Portafolio/assets/EJ.jpg",
    "/Portafolio/assets/EJ-2.jpg",
];

const images2 = [
    "/Portafolio/assets/EJ.jpg",
    "/Portafolio/assets/EJ-2.jpg",
];
