
const PartyPerformanceChart = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-headline font-bold text-lg border-l-2 border-surface-tint pl-4">Relative Party Performance</h3>
      <div className="bg-surface-container-low p-8 rounded-xl h-80 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-label uppercase text-slate-500">
              <span>Progressive Alliance</span>
            </div>
            <div className="flex gap-1 h-8">
              <div className="bg-surface-tint rounded-sm" style={{ width: "45%" }}></div>
              <div className="bg-outline rounded-sm" style={{ width: "30%" }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-label uppercase text-slate-500">
              <span>Unity Congress</span>
            </div>
            <div className="flex gap-1 h-8">
              <div className="bg-surface-tint rounded-sm opacity-60" style={{ width: "25%" }}></div>
              <div className="bg-outline rounded-sm opacity-60" style={{ width: "55%" }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-label uppercase text-slate-500">
              <span>Federal Democratic</span>
            </div>
            <div className="flex gap-1 h-8">
              <div className="bg-surface-tint rounded-sm opacity-30" style={{ width: "15%" }}></div>
              <div className="bg-outline rounded-sm opacity-30" style={{ width: "10%" }}></div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2 text-[10px] font-label uppercase"><span className="w-3 h-3 bg-surface-tint"></span> Lagos</div>
          <div className="flex items-center gap-2 text-[10px] font-label uppercase"><span className="w-3 h-3 bg-outline"></span> Kano</div>
        </div>
      </div>
    </div>
  );
};

export default PartyPerformanceChart;
