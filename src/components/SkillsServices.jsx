import React from 'react'
import Services from './Services'
import Skills from './Skills'

const SkillsServices = () => {
    return (
        <div className="flex gap-8 justify-center p-6 mb-20">
            <div className="border border-red-500 p-6 rounded-lg shadow-lg w-1/2 bg-white">
                <h2 className="text-2xl font-bold mb-4 text-black-500 text-center">Servicios</h2>
                <Services />
            </div>
            <div className="border border-red-500 p-6 rounded-lg shadow-lg w-1/2 bg-white">
                <h2 className="text-2xl font-bold mb-4 text-black-500 text-center">Lenguajes</h2>
                <Skills />
            </div>
        </div>
    )
}

export default SkillsServices