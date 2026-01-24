import Card from "../components/Card";
import Section from "../components/Section";
import SEO from "../components/SEO";

const steps = [
  {
    title: "1) Discovery & access",
    description: "Align on scope, stakeholders, and the integrations that matter most."
  },
  {
    title: "2) Signal capture & normalization",
    description: "Ingest protocol traffic, normalize signals, and enrich with context."
  },
  {
    title: "3) Execution materialization & findings",
    description: "Group events into explainable executions with findings and risk."
  },
  {
    title: "4) Operational review & governance reporting",
    description: "Deliver actionable reporting and governance-ready insights."
  }
];

const Process = () => {
  return (
    <div>
      <SEO title="Process | Interoplens" />
      <Section
        title="The Process"
        subtitle="A clear path from signal capture to operational outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card key={step.title} title={step.title} description={step.description} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Process;
