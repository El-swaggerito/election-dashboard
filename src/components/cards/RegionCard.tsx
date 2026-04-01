
interface RegionCardProps {
  name: string;
  hq: string;
  reportPercentage: number;
  turnout: number;
  active?: boolean;
  anomaly?: boolean;
}

const RegionCard = ({ name, hq, reportPercentage, turnout, active, anomaly }: RegionCardProps) => {
  return (
    <div className={`p-4 rounded-xl transition-all cursor-pointer ${active ? 'bg-surface-container-lowest shadow-sm border-l-4 border-surface-tint' : 'bg-surface-container-low hover:bg-surface-container-high'}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-headline font-bold text-lg">{name}</h4>
          <p className="text-[10px] font-label uppercase tracking-tighter text-outline">LGA HQ: {hq}</p>
        </div>
        {anomaly ? (
          <span className="bg-error-container text-on-error-container text-[10px] font-bold px-2 py-1 rounded-full uppercase flex items-center gap-1">
            <span className="material-symbols-outlined text-[10px]">report</span>
            Anomaly
          </span>
        ) : (
          <span className="bg-tertiary-fixed-dim/20 text-on-tertiary-container text-[10px] font-bold px-2 py-1 rounded-full uppercase">{reportPercentage}% Reports</span>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-outline">Turnout</span>
          <span className="font-bold">{turnout}%</span>
        </div>
        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
          <div className="bg-surface-tint h-full" style={{ width: `${turnout}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default RegionCard;
