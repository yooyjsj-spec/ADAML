import React, { useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { JOURNALS, CONFERENCES, PATENTS } from '../constants';
import { ExternalLink, BookOpen, Users, FileText } from 'lucide-react';
import { Publication, Patent } from '../types';

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => (
  <div className="group relative bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg flex flex-col md:flex-row gap-6">
    
    {/* Optional Image Section */}
    {pub.image && (
        <div className="hidden md:block w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10 relative">
            <img 
                src={pub.image} 
                alt={pub.venue} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                }} 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        </div>
    )}

    <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex-1">
        <div className="flex gap-2 mb-3">
          {pub.tags?.map(tag => (
            <span key={tag} className="text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 uppercase tracking-wider">{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">{pub.title}</h3>
        {pub.authors && <p className="text-slate-400 mb-1 text-sm md:text-base">{pub.authors}</p>}
        <p className="text-slate-500 text-sm italic">{pub.venue}, {pub.year}</p>
      </div>
      {pub.link && (
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-blue-600 text-white rounded-lg transition-all font-medium border border-white/10 group-hover:border-blue-500/50 text-sm">
            <span>View</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  </div>
);

const PatentCard: React.FC<{ patent: Patent }> = ({ patent }) => (
  <div className="group relative bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg">
    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
      <div className="flex-1">
        <div className="inline-block px-2 py-1 rounded bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
          Patent
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors leading-tight">{patent.title}</h3>
        <p className="text-slate-400 mb-1 text-sm">Inventors: {patent.inventors}</p>
        <p className="text-slate-500 text-sm font-mono">{patent.number} | {patent.year}</p>
      </div>
    </div>
  </div>
);

const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <div className="w-full py-12 bg-slate-900/30 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-slate-500">
    <FileText className="w-10 h-10 mb-3 opacity-20" />
    <p className="text-sm opacity-60 font-medium">{message}</p>
  </div>
);

const Publications: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <SectionWrapper id="publications" title="Publications" subtitle="Scientific Contributions">
        
        {/* Journals Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">International Journals</h2>
          </div>
          <div className="grid gap-6">
            {JOURNALS.length > 0 ? (
              JOURNALS.map((pub) => <PublicationCard key={pub.id} pub={pub} />)
            ) : (
              <EmptyState message="Journal publications will be listed here." />
            )}
          </div>
        </div>

        {/* Conferences Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Users className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">Conferences</h2>
          </div>
          <div className="grid gap-6">
            {CONFERENCES.length > 0 ? (
              CONFERENCES.map((pub) => <PublicationCard key={pub.id} pub={pub} />)
            ) : (
              <EmptyState message="Conference proceedings will be listed here." />
            )}
          </div>
        </div>

        {/* Patents Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <FileText className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Patents</h2>
          </div>
          <div className="grid gap-6">
            {PATENTS.length > 0 ? (
              PATENTS.map((patent) => <PatentCard key={patent.id} patent={patent} />)
            ) : (
              <EmptyState message="Patents will be listed here." />
            )}
          </div>
        </div>

      </SectionWrapper>
    </div>
  );
};

export default Publications;