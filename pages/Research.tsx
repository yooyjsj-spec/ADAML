import React, { useEffect, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import IconRenderer from '../components/IconRenderer';
import { RESEARCH_AREAS } from '../constants';
import { ArrowRight, X } from 'lucide-react';
import { ResearchArea } from '../types';

const Research: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<ResearchArea | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (area: ResearchArea) => {
    setSelectedArea(area);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedArea(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="pt-20">
      <SectionWrapper id="research" title="Research Areas" subtitle="Core Competencies">
        <div className="grid md:grid-cols-2 gap-8">
          {RESEARCH_AREAS.map((area) => (
            <div key={area.id} className="group overflow-hidden rounded-2xl bg-slate-900/60 border border-white/10 hover:border-purple-500/40 transition-all duration-500 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <IconRenderer name={area.iconName} className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{area.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>
                <button 
                  onClick={() => openModal(area)}
                  className="mt-auto pt-6 border-t border-white/5 flex items-center text-sm text-purple-400 font-medium hover:text-purple-300 transition-colors w-full text-left focus:outline-none group-hover:pl-2 duration-300"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Detail Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          ></div>
          <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative h-64 sm:h-80">
              <img src={selectedArea.image} alt={selectedArea.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3 mb-3 text-purple-400">
                   <IconRenderer name={selectedArea.iconName} className="w-6 h-6" />
                   <span className="text-sm font-bold uppercase tracking-wider">Research Area</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{selectedArea.title}</h2>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-6">
              
              {/* Modal Subtitle */}
              {selectedArea.modalSubtitle && (
                 <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">{selectedArea.modalSubtitle}</h3>
              )}

              {/* Full Detailed Content - Paragraphs */}
              {selectedArea.fullContent ? (
                <div className="space-y-4">
                    {selectedArea.fullContent.map((paragraph, idx) => (
                        <p key={idx} className="text-lg text-slate-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
              ) : (
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                    {selectedArea.description}
                </p>
              )}
              
              <div className="pt-8 mt-8 border-t border-white/10 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Research;