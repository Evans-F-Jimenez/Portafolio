import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_25gv313",  // 🔹 Reemplaza con tu Service ID
                "template_nilrbvl", // 🔹 Reemplaza con tu Template ID
                formData,
                "JhM45ROy4ASO8gT9l"  // 🔹 Reemplaza con tu Public Key
            )
            .then(
                (response) => {
                    console.log("Correo enviado con éxito", response);
                    alert("Mensaje enviado correctamente!");
                },
                (error) => {
                    console.error("Error al enviar el correo", error);
                    alert("Hubo un error al enviar el mensaje.");
                }
            );
    };

    return (
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                className="p-2 border border-white rounded-md text-white"
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Tu Correo"
                className="p-2 border border-white rounded-md text-white"
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Tu Mensaje"
                className="p-2 border border-white rounded-md h-32 text-white"
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit" className="p-2 bg-red-500 text-white rounded-md hover:bg-blue-600">
                Enviar
            </button>
        </form>
    );
};

export default ContactForm;
