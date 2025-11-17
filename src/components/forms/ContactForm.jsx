// src/components/forms/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Responderemos pronto.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="bg-beige-calido p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-morado-uva font-semibold mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-verde-vid focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-morado-uva font-semibold mb-2">
            Correo electrónico *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-verde-vid focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-morado-uva font-semibold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-verde-vid focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-morado-uva font-semibold mb-2">
            Mensaje *
          </label>
          <textarea
            name="mensaje"
            required
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-verde-vid focus:outline-none"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full py-3 bg-morado-uva text-white rounded-lg font-bold hover:opacity-90 transition-all"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;