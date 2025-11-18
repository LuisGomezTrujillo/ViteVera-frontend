// src/data/constants.js
// Datos centralizados de la aplicación

import { Home, Heart, Book, Users, Lightbulb, Camera, Building, Mail, GraduationCap, Sprout, HandHeart } from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', icon: Home, href: '#home' },
  { name: 'Historia', icon: Heart, href: '#historia' },
  { name: 'Misión', icon: Sprout, href: '#hacemos' },
  { name: 'Formación', icon: GraduationCap, href: '#formacion' },
  { name: 'Investigación', icon: Lightbulb, href: '#investigacion' },
  { name: 'Red', icon: HandHeart, href: '#participa' },
  { name: 'Piloto', icon: Building, href: '#casa' },
  { name: 'Contacto', icon: Mail, href: '#contacto' }
];

export const IMPACT_STATS = [
  {
    value: '3+',
    label: 'Familias acompañadas',
    color: 'morado-uva'
  },
  {
    value: '5+',
    label: 'Niños y Niñas en proceso de formación',
    color: 'verde-vid'
  },
  {
    value: '3+',
    label: 'Guías con formación Montessori',
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
  { fecha: '25 Nov 2025', titulo: 'Montessori en casa', duracion: '1 hora' },
  { fecha: '9 Dic 2025', titulo: 'La mesa de la paz', duracion: '1 horas' }

];

export const TESTIMONIOS = [
  {
    id: 1,
    texto: 'Gracias a lo aprendido, mi hija descubrió el amor por aprender. Los materiales y la formación transformaron nuestra familia.',
    autor: 'Familia Uno'
  },
  {
    id: 2,
    texto: 'El acompañamiento que recibimos fue fundamental. Ahora entendemos mejor cómo guiar a nuestros hijos en su aprendizaje.',
    autor: 'Familia Dos'
  },
  {
    id: 3,
    texto: 'Los talleres nos dieron herramientas prácticas. Hoy nuestra casa es un ambiente de paz y aprendizaje.',
    autor: 'Familia Tres'
  }
];

export const CONTACT_INFO = {
  ubicacion: {
    ciudad: 'Villamaría, Caldas',
    pais: 'Colombia'
  },
  email: 'casavitevera@gmail.com',
  telefono: '+57 301 471 6399'
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'YouTube', url: '#' }
];

export const CASA_PILOTO = {
  progreso: 0,
  metaTotal: 0,
  recaudado: 0,
  donantes: 0,
  diasRestantes: 90,
  fases: [
    { id: 1, nombre: 'Creación de contenido', estado: 'en proceso' },
    { id: 2, nombre: 'Construcción de Material', estado: 'en proceso' },
    { id: 3, nombre: 'Adecuación de los ambientes', estado: 'pendiente' }
  ]
};