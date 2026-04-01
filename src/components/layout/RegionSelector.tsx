
"use client";

interface RegionSelectorProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  borderColor: string;
}

const RegionSelector = ({ label, options, selectedValue, onSelect, borderColor }: RegionSelectorProps) => {
  return (
    <div className={`bg-surface-container-low p-6 rounded-xl border-l-4 ${borderColor}`}>
      <label className="text-[10px] uppercase tracking-widest font-label text-on-secondary-container mb-2 block">{label}</label>
      <select 
        className="w-full bg-surface-container-lowest border-none font-headline font-bold text-xl py-3 px-4 rounded-lg focus:ring-2 focus:ring-surface-tint"
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default RegionSelector;
