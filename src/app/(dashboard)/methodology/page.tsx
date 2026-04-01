
import InstitutionalDisclaimer from "@/components/layout/InstitutionalDisclaimer";
import MethodologySection from "@/components/layout/MethodologySection";
import GlossaryItem from "@/components/cards/GlossaryItem";
import FAQItem from "@/components/cards/FAQItem";

const glossaryItems = [
  {
    term: "Anomaly Score",
    definition: "A proprietary composite score (0-100) representing the likelihood that a data set deviates from expected patterns. Scores above 75 trigger manual review.",
    type: "METRIC",
  },
  {
    term: "Z-Score Analysis",
    definition: "A measurement of a value's relationship to the mean in a group of values. In VoteLens, high Z-scores identify regions where turn-out or margin shifts are statistically improbable.",
    type: "STATISTICAL",
  },
  {
    term: "Confidence Interval",
    definition: "The range within which we are 99% certain the true population parameter lies. If official reports fall outside this interval, an alert is generated.",
    type: "ACCURACY",
  },
];

const faqItems = [
  {
    question: "Where does VoteLens get its data?",
    answer: "We utilize primary official sources from the NEC, secondary confirmation via polling-level observer reports (e.g., EU, Carter Center), and public crowd-sourced tallies that meet our verification threshold.",
  },
  {
    question: "How does VoteLens prevent its own bias?",
    answer: "The AI is trained on historical data from various administrations and political contexts. We release our feature weights annually for independent academic audit to ensure neutrality.",
  },
  {
    question: "Can the system identify fraud in real-time?",
    answer: "VoteLens identifies *anomalies*. 'Fraud' is a legal determination. Our role is to flag the patterns that warrant the legal community's focus.",
  },
];

export default function MethodologyPage() {
  return (
    <div>
      <header className="bg-surface-container-low py-20 px-8 md:px-16">
        <div className="max-w-4xl">
          <span className="label-sm text-surface-tint font-bold uppercase tracking-widest mb-4 block">Institutional Protocol</span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">How VoteLens Ensures Transparency</h1>
          <p className="text-xl text-on-secondary-container leading-relaxed">Our methodology combines rigorous statistical analysis with human oversight to provide an impartial, real-time audit of democratic processes. We don't just report numbers; we verify their integrity.</p>
        </div>
      </header>
      <div className="p-8 md:p-16 space-y-24">
        <section className="max-w-7xl mx-auto">
          <InstitutionalDisclaimer />
        </section>
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <MethodologySection title="Data Acquisition" icon="cloud_download">
                <p>We ingest data from multiple authenticated channels, creating a redundant ledger of vote counts. This includes official API feeds, scanned tally sheets, and independent observer reports. Every data point is timestamped and cryptographically hashed upon entry to ensure an immutable audit trail.</p>
              </MethodologySection>
            </div>
            <div className="col-span-12 lg:col-span-5 hidden lg:block">
              <div className="bg-surface-container-high h-full rounded-2xl flex items-center justify-center p-12 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-tint via-transparent to-transparent"></div>
                <img alt="Data flow visualization" className="rounded-lg shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD62IyXfF4AK7QYkJT0wxUYzD1G612l8fU7cEXHpPsKNgvLlsvhGvJD9eq4XXYZ70YjP3U_nejedm72vlm7OIy7n0hf1gTcxv5Q0BSlEUj31E-TmTs_pcKgEcSMjXHuzfTTn6BWZuoI_LTu3zpsoBTcfhW4P6VUr9uEcGcZpI4h2mcKwE6_7i4e5IPMYgvwYMiCo05KkSeNhootX4TnJQCxJ8kliqNmu3vB7ua10tlE75J7ggaCSOea9fkka5XX1htcw7NX4dJadTE"/>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto py-16">
          <h3 className="font-headline text-4xl font-extrabold text-center mb-12 tracking-tight">Technical Glossary</h3>
          <div className="grid grid-cols-1 gap-6">
            {glossaryItems.map((item, index) => (
              <GlossaryItem key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="max-w-4xl mx-auto bg-slate-900 text-white p-12 rounded-3xl">
          <div className="text-center mb-16">
            <h3 className="font-headline text-3xl font-bold mb-4">Press & Observer FAQ</h3>
            <p className="text-slate-400">Essential information for journalists and institutional observers.</p>
          </div>
          <div className="space-y-12">
            {faqItems.map((item, index) => (
              <div key={index} className={index > 0 ? "border-t border-slate-800 pt-8" : ""}>
                <FAQItem {...item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
