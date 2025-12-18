import React, { useEffect } from 'react';
import { Mail, GraduationCap, Briefcase, MapPin, Phone, User } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import MemberCard from '../components/MemberCard.jsx';
import { MEMBERS, LAB_INFO } from '../constants.js';

const People = () => {
  const pi = MEMBERS.find(m => m.role === 'PI');
  const masterStudents = MEMBERS.filter(m => m.role === 'Master Student');
  const undergraduateStudents = MEMBERS.filter(m => m.role === 'Undergraduate Student');
  const alumni = MEMBERS.filter(m => m.role === 'Alumni');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-20">
      <SectionWrapper id="people" title="Our Team" subtitle="Meet the Innovators">
        {pi && (
          <div className="mb-24">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden">
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-5 relative min-h-[400px]">
                  <img src={pi.image} alt={pi.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  <div className="absolute bottom-0 p-8">
                     <div className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4">PI</div>
                     <h3 className="text-4xl font-bold text-white mb-2">{pi.name}</h3>
                     <p className="text-blue-400 font-medium text-lg mb-6">{pi.researchFocus}</p>
                     <div className="space-y-4">
                       <div className="flex items-start gap-3 text-slate-300"><MapPin className="w-5 h-5 text-blue-400" /><span className="text-sm">{LAB_INFO.contact.address}</span></div>
                       <a href={`mailto:${pi.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white"><Mail className="w-5 h-5 text-blue-400" /><span className="text-sm">{pi.email}</span></a>
                     </div>
                  </div>
                </div>
                <div className="lg:col-span-7 p-8 md:p-12 space-y-12">
                  {pi.education && (
                    <div><h5 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-3"><GraduationCap className="w-6 h-6 text-purple-400" />Education</h5>
                      <ul className="space-y-4">{pi.education.map((edu, idx) => (<li key={idx} className="text-slate-300 text-base pl-4 border-l-2 border-slate-700">{edu}</li>))}</ul>
                    </div>
                  )}
                  {pi.career && (
                    <div><h5 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-3"><Briefcase className="w-6 h-6 text-blue-400" />Career</h5>
                      <ul className="space-y-4">{pi.career.map((job, idx) => (<li key={idx} className="text-slate-300 text-base pl-4 border-l-2 border-slate-700">{job}</li>))}</ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <h3 className="text-3xl font-bold text-white mb-10">Master Students</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {masterStudents.map((s) => <MemberCard key={s.id} member={s} />)}
        </div>
        <h3 className="text-3xl font-bold text-white mb-10">Undergraduate Students</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {undergraduateStudents.map((s) => <MemberCard key={s.id} member={s} />)}
        </div>
      </SectionWrapper>
    </div>
  );
};
export default People;