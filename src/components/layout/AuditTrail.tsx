
const AuditTrail = () => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
      <h4 className="font-headline font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-surface-tint" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
        Institutional Audit
      </h4>
      <div className="relative pl-6 border-l-2 border-surface-container-high space-y-6">
        <div className="relative">
          <span className="absolute -left-[1.625rem] top-1 w-4 h-4 rounded-full bg-tertiary-fixed-dim border-4 border-surface-container-lowest"></span>
          <p className="text-[10px] font-label uppercase tracking-widest text-on-tertiary-container mb-1">08:42 AM - Automated</p>
          <p className="text-xs font-bold">142,501 Votes Verified</p>
          <p className="text-[11px] text-outline">Digital signature check passed for Ward: Alausa.</p>
        </div>
        <div className="relative">
          <span className="absolute -left-[1.625rem] top-1 w-4 h-4 rounded-full bg-error border-4 border-surface-container-lowest"></span>
          <p className="text-[10px] font-label uppercase tracking-widest text-error mb-1">09:15 AM - AI Alert</p>
          <p className="text-xs font-bold">Variance Warning: Oregun</p>
          <p className="text-[11px] text-outline">92.4% turnout deviates &gt;3σ from historical baseline.</p>
        </div>
        <div className="relative">
          <span className="absolute -left-[1.625rem] top-1 w-4 h-4 rounded-full bg-surface-tint border-4 border-surface-container-lowest"></span>
          <p className="text-[10px] font-label uppercase tracking-widest text-outline mb-1">10:00 AM - System</p>
          <p className="text-xs font-bold">Batch Report Generated</p>
          <p className="text-[11px] text-outline">Consolidated data for Ikeja LGA synchronized.</p>
        </div>
      </div>
    </div>
  );
};

export default AuditTrail;
