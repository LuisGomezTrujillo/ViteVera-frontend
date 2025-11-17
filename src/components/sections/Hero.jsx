// src/components/sections/Hero.jsx
import React from 'react';
import { Heart, Users, HandHeart } from 'lucide-react';
import Button from '../ui/Button';
// import ImpactCounter from '../ui/ImpactCounter';
// import { IMPACT_STATS } from '../../data/constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-morado-uva mb-6 font-heading">
            Educación Montessori para todos
          </h1>
          <p className="text-xl md:text-2xl text-verde-vid mb-4">
            Desde el corazón de las familias
          </p>
          <p className="text-lg text-gris-suave max-w-3xl mx-auto mb-8">
            Formamos, acompañamos y compartimos materiales para que cada niño aprenda con libertad, belleza y fe.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="primary">
            <Heart size={20} />
            <span>Apadrina una familia</span>
          </Button>
          <Button variant="secondary">
            <Users size={20} />
            <span>Participa ahora</span>
          </Button>
          <Button variant="outline">
            <HandHeart size={20} />
            <span>Descubre cómo ayudar</span>
          </Button>
        </div>

        {/* Impact Counters
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {IMPACT_STATS.map((stat, index) => (
            <ImpactCounter
              key={index}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;