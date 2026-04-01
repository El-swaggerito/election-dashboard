
import AlertCard from "@/components/cards/AlertCard";
import FilterBar from "@/components/layout/FilterBar";
import SeverityCounter from "@/components/cards/SeverityCounter";
import AlertsMap from "@/components/map/AlertsMap";
import AlertFrequencyChart from "@/components/charts/AlertFrequencyChart";
import SystemHealthAudit from "@/components/layout/SystemHealthAudit";

const alerts: { severity: "High" | "Medium" | "Low"; location: string; title: string; description: string; timestamp: string; }[] = [
  {
    severity: "High",
    location: "District 4-B | North Province",
    title: "Unusual Reporting Speed detected",
    description: "AI heuristic engine detected a 400% increase in reporting velocity compared to historical averages for this precinct. Data packet size is consistent, but timing suggests automated entry or pre-filled batching.",
    timestamp: "2m ago",
  },
  {
    severity: "Medium",
    location: "Greater Metropolitan Area",
    title: "Benford's Law Deviation",
    description: "Statistical first-digit distribution in total vote counts shows a P-value of 0.04. While not definitive proof of tampering, this warrants immediate verification against physical ledger snapshots.",
    timestamp: "14m ago",
  },
  {
    severity: "Low",
    location: "Region 12 | Western Coast",
    title: "Registration vs. Turnout Mismatch",
    description: "Precinct #882 reports 98.4% turnout. While high, this falls within the outlier range of previous cycles. AI monitoring set to 'Passive Observation' mode for this node.",
    timestamp: "45m ago",
  },
];

export default function AlertsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
        <div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-primary mb-2">Anomalies & Monitoring</h2>
          <p className="text-on-secondary-container max-w-xl">Real-time heuristic analysis of voting patterns, reporting velocity, and statistical distributions across 42,000 polling stations.</p>
        </div>
        <div className="flex gap-4">
          <SeverityCounter severity="Critical" count={14} />
          <SeverityCounter severity="Warning" count={32} />
          <SeverityCounter severity="Low" count={108} />
        </div>
      </div>
      <FilterBar />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-headline uppercase tracking-tight">Active Alerts Feed</h3>
            <span className="text-xs font-label text-outline">Sorted by: Recency</span>
          </div>
          {alerts.map((alert, index) => (
            <AlertCard key={index} {...alert} />
          ))}
        </section>
        <aside className="lg:col-span-4 space-y-8">
          <AlertsMap />
          <AlertFrequencyChart />
          <SystemHealthAudit />
        </aside>
      </div>
    </div>
  );
}
