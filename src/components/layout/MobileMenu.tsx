
"use client";

import { useState } from "react";
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

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-full transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-64 bg-slate-900 p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
