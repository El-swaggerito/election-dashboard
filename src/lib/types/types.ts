
export interface ElectionResult {
  candidate: string;
  party: string;
  votes: number;
  share: number;
}

export interface Region {
  name: string;
  state: string;
  lga: string;
  pollingUnit: string;
}

export interface Anomaly {
  id: string;
  region: Region;
  severity: 'High' | 'Medium' | 'Low';
  description: string;
  timestamp: string;
}

export interface Insight {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  level: 'positive' | 'warning' | 'critical' | 'trend';
}
