
interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
}

const ChartContainer = ({ title, children }: ChartContainerProps) => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow">
      <h4 className="text-sm font-bold font-headline mb-6 uppercase tracking-widest text-on-secondary-container">{title}</h4>
      {children}
    </div>
  );
};

export default ChartContainer;
