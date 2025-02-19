import { motion } from "framer-motion";

const skills = [
    { name: "Flutter", icon: "/Portafolio/assets/flutter.png" },
    { name: "React", icon: "/Portafolio/assets/React-logo.png" },
    { name: "C#", icon: "/Portafolio/assets/Logo_C.png" },
    { name: "Figma", icon: "/Portafolio/assets/figma.png" }
];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const Skills = () => {
    const prime = isPrime(skills.length);
    const displayedSkills = prime ? skills.slice(0, -1) : skills;
    const lastSkill = prime ? skills[skills.length - 1] : null;
    const columns = prime ? "grid-cols-2" : "grid-cols-2";

    return (
        <>
            <div className={`grid ${columns} gap-4 p-6 max-w-lg mx-auto`}>
                {displayedSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex justify-between items-center w-full bg-white/50 backdrop-blur-md p-4 rounded-lg shadow-md text-gray-900"
                    >
                        <span className="text-lg font-semibold">{skill.name}</span>
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    </motion.div>
                ))}
                {prime && lastSkill && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: skills.length * 0.2 }}
                        className="flex justify-between items-center w-full bg-white/50 backdrop-blur-md p-4 rounded-lg shadow-md text-gray-900 col-span-2 mx-auto"
                    >
                        <span className="text-lg font-semibold">{lastSkill.name}</span>
                        <img src={lastSkill.icon} alt={lastSkill.name} className="w-8 h-8" />
                    </motion.div>
                )}
            </div></>
    );
};

export default Skills;
