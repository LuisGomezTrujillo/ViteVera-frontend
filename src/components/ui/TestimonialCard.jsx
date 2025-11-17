// src/components/ui/TestimonialCard.jsx
import React from 'react';
import { Star } from 'lucide-react';
import Card from './Card';

const TestimonialCard = ({ texto, autor, rating = 5 }) => {
  return (
    <Card>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} size={16} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gris-suave italic mb-4">"{texto}"</p>
      <p className="font-semibold text-morado-uva">— {autor}</p>
    </Card>
  );
};

export default TestimonialCard;