
import KPIStatCard from "@/components/cards/KPIStatCard";
import InsightCard from "@/components/cards/InsightCard";
import ChartContainer from "@/components/charts/ChartContainer";
import TurnoutChart from "@/components/charts/TurnoutChart";
import VoteDistributionChart from "@/components/charts/VoteDistributionChart";
import MapView from "@/components/map/MapView";
import { kpiData, insights } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-baseline gap-3">
          <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-primary">National Oversight</h2>
          <div className="px-3 py-1 bg-tertiary-fixed-dim/20 text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Live Verification
          </div>
        </div>
        <p className="text-on-secondary-container mt-2 max-w-2xl font-body">Real-time cross-referencing of primary polling unit data against sovereign decentralized ledgers. 94.2% of reporting centers finalized.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {kpiData.map((data, index) => (
          <KPIStatCard key={index} {...data} />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="bg-surface-container-low rounded-xl overflow-hidden relative min-h-[600px] flex flex-col">
            <div className="p-6 flex justify-between items-center z-10 bg-white/80 backdrop-blur-md">
              <div>
                <h4 className="text-xl font-bold font-headline text-primary">Territorial Dominance</h4>
                <p className="text-xs text-on-secondary-container font-label uppercase tracking-widest">Regional Leading Parties</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white rounded-lg text-xs font-bold shadow-sm border border-slate-100">State View</button>
                <button className="px-4 py-2 bg-surface-tint text-white rounded-lg text-xs font-bold shadow-sm">LGA Heatmap</button>
              </div>
            </div>
            <MapView />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChartContainer title="Candidate Performance (Leading 3)">
              <VoteDistributionChart />
            </ChartContainer>
            <ChartContainer title="Turnout Trends (Hourly)">
              <TurnoutChart />
            </ChartContainer>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-surface-container-low rounded-xl p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-surface-tint">neurology</span>
              <h4 className="text-lg font-bold font-headline tracking-tight">AI Insights Feed</h4>
            </div>
            <div className="space-y-4 flex-1">
              {insights.map((insight) => (
                <InsightCard key={insight.id} {...insight} />
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <button className="w-full py-3 bg-primary text-white font-bold text-sm tracking-tight hover:bg-slate-800 transition-colors rounded-lg flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Generate Verification Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
