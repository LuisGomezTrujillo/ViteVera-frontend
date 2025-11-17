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
    <section id="participa" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Participa y Apoya
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

// // ============================================
// // SECCIÓN: PARTICIPA / APOYA
// // ============================================

// export const Participa = () => {
//   const [amount, setAmount] = useState('');
//   const [frequency, setFrequency] = useState('once');

//   const formasDeApoyo = [
//     {
//       icon: Heart,
//       title: 'Donar Ahora',
//       description: 'Con tu aporte, una familia más recibe materiales y formación.',
//       action: 'Donar',
//       color: '#4B2354'
//     },
//     {
//       icon: Users,
//       title: 'Apadrinar',
//       description: 'Tu donación mensual acompaña el crecimiento de un niño y su familia.',
//       action: 'Apadrinar',
//       color: '#3E7A3F'
//     },
//     {
//       icon: Hand,
//       title: 'Voluntariado',
//       description: 'Comparte tu tiempo, tus manos o tu talento.',
//       action: 'Únete',
//       color: '#78A75A'
//     },
//     {
//       icon: Briefcase,
//       title: 'Empresas Aliadas',
//       description: 'Transformemos la educación con responsabilidad social.',
//       action: 'Contáctanos',
//       color: '#4B2354'
//     }
//   ];

//   return (
//     <section id="participa" className="py-20 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#4B2354] text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
//           Participa y Apoya
//         </h2>
//         <p className="text-xl text-center text-[#777777] mb-12 max-w-3xl mx-auto">
//           Tú puedes ser parte de esta historia. Con una pequeña acción, ayudas a formar a un padre, equipar a una familia o abrir una puerta de aprendizaje.
//         </p>

//         {/* Formas de Apoyo */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {formasDeApoyo.map((forma, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
//               <div 
//                 className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
//                 style={{ backgroundColor: forma.color }}
//               >
//                 <forma.icon size={32} className="text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-[#4B2354] mb-3">{forma.title}</h3>
//               <p className="text-[#777777] mb-4 text-sm">{forma.description}</p>
//               <button 
//                 className="w-full py-2 rounded-lg font-semibold text-white transition-colors"
//                 style={{ backgroundColor: forma.color }}
//               >
//                 {forma.action}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Formulario de Donación */}
//         <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//           <h3 className="text-2xl font-bold text-[#4B2354] mb-6 text-center">Haz tu Donación</h3>
          
//           <div className="mb-6">
//             <label className="block text-[#4B2354] font-semibold mb-2">Frecuencia</label>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => setFrequency('once')}
//                 className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
//                   frequency === 'once' 
//                     ? 'bg-[#4B2354] text-white' 
//                     : 'bg-gray-100 text-[#777777]'
//                 }`}
//               >
//                 Una vez
//               </button>
//               <button
//                 onClick={() => setFrequency('monthly')}
//                 className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
//                   frequency === 'monthly' 
//                     ? 'bg-[#3E7A3F] text-white' 
//                     : 'bg-gray-100 text-[#777777]'
//                 }`}
//               >
//                 Mensual
//               </button>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-[#4B2354] font-semibold mb-2">Monto</label>
//             <div className="grid grid-cols-4 gap-3 mb-3">
//               {['50000', '100000', '200000', '500000'].map((val) => (
//                 <button
//                   key={val}
//                   onClick={() => setAmount(val)}
//                   className={`py-3 rounded-lg font-semibold transition-colors ${
//                     amount === val 
//                       ? 'bg-[#3E7A3F] text-white' 
//                       : 'bg-gray-100 text-[#777777] hover:bg-gray-200'
//                   }`}
//                 >
//                   ${parseInt(val).toLocaleString()}
//                 </button>
//               ))}
//             </div>
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Otro monto"
//               className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#3E7A3F] focus:outline-none"
//             />
//           </div>

//           <button className="w-full bg-[#4B2354] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#3a1b42] transition-colors flex items-center justify-center space-x-2">
//             <DollarSign size={24} />
//             <span>Continuar a Pago Seguro</span>
//           </button>

//           <p className="text-center text-sm text-[#777777] mt-4">
//             🔒 Pago seguro con PayU / Vaki
//           </p>
//         </div>

//         {/* Testimonios */}
//         <div className="mt-16">
//           <h3 className="text-3xl font-bold text-[#4B2354] text-center mb-8">
//             Historias de Familias Beneficiadas
//           </h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, j) => (
//                     <Star key={j} size={16} className="text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-[#777777] italic mb-4">
//                   "Gracias a Vite Vera, mi hijo descubrió el amor por aprender. Los materiales y la formación transformaron nuestra familia."
//                 </p>
//                 <p className="font-semibold text-[#4B2354]">— Familia {i}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };