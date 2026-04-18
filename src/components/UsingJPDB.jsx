import React from 'react';

const steps = [
  { id: '1', title: 'Register Domain', desc: 'Secure your unique database domain to get started with the JsonPowerDB infrastructure.', icon: '🌐' },
  { id: '2', title: 'Developer Key', desc: 'Generate your specific developer token for secure authentication and REST API access.', icon: '🔑' },
  { id: '3', title: 'Create Database', desc: 'Initialize your first document store or relation with zero configuration overhead.', icon: '🏗️' },
  { id: '4', title: 'REST Integration', desc: 'Use our Low-code libraries (jpdb-commons.js) to sync data directly from any platform.', icon: '⚡' },
];

export default function UsingJPDB() {
  return (
    <div className="container mx-auto px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3">
          <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-black mb-4 block">Tutorial Guide</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white mb-6 leading-tight">
            Seamless <span className="gradient-text">Implementation</span> in 4 Steps
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
            Getting started with JsonPowerDB is faster than any other database system. 
            No complex configuration files or cumbersome schemas — just powerful, real-time data management.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all hover:scale-105">
            View Documentation
          </button>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="glass-card p-6 md:p-10 border-white/5 group hover:border-cyan-500/20 transition-all duration-500 relative overflow-hidden">
              <div className="text-4xl mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{step.icon}</div>
              <div className="absolute top-8 right-8 text-6xl font-black text-white/5 select-none">{step.id}</div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading tracking-tight">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
              <div className="absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
