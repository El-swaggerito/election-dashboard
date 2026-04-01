
interface InsightCardProps {
  title: string;
  timestamp: string;
  content: React.ReactNode;
  level: 'positive' | 'warning' | 'critical' | 'trend';
}

const InsightCard = ({ title, timestamp, content, level }: InsightCardProps) => {
  const levelClasses = {
    positive: 'border-tertiary-fixed-dim',
    warning: 'border-on-secondary-container',
    critical: 'border-error',
    trend: 'border-surface-tint',
  };

  const titleClasses = {
    positive: 'text-on-tertiary-container',
    warning: 'text-on-secondary-container',
    critical: 'text-error',
    trend: 'text-surface-tint',
  };

  return (
    <div className={`bg-surface-container-lowest p-4 rounded-lg editorial-shadow border-l-4 ${levelClasses[level]}`}>
      <div className="flex justify-between mb-2">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${titleClasses[level]}`}>{title}</span>
        <span className="text-[10px] text-on-secondary-container">{timestamp}</span>
      </div>
      <p className="text-sm text-slate-900 leading-relaxed">{content}</p>
    </div>
  );
};

export default InsightCard;
