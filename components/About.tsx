import React from 'react';
import { Project } from '../types';
import { Download, Briefcase, Award, MapPin } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Net Zero Roadmap & Strategy',
    client: 'FTSE 250 Construction Firm',
    description: 'Developed a comprehensive decarbonization roadmap to achieve Net Zero by 2040. Conducted materiality assessments and established Science Based Targets (SBTi) across Scope 1, 2, and 3 emissions.',
    impact: 'SBTi Validation Secured',
  },
  {
    id: '2',
    title: 'Sustainable Supply Chain Optimization',
    client: 'Global FMCG Brand',
    description: 'Led a supplier engagement program to reduce upstream emissions. Implemented a responsible sourcing framework and optimized logistics networks to minimize carbon intensity.',
    impact: '15% Cost & Carbon Reduction',
  },
  {
    id: '3',
    title: 'Social Impact & Community Investment',
    client: 'Renewable Energy Developer',
    description: 'Designed a social value framework to measure and report on community benefits of new infrastructure projects. Enhanced stakeholder engagement strategies for local planning approvals.',
    impact: 'Increased Social ROI by 30%',
  },
];

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 animate-fade-in">
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3">
           <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative group">
             <div className="absolute inset-0 bg-eco-green/10 group-hover:bg-transparent transition-colors duration-300"></div>
             {/* Using local image aarushi.jpg with fallback */}
             <img 
               src="aarushi.jpg" 
               alt="Aarushi Asawa" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                  e.currentTarget.onerror = null;
               }}
             />
           </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-earth-800">Hello, I'm Aarushi.</h2>
          <div className="flex items-center space-x-2 text-eco-green font-medium">
            <MapPin size={18} />
            <span>London, United Kingdom</span>
          </div>
          <p className="text-earth-800/80 leading-relaxed text-lg">
            I am a Sustainability Consultant based in London, advising businesses and corporations on how to reduce their carbon footprints, optimize their supply chains, and enhance their social impact.
          </p>
          <p className="text-earth-800/80 leading-relaxed text-lg">
             My work focuses on bridging the gap between ambitious corporate goals and actionable environmental strategies. From calculating complex Scope 3 emissions to designing circular economy frameworks, I help organizations navigate the transition to a regenerative future.
          </p>
          <p className="text-earth-800/80 leading-relaxed text-lg">
            Beyond the spreadsheets and strategy decks, I am a creative painter. I believe that art and sustainability are deeply connected—both require envisioning a world that doesn't yet exist and meticulously crafting it into reality.
          </p>
          
          <div className="pt-4">
             <button className="group flex items-center pl-1.5 pr-6 py-1.5 bg-earth-800 text-white rounded-full transition-all hover:bg-earth-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
               <div className="bg-white/10 p-2.5 rounded-full mr-3 group-hover:bg-white/20 transition-colors">
                 <Download size={20} />
               </div>
               <span className="font-medium tracking-wide">Download CV</span>
             </button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <div className="flex items-center space-x-3 mb-8">
            <Briefcase className="text-eco-green" size={28} />
            <h3 className="text-2xl font-serif font-bold text-earth-800">Professional Experience</h3>
        </div>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-8 rounded-2xl shadow-sm border border-earth-200 hover:shadow-md transition-shadow group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-earth-800 group-hover:text-eco-green transition-colors">{project.title}</h4>
                <span className="text-sm font-semibold text-eco-green bg-eco-green/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  {project.client}
                </span>
              </div>
              <p className="text-earth-800/70 mb-4">{project.description}</p>
              <div className="flex items-start space-x-2 text-orange-700 bg-orange-50 p-3 rounded-lg border border-orange-100">
                <Award size={20} className="shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{project.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;