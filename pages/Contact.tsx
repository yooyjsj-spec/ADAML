import React, { useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { LAB_INFO } from '../constants';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <SectionWrapper id="contact" title="Contact Us" subtitle="Get in Touch" className="pb-32">
        <div className="grid lg:grid-cols-2 gap-12 bg-slate-900/60 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Visit ADAM LAB</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Address</h4>
                  <p className="text-slate-400">{LAB_INFO.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href={`mailto:${LAB_INFO.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
                    {LAB_INFO.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-slate-400">{LAB_INFO.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full h-80 bg-slate-800 rounded-xl overflow-hidden border border-white/5 relative group">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.756247768565!2d126.9977013153123!3d37.61090267978956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c963607065963%3A0x956637380907d800!2sKookmin%20University!5e0!3m2!1sen!2skr!4v1647844000000!5m2!1sen!2skr" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'invert(90%) hue-rotate(180deg)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Lab Location"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-xl shadow-inner"></div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;