// src/components/sections/Formacion.jsx
import React from 'react';
import ResourceCard from '../ui/ResourceCard';
import WorkshopCard from '../ui/WorkshopCard';
import { RECURSOS_FORMACION, TALLERES } from '../../data/constants';

const Formacion = () => {
  const handleDownload = (title) => {
    alert(`Descargando: ${title}`);
  };

  const handleInscribir = (titulo) => {
    alert(`Inscripción a: ${titulo}`);
  };

  return (
    <section id="formacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Formación Montessori en Casa
        </h2>
        <p className="text-xl text-center text-gris-suave mb-12 max-w-3xl mx-auto">
          Aprender Montessori no requiere grandes recursos, sino un corazón dispuesto y guía adecuada.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Recursos Descargables */}
          <div className="bg-beige-calido p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-morado-uva mb-6">
              Recursos Gratuitos
            </h3>
            <div className="space-y-4">
              {RECURSOS_FORMACION.map((recurso, index) => (
                <ResourceCard
                  key={index}
                  title={recurso.title}
                  type={recurso.type}
                  onDownload={() => handleDownload(recurso.title)}
                />
              ))}
            </div>
          </div>

          {/* Próximos Talleres */}
          <div className="bg-beige-calido p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-morado-uva mb-6">
              Próximos Talleres
            </h3>
            <div className="space-y-4">
              {TALLERES.map((taller, index) => (
                <WorkshopCard
                  key={index}
                  fecha={taller.fecha}
                  titulo={taller.titulo}
                  duracion={taller.duracion}
                  onInscribir={() => handleInscribir(taller.titulo)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-verde-vid text-white rounded-lg font-bold text-lg hover:opacity-90 transition-all">
            Ver Todos los Cursos y Diplomados
          </button>
        </div>
      </div>
    </section>
  );
};

export default Formacion;