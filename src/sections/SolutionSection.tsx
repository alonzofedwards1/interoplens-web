import Card from "../components/Card";
import Section from "../components/Section";

const SolutionSection = () => {
  return (
    <Section
      title="The solution: observability with explainability"
      subtitle="Interoplens turns raw exchange events into operational narratives and governance insight."
      className="section-reveal"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          title="Unified signal capture"
          description="Normalize IHE, FHIR, X12, and custom workflows into a single operational layer."
          className="card-reveal"
        />
        <Card
          title="Execution intelligence"
          description="Group events into explainable executions that show intent, context, and outcomes."
          className="card-reveal"
        />
        <Card
          title="Governance-ready insights"
          description="Deliver risk registers, compliance posture, and partner performance reporting."
          className="card-reveal"
        />
      </div>
    </Section>
  );
};

export default SolutionSection;
