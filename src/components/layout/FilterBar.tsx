
const FilterBar = () => {
  return (
    <div className="bg-surface-container-low p-4 rounded-xl mb-8 flex flex-wrap gap-4 items-center">
      <span className="text-xs font-bold font-label uppercase tracking-widest text-on-surface-variant px-2">Filters</span>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-surface-container-lowest text-xs font-bold rounded-lg border border-outline-variant hover:bg-surface-variant transition-colors">Severity: All</button>
        <button className="px-4 py-2 bg-surface-container-lowest text-xs font-bold rounded-lg border border-outline-variant hover:bg-surface-variant transition-colors">Type: All</button>
        <button className="px-4 py-2 bg-surface-container-lowest text-xs font-bold rounded-lg border border-outline-variant hover:bg-surface-variant transition-colors">Region: National</button>
      </div>
      <div className="ml-auto relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
        <input className="bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-surface-tint" placeholder="Search precinct ID..." type="text"/>
      </div>
    </div>
  );
};

export default FilterBar;
