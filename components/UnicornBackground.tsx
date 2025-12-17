import React, { useEffect } from 'react';

const UnicornBackground: React.FC = () => {
  useEffect(() => {
    if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-slate-950">
      {/* Unicorn Studio Project Layer - The base animation */}
      <div 
        data-us-project="Y5kRzfGVY0bWdQipXURB" 
        style={{ width: '100%', height: '100%' }}
      ></div>
      
      {/* Metallic Appearance Layers - Optimized for "Reflected Light on Metal" look */}
      
      {/* 1. Base Metal Tone: Desaturate and add a cold blue/silver tint */}
      {/* grayscale turns it grey, sepia adds a bit of warmth which we shift to blue with hue-rotate */}
      <div className="absolute inset-0 backdrop-grayscale-[1] backdrop-sepia-[0.2] backdrop-hue-rotate-[190deg] backdrop-brightness-110 backdrop-contrast-[1.25]"></div>

      {/* 2. Specular Highlights: Simulates the bright shine of polished metal */}
      {/* Using a soft-light blend with a gradient to create a "sheen" across the screen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/50 via-transparent to-white/20 mix-blend-soft-light"></div>

      {/* 3. Hard Light Overlay: Adds the "heavy" metallic feel and deepens the shadows */}
      <div className="absolute inset-0 bg-slate-900/30 mix-blend-hard-light"></div>

      {/* 4. Brushed Metal Texture: Very subtle horizontal noise/streaks if possible, or just grain */}
      {/* We use a noise pattern to give it physical substance */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPC9zdmc+')] opacity-30 mix-blend-overlay"></div>
      
      {/* 5. Readability & Depth: Vignette and overall darkening to make text pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/80"></div>
    </div>
  );
};

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

export default UnicornBackground;