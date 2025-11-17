// src/components/layout/Footer.jsx
import React from 'react';
import { CONTACT_INFO } from '../../data/constants';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nuestra Historia', href: '#historia' },
    { name: 'Participa', href: '#participa' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="bg-morado-uva text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">
              VITE VERA
            </h3>
            <p className="text-beige-calido text-sm">
              Educa tu familia para la vida y la paz
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-beige-calido">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-sm text-beige-calido">
              {CONTACT_INFO.ubicacion.ciudad}<br />
              {CONTACT_INFO.ubicacion.pais}<br />
              {CONTACT_INFO.email}
            </p>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-beige-calido pt-8 text-center">
          <p className="text-beige-calido italic font-heading mb-4">
            "Educar es un acto de esperanza. Gracias por creer y construir con nosotros."
          </p>
          <p className="text-sm text-beige-calido">
            © {new Date().getFullYear()} Vite Vera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;