import Section from "../components/Section";

const ProblemSection = () => {
  return (
    <Section
      title="The problem: interoperability is invisible"
      subtitle="Teams are asked to govern exchange without a trustworthy operational view."
      className="section-reveal"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          "Protocols generate data, not operational answers.",
          "Failures are detected downstream and explained manually.",
          "Governance reporting depends on spreadsheets and tribal knowledge."
        ].map((item) => (
          <div
            key={item}
            className="card-reveal rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProblemSection;
