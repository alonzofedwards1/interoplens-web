import Card from "../components/Card";
import Section from "../components/Section";

const phases = [
  {
    title: "Phase 0",
    description: "Proof of capability with pilot partners and baseline telemetry."
  },
  {
    title: "Phase 1",
    description: "Operational dashboards, execution intelligence, and risk registers."
  },
  {
    title: "Phase 2",
    description: "Governance automation, ecosystem benchmarking, and reporting at scale."
  }
];

const RoadmapSection = () => {
  return (
    <Section
      title="Phased roadmap"
      subtitle="A deliberate progression from signal capture to governance maturity."
      className="section-reveal"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {phases.map((phase) => (
          <Card
            key={phase.title}
            title={phase.title}
            description={phase.description}
            className="card-reveal"
          />
        ))}
      </div>
    </Section>
  );
};

export default RoadmapSection;
