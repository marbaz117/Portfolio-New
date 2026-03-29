import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ portfolioData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} {portfolioData.personal.name}.</span>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Spring Boot</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Open to opportunities in Full Stack Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


