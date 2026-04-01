
"use client";

import { useState } from "react";
import RegionSelector from "@/components/layout/RegionSelector";
import ComparisonTable from "@/components/tables/ComparisonTable";
import PartyPerformanceChart from "@/components/charts/PartyPerformanceChart";
import VoteIntegrityChart from "@/components/charts/VoteIntegrityChart";
import AIInsightBox from "@/components/cards/AIInsightBox";

const regions = ["Lagos Central", "Kano Municipality", "Rivers District A", "Abuja FCT"];

export default function ComparePage() {
  const [regionA, setRegionA] = useState("Lagos Central");
  const [regionB, setRegionB] = useState("Kano Municipality");

  return (
    <div className="max-w-[1600px] mx-auto">
      <section className="mb-10">
        <h2 className="text-3xl font-extrabold font-headline tracking-tighter text-primary mb-2">Regional Comparison Engine</h2>
        <p className="text-on-secondary-container max-w-2xl font-body">Cross-reference statistical markers and reporting patterns across two sovereign administrative districts to detect anomalies and institutional divergence.</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <RegionSelector 
          label="Primary Locale (Alpha)" 
          options={regions} 
          selectedValue={regionA} 
          onSelect={setRegionA} 
          borderColor="border-surface-tint" 
        />
        <RegionSelector 
          label="Comparative Locale (Beta)" 
          options={regions} 
          selectedValue={regionB} 
          onSelect={setRegionB} 
          borderColor="border-outline" 
        />
      </div>
      <ComparisonTable />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <PartyPerformanceChart />
        <VoteIntegrityChart />
      </div>
      <AIInsightBox />
    </div>
  );
}
