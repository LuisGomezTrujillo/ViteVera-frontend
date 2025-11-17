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


// // ============================================
// // SECCIÓN: FORMACIÓN MONTESSORI EN CASA
// // ============================================

// export const Formacion = () => {
//   const recursos = [
//     { title: 'Guía: Montessori en casa', type: 'PDF', icon: Download },
//     { title: 'Video: Ambiente preparado', type: 'Video', icon: Play },
//     { title: 'Checklist: Materiales esenciales', type: 'PDF', icon: Download }
//   ];

//   const talleres = [
//     { fecha: '15 Feb 2025', titulo: 'Introducción a Montessori', duracion: '2 horas' },
//     { fecha: '22 Feb 2025', titulo: 'Materiales caseros', duracion: '3 horas' },
//     { fecha: '01 Mar 2025', titulo: 'Disciplina positiva', duracion: '2 horas' }
//   ];

//   return (
//     <section id="formacion" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#4B2354] text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
//           Formación Montessori en Casa
//         </h2>
//         <p className="text-xl text-center text-[#777777] mb-12 max-w-3xl mx-auto">
//           Aprender Montessori no requiere grandes recursos, sino un corazón dispuesto y guía adecuada.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Recursos Descargables */}
//           <div className="bg-[#F5F1E6] p-8 rounded-lg">
//             <h3 className="text-2xl font-bold text-[#4B2354] mb-6">Recursos Gratuitos</h3>
//             <div className="space-y-4">
//               {recursos.map((recurso, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-between hover:shadow-md transition-shadow">
//                   <div className="flex items-center space-x-3">
//                     <recurso.icon size={24} className="text-[#3E7A3F]" />
//                     <div>
//                       <p className="font-semibold text-[#4B2354]">{recurso.title}</p>
//                       <p className="text-sm text-[#777777]">{recurso.type}</p>
//                     </div>
//                   </div>
//                   <button className="px-4 py-2 bg-[#3E7A3F] text-white rounded-lg hover:bg-[#2d5b2e] transition-colors">
//                     Descargar
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Próximos Talleres */}
//           <div className="bg-[#F5F1E6] p-8 rounded-lg">
//             <h3 className="text-2xl font-bold text-[#4B2354] mb-6">Próximos Talleres</h3>
//             <div className="space-y-4">
//               {talleres.map((taller, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
//                   <div className="flex items-start space-x-3 mb-2">
//                     <Calendar size={20} className="text-[#4B2354] mt-1" />
//                     <div className="flex-1">
//                       <p className="font-semibold text-[#4B2354]">{taller.titulo}</p>
//                       <p className="text-sm text-[#777777]">{taller.fecha} • {taller.duracion}</p>
//                     </div>
//                   </div>
//                   <button className="w-full mt-2 py-2 bg-[#4B2354] text-white rounded-lg hover:bg-[#3a1b42] transition-colors">
//                     Inscribirse
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <button className="px-8 py-4 bg-[#3E7A3F] text-white rounded-lg font-bold text-lg hover:bg-[#2d5b2e] transition-colors">
//             Ver Todos los Cursos y Diplomados
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };