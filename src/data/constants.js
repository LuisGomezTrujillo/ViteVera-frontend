// src/data/constants.js
// Datos centralizados de la aplicación

import { Home, Heart, Book, Users, Lightbulb, Camera, Building, Mail, GraduationCap, Sprout, HandHeart } from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', icon: Home, href: '#home' },
  { name: 'Nuestra Historia', icon: Heart, href: '#historia' },
  { name: 'Qué Hacemos', icon: Sprout, href: '#hacemos' },
  { name: 'Participa', icon: HandHeart, href: '#participa' },
  { name: 'Formación', icon: GraduationCap, href: '#formacion' },
  { name: 'Historias', icon: Camera, href: '#historias' },
  { name: 'Investigación', icon: Lightbulb, href: '#investigacion' },
  { name: 'Casa Piloto', icon: Building, href: '#casa' },
  { name: 'Contacto', icon: Mail, href: '#contacto' }
];

export const IMPACT_STATS = [
  {
    value: '250+',
    label: 'Familias acompañadas',
    color: 'morado-uva'
  },
  {
    value: '500+',
    label: 'Materiales entregados',
    color: 'verde-vid'
  },
  {
    value: '50+',
    label: 'Guías formadas',
    color: 'verde-hoja'
  }
];

export const SERVICIOS = [
  {
    icon: GraduationCap,
    title: 'Formación',
    description: 'Capacitamos a padres y educadores para guiar el aprendizaje con respeto y observación.'
  },
  {
    icon: Sprout,
    title: 'Materiales',
    description: 'Diseñamos y fabricamos materiales Montessori accesibles, con procesos sostenibles y solidarios.'
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Conectamos familias, guías y benefactores en una red de apoyo y aprendizaje mutuo.'
  },
  {
    icon: Heart,
    title: 'Fe Viva',
    description: 'Nos inspira la espiritualidad del Buen Pastor: educar con amor y servicio.'
  }
];

export const LINEAS_INVESTIGACION = [
  'Desarrollo socioemocional en ambientes Montessori',
  'Autorregulación y autonomía en el aprendizaje',
  'Correlación entre materiales manipulativos y logro académico'
];

export const FORMAS_APOYO = [
  {
    title: 'Donar Ahora',
    description: 'Con tu aporte, una familia más recibe materiales y formación.',
    action: 'Donar',
    color: 'morado-uva'
  },
  {
    title: 'Apadrinar',
    description: 'Tu donación mensual acompaña el crecimiento de un niño y su familia.',
    action: 'Apadrinar',
    color: 'verde-vid'
  },
  {
    title: 'Voluntariado',
    description: 'Comparte tu tiempo, tus manos o tu talento.',
    action: 'Únete',
    color: 'verde-hoja'
  },
  {
    title: 'Empresas Aliadas',
    description: 'Transformemos la educación con responsabilidad social.',
    action: 'Contáctanos',
    color: 'morado-uva'
  }
];

export const RECURSOS_FORMACION = [
  { title: 'Guía: Montessori en casa', type: 'PDF' },
  { title: 'Video: Ambiente preparado', type: 'Video' },
  { title: 'Checklist: Materiales esenciales', type: 'PDF' }
];

export const TALLERES = [
  { fecha: '15 Feb 2025', titulo: 'Introducción a Montessori', duracion: '2 horas' },
  { fecha: '22 Feb 2025', titulo: 'Materiales caseros', duracion: '3 horas' },
  { fecha: '01 Mar 2025', titulo: 'Disciplina positiva', duracion: '2 horas' }
];

export const TESTIMONIOS = [
  {
    id: 1,
    texto: 'Gracias a Vite Vera, mi hijo descubrió el amor por aprender. Los materiales y la formación transformaron nuestra familia.',
    autor: 'Familia González'
  },
  {
    id: 2,
    texto: 'El acompañamiento que recibimos fue fundamental. Ahora entendemos mejor cómo guiar a nuestros hijos en su aprendizaje.',
    autor: 'Familia Martínez'
  },
  {
    id: 3,
    texto: 'Los talleres nos dieron herramientas prácticas. Hoy nuestra casa es un ambiente de paz y aprendizaje.',
    autor: 'Familia Rodríguez'
  }
];

export const CONTACT_INFO = {
  ubicacion: {
    ciudad: 'Manizales, Caldas',
    pais: 'Colombia'
  },
  email: 'info@vitevera.org',
  telefono: '+57 312 345 6789'
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'YouTube', url: '#' }
];

export const CASA_PILOTO = {
  progreso: 65,
  metaTotal: 70000000,
  recaudado: 45000000,
  donantes: 120,
  diasRestantes: 90,
  fases: [
    { id: 1, nombre: 'Diseño arquitectónico y permisos', estado: 'completada' },
    { id: 2, nombre: 'Construcción de estructura principal', estado: 'proceso' },
    { id: 3, nombre: 'Acabados y equipamiento', estado: 'pendiente' }
  ]
};