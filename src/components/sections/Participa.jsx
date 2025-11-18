// src/components/sections/Participa.jsx
import React from 'react';
import { Heart, Users, Hand, Briefcase } from 'lucide-react';
import Card from '../ui/Card';
import DonationForm from '../forms/DonationForm';
import TestimonialCard from '../ui/TestimonialCard';
import { FORMAS_APOYO, TESTIMONIOS } from '../../data/constants';

const Participa = () => {
  const iconMap = {
    'Donar Ahora': Heart,
    'Apadrinar': Users,
    'Voluntariado': Hand,
    'Empresas Aliadas': Briefcase
  };

  return (
    <section id="participa" className="py-20 bg-gradient-to-br from-beige-calido to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Únete a la Red
        </h2>
        <p className="text-xl text-center text-gris-suave mb-12 max-w-3xl mx-auto">
          Tú puedes ser parte de esta historia. Con una pequeña acción, ayudas a formar a un padre, equipar a una familia o abrir una puerta de aprendizaje.
        </p>

        {/* Formas de Apoyo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FORMAS_APOYO.map((forma, index) => {
            const Icon = iconMap[forma.title];
            return (
              <Card key={index} hover>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-${forma.color}`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-morado-uva mb-3">{forma.title}</h3>
                <p className="text-gris-suave mb-4 text-sm">{forma.description}</p>
                <button className={`w-full py-2 rounded-lg font-semibold text-white transition-colors bg-${forma.color} hover:opacity-90`}>
                  {forma.action}
                </button>
              </Card>
            );
          })}
        </div>

        {/* Formulario de Donación */}
        <DonationForm />

        {/* Testimonios */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-morado-uva text-center mb-8">
            Historias de Familias Beneficiadas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIOS.map((testimonio) => (
              <TestimonialCard
                key={testimonio.id}
                texto={testimonio.texto}
                autor={testimonio.autor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participa;