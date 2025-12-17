import React, { useEffect, useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import MemberCard from '../components/MemberCard';
import { LAB_INFO, MEMBERS } from '../constants';
import { Mail } from 'lucide-react';

const About: React.FC = () => {
  // Categorize members
  const pi = MEMBERS.find(m => m.role === 'PI');
  const students = MEMBERS.filter(m => m.role.includes('Student') || m.role === 'Researcher');
  const alumni = MEMBERS.filter(m => m.role === 'Alumni');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play failed:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="pt-20">
      {/* 1. About Section */}
      <SectionWrapper id="about-content" title="About The Lab" subtitle="Who We Are">
        <div className="relative grid md:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Metallic Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-950/80 to-black z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-40 z-0 pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            <p className="text-lg leading-relaxed text-slate-300">
              {LAB_INFO.about}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {LAB_INFO.keywords.map((keyword, idx) => (
                <span key={idx} className="px-4 py-2 bg-blue-900/20 border border-blue-500/20 text-blue-300 rounded-lg text-sm font-medium shadow-sm backdrop-blur-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group z-10 bg-black cursor-pointer">
             {/* Note: User needs to upload 'lab_video.mp4' to public/video/ folder. 
                 Using a turbine engine image as a poster/placeholder until the video is available. */}
             <video 
               ref={videoRef}
               src="/video/lab_video.mp4" 
               poster="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1200&auto=format&fit=crop"
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
               loop
               muted
               playsInline
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none"></div>
             <div className="absolute bottom-6 left-6 pointer-events-none z-20">
               <h3 className="text-white text-xl font-bold drop-shadow-lg">Advanced Material Analysis</h3>
               <p className="text-slate-200 text-sm drop-shadow-md">Microstructure & Defect Detection</p>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. People Section */}
      <SectionWrapper id="people" title="Our Team" subtitle="Meet the Innovators">
        
        {/* PI Card */}
        {pi && (
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-3xl border border-blue-500/20 shadow-2xl backdrop-blur-sm max-w-4xl mx-auto items-center">
              <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg">
                <img src={pi.image} alt={pi.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-2">PRINCIPAL INVESTIGATOR</div>
                <h3 className="text-3xl font-bold text-white mb-2">{pi.name}</h3>
                <p className="text-blue-400 mb-4 font-medium">{pi.researchFocus}</p>
                <p className="text-slate-400 mb-6 italic">"Leading the charge in AI-driven material discovery for the next era of aerospace defense."</p>
                <a href={`mailto:${pi.email}`} className="text-white hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" /> {pi.email}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Students Grid */}
        <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Researchers & Students</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {students.map((student) => (
            <MemberCard key={student.id} member={student} />
          ))}
        </div>

        {/* Alumni Grid */}
        {alumni.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-slate-500 pl-4">Alumni</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {alumni.map((alum) => (
                <div key={alum.id} className="bg-slate-900/40 border border-white/5 p-6 rounded-xl flex items-center gap-4">
                   <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-800">
                     <img src={alum.image} alt={alum.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                   </div>
                   <div>
                     <h4 className="text-white font-semibold">{alum.name}</h4>
                     <p className="text-slate-400 text-xs">{alum.researchFocus}</p>
                   </div>
                </div>
              ))}
            </div>
          </>
        )}
      </SectionWrapper>
    </div>
  );
};

export default About;