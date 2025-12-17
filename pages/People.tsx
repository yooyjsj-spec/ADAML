import React, { useEffect } from 'react';
import { Mail, GraduationCap, Briefcase, Award, Phone, MapPin, User } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import MemberCard from '../components/MemberCard';
import { MEMBERS, LAB_INFO } from '../constants';

const People: React.FC = () => {
  // Categorize members
  const pi = MEMBERS.find(m => m.role === 'PI');
  const masterStudents = MEMBERS.filter(m => m.role === 'Master Student');
  const undergraduateStudents = MEMBERS.filter(m => m.role === 'Undergraduate Student');
  const others = MEMBERS.filter(m => m.role === 'PhD Student' || m.role === 'Researcher');
  const alumni = MEMBERS.filter(m => m.role === 'Alumni');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <SectionWrapper id="people" title="Our Team" subtitle="Meet the Innovators">
        
        {/* Principal Investigator Section */}
        {pi && (
          <div className="mb-24">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-0">
                
                {/* Left Column: Image & Contact */}
                <div className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px] bg-slate-800">
                  <img 
                    src={pi.image} 
                    alt={pi.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
                     <div className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        PRINCIPAL INVESTIGATOR
                     </div>
                     <h3 className="text-4xl font-bold text-white mb-2">{pi.name}</h3>
                     <p className="text-blue-400 font-medium text-lg mb-6">{pi.researchFocus}</p>
                     
                     <div className="space-y-4">
                       <div className="flex items-start gap-3 text-slate-300">
                           <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                           <span className="text-sm font-light leading-relaxed">{LAB_INFO.contact.address}</span>
                       </div>
                       <div className="flex items-center gap-3 text-slate-300">
                           <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                           <span className="text-sm font-light">{LAB_INFO.contact.phone}</span>
                       </div>
                       <a href={`mailto:${pi.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                         <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                         <span className="text-sm font-light">{pi.email}</span>
                       </a>
                     </div>
                  </div>
                </div>

                {/* Right Column: Education & Employment */}
                <div className="lg:col-span-7 p-8 md:p-12 space-y-12 flex flex-col justify-center">
                  
                  {/* Education - Full Width */}
                  {pi.education && (
                    <div className="bg-slate-950/30 p-6 rounded-xl border border-white/5 w-full">
                      <h5 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-3">
                        <GraduationCap className="w-6 h-6 text-purple-400" />
                        Education
                      </h5>
                      <ul className="space-y-4">
                        {pi.education.map((edu, idx) => (
                          <li key={idx} className="text-slate-300 text-base pl-4 border-l-2 border-slate-700 relative">
                             <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-500"></span>
                             {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Employment - Full Width */}
                  {pi.career && (
                    <div className="bg-slate-950/30 p-6 rounded-xl border border-white/5 w-full">
                      <h5 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-3">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                        Employment
                      </h5>
                      <ul className="space-y-4">
                        {pi.career.map((job, idx) => (
                          <li key={idx} className="text-slate-300 text-base pl-4 border-l-2 border-slate-700 relative">
                            <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-500"></span>
                            {job}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Master Students */}
        {masterStudents.length > 0 && (
          <div className="mt-24">
              <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                  <span className="text-blue-500">#</span> Master Students
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
              {masterStudents.map((student) => (
                  <MemberCard key={student.id} member={student} />
              ))}
              </div>
          </div>
        )}

        {/* Undergraduate Students */}
        {undergraduateStudents.length > 0 && (
          <div className="mt-12 border-t border-white/10 pt-12">
              <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                  <span className="text-purple-500">#</span> Undergraduate Researchers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
              {undergraduateStudents.map((student) => (
                  <MemberCard key={student.id} member={student} />
              ))}
              </div>
          </div>
        )}
        
        {/* Other Researchers (if any) */}
        {others.length > 0 && (
          <div className="mt-12 border-t border-white/10 pt-12">
             <h3 className="text-3xl font-bold text-white mb-10">Researchers</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {others.map((member) => (
                   <MemberCard key={member.id} member={member} />
                ))}
             </div>
          </div>
        )}

        {/* Alumni Section - Always Visible */}
        <div className="pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
             <User className="w-6 h-6" /> Alumni
          </h3>
          
          {alumni.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {alumni.map((alum) => (
                <div key={alum.id} className="group bg-slate-900/40 border border-white/5 p-5 rounded-xl flex items-center gap-4 hover:bg-slate-800/60 transition-colors">
                   <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-800 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                     <img src={alum.image} alt={alum.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   </div>
                   <div>
                     <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">{alum.name}</h4>
                     <p className="text-slate-500 text-xs">{alum.researchFocus}</p>
                   </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-12 bg-slate-900/30 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-slate-500">
               <GraduationCap className="w-12 h-12 mb-4 opacity-20" />
               <p className="text-lg font-medium">No Alumni Yet</p>
               <p className="text-sm opacity-60">Graduates from ADAM LAB will be listed here.</p>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default People;