// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo con Slogan */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex flex-col items-start hover:opacity-80 transition-opacity py-2"
          >
            {/* Logo */}
            <img 
              src="/logo-vitevera.png" 
              alt="Vite Vera Logo" 
              className="h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain"
            />
            {/* Slogan - Responsive */}
            <p className="text-[1rem] sm:text-[0.1rem] md:text-xs lg:text-xs text-morado-uva font-medium mt-0.5 leading-tight">
              Educa tu familia para la vida y la paz
            </p>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2 rounded-md text-sm font-medium text-morado-uva hover:bg-beige-calido transition-colors flex items-center space-x-1"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-morado-uva hover:bg-beige-calido"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2 rounded-md text-base font-medium text-morado-uva hover:bg-beige-calido flex items-center space-x-2"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// // src/components/layout/Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { NAVIGATION_ITEMS } from '../../data/constants';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (href) => {
//     setIsOpen(false);
//     // Smooth scroll to section
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <a 
//             href="#home" 
//             onClick={(e) => {
//               e.preventDefault();
//               handleNavClick('#home');
//             }}
//             className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
//           >
//             <img 
//               src="/logo-vitevera.png" 
//               alt="Vite Vera Logo" 
//               className="h-16 w-auto object-contain"
//             />
//             <p className="text-s text-morado-uva">Educa tu familia para la vida y la paz</p>
//           </a>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-1">
//             {NAVIGATION_ITEMS.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(item.href);
//                 }}
//                 className="px-3 py-2 rounded-md text-sm font-medium text-morado-uva hover:bg-beige-calido transition-colors flex items-center space-x-1"
//               >
//                 <item.icon size={16} />
//                 <span>{item.name}</span>
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 rounded-md text-morado-uva hover:bg-beige-calido"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden pb-4">
//             {NAVIGATION_ITEMS.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(item.href);
//                 }}
//                 className="px-3 py-2 rounded-md text-base font-medium text-morado-uva hover:bg-beige-calido flex items-center space-x-2"
//               >
//                 <item.icon size={18} />
//                 <span>{item.name}</span>
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

