// src/components/ui/ResourceCard.jsx
import React from 'react';
import { Download, Play } from 'lucide-react';
import Button from './Button';

const ResourceCard = ({ title, type, onDownload }) => {
  const Icon = type === 'Video' ? Play : Download;
  
  return (
    <div className="bg-white p-4 rounded-lg flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <Icon size={24} className="text-verde-vid" />
        <div>
          <p className="font-semibold text-morado-uva">{title}</p>
          <p className="text-sm text-gris-suave">{type}</p>
        </div>
      </div>
      <button 
        onClick={onDownload}
        className="px-4 py-2 bg-verde-vid text-white rounded-lg hover:opacity-90 transition-all"
      >
        Descargar
      </button>
    </div>
  );
};

export default ResourceCard;