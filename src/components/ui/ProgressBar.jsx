// src/components/ui/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ value, label, showPercentage = true }) => {
  return (
    <div className="mb-6">
      {showPercentage && (
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-morado-uva">{label}</span>
          <span className="font-bold text-verde-vid">{value}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div 
          className="bg-gradient-to-r from-verde-vid to-verde-hoja h-4 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;