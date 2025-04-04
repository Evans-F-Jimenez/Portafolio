import { motion } from "framer-motion";

const skills = [
    { name: "Flutter", icon: "/assets/flutter.png" },
    { name: "React", icon: "/assets/React-logo.png" },
    { name: "C#", icon: "/assets/Logo_C.png" },
    { name: "Figma", icon: "/assets/figma.png" },
    { name: "JavaScript", icon: "/assets/JS.png" }
];

const Skills = () => {
    return (
        <div className="space-y-4">
            {skills.map((skills, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex justify-between items-center w-full bg-white backdrop-blur-md p-4 rounded-lg shadow-md text-black"
                >
                    <span className="text-lg font-semibold">{skills.name}</span>
                    <img src={skills.icon} alt={skills.name} className="w-8 h-8" />
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
