import React from 'react'
import Services from '../components/Services'
import Skills from '../components/Skills'

const SkillsServices = () => {
    return (
        <div className="flex gap-8 justify-center p-6 mb-5 pt-30">
            <div className="p-6 rounded-lg shadow-lg w-1/2 bg-black/85">
                <h2 className="text-2xl font-bold mb-4 text-white text-center">Servicios</h2>
                <Services />
            </div>
            <div className=''>

            </div>
            <div className="p-6 rounded-lg shadow-lg w-1/2 bg-black/85">
                <h2 className="text-2xl font-bold mb-4 text-white text-center">Conocimientos</h2>
                <Skills />
            </div>
        </div>
    )
}

export default SkillsServices