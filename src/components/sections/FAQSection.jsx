import SectionHeading from '../ui/SectionHeading';
import FAQItem from '../ui/FAQItem';
import { faqs } from '../../data/faqs';

export default function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label="Common Questions"
          title="Frequently asked questions"
          align="center"
        />

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
