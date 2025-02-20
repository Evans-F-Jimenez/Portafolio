import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Card } from './Card'

const Home = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-center min-h-screen px-6'>
            <div className='md:w-1/2 flex justify-center'>
                <Card />
                {/* <img src={HeroImage} alt="Evans Jimenez" className='rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300' /> */}
            </div>
            <div className='md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
                <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Hola, soy <span className='text-red-500'>Evans Jiménez</span></h1>
                <h3 className='text-2xl sm:text-3xl font-semibold mb-4'>Yo soy <span className='text-red-500'>
                    <TypeAnimation sequence={['Ingeniero de Software', 1000, 'Desarrollador Front-End', 1000, 'Freelancer', 1000]} loop={true} style={{ fontSize: "1re" }} repeat={Infinity} />
                </span>
                </h3>
                <p className='text-sm sm:text-lg mb-6 text-justify'>
                    Soy una persona que le apasiona el desarrollo front-end, con tal de que las personas puedan tener un claridad y clara atracción a lo que están observando. Tengo la responsabilidad de crear un diseño visual fiel a lo que se ha pedido y se busque, con tal de que las personas puedan tener un reconocimiento inmediato de donde se encuentran y que hacer.                </p>
            </div>
        </section>
    )
}

export default Home