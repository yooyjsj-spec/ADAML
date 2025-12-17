import React, { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { NEWS, GALLERY } from '../constants';
import { Image, Newspaper, Bell, Calendar, ChevronRight, ExternalLink, X } from 'lucide-react';
import { NewsItem } from '../types';

type Tab = 'News' | 'Notice' | 'Gallery';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('News');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openNewsModal = (item: NewsItem) => {
    setSelectedNews(item);
    document.body.style.overflow = 'hidden';
  };

  const closeNewsModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  const newsContent = NEWS.filter(item => item.category !== 'Notice');
  const noticeContent = NEWS.filter(item => item.category === 'Notice');

  return (
    <div className="pt-20">
      <SectionWrapper id="community" title="Community" subtitle="Lab Updates & Events">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
          
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sticky top-24 space-y-2">
              <button
                onClick={() => setActiveTab('News')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeTab === 'News' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Newspaper className="w-5 h-5" />
                <span>News</span>
                {activeTab === 'News' && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
              
              <button
                onClick={() => setActiveTab('Notice')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeTab === 'Notice' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Bell className="w-5 h-5" />
                <span>Notice</span>
                {activeTab === 'Notice' && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>

              <button
                onClick={() => setActiveTab('Gallery')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeTab === 'Gallery' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Image className="w-5 h-5" />
                <span>Gallery</span>
                {activeTab === 'Gallery' && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            </div>
          </div>

          <div className="lg:w-3/4 flex-grow">
            <div className="bg-slate-900/20 rounded-2xl border border-white/5 p-6 md:p-8 min-h-full">
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                {activeTab === 'News' && <Newspaper className="w-7 h-7 text-blue-400" />}
                {activeTab === 'Notice' && <Bell className="w-7 h-7 text-yellow-400" />}
                {activeTab === 'Gallery' && <Image className="w-7 h-7 text-purple-400" />}
                {activeTab}
              </h2>

              {activeTab === 'News' && (
                <div className="grid gap-6">
                  {newsContent.length > 0 ? (
                    newsContent.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => openNewsModal(item)}
                        className="bg-slate-800/40 border border-white/10 p-8 rounded-xl hover:bg-slate-800/60 transition-all cursor-pointer group hover:border-blue-500/30"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                             item.category === 'Award' ? 'bg-yellow-500/20 text-yellow-400' :
                             item.category === 'Project' ? 'bg-green-500/20 text-green-400' :
                             'bg-blue-500/20 text-blue-400'
                          }`}>
                            {item.category}
                          </span>
                          <span className="text-slate-500 text-sm flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-lg line-clamp-3">
                          {item.summary}
                        </p>
                        <div className="mt-6 text-blue-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                          View Details <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))
                  ) : (
                     <div className="text-center py-24 text-slate-500">No news items found.</div>
                  )}
                </div>
              )}

              {activeTab === 'Notice' && (
                <div className="space-y-6">
                  {noticeContent.length > 0 ? (
                    noticeContent.map((item) => (
                      <div key={item.id} className="bg-slate-800/40 border-l-4 border-blue-500 p-8 rounded-r-xl hover:bg-slate-800/60 transition-colors">
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <span className="text-slate-500 text-sm">{item.date}</span>
                         </div>
                         <p className="text-slate-400 text-lg leading-relaxed">{item.summary}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-24 text-slate-500">No notices posted.</div>
                  )}
                </div>
              )}

              {activeTab === 'Gallery' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {GALLERY.length > 0 ? (
                      GALLERY.map((item) => (
                         <div key={item.id} className="group overflow-hidden rounded-xl bg-slate-800/40 border border-white/10">
                            <div className="aspect-video overflow-hidden">
                               <img 
                                 src={item.image} 
                                 alt={item.title} 
                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                               />
                            </div>
                            <div className="p-6">
                               <div className="text-xs text-slate-500 mb-2">{item.date}</div>
                               <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                               {item.description && <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>}
                            </div>
                         </div>
                      ))
                   ) : (
                      <div className="col-span-full text-center py-24 text-slate-500">Gallery is empty.</div>
                   )}
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={closeNewsModal}></div>
          <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
            <button onClick={closeNewsModal} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    selectedNews.category === 'Award' ? 'bg-yellow-500/20 text-yellow-400' :
                    selectedNews.category === 'Project' ? 'bg-green-500/20 text-green-400' :
                    'bg-blue-500/20 text-blue-400'
                }`}>
                  {selectedNews.category}
                </span>
                <span className="text-slate-500 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedNews.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">{selectedNews.title}</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-xl">{selectedNews.summary}</p>
              </div>
              {selectedNews.link && (
                <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                  <a href={selectedNews.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20">
                    Full News Article <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;