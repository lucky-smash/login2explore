import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Tools from './components/Tools';
import Pricing from './components/Pricing';
import Screenshots from './components/Screenshots';
import UsingJPDB from './components/UsingJPDB';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default open

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false); // Only auto-close on mobile/tablet
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex bg-[#06080f] text-slate-200 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <main className={`flex-1 transition-all duration-500 ease-in-out ${isSidebarOpen ? 'lg:ml-72' : 'ml-0'}`}>
        <header className="sticky top-0 z-40 flex justify-between items-center p-4 md:p-8 bg-[#06080f]/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2.5 rounded-xl border transition-all active:scale-95 group ${isSidebarOpen ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}
              aria-label="Toggle Sidebar"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current rounded-full transition-all ${isSidebarOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current rounded-full transition-all ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current rounded-full transition-all ${isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest truncate">System Status: Optimal</span>
            </div>
          </div>
          <div className="hidden sm:flex gap-4">
            <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm font-medium hover:bg-white/10 transition-colors">
              Docs
            </button>
            <button className="px-5 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-600 text-xs md:text-sm font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform">
              Console
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8">

        <section id="home" className="mb-20 md:mb-32">
          <div className="relative glass-card p-6 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 blur-[100px] -mr-32 md:-mr-48 -mt-32 md:-mt-48 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 blur-[100px] -ml-32 md:-ml-48 -mb-32 md:-mb-48 rounded-full"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] font-heading">
                Turbocharge Your <br className="hidden sm:block"/> Apps with <span className="gradient-text">JsonPowerDB</span>
              </h1>
              <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed font-light max-w-xl">
                The future of data management is here. Lightning-fast performance, unparalleled scalability, and a built-in REST API.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="flex-1 px-4 py-3 rounded-xl bg-[#0a0e27] border border-white/10 focus:border-cyan-500 outline-none transition-colors text-sm"
                />
                <button className="px-8 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-purple-600 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-sm">
                  Get Started
                </button>
              </div>
              <p className="mt-4 text-[10px] text-slate-500 font-mono tracking-tight uppercase">Free forever for personal projects.</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
          {[
            { title: 'In-Memory DBMS', value: '10x Faster', icon: '⚡' },
            { title: 'Serverless Support', value: 'Build Quick', icon: '🚀' },
            { title: 'Secure REST API', value: 'Any Platform', icon: '🔒' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 md:p-8 border-white/5 group hover:border-cyan-500/30 transition-all overflow-hidden relative">
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1 md:mb-2 font-mono">{stat.title}</h3>
              <p className="text-2xl md:text-3xl font-black text-white font-heading">{stat.value}</p>
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        <section id="products" className="scroll-mt-20 md:scroll-mt-32 mb-10">
          <Products />
        </section>

        <section id="features" className="scroll-mt-20 md:scroll-mt-32 mb-10">
          <Features />
        </section>

        <section id="tools" className="scroll-mt-20 md:scroll-mt-32 mb-10">
          <Tools />
        </section>

        <section id="pricing" className="scroll-mt-20 md:scroll-mt-32 mb-10">
          <Pricing />
        </section>
        
        <section id="screenshots" className="scroll-mt-20 md:scroll-mt-32 mb-10">
          <Screenshots />
        </section>
        
        <section id="using-jpdb" className="scroll-mt-20 md:scroll-mt-32 mb-10">
          <UsingJPDB />
        </section>
        
        <section id="contact" className="scroll-mt-20 md:scroll-mt-32 mb-5">
          <Contact />
        </section>

        <footer className="py-12 md:py-20 border-t border-white/5 text-center mt-10 md:mt-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"></div>
          <p className="text-slate-500 text-[10px] md:text-xs font-light tracking-wide italic mb-4">"The World\'s Fastest Real-time DBMS"</p>
          <p className="text-slate-400 font-medium text-xs md:text-sm">© 2026 Login2Xplore. All Rights Reserved.</p>
        </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
