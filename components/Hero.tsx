import React from 'react';
import { Leaf, Palette, Quote, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
    setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="bg-deep-green min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500">
      
      {/* --- Playful Diagram Layer (Background) --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Top Right: The Earth (The Client) - Large Diagram style */}
        <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-[300px] h-[300px] md:w-[600px] md:h-[600px] text-earth-50/5 animate-spin-slow z-0">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
             </svg>
        </div>

        {/* Top Left: Factory Industry Diagram */}
        <div className="absolute top-12 left-6 md:left-20 opacity-20 animate-float-slow z-0">
            <div className="relative">
                {/* Factory Icon - Light for dark bg */}
                <svg className="w-24 h-24 md:w-32 md:h-32 text-earth-50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 22H2V10l4-4v4h2V6l4-4v8h2V6l4-4v12h2v8zM12 12.5V8.8L10 10.5v2h2zm6 0V6.8l-2 1.7v4h2z" />
                </svg>
                {/* Smoke Footprints - Rising from chimney */}
                <div className="absolute -top-10 left-12 text-earth-50/60 animate-bounce" style={{ animationDuration: '3s' }}>
                    <svg className="w-10 h-10 rotate-12" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M14.56,6.65C13.88,8.23 11.23,10.23 10,12.5C9.4,13.63 9.77,14.63 10.5,15.2C11.5,15.96 13.5,15.3 14.5,14C15.68,12.53 16.5,10.61 16.5,9C16.5,7.5 15.56,6.5 14.56,6.65M10.94,5.5C10.5,6.5 8.77,8.2 8,9.5C7.5,10.3 7.7,11 8.25,11.5C9,12.1 10.5,11.5 11,10.5C11.6,9.5 12.1,8 12.1,7C12.1,6 11.5,5.2 10.94,5.5M16.9,8C17.4,8.6 18.5,10 18.5,11.5C18.5,12.6 18,13 17.5,13C17,13 16,12 16,11C16,10.3 16.5,9.5 16.9,8M8,8.5C7.5,9.2 6.5,10.5 6.5,11.5C6.5,12.2 7,12.5 7.5,12.5C8,12.5 8.7,11.8 8.7,11C8.7,10.5 8.3,9.5 8,8.5Z" />
                    </svg>
                </div>
                <div className="absolute -top-20 left-20 text-earth-50/40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                     <svg className="w-12 h-12 rotate-45" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M14.56,6.65C13.88,8.23 11.23,10.23 10,12.5C9.4,13.63 9.77,14.63 10.5,15.2C11.5,15.96 13.5,15.3 14.5,14C15.68,12.53 16.5,10.61 16.5,9C16.5,7.5 15.56,6.5 14.56,6.65M10.94,5.5C10.5,6.5 8.77,8.2 8,9.5C7.5,10.3 7.7,11 8.25,11.5C9,12.1 10.5,11.5 11,10.5C11.6,9.5 12.1,8 12.1,7C12.1,6 11.5,5.2 10.94,5.5M16.9,8C17.4,8.6 18.5,10 18.5,11.5C18.5,12.6 18,13 17.5,13C17,13 16,12 16,11C16,10.3 16.5,9.5 16.9,8M8,8.5C7.5,9.2 6.5,10.5 6.5,11.5C6.5,12.2 7,12.5 7.5,12.5C8,12.5 8.7,11.8 8.7,11C8.7,10.5 8.3,9.5 8,8.5Z" />
                    </svg>
                </div>
            </div>
        </div>

        {/* Bottom Left: Supply Chain Diagram (Truck -> Box) */}
        <div className="absolute bottom-32 left-8 md:bottom-20 md:left-32 opacity-20 flex items-end space-x-2 animate-float-medium z-0 scale-75 md:scale-100">
             {/* Truck */}
             <svg className="w-24 h-24 text-earth-50" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
             </svg>
             {/* Dashed Arrow */}
             <svg className="w-20 h-20 text-mustard-500 mb-6" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
                 <path d="M0 15 Q 25 0 50 15" />
                 <path d="M45 10 L50 15 L45 20" strokeDasharray="0" />
             </svg>
             {/* Package */}
             <svg className="w-20 h-20 text-mustard-500" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zM13 12.58v6.71l6-3.38v-6.7l-6 3.37z"/>
             </svg>
        </div>

        {/* Floating Leaves & Lightbulbs (Ideas) - Scattered */}
         <div className="absolute top-1/4 right-1/3 text-earth-50/20 w-16 h-16 animate-spin-slow hidden md:block">
            <Leaf size={64} />
         </div>
         <div className="absolute bottom-1/3 right-1/4 text-mustard-500/20 w-16 h-16 animate-float-fast hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V17h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
            </svg>
         </div>

      </div>

      {/* Main Hero Content */}
      <div className="flex-grow flex items-center z-10 relative">
        <div className="max-w-7xl mx-auto px-6 w-full py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Text */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium text-earth-50 leading-[1.1] tracking-tight relative">
                <span className="relative z-10">Strategies for a</span> <br/>
                {/* Changed to Script font to match 'living' in the reference image */}
                <span className="font-script text-mustard-500 relative z-10 text-6xl lg:text-8xl ml-4">Regenerative</span> <br/>
                <span className="relative z-10">Future</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-earth-50/80 leading-relaxed font-sans font-light max-w-2xl mx-auto lg:mx-0 relative">
                I advise businesses on reducing carbon footprints, optimizing supply chains, and enhancing social impact. Designed to protect both your profit and the planet.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                {/* Mustard Button */}
                <button 
                  onClick={() => setView(ViewState.ABOUT)}
                  className="px-8 py-3.5 bg-mustard-500 text-white font-sans font-bold tracking-wide rounded-full shadow-lg hover:bg-yellow-600 transition-all hover:scale-105 flex items-center space-x-2 z-20"
                >
                  <Palette size={20} />
                  <span>MY IMPACT</span>
                </button>

                {/* Outline Button - Updated for Dark Theme */}
                <button 
                   onClick={() => setView(ViewState.BLOG)}
                   className="px-8 py-3.5 bg-transparent border border-earth-50 text-earth-50 font-sans font-bold tracking-wide rounded-full hover:bg-earth-50 hover:text-deep-green transition-all flex items-center space-x-2 z-20"
                >
                   <Leaf size={20} />
                   <span>READ JOURNAL</span>
                </button>
              </div>
            </div>

            {/* Right Column: Imagery */}
            <div className="relative flex justify-center lg:justify-end">
               {/* Main Circular Image Mask */}
               <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 bg-white group">
                  <img 
                    src="aarushi.jpg" 
                    alt="Aarushi Asawa" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                      e.currentTarget.onerror = null;
                    }}
                  />
               </div>

               {/* Decorative Floating Elements attached to the image */}
               <div className="absolute top-0 right-10 bg-white p-4 rounded-2xl shadow-lg animate-float-slow z-20 hidden sm:block rotate-6">
                  <Leaf size={32} className="text-eco-green" />
               </div>
               
               <div className="absolute bottom-10 left-10 bg-mustard-500 p-4 rounded-2xl shadow-lg animate-float-medium z-20 hidden sm:block -rotate-6">
                  <Palette size={32} className="text-white" />
               </div>

               {/* Background Circle Element behind image */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/10 rounded-full -z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Green Footer / Quote Section - Made slightly darker for contrast */}
      <div className="bg-earth-800 text-earth-50 py-20 px-6 relative z-10 overflow-hidden">
         {/* Footer decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
         
         <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <Quote size={48} className="mx-auto text-earth-50/20" />
            <h2 className="text-2xl md:text-3xl font-serif leading-relaxed italic">
               "Aarushi is committed to leading the change towards a greener future. She specializes in eco-friendly strategies that are as safe for the environment as they are effective for your business."
            </h2>
            <div className="pt-4 border-t border-earth-50/10 inline-block px-12">
               <p className="text-sm font-sans font-bold tracking-[0.2em] uppercase opacity-80">Pioneers in Sustainable Solutions</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Hero;