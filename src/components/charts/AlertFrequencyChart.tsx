
const AlertFrequencyChart = () => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border-t-2 border-surface-tint">
      <h3 className="text-sm font-bold font-headline uppercase tracking-widest mb-6">Alert Frequency (24h)</h3>
      <div className="h-40 flex items-end gap-2">
        <div className="flex-1 bg-surface-container-high rounded-t-sm h-[20%]"></div>
        <div className="flex-1 bg-surface-container-high rounded-t-sm h-[35%]"></div>
        <div className="flex-1 bg-surface-container-high rounded-t-sm h-[25%]"></div>
        <div className="flex-1 bg-surface-tint rounded-t-sm h-[60%]"></div>
        <div className="flex-1 bg-error rounded-t-sm h-[95%]"></div>
        <div className="flex-1 bg-surface-tint rounded-t-sm h-[75%]"></div>
        <div className="flex-1 bg-surface-container-high rounded-t-sm h-[40%]"></div>
        <div className="flex-1 bg-surface-container-high rounded-t-sm h-[30%]"></div>
      </div>
      <div className="flex justify-between mt-4 text-[10px] font-label text-outline uppercase tracking-widest">
        <span>00:00</span>
        <span>12:00</span>
        <span>Current</span>
      </div>
    </div>
  );
};

export default AlertFrequencyChart;
