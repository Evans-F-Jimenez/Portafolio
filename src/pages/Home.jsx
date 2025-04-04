import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Card } from '../components/Card'

const Home = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-center px-6'>
            <div className='md:w-1/2 flex justify-center'>
                <Card />
            </div>
            <div className='md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
                <h1 className='text-3xl sm:text-6xl font-bold mb-4'>Hola, soy <span className='text-red-500'>Evans Jiménez</span></h1>
                <h3 className='text-2xl sm:text-3xl font-semibold mb-4'>Yo soy <span className='text-red-500'>
                    <TypeAnimation sequence={['Ingeniero de Software', 1000, 'Desarrollador Front-End', 1000, 'Freelancer', 1000]} loop={true} style={{ fontSize: "1re" }} repeat={Infinity} />
                </span>
                </h3>
                <p className='text-sm sm:text-lg mb-1 text-justify pr-25'>
                    Soy una persona que le apasiona el desarrollo front-end, con tal de que las personas puedan tener un claridad y clara atracción a lo que están observando. Tengo la responsabilidad de crear un diseño visual fiel a lo que se ha pedido y se busque, con tal de que las personas puedan tener un reconocimiento inmediato de donde se encuentran y que hacer.                </p>
            </div>
        </section>
    )
}

export default Home