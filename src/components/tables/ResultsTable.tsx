
import { ElectionResult } from "@/lib/types/types";

interface ResultsTableProps {
  results: ElectionResult[];
}

const ResultsTable = ({ results }: ResultsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] font-label uppercase tracking-widest text-outline border-b border-surface-container">
            <th className="pb-3 font-semibold">Ward Name</th>
            <th className="pb-3 font-semibold text-right">Total Votes</th>
            <th className="pb-3 font-semibold px-4 text-center">Leading Party</th>
            <th className="pb-3 font-semibold text-right">Turnout %</th>
            <th className="pb-3 font-semibold text-right">Flags</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {/* This will be populated with data later */}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
