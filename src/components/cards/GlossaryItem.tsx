
interface GlossaryItemProps {
  term: string;
  definition: string;
  type: string;
}

const GlossaryItem = ({ term, definition, type }: GlossaryItemProps) => {
  return (
    <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-default">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-headline font-bold text-xl text-surface-tint">{term}</h4>
        <span className="text-xs font-bold bg-surface-container-high px-2 py-1 rounded">{type}</span>
      </div>
      <p className="text-on-secondary-container leading-relaxed">{definition}</p>
    </div>
  );
};

export default GlossaryItem;
