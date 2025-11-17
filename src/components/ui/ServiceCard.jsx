// src/components/ui/ServiceCard.jsx
import React from 'react';
import Card from './Card';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <Card hover>
      <div className="w-16 h-16 bg-verde-vid rounded-full flex items-center justify-center mb-4">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-morado-uva mb-3">{title}</h3>
      <p className="text-gris-suave">{description}</p>
    </Card>
  );
};

export default ServiceCard;