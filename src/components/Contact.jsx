import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <div className="glass-card p-6 md:p-16 border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[150px] -mr-40 -mt-40 rounded-full group-hover:bg-cyan-500/15 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[150px] -ml-40 -mb-40 rounded-full group-hover:bg-purple-500/15 transition-all duration-700"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white mb-6 uppercase">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 max-w-md">
              Have questions about JsonPowerDB? Our team is available to help you optimize your data infrastructure.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group/item">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover/item:bg-cyan-500/20 transition-all duration-300">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Email</p>
                  <p className="text-white font-bold font-heading">contact@login2explore.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group/item">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover/item:bg-purple-500/20 transition-all duration-300">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Location</p>
                  <p className="text-white font-bold font-heading">Hyderabad, India</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-[#06080f]/50 border border-white/10 focus:border-cyan-500 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-[#06080f]/50 border border-white/10 focus:border-cyan-500 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-2xl bg-[#06080f]/50 border border-white/10 focus:border-cyan-500 outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 text-white font-black tracking-widest uppercase hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
