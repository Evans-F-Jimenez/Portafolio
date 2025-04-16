import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Importar imágenes si usas Vite o Webpack
import VRImage from "/src/assets/VR.png";
import VAImage from "/src/assets/VA.png";
import FrontEndImage from "/src/assets/Front-End-bg.png";

const Experiences = () => {
    return (
        <div className="mx-5 py-10">
            <div className="text-4xl pt-10 font-bold text-black text-center mt-3 mb-5">
                Portafolio
            </div>

            <div className="flex flex-wrap gap-8 justify-center pt-5">
                <ExperienceCard title="Realidad Virtual (VR)" link="/MyPage/portafolio/vr" bgimage={VRImage} />
                {/* <ExperienceCard title="Realidad Aumentada (VA)" link="/portafolio/va" bgimage={VAImage} /> */}
                <ExperienceCard title="Front-End" link="/MyPage/portafolio/front-end" bgimage={FrontEndImage} />
            </div>
        </div>
    );
};

const ExperienceCard = ({ title, link, bgimage }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-120 h-50 p-6 rounded-xl text-center shadow-lg flex flex-col justify-between items-center transition-all duration-300"
            style={{
                backgroundImage: isHovered ? `url(${bgimage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: isHovered ? "transparent" : "rgba(0, 0, 0, 0.9)",
                transition: "background-color 0.3s ease-in-out"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2
                className="text-lg font-semibold transition-all duration-300"
                style={{
                    color: isHovered ? "red" : "white"
                }}
            >
                {title}
            </h2>
            <motion.div whileHover={{}} transition={{ type: "spring" }}>
                <Link
                    to={link}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:bg-red-900"
                >
                    Ver Más
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Experiences;
