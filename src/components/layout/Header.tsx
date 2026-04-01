
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-50/60 backdrop-blur-xl flex justify-between items-center px-6 pl-72 shadow-sm border-none">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
          <span className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-0.5 text-sm">2027 General Elections</span>
          <span className="material-symbols-outlined text-slate-400 text-sm">expand_more</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-80 focus:ring-2 focus:ring-surface-tint/20 transition-all" placeholder="Search districts, LGAs, or polling units..." type="text"/>
        </div>
        <button className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-full transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-900 tracking-tight leading-none">Dr. Amara Okafor</p>
            <p className="text-[10px] text-slate-500 font-label uppercase tracking-wider mt-1">Lead Analyst</p>
          </div>
          <img alt="User profile settings" className="w-10 h-10 rounded-lg object-cover ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD96I5iMy69excpRX7XE-eVxbePlxnNL1WNwUebMqJrHE-D1d9lLp1aKE5vzKLJTXMGkR-pxmkai6p0x9e3UC39wmSOw5PIAB2G2sJWJX4OO5auD39AJz536D5UB3d2-CkvuCm2NKXAfumY_7d4S9RjmXgPK32Yl_Dr40XHq9mrnio1_0Xvn_9ms9jhvK7racB9B2MSrmO-P3FRWlqV20REmTP3qaqNAhPukjhfP_KO1MhaQKDhcMHSsSlvdWPWokjiKAezbwZyPCU"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
