import Card from "../components/Card";
import Section from "../components/Section";

const steps = [
  {
    title: "Signal",
    description: "Capture and normalize interoperability traffic across all partners."
  },
  {
    title: "Understanding",
    description: "Materialize executions with context, timelines, and outcomes."
  },
  {
    title: "Action",
    description: "Deliver findings, risk signals, and governance reporting to leaders."
  }
];

const HowItWorksSection = () => {
  return (
    <Section
      title="How it works"
      subtitle="From protocol traffic to operational decisions in three steps."
      className="section-reveal"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card
            key={step.title}
            title={step.title}
            description={step.description}
            className="card-reveal"
          />
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
