
interface SeverityCounterProps {
  severity: 'Critical' | 'Warning' | 'Low';
  count: number;
}

const SeverityCounter = ({ severity, count }: SeverityCounterProps) => {
  const severityClasses = {
    Critical: {
      border: 'border-error',
      text: 'text-error',
    },
    Warning: {
      border: 'border-on-secondary-container',
      text: 'text-on-secondary-container',
    },
    Low: {
      border: 'border-surface-tint',
      text: 'text-surface-tint',
    },
  };

  return (
    <div className={`bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 ${severityClasses[severity].border} w-32`}>
      <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">{severity}</p>
      <p className={`text-2xl font-bold font-headline ${severityClasses[severity].text}`}>{count}</p>
    </div>
  );
};

export default SeverityCounter;
