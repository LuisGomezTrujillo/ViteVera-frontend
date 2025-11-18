// src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import ImpactCounter from '../ui/ImpactCounter';
import { IMPACT_STATS } from '../../data/constants';

const Hero = () => {
  // Configuración del carrusel con botones personalizados
  const slides = [
    {
      image: '/hero-ninos-1.jpg',
      buttonText: 'Participa ahora',
      buttonIcon: Users,
      buttonLink: '#participa',
      buttonVariant: 'secondary'
    }
    //,
    // {
    //   image: '/hero-ninos-2.jpg',
    //   buttonText: 'Conoce nuestra historia',
    //   buttonIcon: Users,
    //   buttonLink: '#historia',
    //   buttonVariant: 'primary'
    // },
    // {
    //   image: '/hero-ninos-3.jpg',
    //   buttonText: 'Únete a la red',
    //   buttonIcon: Users,
    //   buttonLink: '#red',
    //   buttonVariant: 'secondary'
    // },
    // {
    //   image: '/hero-ninos-4.jpg',
    //   buttonText: 'Contáctanos',
    //   buttonIcon: Users,
    //   buttonLink: '#contacto',
    //   buttonVariant: 'outline'
    // }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // CONFIGURACIÓN DEL OVERLAY
  const overlayConfig = {
    color: 'rgb(79, 70, 229)',
    opacity: 0.3
  };

  // CONFIGURACIÓN DE LA IMAGEN
  const imageConfig = {
    objectPosition: 'center center', 
    scale: 1.1, 
    height: '100vh'
  };

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-calido to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        
        {/* Contenedor del Hero con imagen de fondo */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16" style={{ minHeight: imageConfig.height }}>
          
          {/* Carrusel de imágenes de fondo */}
          <div className="absolute inset-0 w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Niños aprendiendo método Montessori ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: imageConfig.objectPosition,
                    transform: `scale(${imageConfig.scale})`,
                    transformOrigin: imageConfig.objectPosition
                  }}
                />
              </div>
            ))}
            
            {/* Overlay con gradiente */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                background: `linear-gradient(135deg, rgba(79, 70, 229, ${overlayConfig.opacity}) 0%, rgba(34, 139, 34, ${overlayConfig.opacity * 0.8}) 100%)`
              }}
            ></div>
          </div>

          {/* Controles del carrusel */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Indicadores de puntos */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-white w-8' 
                    : 'bg-white/60 hover:bg-white/80 w-2'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Contenido en la esquina inferior derecha - DINÁMICO */}
          <div className="absolute bottom-8 right-8 z-10 max-w-md text-right">
            
            {/* Badge pequeño */}
            <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md px-4 py-1.5 rounded-full mb-3 border border-white/30 shadow-lg">
              <span className="text-white font-semibold text-xs">✨ Aprendizaje con amor</span>
            </div>

            {/* Título pequeño */}
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading leading-tight" 
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
              Educa tu familia para la vida y la paz
            </h1>
            
            {/* Subtítulo compacto */}
            <div className="inline-block bg-white/20 backdrop-blur-lg px-4 py-2 rounded-xl mb-2 border border-white/30 shadow-lg">
              <p className="text-xs md:text-sm text-white font-semibold">
                Homeschooling + Montessori + Catequesis
              </p>
            </div>
            
            {/* Descripción pequeña */}
            <p className="text-xs md:text-sm text-white/90 mb-4 leading-relaxed"
               style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
              Educación en casa con Pedagogía Montessori y Catequesis del Buen Pastor.
            </p>

            {/* Botón dinámico según la imagen actual */}
            <div className="flex justify-end">
              <a 
                href={slides[currentImage].buttonLink}
                className="inline-block"
              >
                <Button variant={slides[currentImage].buttonVariant}>
                  {React.createElement(slides[currentImage].buttonIcon, { size: 18 })}
                  <span>{slides[currentImage].buttonText}</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Impact Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IMPACT_STATS.map((stat, index) => (
            <ImpactCounter
              key={index}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
