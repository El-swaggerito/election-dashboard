
const VoteIntegrityChart = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-headline font-bold text-lg border-l-2 border-surface-tint pl-4">Vote Integrity Distribution</h3>
      <div className="bg-surface-container-low p-8 rounded-xl h-80 flex items-center justify-around">
        <div className="relative w-40 h-40 rounded-full border-[16px] border-surface-tint flex items-center justify-center" style={{ borderRightColor: "#e0e3e5", borderBottomColor: "#ba1a1a" }}>
          <div className="text-center">
            <span className="block text-xs font-label uppercase tracking-tighter text-slate-500">Alpha</span>
            <span className="text-xl font-headline font-extrabold">92%</span>
          </div>
        </div>
        <div className="relative w-40 h-40 rounded-full border-[16px] border-outline flex items-center justify-center" style={{ borderBottomColor: "#e0e3e5" }}>
          <div className="text-center">
            <span className="block text-xs font-label uppercase tracking-tighter text-slate-500">Beta</span>
            <span className="text-xl font-headline font-extrabold">98%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteIntegrityChart;
