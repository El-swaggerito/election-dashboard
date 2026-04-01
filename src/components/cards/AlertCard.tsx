
interface AlertCardProps {
  severity: 'High' | 'Medium' | 'Low';
  location: string;
  title: string;
  description: string;
  timestamp: string;
}

const AlertCard = ({ severity, location, title, description, timestamp }: AlertCardProps) => {
  const severityClasses = {
    High: {
      container: 'bg-error-container text-on-error-container',
      border: 'border-error',
    },
    Medium: {
      container: 'bg-secondary-container text-on-secondary-fixed-variant',
      border: 'border-on-secondary-container',
    },
    Low: {
      container: 'bg-primary-fixed text-on-primary-fixed-variant',
      border: 'border-surface-tint',
    },
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm group hover:shadow-md transition-shadow relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-1 h-full ${severityClasses[severity].border}`}></div>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className={`${severityClasses[severity].container} text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest`}>{severity} Severity</span>
          <span className="text-xs font-bold text-on-surface">{location}</span>
        </div>
        <span className="text-xs font-label text-outline">{timestamp}</span>
      </div>
      <h4 className="text-xl font-bold font-headline mb-2">{title}</h4>
      <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-surface-variant">
        <div className="flex -space-x-2">
          {/* Placeholder for avatars */}
        </div>
        <button className="text-surface-tint font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline">
          View Full Audit Trail
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default AlertCard;
