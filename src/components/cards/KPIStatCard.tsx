
interface KPIStatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: string;
}

const KPIStatCard = ({ title, value, change, icon }: KPIStatCardProps) => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow">
      <p className="text-[10px] text-on-secondary-container font-label uppercase tracking-[0.15em] mb-4">{title}</p>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold font-headline leading-none">{value}</h3>
          {change && <p className="text-xs text-on-secondary-container mt-1">{change}</p>}
        </div>
        <span className="material-symbols-outlined text-slate-200 text-4xl">{icon}</span>
      </div>
    </div>
  );
};

export default KPIStatCard;
