// src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Heart, Users, HandHeart, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import ImpactCounter from '../ui/ImpactCounter';
import { IMPACT_STATS } from '../../data/constants';

const Hero = () => {
  // Configuración del carrusel
  const images = [
    '/hero-ninos.jpeg',
    '/hero-ninos-2.jpg',
    '/hero-ninos-3.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Configuración del overlay (puedes modificar estos valores)
  const overlayConfig = {
    color: 'rgb(79, 70, 229)', // Color del overlay (morado-uva)
    opacity: 0.7 // Opacidad del overlay (0 a 1)
  };

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de imágenes de fondo */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Overlay con color y opacidad personalizables */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: overlayConfig.color,
            opacity: overlayConfig.opacity
          }}
        ></div>
      </div>

      {/* Controles del carrusel */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30">
            <span className="text-white font-semibold">✨ Aprendizaje con amor</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-heading leading-tight drop-shadow-2xl">
            Educa tu familia para la vida y la paz
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/95 mb-4 font-semibold drop-shadow-lg">
            Homeschooling + Método Montessori + Catequesis del Buen Pastor
          </p>
          
          {/* Descripción */}
          <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Educación en casa aplicando la Pedagogía Científica del Método Montessori y la Catequesis del Buen Pastor; acompañados por una red de padres de familia de manera virtual y presencial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="flex items-center gap-2 bg-white text-morado-uva px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <Heart size={20} />
              <span>Apadrina una familia</span>
            </button>
            <button className="flex items-center gap-2 bg-verde-vid text-white px-8 py-4 rounded-full font-semibold hover:bg-verde-vid/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <Users size={20} />
              <span>Participa ahora</span>
            </button>
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <HandHeart size={20} />
              <span>Descubre cómo ayudar</span>
            </button>
          </div>

          {/* Impact Counters con fondo translúcido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {IMPACT_STATS.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// // src/components/sections/Hero.jsx
// import React from 'react';
// import { Heart, Users, HandHeart } from 'lucide-react';
// import Button from '../ui/Button';
// import ImpactCounter from '../ui/ImpactCounter';
// import { IMPACT_STATS } from '../../data/constants';

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-beige-calido to-white pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
//         {/* Layout de dos columnas en desktop */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
//           {/* Columna Izquierda - Contenido */}
//           <div className="text-center lg:text-left order-2 lg:order-1">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-morado-uva mb-6 font-heading leading-tight">
//               Educa tu familia para la vida y la paz
//             </h1>
//             <p className="text-lg md:text-xl text-verde-vid mb-4 font-semibold">
//               Homeschooling + Método Montessori + Catequesis del Buen Pastor
//             </p>
//             <p className="text-base md:text-lg text-gris-suave mb-8 leading-relaxed">
//               Educación en casa aplicando la Pedagogía Científica del Método Montessori y la Catequesis del Buen Pastor; acompañados por una red de padres de familia de manera virtual y presencial.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4">
//               {/* <Button variant="primary">
//                 <Heart size={20} />
//                 <span>Apadrina una familia</span>
//               </Button> */}
//               <Button variant="secondary">
//                 <Users size={20} />
//                 <span>Participa ahora</span>
//               </Button>
//               {/* <Button variant="outline">
//                 <HandHeart size={20} />
//                 <span>Descubre cómo ayudar</span>
//               </Button> */}
//             </div>
//           </div>

//           {/* Columna Derecha - Imagen */}
//           <div className="order-1 lg:order-2">
//             <div className="relative">
//               {/* Decoración de fondo */}
//               <div className="absolute -top-4 -right-4 w-full h-full bg-verde-vid/10 rounded-3xl -z-10"></div>
//               <div className="absolute -bottom-4 -left-4 w-full h-full bg-morado-uva/10 rounded-3xl -z-10"></div>
              
//               {/* Imagen principal */}
//               <img 
//                 src="/hero-ninos.jpeg" 
//                 alt="Niños aprendiendo método Montessori" 
//                 className="w-full h-auto rounded-2xl shadow-2xl object-cover"
//               />
              
//               {/* Badge flotante */}
//               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
//                 <p className="text-verde-vid font-bold text-sm md:text-base">
//                   ✨ Aprendizaje con amor
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Impact Counters */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
//           {IMPACT_STATS.map((stat, index) => (
//             <ImpactCounter
//               key={index}
//               value={stat.value}
//               label={stat.label}
//               color={stat.color}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

//export default Hero;

// // src/components/sections/Hero.jsx
// import React from 'react';
// import { Heart, Users, HandHeart } from 'lucide-react';
// import Button from '../ui/Button';
// import ImpactCounter from '../ui/ImpactCounter';
// import { IMPACT_STATS } from '../../data/constants';

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-beige-calido to-white pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//         <div className="mb-8">
//           <h1 className="text-5xl md:text-7xl font-bold text-morado-uva mb-6 font-heading">
//             Educa tu familia para la vida y la paz
//           </h1>
//           <p className="text-xl md:text-2xl text-verde-vid mb-4">
//             Método Montessori - Catequesis del Buen Pastor
//           </p>
//           <p className="text-lg text-gris-suave max-w-3xl mx-auto mb-8">
//             Educación en casa aplicando el la Pedagogía Científica del Método Montessori y la Catequesis del Buen Pastor; acompañados por una red de padres de familia de manera virtual y presencial.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <Button variant="primary">
//             <Heart size={20} />
//             <span>Apadrina una familia</span>
//           </Button>
//           <Button variant="secondary">
//             <Users size={20} />
//             <span>Participa ahora</span>
//           </Button>
//           <Button variant="outline">
//             <HandHeart size={20} />
//             <span>Descubre cómo ayudar</span>
//           </Button>
//         </div>

//         {/* Impact Counters */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//           {IMPACT_STATS.map((stat, index) => (
//             <ImpactCounter
//               key={index}
//               value={stat.value}
//               label={stat.label}
//               color={stat.color}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;