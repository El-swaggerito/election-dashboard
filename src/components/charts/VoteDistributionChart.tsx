
const VoteDistributionChart = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold">
          <span>Adewale J. (Party A)</span>
          <span>14.8M</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-surface-tint w-[41%]"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold">
          <span>Okoro P. (Party B)</span>
          <span>11.2M</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-on-secondary-container w-[31%]"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold">
          <span>Musa I. (Party C)</span>
          <span>9.4M</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-tertiary-fixed-dim w-[26%]"></div>
        </div>
      </div>
    </div>
  );
};

export default VoteDistributionChart;
