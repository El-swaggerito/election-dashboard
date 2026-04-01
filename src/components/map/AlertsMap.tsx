
const AlertsMap = () => {
  return (
    <div className="bg-slate-900 rounded-xl p-6 text-white overflow-hidden relative min-h-[400px]">
      <div className="relative z-10">
        <h3 className="text-sm font-bold font-headline uppercase tracking-widest mb-1">Geographic Density</h3>
        <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-6">Pulsing Hotspots: High Severity</p>
      </div>
      <div className="absolute inset-0 z-0">
        <img alt="Institutional data map" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-JBJ0FXQkNjhfLe36RyDmBCS3UwI1qibI9SZNnSZkLk3AFvG8SsleGWEf_1kJ9acJ6xifbDXEvDRcdAA3RVKD2kNp0OR2bz_GLpC9Qkv8v4G9Q6exarQUgGbcKCae9m9yAdBt0F3rebitDv9EOoHy4a312TPDPHbmP4qwXo340vZ8frOMTgu5EakBbIhF6a-0ujSRKLvUklviKKKCtvheuLBArN4hobk4WgtfKDUPnAPV4tIwxJsFaApDTGY_dZA2Rk7S4981EZ8"/>
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-error rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-error rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-error rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-error rounded-full"></div>
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-surface-tint rounded-full opacity-50"></div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-10 glass-panel p-3 rounded-lg border border-white/10">
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter">
          <span>Concentration: North Hub</span>
          <span className="text-error">Live Analysis</span>
        </div>
      </div>
    </div>
  );
};

export default AlertsMap;
