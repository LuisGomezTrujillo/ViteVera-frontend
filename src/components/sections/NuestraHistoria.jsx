// src/components/sections/NuestraHistoria.jsx
import React from 'react';
import { Heart, Users } from 'lucide-react';
import Button from '../ui/Button';

const NuestraHistoria = () => {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-12 font-heading">
          Nuestra Historia
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gris-suave leading-relaxed">
              Todo comenzó con nuestros niños y niñas asistiendo a la Casa de las Hermanas de la Caridad de San Vicente de Paul en Villamaría Caldas para recibir la Catequesis del Buen Pastor. 
            </p>
            <p className="text-lg text-gris-suave leading-relaxed">
              Nos capacitamos en Psicopedagogía Montessori y Catequesis del Buen Pastor con ACOFOREC (Asociación Colombiana para la Formación Católica).
            </p>
            <p className="text-lg text-gris-suave leading-relaxed">
              Nos estamos encontrando con más familias para compartir lo que tenemos: experiencia, manos, corazón y la fe.
            </p>
            <p className="text-lg text-gris-suave leading-relaxed">
              Seguiremos capacitandonos y capacitando a padres, familiares y educadores que participan en la formación de los seres humanos que construirán la paz en Colombia y el mundo.
            </p>
            <p className="text-lg text-gris-suave leading-relaxed">
              <strong className="text-verde-vid">Nuestra misión</strong> es superar los obstáculos que impiden que las familias vivan la experiencia de la Educación para la Vida y la Paz con el método Montessori y la Catequesis del Buen Pastor.
            </p>
            <Button variant="secondary">
              <Users size={20} />
              <span>Conócenos y únete</span>
            </Button>
          </div>
          
          <div className="bg-beige-calido p-8 rounded-lg">
            <div className="aspect-square bg-verde-vid rounded-lg flex items-center justify-center">
              {/* <Heart size={100} className="text-white opacity-20" /> */}
              <img
                  src="/formacion.jpg"
                  
                  className="aspect-square bg-verde-vid rounded-lg flex items-center justify-center"
                  
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;