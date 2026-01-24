import Card from "../components/Card";
import Section from "../components/Section";

const capabilities = [
  {
    title: "PD Execution Intelligence",
    description: "Explain patient discovery executions with timelines and outcomes."
  },
  {
    title: "QD/RD Observability",
    description: "Trace query and response flows across network and partner boundaries."
  },
  {
    title: "Certificate Health",
    description: "Track expiry, rotation, and trust chain signals across the ecosystem."
  },
  {
    title: "OID Directory",
    description: "Maintain trusted org/OID mapping with confidence scoring."
  }
];

const CapabilitiesSection = () => {
  return (
    <Section
      title="Capabilities"
      subtitle="Operational coverage across the workflows that matter most."
      className="section-reveal"
    >
      <div className="grid gap-6 md:grid-cols-2" id="capabilities">
        {capabilities.map((capability) => (
          <Card
            key={capability.title}
            title={capability.title}
            description={capability.description}
            className="card-reveal"
          />
        ))}
      </div>
    </Section>
  );
};

export default CapabilitiesSection;
