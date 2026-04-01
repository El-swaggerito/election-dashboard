
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
}

const FeatureCard = ({ icon, title, description, borderColor }: FeatureCardProps) => {
  return (
    <div className={`bg-surface-container-low p-8 rounded-xl flex flex-col h-full border-t-4 ${borderColor}`}>
      <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm">
        <span className="material-symbols-outlined text-surface-tint">{icon}</span>
      </div>
      <h3 className="font-headline text-xl font-bold mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
