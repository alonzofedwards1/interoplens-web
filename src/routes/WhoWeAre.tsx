import Section from "../components/Section";
import SEO from "../components/SEO";

const WhoWeAre = () => {
  return (
    <div>
      <SEO title="Who We Are | Interoplens" />
      <Section title="Who We Are" subtitle="Founder-led and grounded in operations.">
        <div className="space-y-4 text-slate-600">
          <p>
            Interoplens is led by interoperability operators who have lived the reality of
            launch-day escalations, late-night reconciliation, and manual reporting. We build
            tools that give teams the operational clarity they deserve.
          </p>
          <p>
            Our mission is to make interoperability measurable, explainable, and governable
            for every participant in the TEFCA ecosystem.
          </p>
        </div>
      </Section>
      <Section title="Principles" subtitle="How we build and operate.">
        <ul className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <li className="rounded-lg border border-slate-200 bg-white p-5">
            Clarity over complexity.
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-5">
            Traceability for every execution.
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-5">
            Explainability for stakeholders.
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-5">
            Operational outcomes that scale.
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default WhoWeAre;
