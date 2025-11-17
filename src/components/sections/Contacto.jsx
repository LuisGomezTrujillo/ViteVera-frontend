// src/components/sections/Contacto.jsx
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../forms/ContactForm';
import ContactCard from '../ui/ContactCard';
import { CONTACT_INFO } from '../../data/constants';

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Contáctanos
        </h2>
        <p className="text-xl text-center text-gris-suave mb-12 max-w-3xl mx-auto">
          ¿Quieres sumarte, colaborar o simplemente conocer más? Escríbenos, estamos felices de escucharte.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <ContactForm />

          {/* Información de Contacto */}
          <div className="space-y-8">
            <ContactCard icon={MapPin} title="Ubicación">
              <p>
                {CONTACT_INFO.ubicacion.ciudad}<br />
                {CONTACT_INFO.ubicacion.pais}
              </p>
            </ContactCard>

            <ContactCard icon={Mail} title="Correo Electrónico">
              <p>{CONTACT_INFO.email}</p>
            </ContactCard>

            <ContactCard icon={Phone} title="Teléfono">
              <p>{CONTACT_INFO.telefono}</p>
            </ContactCard>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-morado-uva to-verde-vid p-6 rounded-lg text-white">
              <h3 className="font-bold text-xl mb-3">
                Suscríbete a Nuestro Boletín
              </h3>
              <p className="mb-4 text-sm">
                Recibe noticias, eventos y recursos Montessori
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 p-2 rounded-lg text-gray-200"
                />
                <button className="px-4 py-2 bg-white text-morado-uva rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;