import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import UnicornBackground from './UnicornBackground';

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-slate-300 flex flex-col">
      <UnicornBackground />
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Shared across all pages */}
      <footer className="bg-black/80 text-center py-8 border-t border-white/5 backdrop-blur-xl relative z-10 mt-auto">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} ADAM LAB. All Rights Reserved. <br/>
          AI Analysis and Defense Aerospace Materials Laboratory
        </p>
      </footer>
    </div>
  );
};

export default Layout;