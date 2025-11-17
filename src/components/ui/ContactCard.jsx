// src/components/ui/ContactCard.jsx
import React from 'react';

const ContactCard = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-beige-calido p-6 rounded-lg">
      <div className="flex items-start space-x-4">
        <Icon size={32} className="text-verde-vid flex-shrink-0" />
        <div>
          <h3 className="font-bold text-morado-uva mb-2">{title}</h3>
          <div className="text-gris-suave">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;