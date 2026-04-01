
const AIInsightBox = () => {
  return (
    <div className="bg-primary-container p-8 rounded-xl text-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-8xl">auto_awesome</span>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        <div className="bg-on-primary-container p-3 rounded-lg">
          <span className="material-symbols-outlined">query_stats</span>
        </div>
        <div>
          <h4 className="font-headline font-bold text-xl mb-3">AI Comparative Insight</h4>
          <div className="grid md:grid-cols-2 gap-8 font-body text-blue-100 text-sm leading-relaxed">
            <p>Analysis identifies a significant **13.7% turnout variance** between Lagos Central and Kano Municipality. This deviation exceeds regional historic norms by standard deviation 2.4. Lagos exhibits a higher concentration of rejected ballots (4.2%), potentially indicating procedural bottlenecks or specific ballot-marking friction in urban centers.</p>
            <p>Reporting speeds in Kano Municipality outperformed Lagos by **114 minutes**, though Lagos verified 100% of PUs through secondary digital audit trails compared to Kano's 89%. Statistical distribution in Lagos shows classic Benford's Law compliance, while Kano displays localized clustering in 3 electoral wards suggesting the need for manual audit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightBox;
