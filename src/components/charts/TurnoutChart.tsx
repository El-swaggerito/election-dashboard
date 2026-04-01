
const TurnoutChart = () => {
  return (
    <div className="h-40 flex items-end justify-between gap-1 px-2">
      <div className="w-full bg-surface-tint/10 rounded-t-sm h-[20%]"></div>
      <div className="w-full bg-surface-tint/20 rounded-t-sm h-[35%]"></div>
      <div className="w-full bg-surface-tint/30 rounded-t-sm h-[45%]"></div>
      <div className="w-full bg-surface-tint/40 rounded-t-sm h-[65%]"></div>
      <div className="w-full bg-surface-tint/60 rounded-t-sm h-[80%]"></div>
      <div className="w-full bg-surface-tint/80 rounded-t-sm h-[95%]"></div>
      <div className="w-full bg-surface-tint rounded-t-sm h-[70%]"></div>
      <div className="w-full bg-surface-tint/90 rounded-t-sm h-[60%]"></div>
    </div>
  );
};

export default TurnoutChart;
