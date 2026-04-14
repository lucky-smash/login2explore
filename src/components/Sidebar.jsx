import React, { useState } from 'react';

const SidebarLink = ({ icon, label, id, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
      active 
        ? 'bg-linear-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30' 
        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
    }`}
  >
    <span className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:translate-x-1'}`}>
      {icon}
    </span>
    <span className="font-medium text-sm">{label}</span>
  </button>
);

export default function Sidebar({ activeSection, onSectionChange }) {
  const links = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'tools', label: 'JPDB Tools', icon: '🛠️' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0e27]/80 backdrop-blur-2xl border-r border-white/10 p-6 flex flex-col z-50">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <span className="text-white font-bold">L</span>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white leading-tight">
            Login<span className="text-orange-500">2</span>Xplore
          </h1>
          <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">JsonPowerDB</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {links.map((link) => (
          <SidebarLink
            key={link.id}
            {...link}
            active={activeSection === link.id}
            onClick={onSectionChange}
          />
        ))}
      </nav>

      <div className="mt-auto p-4 glass-card border-cyan-500/20">
        <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">Logged in as</p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700 border border-white/10 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Developer</p>
            <p className="text-[10px] text-slate-500 truncate">active</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
