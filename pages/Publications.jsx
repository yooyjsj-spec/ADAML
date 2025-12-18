import React, { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import { JOURNALS, CONFERENCES, PATENTS } from '../constants.js';
import { ExternalLink, BookOpen, Users, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 10;

const PublicationCard = ({ pub }) => (
  <div className="group relative bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg flex flex-col md:flex-row gap-6">
    {pub.image && (
        <div className="hidden md:block w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10 relative">
            <img 
                src={pub.image} 
                alt={pub.venue} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        </div>
    )}
    <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">{pub.title}</h3>
        {pub.authors && <p className="text-slate-400 mb-1 text-sm md:text-base">{pub.authors}</p>}
        <p className="text-slate-500 text-sm italic">{pub.venue}, {pub.year}</p>
      </div>
      {pub.link && (
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-white rounded-lg transition-all font-medium border border-blue-500/20 text-sm">
            <span>DOI Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  </div>
);

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-8">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`w-12 h-12 rounded-xl border transition-all font-black text-lg ${
            currentPage === i + 1 
              ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110' 
              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const Publications = () => {
  const [activeTab, setActiveTab] = useState('Journals');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentPage, activeTab]);
  useEffect(() => { setCurrentPage(1); }, [activeTab]);

  const getPaginatedItems = (items) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
    <div className="pt-20">
      <SectionWrapper id="publications-page" title="Publications" subtitle="Scholarly Research">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/4">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sticky top-24 space-y-2">
              <button onClick={() => setActiveTab('Journals')} className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all font-bold ${activeTab === 'Journals' ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-400 hover:bg-white/5'}`}>
                <BookOpen className="w-6 h-6" /><span>Journals</span>
              </button>
            </div>
          </div>
          <div className="lg:w-3/4 flex-grow">
            <div className="bg-slate-900/20 rounded-3xl border border-white/5 p-6 md:p-10">
              <div className="space-y-8">
                {activeTab === 'Journals' && (
                  <>
                    {JOURNALS.length > 0 ? getPaginatedItems(JOURNALS).map((pub) => <PublicationCard key={pub.id} pub={pub} />) : <div className="text-center py-32 text-slate-500">No journal papers found.</div>}
                    <Pagination currentPage={currentPage} totalItems={JOURNALS.length} onPageChange={setCurrentPage} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Publications;