// src/components/ui/ImpactCounter.jsx
import React from 'react';
import Card from './Card';

const ImpactCounter = ({ value, label, color = 'morado-uva' }) => {
  return (
    <Card>
      <div className={`text-4xl font-bold text-${color} mb-2`}>
        {value}
      </div>
      <div className="text-gris-suave">{label}</div>
    </Card>
  );
};

export default ImpactCounter;