
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/explorer", icon: "analytics", label: "Results Explorer" },
  { href: "/alerts", icon: "warning", label: "Alerts & Anomalies" },
  { href: "/compare", icon: "compare_arrows", label: "Compare Regions" },
  { href: "#", icon: "description", label: "Reports" },
  { href: "/methodology", icon: "menu_book", label: "Methodology" },
  { href: "#", icon: "settings", label: "Settings" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:fixed left-0 top-0 h-full w-64 z-40 bg-slate-900 lg:flex flex-col pt-20 pb-6">
      <div className="px-6 mb-8">
        <h1 className="text-white font-black text-lg tracking-widest font-headline">VOTELENS</h1>
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-label mt-1">Sovereign Verifier</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.label}
              href={link.href}
              className={`mx-2 px-4 py-3 flex items-center gap-3 transition-all ease-in-out duration-200 ${isActive ? 'bg-blue-700 text-white rounded-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
              <span className="material-symbols-outlined">{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-6 mt-auto">
        <div className="p-4 bg-slate-800 rounded-xl border border-slate-700/50">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-label mb-2">Node Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></div>
            <span className="text-xs text-white font-medium tracking-tight">Syncing Mainnet</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
