
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div>
      <p className="font-headline font-bold text-lg mb-3">{question}</p>
      <p className="text-slate-400 leading-relaxed">{answer}</p>
    </div>
  );
};

export default FAQItem;
