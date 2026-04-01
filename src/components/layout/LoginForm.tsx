
"use client";

import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md bg-surface-container-lowest rounded-xl p-8 shadow-2xl">
      <div className="mb-8">
        <h2 className="font-headline text-2xl font-bold text-primary mb-2">Institutional Login</h2>
        <p className="text-sm text-on-secondary-container">Access secure election monitoring tools.</p>
      </div>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Institutional Email</label>
          <input 
            className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-background focus:ring-2 focus:ring-surface-tint transition-all" 
            placeholder="name@agency.gov" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Security Credential</label>
          <input 
            className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-background focus:ring-2 focus:ring-surface-tint transition-all" 
            placeholder="••••••••" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full bg-primary text-white font-headline font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors" type="submit">
          Authenticate
        </button>
      </form>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-outline-variant/30"></span></div>
        <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-surface-container-lowest px-4 text-on-secondary-container font-medium">Or continue with</span></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 border border-outline-variant/50 p-3 rounded-lg hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-blue-600">account_circle</span>
          <span className="text-sm font-semibold">Microsoft</span>
        </button>
        <button className="flex items-center justify-center gap-2 border border-outline-variant/50 p-3 rounded-lg hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-slate-900">key</span>
          <span className="text-sm font-semibold">SSO</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
