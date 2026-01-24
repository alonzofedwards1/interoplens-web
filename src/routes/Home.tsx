import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div>
      <SEO title="Interoplens | Interoperability Observability" />
      <div className="bg-slate text-white">
        <div className="container-base py-3 text-sm">
          Phase 0: Proof of Capability. Pilot program opening soon.
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="container-base grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate">
              Interoperability operations, simplified
            </p>
            <h1 className="text-3xl font-semibold text-ink md:text-4xl">
              Make TEFCA integration visible, explainable, and governable.
            </h1>
            <p className="text-base text-slate md:text-lg">
              Interoplens provides observability for cross-network data exchange, turning
              protocol traffic into operational signals, execution narratives, and risk
              insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Request a Pilot
              </Button>
              <Button href="/products" variant="secondary">
                View Products
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-mist bg-mist/40 p-8">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate">
                Signal highlights
              </div>
              <ul className="space-y-3 text-sm text-slate">
                <li>Execution traces across IHE, FHIR, X12, and custom interfaces.</li>
                <li>Live governance views for throughput, failure patterns, and trust posture.</li>
                <li>Risk register aligned to compliance, SLAs, and partner commitments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Section title="What Interoplens Does" subtitle="Operational clarity for interoperability teams.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Surface the signals"
            description="Capture and normalize integration events, protocol traces, and operational context into a shared view."
          />
          <Card
            title="Explain every execution"
            description="Group events into explainable execution narratives that show what happened and why."
          />
          <Card
            title="Operationalize governance"
            description="Translate observability into risk registers, performance reporting, and executive-ready insights."
          />
        </div>
      </Section>
      <Section title="Who It's For" subtitle="Built for teams that keep the exchange running.">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Hospitals and health systems",
            "Health information exchanges",
            "Health IT vendors",
            "TEFCA and QHIN ecosystem participants"
          ].map((label) => (
            <div key={label} className="rounded-xl border border-mist p-5 text-sm text-slate">
              {label}
            </div>
          ))}
        </div>
      </Section>
      <Section title="Why Now" subtitle="TEFCA readiness needs operational observability.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="TEFCA wave"
            description="New exchange pathways demand confidence in routing, compliance, and partner performance."
          />
          <Card
            title="Operational observability"
            description="Interoperability teams need to see failures early, not after downstream tickets."
          />
          <Card
            title="Reduce integration risk"
            description="Detect drift, certificate issues, and throughput anomalies before they become outages."
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;
