// src/components/sections/CasaPiloto.jsx
import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { CASA_PILOTO } from '../../data/constants';

const CasaPiloto = () => {
  return (
    <section id="casa" className="py-20 bg-beige-calido">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Casa Montessori Piloto
        </h2>
        <p className="text-xl text-center text-gris-suave mb-12 max-w-3xl mx-auto">
          Soñamos con un espacio donde los niños puedan aprender libremente, y las familias puedan compartir su fe y saberes. Será la primera Casa Montessori Comunitaria, construida con manos y corazones solidarios.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avance del Proyecto */}
          <div>
            <h3 className="text-2xl font-bold text-morado-uva mb-4">
              Avance del Proyecto
            </h3>
            
            <ProgressBar 
              value={CASA_PILOTO.progreso} 
              label="Construcción"
            />

            <div className="space-y-4 mb-6">
              {CASA_PILOTO.fases.map((fase) => (
                <div key={fase.id} className="flex items-start space-x-3">
                  <ChevronRight 
                    size={20} 
                    className={`mt-1 flex-shrink-0 ${
                      fase.estado === 'completada' || fase.estado === 'proceso' 
                        ? 'text-verde-vid' 
                        : 'text-gris-suave'
                    }`}
                  />
                  <p className="text-gris-suave">
                    <strong className={
                      fase.estado === 'completada' || fase.estado === 'proceso'
                        ? 'text-morado-uva'
                        : 'text-gris-suave'
                    }>
                      Fase {fase.id} {
                        fase.estado === 'completada' ? '(Completada)' :
                        fase.estado === 'proceso' ? '(En proceso)' :
                        '(Próxima)'
                      }:
                    </strong> {fase.nombre}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-morado-uva text-white rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2">
              <Heart size={24} />
              <span>Construyamos Juntos la Casa</span>
            </button>
          </div>

          {/* Meta de Recaudación */}
          <Card>
            <h3 className="text-xl font-bold text-morado-uva mb-4">
              Meta de Recaudación
            </h3>
            <div className="mb-6">
              <p className="text-4xl font-bold text-verde-vid mb-2">
                ${(CASA_PILOTO.recaudado / 1000000).toFixed(1)}M
              </p>
              <p className="text-gris-suave">
                de ${(CASA_PILOTO.metaTotal / 1000000)}M COP
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gris-suave">
                  🏗️ {CASA_PILOTO.donantes} donantes
                </span>
                <span className="text-gris-suave">
                  ⏰ {CASA_PILOTO.diasRestantes} días restantes
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CasaPiloto;