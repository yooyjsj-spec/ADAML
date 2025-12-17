import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-16 text-center">
          {subtitle && (
            <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase mb-2 block">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {title}
            </h2>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;