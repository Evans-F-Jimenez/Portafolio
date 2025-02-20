"use client"

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSlider() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div className="w-full max-w-8xl mx-auto overflow-hidden relative bg-red-500 p-6 rounded-lg mb-10 transform translate-z-10">
            <div className="space-y-8">
                <div className='text-2xl font-bold mb-4 text-black text-center transform scale-110'>Projects</div>
                <motion.div
                    ref={ref}
                    className="flex gap-6 cursor-grab p-4"
                    drag="x"
                    dragConstraints={{ left: -800, right: 0 }}
                >
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative flex-none w-56 h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform scale-105 translate-z-20"
                            style={{ backgroundImage: `url(${item.src})` }}
                            onClick={() => window.open(item.url, "_blank")}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 text-black text-lg font-semibold opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all"
                            >
                                <div className="flex text-center">{item.name}</div>
                                <div className="text-sm font-normal flex text-center">{item.role}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className='text-2xl font-bold mb-4 text-black text-center transform scale-110'>Social</div>
                <motion.div
                    ref={ref}
                    className="flex gap-6 cursor-grab p-4"
                    drag="x"
                    dragConstraints={{ left: -800, right: 0 }}
                >
                    {images2.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative flex-none w-56 h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform scale-105 translate-z-20"
                            style={{ backgroundImage: `url(${item.src})` }}
                            onClick={() => window.open(item.url, "_blank")}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 text-black text-lg font-semibold opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all"
                            >
                                <div className="flex text-center">{item.name}</div>
                                <div className="text-sm font-normal flex text-center">{item.role}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

const images = [
    { src: "/Portafolio/assets/CC.svg", url: "https://github.com/Chord-Connect-Team/Chord-Connect-Mobile", name: "Chord Connect", role: "Front-End Developer" },
];

const images2 = [
    { src: "/Portafolio/assets/intecnologia2024.png", url: "https://hoy.intec.edu.do/evento/intecnologia-2024-inteligencia-artificial-y-sostenibilidad/", name: "Intecnologia 2024", role: "Expositor | REFODIGE" },
    { src: "/Portafolio/assets/MS2025.png", url: "https://www.intec.edu.do/en/notas-de-prensa/item/intec-promueve-carreras-stem-durante-manufacturing-summit-2025", name: "Manufacturing Summit 2025", role: "Expositor en Stand | INTEC" },
    //{ src: "/Portafolio/assets/EJ-2.jpg", url: "https://example.com/social2", name: "Intecnologia 2025", role: "Expositor | REFODIGE" },
];
