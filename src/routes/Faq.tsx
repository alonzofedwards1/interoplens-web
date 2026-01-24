import Section from "../components/Section";
import SEO from "../components/SEO";

const faqs = [
  {
    question: "Is Interoplens a dashboard or a data platform?",
    answer:
      "Both. It captures interoperability signals, materializes them into explainable executions, and presents operational views."
  },
  {
    question: "How do pilots work?",
    answer:
      "We align on a small set of integrations, deploy signal capture, and deliver findings with governance reporting."
  },
  {
    question: "Do you support TEFCA onboarding?",
    answer:
      "Yes. We provide readiness assessments, pilot onboarding, and operational governance reporting."
  }
];

const Faq = () => {
  return (
    <div>
      <SEO title="FAQ | Interoplens" />
      <Section title="FAQ" subtitle="Common questions about pilots and observability.">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-900">{faq.question}</p>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Faq;
