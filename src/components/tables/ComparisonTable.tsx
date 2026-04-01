
const ComparisonTable = () => {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm mb-12 overflow-hidden">
      <div className="grid grid-cols-3 bg-surface-container text-[10px] font-label uppercase tracking-widest px-8 py-3 text-on-secondary-container border-b border-outline-variant/10">
        <div>Metric</div>
        <div className="text-center">Lagos Central</div>
        <div className="text-center">Kano Municipality</div>
      </div>
      {/* This will be populated with data later */}
    </div>
  );
};

export default ComparisonTable;
