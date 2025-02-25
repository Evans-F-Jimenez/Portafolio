"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import educationData from "../data/education.js";

export default function Education() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="max-w-screen overflow-x-hidden mr-5 ml-5 rounded-md cursor-pointer flex flex-col items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
            <motion.div className="w-full p-5 bg-red-500 text-white text-center">
                <h2 className="m-0 text-xl font-bold">Educación</h2>
            </motion.div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                className="overflow-hidden bg-white-100 p-4 rounded-md rounded-b-lg w-full text-center"
            >
                <div className="flex flex-col gap-4">
                    {educationData.map((edu, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 border-b border-gray-300">
                            <img src={edu.icon} alt={edu.name} className="w-10 h-10" />
                            <div>
                                <h3 className="font-semibold">{edu.name} ({edu.siglas})</h3>
                                <p className="text-gray-600">{edu.period}</p>
                                <p className="text-gray-500 italic">{edu.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
