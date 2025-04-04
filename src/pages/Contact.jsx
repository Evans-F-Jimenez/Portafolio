import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (

        <div className='py-35'>
            <div className="contact-container p-7 bg-black/90 rounded-md max-w-8xl mr-5 ml-5 mx-auto flex flex-col md:flex-row">
                <div className="contact-info flex flex-col items-center md:items-start md:w-1/2 mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4 text-red-500">Contacto</h2>
                    <div className="contact-item mb-4">
                        <h3 className="text-xl font-semibold text-red-500">Telefono</h3>
                        <p className="text-lg text-white">+1 (809) 880-2894</p>
                    </div>
                    <div className="contact-item bg-white p-1 rounded-md mb-4">
                        <a href="https://www.linkedin.com/in/evans-jimenez-a8a629314" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:underline">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="contact-form md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-center text-red-500">Enviame un mensaje.</h3>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;