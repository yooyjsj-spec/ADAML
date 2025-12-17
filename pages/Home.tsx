import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { LAB_INFO } from '../constants';
import SectionWrapper from '../components/SectionWrapper';

const Home: React.FC = () => {
  const { hash } = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [hash]);

  const scrollToAbout = (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById('about-content');
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => {
        console.warn("Video play failed - retrying with fallback if needed:", e);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="space-y-6 max-w-4xl z-10 animate-fade-in-up">
          <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm mb-4">
            <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">Innovating the Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
            ADAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">LAB</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto">
            {LAB_INFO.fullName}
          </p>
          <div className="pt-8">
            <a 
              href="#about-content" 
              onClick={scrollToAbout}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white/20 rounded-full shadow-md hover:bg-white/5 cursor-pointer"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
                <ArrowRight className="w-6 h-6" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Explore Lab</span>
              <span className="relative invisible">Explore Lab</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper id="about-content" title="About The Lab" subtitle="Who We Are">
        <div className="relative grid md:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-950/80 to-black z-0"></div>
          
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
          
          <div 
            className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group z-10 bg-black cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
             <video 
               ref={videoRef}
               src="./video/lab_video.mp4" 
               poster="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1200"
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
               loop
               muted
               playsInline
               onError={(e) => {
                 const video = e.target as HTMLVideoElement;
                 if (video.src.includes('lab_video.mp4')) {
                    video.src = "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-interface-background-34676-large.mp4";
                 }
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none"></div>
             <div className="absolute bottom-6 left-6 pointer-events-none z-20">
               <h3 className="text-white text-xl font-bold drop-shadow-lg">Advanced Material Analysis</h3>
               <p className="text-slate-200 text-sm drop-shadow-md">Microstructure & Defect Detection</p>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;