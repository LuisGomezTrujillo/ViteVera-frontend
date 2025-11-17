// src/components/ui/WorkshopCard.jsx
import React from 'react';
import { Calendar } from 'lucide-react';

const WorkshopCard = ({ fecha, titulo, duracion, onInscribir }) => {
  return (
    <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3 mb-2">
        <Calendar size={20} className="text-morado-uva mt-1" />
        <div className="flex-1">
          <p className="font-semibold text-morado-uva">{titulo}</p>
          <p className="text-sm text-gris-suave">{fecha} • {duracion}</p>
        </div>
      </div>
      <button 
        onClick={onInscribir}
        className="w-full mt-2 py-2 bg-morado-uva text-white rounded-lg hover:opacity-90 transition-all"
      >
        Inscribirse
      </button>
    </div>
  );
};

export default WorkshopCard;