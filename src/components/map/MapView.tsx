
const MapView = () => {
  return (
    <div className="flex-1 relative flex items-center justify-center bg-slate-100/50">
      <img alt="Map Visualization" className="w-full h-full object-cover mix-blend-multiply opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVxlolL2T1csmiXcj4cBZC-vK-14BAUDpM7i0CEsSrgUDzxcIMNRkKssqlPxCmjNrf_rJzP2-ONZrB28G9K6Smh5_nn292xcPubRBJT2Uh8H75XoYrjHDTzD3GYHMnn6FWR1RrvoHbBBD18hrxirLZXtwoyy-KYQDCh9GrEO3gxfBSgYEo8ZF88yDzxWMvB8PoDYjx7NeU-mhkCOnIi6zjxPMCcTvU3TVZIu6HxTvl8CEGkrtLPYcSYW_pm7kN5sbrpyPZ8OHjm6o"/>
      <div className="absolute bottom-6 left-6 p-4 glass-panel rounded-xl editorial-shadow border border-white/40">
        <p className="text-[10px] text-on-secondary-container font-bold uppercase tracking-widest mb-3">Legend</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-surface-tint"></div>
            <span className="text-xs font-medium">Party A (Progressive)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-on-secondary-container"></div>
            <span className="text-xs font-medium">Party B (Conservative)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
            <span className="text-xs font-medium">Party C (Coalition)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <span className="text-xs font-medium">Contested / No Data</span>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/3">
        <div className="group relative">
          <div className="w-4 h-4 bg-surface-tint rounded-full border-2 border-white shadow-lg animate-ping absolute"></div>
          <div className="w-4 h-4 bg-surface-tint rounded-full border-2 border-white shadow-lg relative z-10"></div>
          <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 glass-panel p-3 rounded-lg editorial-shadow">
            <p className="text-xs font-bold font-headline">North West Hub</p>
            <p className="text-[10px] text-on-secondary-container">Leading: Party A (54%)</p>
            <p className="text-[10px] text-tertiary-fixed-dim font-bold mt-1">Status: Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
