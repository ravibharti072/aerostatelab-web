import { Link } from 'react-router-dom';
import React from 'react';

interface FeatureCardProps {
  badge: string;
  title: string;
  description: string;
  link: string; 
  illustration: React.ReactNode; // Changed from icon to illustration
}

function FeatureCard({ badge, title, description, link, illustration }: FeatureCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all group flex flex-col h-full shadow-sm overflow-hidden">
      
      {/* Code-Based Image Container */}
      <div className="w-full h-40 bg-slate-50 border-b border-gray-100 relative flex items-center justify-center group-hover:bg-blue-50/50 transition-colors duration-500 overflow-hidden">
        {/* Adds a subtle grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        <div className="relative z-10 w-full flex justify-center">
            {illustration}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3 mt-2">
          {badge}
        </span>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        <Link 
          to={link} 
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-auto w-fit"
        >
          Explore Module <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
      
    </div>
  );
}

export default FeatureCard;