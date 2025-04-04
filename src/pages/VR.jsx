import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Importar imágenes desde assets
import BosquecitoThumb from "../assets/Bosquecito-Thumb.jpg";
import BibliotecaThumb from "../assets/Biblioteca-Thumb.png";
import FEThumb from "../assets/Flora-Thumb.png";

const projects = [
    {
        src: BosquecitoThumb,
        url: "https://refodige.intec.edu.do/recursos/bosquecito/",
        name: "Bosquecito",
        tipo: "Recorrido Virtual",
        rol: "Creador",
        cliente: "INTEC (REFODIGE)"
    },
    {
        src: FEThumb,
        url: "https://refodige.intec.edu.do/recursos/jardinbotanico/",
        name: "Flora Endémica",
        tipo: "Recorrido Virtual",
        rol: "Supervisor",
        cliente: "INTEC (REFODIGE)"
    },
    {
        src: BibliotecaThumb,
        url: "https://refodige.intec.edu.do/recursos/biblioteca/",
        name: "Biblioteca",
        tipo: "Recorrido Virtual",
        rol: "Supervisor",
        cliente: "INTEC (REFODIGE)"
    }
];

const VR = () => {
    return (
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto p-6 rounded-lg pt-20">
            <div className="text-2xl font-bold text-black text-center mb-6">Proyectos de Realidad Virtual</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {projects.map((item, index) => (
                    <ProjectCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ item }) => {
    return (
        <motion.div
            className="project-card relative flex-none w-56 h-72 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out group"
            style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            onClick={() => window.open(item.url, "_blank")}
            whileHover={{ scale: 1.1 }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/0 group-hover:bg-white/90 transition-all duration-300">
                <div className="text-center text-white font-bold group-hover:text-black transition all duration-300">
                    {item.tipo}
                </div>
                <div className="text-center text-white font-bold text-lg group-hover:text-black transition-all duration-300">
                    {item.name}
                </div>
                <div className="text-center text-sm text-gray-200 group-hover:text-black transition-all duration-300">
                    {item.rol} - {item.cliente}
                </div>
            </div>
        </motion.div>
    );
};

export default VR;
