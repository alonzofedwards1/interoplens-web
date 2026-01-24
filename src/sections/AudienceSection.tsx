import Section from "../components/Section";

const audiences = [
  "Interoperability operations teams",
  "Health information exchanges",
  "Health system integration leaders",
  "QHIN and TEFCA governance stakeholders"
];

const AudienceSection = () => {
  return (
    <Section
      title="Who it is for"
      subtitle="Built for teams responsible for exchange reliability and governance."
      className="section-reveal"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {audiences.map((audience) => (
          <div
            key={audience}
            className="card-reveal rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
          >
            {audience}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AudienceSection;
