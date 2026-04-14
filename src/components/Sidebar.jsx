import React from 'react';

const SidebarLink = ({ icon, label, id, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${
      active 
        ? 'bg-linear-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/5' 
        : 'text-slate-400 hover:bg-white/5 hover:text-slate-100 hover:translate-x-1'
    }`}
  >
    <span className={`text-xl transition-all duration-500 ${active ? 'scale-125' : 'group-hover:scale-110 drop-shadow-sm'}`}>
      {icon}
    </span>
    <span className="font-heading font-semibold text-sm tracking-wide">{label}</span>
    {active && (
      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
    )}
  </button>
);

export default function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }) {
  const links = [
    { id: 'home', label: 'Home', icon: '🌐' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'features', label: 'JsonPowerDB', icon: '📄' },
    { id: 'tools', label: 'JPDB Tools', icon: '🛠️' },
    { id: 'pricing', label: 'Pricing', icon: '🏷️' },
    { id: 'screenshots', label: 'Screenshots', icon: '🖼️' },
    { id: 'using-jpdb', label: 'Using JsonPowerDB', icon: '❓' },
    { id: 'contact', label: 'Contact', icon: '🤖' },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen w-72 bg-[#0a0e27]/98 backdrop-blur-3xl border-r border-white/5 p-8 flex flex-col z-[100] transition-all duration-700 ease-in-out transform shadow-2xl ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="flex items-center gap-4 group cursor-pointer mb-10">
        <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-xl shadow-cyan-500/20 group-hover:rotate-6 transition-transform duration-500">
          <span className="text-white font-black text-lg">L</span>
        </div>
        <div>
          <h1 className="text-lg font-black tracking-tighter text-white leading-tight font-heading m-0">
            Login<span className="text-cyan-400">2</span>Xplore
          </h1>
          <p className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase font-bold m-0">JsonPowerDB</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
        {links.map((link) => (
          <SidebarLink
            key={link.id}
            {...link}
            active={activeSection === link.id}
            onClick={onSectionChange}
          />
        ))}
      </nav>

      <div className="mt-auto p-6 glass-card border-white/5 group hover:border-cyan-500/20 transition-all duration-500 cursor-pointer">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-4 font-mono">Operator</p>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-white/10 overflow-hidden group-hover:rounded-xl transition-all duration-500">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0e27] shadow-sm animate-pulse"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate font-heading tracking-tight">System Admin</p>
            <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-tighter">Verified</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
