
import LoginForm from "@/components/layout/LoginForm";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative pt-16">
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-6 lg:px-12 bg-primary-container">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGZjwQz_NyO87vAfMSpYivGMK_g2OQ2q5HFraR6lreCtNQngK4NWqP931SCum4kgQvtpm35IFvUCT52d-27EP65hD4opJCrFRAR2OKVIVy5l97bFOkCJkpr_eCc9nxcE53KjfUHw6kkDaD9eL7KjU26iZyML_RvGzPU1eHEdZH3ilsHoeRFWIepeR9Lx-ERYzfAmQljZY8RVG2RHmnUsgV94ItmTeYtgRkUrDZdOhl-O4HcWJ1aFmZ668TNa_a5Vgyaf84jFkXM_k"/>
        </div>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 py-20">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim rounded-full mb-6 w-fit">
              <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="font-label text-xs uppercase tracking-widest font-bold">Sovereign Verifier Protocol</span>
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-8">
              Election Transparency.<br/>
              <span className="text-on-primary-container">Verified by AI.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
              An institutional-grade platform engineered for journalists, observers, and civic tech leaders. Detect anomalies, track results, and ensure electoral integrity through mathematical neutrality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <button className="bg-surface-tint hover:bg-on-primary-container text-white px-8 py-4 font-headline font-bold text-lg rounded-lg transition-all duration-200 shadow-xl shadow-blue-900/40 active:scale-95">
                  Enter Dashboard
                </button>
              </Link>
              <Link href="/methodology">
                <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 font-headline font-bold text-lg rounded-lg border border-white/20 transition-all duration-200">
                  View Methodology
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
