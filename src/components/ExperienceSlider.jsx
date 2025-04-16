"use client"

import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ExperienceSlider() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".project-card")) {
                setHoveredProject(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={ref} className="w-full max-w-8xl mx-auto overflow-hidden relative bg-red-500 p-7 rounded-lg mb-10">
            <div className="space-y-8">
                <div className='text-2xl font-bold mb-4 text-white text-center'>Movil</div>
                <div className='text-1xl font-bold mb-4 text-white text-center'> Haz click en imagen para ver demo.</div>
                <motion.div
                    className="flex gap-6 cursor-grab p-4"
                    drag="x"
                    dragConstraints={{ left: -800, right: 0 }}
                >
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            className="project-card relative flex-none w-56 h-64 bg-cover bg-white bg-center rounded-lg shadow-lg overflow-hidden"
                            style={{ backgroundImage: `url(${item.src})` }}
                            onMouseEnter={() => setHoveredProject(item)}
                            onClick={() => window.open(item.url, "_blank")}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 text-black text-lg font-semibold opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all"
                            >
                                <div className="text-center">{item.name}</div>
                                <div className="text-sm font-normal text-center">{item.role}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {hoveredProject && (
                    <motion.div
                        className="mt-6 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="flex gap-4 cursor-grab p-4"
                            drag="x"
                            dragConstraints={{ left: -800, right: 0 }}
                        >
                            {hoveredProject.images.map((img, idx) => (
                                <motion.img
                                    key={idx}
                                    src={img}
                                    alt={`Imagen ${idx + 1}`}
                                    className="w-60 h-130 object-cover rounded-lg shadow-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.9 }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* <div className='text-2xl font-bold mb-4 text-black text-center'>Social</div>
                <motion.div
                    className="flex gap-6 cursor-grab p-4"
                    drag="x"
                    dragConstraints={{ left: -800, right: 0 }}
                >
                    {socials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="project-card relative flex-none w-56 h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
                            style={{ backgroundImage: `url(${item.src})` }}
                            onClick={() => window.open(item.url, "_blank")}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 text-black text-lg font-semibold opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all"
                            >
                                <div className="text-center">{item.name}</div>
                                <div className="text-sm font-normal text-center">{item.role}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div> */}
            </div>
        </div>
    );
}

const projects = [
    {
        src: "/MyPage/assets/CC-Purple.svg",
        url: "https://estintecedu-my.sharepoint.com/:v:/g/personal/1106103_est_intec_edu_do/ETw08WaYMd1Ak2X3pJAyTQABE1p0jJmfvxr3W2E5HPglOg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=T0HVFw",
        name: "Chord Connect",
        role: "Desarrollador Front-End",
        images: [
            "/MyPage/assets/Inicio-CC.png",
            "/MyPage/assets/1-CC.png",
            "/MyPage/assets/2-CC.png",
            "/MyPage/assets/3-CC.png"
        ]
    },
];

// const socials = [
//     { src: "/assets/intecnologia2024.png", url: "https://hoy.intec.edu.do/...", name: "Intecnologia 2024", role: "Expositor | REFODIGE" },
//     { src: "/assets/MS2025.png", url: "https://www.intec.edu.do/...", name: "Manufacturing Summit 2025", role: "Expositor en Stand | INTEC" },
// ];
