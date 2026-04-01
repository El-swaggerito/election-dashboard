
const SystemHealthAudit = () => {
  return (
    <div className="bg-surface-container-low rounded-xl p-6">
      <h3 className="text-sm font-bold font-headline uppercase tracking-widest mb-6">System Health Audit</h3>
      <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-outline-variant">
        <div className="relative pl-8">
          <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-tertiary-fixed-dim border-4 border-surface-container-low"></div>
          <p className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-widest mb-1">Verifying Ledger #9902</p>
          <p className="text-xs text-on-surface-variant">Hash match confirmed. Institutional integrity 100%.</p>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-surface-tint border-4 border-surface-container-low"></div>
          <p className="text-[10px] font-bold text-surface-tint uppercase tracking-widest mb-1">Neural Refresh</p>
          <p className="text-xs text-on-surface-variant">Anomaly detection patterns updated (Batch v4.2).</p>
        </div>
        <div className="relative pl-8 opacity-50">
          <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-outline border-4 border-surface-container-low"></div>
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Syncing Nodes</p>
          <p className="text-xs text-on-surface-variant">Synchronizing local data with regional hub 04.</p>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthAudit;
