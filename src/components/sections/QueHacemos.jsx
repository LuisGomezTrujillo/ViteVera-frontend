// src/components/sections/QueHacemos.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import ServiceCard from '../ui/ServiceCard';
import { SERVICIOS } from '../../data/constants';

const QueHacemos = () => {
  return (
    <section id="hacemos" className="py-20 bg-beige-calido">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Qué Hacemos
        </h2>
        <p className="text-xl text-center text-gris-suave mb-12 max-w-3xl mx-auto">
          Nuestro modelo combina formación, materiales y comunidad. Porque educar no es solo enseñar, es compartir vida.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICIOS.map((servicio, index) => (
            <ServiceCard
              key={index}
              icon={servicio.icon}
              title={servicio.title}
              description={servicio.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="primary">
            <ChevronRight size={20} />
            <span>Descubre cómo puedes apoyar</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;


// // Qué Hacemos Section
// const QueHacemos = () => {
//   const servicios = [
//     {
//       icon: GraduationCap,
//       title: 'Formación',
//       description: 'Capacitamos a padres y educadores para guiar el aprendizaje con respeto y observación.'
//     },
//     {
//       icon: Sprout,
//       title: 'Materiales',
//       description: 'Diseñamos y fabricamos materiales Montessori accesibles, con procesos sostenibles y solidarios.'
//     },
//     {
//       icon: Users,
//       title: 'Comunidad',
//       description: 'Conectamos familias, guías y benefactores en una red de apoyo y aprendizaje mutuo.'
//     },
//     {
//       icon: Heart,
//       title: 'Fe Viva',
//       description: 'Nos inspira la espiritualidad del Buen Pastor: educar con amor y servicio.'
//     }
//   ];

//   return (
//     <section id="hacemos" className="py-20 bg-beige-calido">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
//           Qué Hacemos
//         </h2>
//         <p className="text-xl text-center text-gris-suave mb-12 max-w-3xl mx-auto">
//           Nuestro modelo combina formación, materiales y comunidad. Porque educar no es solo enseñar, es compartir vida.
//         </p>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {servicios.map((servicio, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div className="w-16 h-16 bg-verde-vid rounded-full flex items-center justify-center mb-4">
//                 <servicio.icon size={32} className="text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-morado-uva mb-3">{servicio.title}</h3>
//               <p className="text-gris-suave">{servicio.description}</p>
//             </div>
//           ))}
//         </div>
        
//         <div className="text-center mt-12">
//           <Button variant="primary">
//             <ChevronRight size={20} />
//             <span>Descubre cómo puedes apoyar</span>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };