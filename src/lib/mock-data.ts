
import { ElectionResult, Anomaly, Insight } from "./types/types";

export const kpiData = [
  {
    title: "Registered Voters",
    value: "93.4M",
    change: "+2.4% vs 2023",
    icon: "groups",
  },
  {
    title: "Accredited",
    value: "38.2M",
    change: "40.9% Turnout",
    icon: "how_to_reg",
  },
  {
    title: "Total Votes Cast",
    value: "35.7M",
    change: "94.2% Processed",
    icon: "", // No icon for this one in the design
  },
  {
    title: "Integrity Matrix",
    value: "", // This one is different
    change: "",
    icon: "",
  },
  {
    title: "Data Finality",
    value: "Complete",
    change: "166,412 / 176,846 PUs",
    icon: "",
  },
];

export const electionResults: ElectionResult[] = [
  {
    candidate: "Adewale J.",
    party: "Party A",
    votes: 14800000,
    share: 41,
  },
  {
    candidate: "Okoro P.",
    party: "Party B",
    votes: 11200000,
    share: 31,
  },
  {
    candidate: "Musa I.",
    party: "Party C",
    votes: 9400000,
    share: 26,
  },
];

export const insights: Insight[] = [
  {
    id: "1",
    title: "Turnout Pulse",
    content: "Turnout in the North West is currently 12% above the 2023 average, driven by high youth engagement in urban centers.",
    timestamp: "2m ago",
    level: "positive",
  },
  {
    id: "2",
    title: "Anomaly Detection",
    content: "Statistical drift detected in Lagos Mainland. Accreditation counts slightly exceed expected variance (+4%). Under investigation.",
    timestamp: "15m ago",
    level: "warning",
  },
  {
    id: "3",
    title: "High Severity Alert",
    content: "Anomaly detected in 3 LGAs (Rivers State). Ballot paper serial numbers out of sequence. Manual audit recommended.",
    timestamp: "34m ago",
    level: "critical",
  },
  {
    id: "4",
    title: "Projection Shift",
    content: "Leading party margin in the South East is narrowing. Expected swing potential: 3.2% within the next 4,000 PUs.",
    timestamp: "1h ago",
    level: "trend",
  },
];
