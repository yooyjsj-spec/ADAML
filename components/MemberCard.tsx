import React from 'react';
import { Mail } from 'lucide-react';
import { Member } from '../types';

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-2 group">
    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-white/10 group-hover:border-blue-500 transition-colors">
      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
    </div>
    <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded mb-3">{member.role}</span>
    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{member.researchFocus}</p>
    {member.email && (
      <a href={`mailto:${member.email}`} className="mt-auto text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1">
        <Mail className="w-3 h-3" /> Contact
      </a>
    )}
  </div>
);

export default MemberCard;