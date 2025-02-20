import React from 'react'
import { motion } from 'framer-motion'

const ServicesShow = [
    { name: " Desarrollo Front-End - Movil", icon: "/Portafolio/assets/mobile.png" },
    { name: " Desarrollo Front-End - Web", icon: "/Portafolio/assets/web.png" },
    { name: " Diseño UI/UX", icon: "/Portafolio/assets/uiux.png" },
];

const Services = () => {
    return (
        <div className="space-y-4">
            {ServicesShow.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex justify-between items-center w-full bg-white/50 backdrop-blur-md p-4 rounded-lg shadow-md text-gray-900"
                >
                    <span className="text-lg font-semibold">{service.name}</span>
                    <img src={service.icon} alt={service.name} className="w-8 h-8" />
                </motion.div>
            ))}
        </div>
    )
}

export default Services
