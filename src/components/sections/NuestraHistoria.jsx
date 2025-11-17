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
              Todo comenzó con una niña curiosa y su tío. En casa, juntos descubrieron que aprender podía ser un acto de amor. Desde entonces, más familias se han unido para compartir lo que tienen: tiempo, manos y corazón.
            </p>
            <p className="text-lg text-gris-suave leading-relaxed">
              <strong className="text-verde-vid">Nuestra misión</strong> es que cada familia viva la experiencia Montessori, sin importar sus recursos.
            </p>
            <Button variant="secondary">
              <Users size={20} />
              <span>Conócenos y únete</span>
            </Button>
          </div>
          
          <div className="bg-beige-calido p-8 rounded-lg">
            <div className="aspect-square bg-verde-vid rounded-lg flex items-center justify-center">
              <Heart size={100} className="text-white opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;

// // Nuestra Historia Section
// const NuestraHistoria = () => {
//   return (
//     <section id="historia" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-12 font-heading">
//           Nuestra Historia
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <p className="text-lg text-gris-suave leading-relaxed">
//               Todo comenzó con una niña curiosa y su tío. En casa, juntos descubrieron que aprender podía ser un acto de amor. Desde entonces, más familias se han unido para compartir lo que tienen: tiempo, manos y corazón.
//             </p>
//             <p className="text-lg text-gris-suave leading-relaxed">
//               <strong className="text-verde-vid">Nuestra misión</strong> es que cada familia viva la experiencia Montessori, sin importar sus recursos.
//             </p>
//             <Button variant="secondary">
//               <Users size={20} />
//               <span>Conócenos y únete</span>
//             </Button>
//           </div>
          
//           <div className="bg-beige-calido p-8 rounded-lg">
//             <div className="aspect-square bg-verde-vid rounded-lg flex items-center justify-center">
//               <Heart size={100} className="text-white opacity-20" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };