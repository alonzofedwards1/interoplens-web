import Card from "../components/Card";
import Section from "../components/Section";
import SEO from "../components/SEO";

const services = [
  {
    title: "TEFCA readiness assessment",
    description: "Gap analysis across policy, technical integration, and operations."
  },
  {
    title: "Interoperability observability setup",
    description: "Deploy signal capture, dashboards, and governance alerts."
  },
  {
    title: "Integration triage & root cause analysis",
    description: "Accelerate investigation with explainable execution narratives."
  },
  {
    title: "Operational governance reporting",
    description: "Leadership-ready reporting with risk tracking and trends."
  },
  {
    title: "Pilot onboarding and workflow design",
    description: "Design workflows for pilot partners and new exchange routes."
  },
  {
    title: "Training & enablement",
    description: "Enable teams to operate, interpret, and act on observability insights."
  }
];

const Services = () => {
  return (
    <div>
      <SEO title="Services | Interoplens" />
      <Section
        title="Our Services"
        subtitle="Advisory and operational services to accelerate TEFCA readiness."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
