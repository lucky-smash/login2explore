import React from 'react';

const screenshots = [
  { id: 1, title: 'Real-time Dashboard', img: 'https://images.unsplash.com/photo-1551288049-bb848a55a110?auto=format&fit=crop&q=80&w=1200', desc: 'Monitor your database performance in real-time with our sleek admin panel.' },
  { id: 2, title: 'REST API Explorer', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800', desc: 'Interact with your data instantly using our built-in API testing suite.' },
  { id: 3, title: 'Data Visualizer', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', desc: 'Visualize complex relations and data structures with ease.' },
  { id: 4, title: 'Developer Tools', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', desc: 'Powerful utilities to generate JSON request code for any platform.' },
];

export default function Screenshots() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight text-white m-0">
          Visual <span className="text-cyan-400 underline decoration-cyan-400/20 underline-offset-8">Screenshots</span>
        </h2>
        <div className="hidden md:block h-px flex-1 bg-linear-to-r from-white/10 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {screenshots.map((s) => (
          <div key={s.id} className="group glass-card border-white/5 hover:border-cyan-500/30 transition-all duration-700 overflow-hidden rounded-3xl">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={s.img} 
                alt={s.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#06080f] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold font-heading text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-300 font-light line-clamp-2">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
