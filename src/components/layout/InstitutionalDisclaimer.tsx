
const InstitutionalDisclaimer = () => {
  return (
    <div className="bg-primary-container text-on-primary-container p-8 border-l-4 border-surface-tint flex items-start gap-6">
      <span className="material-symbols-outlined text-3xl shrink-0">info</span>
      <div>
        <h4 className="font-headline font-bold text-lg mb-2">Institutional Disclaimer</h4>
        <p className="text-sm font-medium opacity-90 leading-relaxed italic">Our AI identifies patterns for review, not proof of fraud. VoteLens serves as a sovereign verification tool designed to highlight statistical anomalies that warrant further investigation by authorized electoral observers and judicial bodies.</p>
      </div>
    </div>
  );
};

export default InstitutionalDisclaimer;
