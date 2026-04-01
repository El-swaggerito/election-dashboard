
interface MethodologySectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

const MethodologySection = ({ title, icon, children }: MethodologySectionProps) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="bg-surface-tint/10 p-3 rounded-lg">
          <span className="material-symbols-outlined text-surface-tint">{icon}</span>
        </div>
        <h2 className="font-headline text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="text-on-secondary-container leading-relaxed text-lg">
        {children}
      </div>
    </div>
  );
};

export default MethodologySection;
