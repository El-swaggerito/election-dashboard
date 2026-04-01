
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RegionCard from "@/components/cards/RegionCard";
import ResultsTable from "@/components/tables/ResultsTable";
import MiniMap from "@/components/map/MiniMap";
import AuditTrail from "@/components/layout/AuditTrail";

const regions = [
  { name: "Ikeja", hq: "Ikeja", reportPercentage: 94, turnout: 62.4, active: true },
  { name: "Alimosho", hq: "Akowonjo", reportPercentage: 71, turnout: 48.1 },
  { name: "Oshodi-Isolo", hq: "Oshodi", reportPercentage: 0, turnout: 88.9, anomaly: true },
  { name: "Surulere", hq: "Surulere", reportPercentage: 82, turnout: 55.2 },
];

export default function ExplorerPage() {
  return (
    <div className="h-[calc(100vh-12rem)] overflow-hidden">
      <section className="bg-surface-container-low px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Breadcrumbs crumbs={[{ label: "Nigeria", href: "#" }, { label: "Lagos State", href: "#" }, { label: "Ikeja" }]} />
            <h2 className="text-4xl font-headline font-extrabold tracking-tight text-primary">Lagos State Results</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-surface-container-lowest flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Advanced Filters
            </button>
            <button className="bg-surface-tint text-on-primary flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">refresh</span>
              Refresh Data
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row h-full overflow-hidden">
        <aside className="w-full lg:w-96 bg-surface-container-low overflow-y-auto border-r border-transparent p-4 space-y-3 lg:h-[calc(100vh-12rem)]">
          <div className="flex justify-between items-center px-2 pb-2">
            <span className="text-[10px] font-label uppercase tracking-widest text-outline">Local Gov Areas (20)</span>
            <span className="text-[10px] font-label uppercase tracking-widest text-tertiary-fixed-dim bg-tertiary-container px-2 py-0.5 rounded-full">Live Updates</span>
          </div>
          {regions.map((region) => (
            <RegionCard key={region.name} {...region} />
          ))}
        </aside>
        <section className="flex-1 overflow-y-auto bg-background p-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline font-extrabold text-xl mb-1">Detailed Breakdown: Ikeja</h3>
                  <p className="text-sm text-outline">Showing results for 10 Wards and 242 Polling Units</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-label uppercase tracking-widest text-outline">Total Valid Votes</p>
                  <p className="text-2xl font-headline font-black text-primary">1,402,883</p>
                </div>
              </div>
              <ResultsTable results={[]} />
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <MiniMap />
              <AuditTrail />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
