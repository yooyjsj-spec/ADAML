import React, { useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { NEWS } from '../constants';

const News: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <SectionWrapper id="news" title="Latest News" subtitle="Lab Updates">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS.map((item) => (
            <div key={item.id} className="bg-slate-900/40 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-slate-800/40 transition-all flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  item.category === 'Award' ? 'bg-yellow-500/20 text-yellow-400' :
                  item.category === 'Project' ? 'bg-green-500/20 text-green-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.category}
                </span>
                <span className="text-slate-500 text-sm">{item.date}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
              <p className="text-slate-400 text-sm flex-grow">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default News;