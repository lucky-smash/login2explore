import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Tools from './components/Tools';
import Pricing from './components/Pricing';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex bg-[#06080f] text-slate-200 min-h-screen">
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">System Status: Optimal</span>
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
              Documentation
            </button>
            <button className="px-5 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-600 text-sm font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform">
              Launch Console
            </button>
          </div>
        </header>

        <section id="home" className="mb-24">
          <div className="relative glass-card p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] -ml-48 -mb-48 rounded-full"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Turbocharge Your Applications with <span className="gradient-text">JsonPowerDB</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                The future of data management is here. Lightning-fast performance, unparalleled scalability, and a built-in REST API for seamless integration.
              </p>
              
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="flex-1 px-4 py-3 rounded-xl bg-[#0a0e27] border border-white/10 focus:border-cyan-500 outline-none transition-colors"
                />
                <button className="px-8 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-purple-600 text-white font-bold tracking-wide">
                  Get Started
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-500">Free forever for personal projects. No credit card required.</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-8 mb-24">
          {[
            { title: 'In-Memory DBMS', value: '10x Faster', icon: '⚡' },
            { title: 'Serverless Support', value: 'Build Quick', icon: '🚀' },
            { title: 'Secure REST API', value: 'Any Platform', icon: '🔒' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 border-white/5 group hover:border-cyan-500/30 transition-colors">
              <div className="text-3xl mb-4">{stat.icon}</div>
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <section id="products" className="scroll-mt-24 mb-24">
          <h2 className="text-3xl font-bold mb-12">Core <span className="text-cyan-400">Products</span></h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="glass-card p-8 group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">PowerIndeX</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Java Database and Indexing Engine. Real-time, simple, light weight, high performance, stable and robust.
              </p>
              <button className="text-cyan-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </button>
            </div>
            <div className="glass-card p-8 group hover:-translate-y-1 transition-transform border-purple-500/20">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">JsonPowerDB</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Database Server with REST based Micro-services Developer API. High Performance, Light Weight, and Simple to Use.
              </p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore API <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Other sections would go here - for brevity sticking to home/products for "start" view */}
        <footer className="py-12 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm">© 2026 Login2Xplore. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
