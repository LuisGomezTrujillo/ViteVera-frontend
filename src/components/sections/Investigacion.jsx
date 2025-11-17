// src/components/sections/Investigacion.jsx
import React from 'react';
import { Lightbulb, Award, ChevronRight, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { LINEAS_INVESTIGACION } from '../../data/constants';

const Investigacion = () => {
  return (
    <section id="investigacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Investigación y Ciencia Montessori
        </h2>
        <p className="text-xl text-center text-gris-suave mb-12 max-w-4xl mx-auto">
          La pedagogía Montessori es, ante todo, una ciencia de la observación. En Vite Vera unimos la fe, la familia y la investigación para comprender cómo aprenden los niños en libertad.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Líneas de Investigación */}
          <div className="bg-beige-calido p-8 rounded-lg">
            <Lightbulb size={48} className="text-verde-vid mb-4" />
            <h3 className="text-2xl font-bold text-morado-uva mb-4">
              Líneas de Investigación
            </h3>
            <ul className="space-y-3 text-gris-suave">
              {LINEAS_INVESTIGACION.map((linea, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <ChevronRight size={20} className="text-verde-vid flex-shrink-0 mt-1" />
                  <span>{linea}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Convenios Académicos */}
          <div className="bg-beige-calido p-8 rounded-lg">
            <Award size={48} className="text-morado-uva mb-4" />
            <h3 className="text-2xl font-bold text-morado-uva mb-4">
              Convenios Académicos
            </h3>
            <p className="text-gris-suave mb-4">
              Colaboramos con universidades para medir objetivamente el impacto académico, social y familiar de la educación Montessori.
            </p>
            <Button variant="outline" className="text-sm">
              <Mail size={16} />
              <span>Únete como investigador</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investigacion;