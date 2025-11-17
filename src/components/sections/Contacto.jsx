// src/components/sections/Contacto.jsx
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../forms/ContactForm';
import ContactCard from '../ui/ContactCard';
import { CONTACT_INFO } from '../../data/constants';

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-morado-uva text-center mb-6 font-heading">
          Contáctanos
        </h2>
        <p className="text-xl text-center text-gris-suave mb-12 max-w-3xl mx-auto">
          ¿Quieres sumarte, colaborar o simplemente conocer más? Escríbenos, estamos felices de escucharte.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <ContactForm />

          {/* Información de Contacto */}
          <div className="space-y-8">
            <ContactCard icon={MapPin} title="Ubicación">
              <p>
                {CONTACT_INFO.ubicacion.ciudad}<br />
                {CONTACT_INFO.ubicacion.pais}
              </p>
            </ContactCard>

            <ContactCard icon={Mail} title="Correo Electrónico">
              <p>{CONTACT_INFO.email}</p>
            </ContactCard>

            <ContactCard icon={Phone} title="Teléfono">
              <p>{CONTACT_INFO.telefono}</p>
            </ContactCard>

            {/* Newsletter */}
            <div className=" p-6 rounded-lg text-white">
              <h3 className="font-bold text-xl mb-3">
                Suscríbete a Nuestro Boletín
              </h3>
              <p className="mb-4 text-sm">
                Recibe noticias, eventos y recursos Montessori
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 p-2 rounded-lg text-gray-800"
                />
                <button className="px-4 py-2 bg-white text-morado-uva rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;


// // ============================================
// // SECCIÓN: CONTACTO
// // ============================================

// export const Contacto = () => {
//   const [formData, setFormData] = useState({
//     nombre: '',
//     email: '',
//     telefono: '',
//     mensaje: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('¡Gracias por contactarnos! Responderemos pronto.');
//     setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
//   };

//   return (
//     <section id="contacto" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#4B2354] text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
//           Contáctanos
//         </h2>
//         <p className="text-xl text-center text-[#777777] mb-12 max-w-3xl mx-auto">
//           ¿Quieres sumarte, colaborar o simplemente conocer más? Escríbenos, estamos felices de escucharte.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Formulario */}
//           <div className="bg-[#F5F1E6] p-8 rounded-lg">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-[#4B2354] font-semibold mb-2">Nombre completo *</label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.nombre}
//                   onChange={(e) => setFormData({...formData, nombre: e.target.value})}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#3E7A3F] focus:outline-none"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-[#4B2354] font-semibold mb-2">Correo electrónico *</label>
//                 <input
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#3E7A3F] focus:outline-none"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-[#4B2354] font-semibold mb-2">Teléfono</label>
//                 <input
//                   type="tel"
//                   value={formData.telefono}
//                   onChange={(e) => setFormData({...formData, telefono: e.target.value})}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#3E7A3F] focus:outline-none"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-[#4B2354] font-semibold mb-2">Mensaje *</label>
//                 <textarea
//                   required
//                   rows="5"
//                   value={formData.mensaje}
//                   onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#3E7A3F] focus:outline-none"
//                 ></textarea>
//               </div>
              
//               <button 
//                 type="submit"
//                 className="w-full py-3 bg-[#4B2354] text-white rounded-lg font-bold hover:bg-[#3a1b42] transition-colors"
//               >
//                 Enviar Mensaje
//               </button>
//             </form>
//           </div>

//           {/* Información de Contacto */}
//           <div className="space-y-8">
//             <div className="bg-[#F5F1E6] p-6 rounded-lg">
//               <div className="flex items-start space-x-4">
//                 <MapPin size={32} className="text-[#3E7A3F] " />
//                 <div>
//                   <h3 className="font-bold text-[#4B2354] mb-2">Ubicación</h3>
//                   <p className="text-[#777777]">
//                     Manizales, Caldas<br />
//                     Colombia
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-[#F5F1E6] p-6 rounded-lg">
//               <div className="flex items-start space-x-4">
//                 <Mail size={32} className="text-[#3E7A3F] " />
//                 <div>
//                   <h3 className="font-bold text-[#4B2354] mb-2">Correo Electrónico</h3>
//                   <p className="text-[#777777]">info@vitevera.org</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-[#F5F1E6] p-6 rounded-lg">
//               <div className="flex items-start space-x-4">
//                 <Phone size={32} className="text-[#3E7A3F] " />
//                 <div>
//                   <h3 className="font-bold text-[#4B2354] mb-2">Teléfono</h3>
//                   <p className="text-[#777777]">+57 312 345 6789</p>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 rounded-lg text-white">
//               <h3 className="font-bold text-xl mb-3">Suscríbete a Nuestro Boletín</h3>
//               <p className="mb-4 text-sm">Recibe noticias, eventos y recursos Montessori</p>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="tu@email.com"
//                   className="flex-1 p-2 rounded-lg text-gray-800"
//                 />
//                 <button className="px-4 py-2 bg-white text-[#4B2354] rounded-lg font-bold hover:bg-gray-100 transition-colors">
//                   Suscribir
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };