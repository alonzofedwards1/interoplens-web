import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { useGsapReveal } from "../hooks/useGsapReveal";

const Home = () => {
  useGsapReveal(".hero-reveal");
  useGsapReveal(".section-reveal");
  useGsapReveal(".card-reveal");
  useGsapReveal(".list-reveal");

  return (
    <div>
      <SEO title="Interoplens | Interoperability Observability" />
      <div className="rounded-lg border border-blue-100 bg-blue-50 hero-reveal">
        <div className="container-base py-3 text-sm text-blue-900">
          Phase 0: Proof of Capability. Pilot program opening soon.
        </div>
      </div>
      <section className="py-12 md:py-16">
        <div className="container-base grid gap-10 rounded-2xl border border-slate-200 bg-white p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
          <div className="space-y-6 hero-reveal">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Interoperability operations, simplified
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Make TEFCA integration visible, explainable, and governable.
            </h1>
            <p className="text-base text-slate-600 md:text-lg">
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
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hero-reveal">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Signal highlights
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Execution traces across IHE, FHIR, X12, and custom interfaces.</li>
                <li>Live governance views for throughput, failure patterns, and trust posture.</li>
                <li>Risk register aligned to compliance, SLAs, and partner commitments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Section
        title="What Interoplens Does"
        subtitle="Operational clarity for interoperability teams."
        className="section-reveal"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Surface the signals"
            description="Capture and normalize integration events, protocol traces, and operational context into a shared view."
            className="card-reveal"
          />
          <Card
            title="Explain every execution"
            description="Group events into explainable execution narratives that show what happened and why."
            className="card-reveal"
          />
          <Card
            title="Operationalize governance"
            description="Translate observability into risk registers, performance reporting, and executive-ready insights."
            className="card-reveal"
          />
        </div>
      </Section>
      <Section
        title="Who It's For"
        subtitle="Built for teams that keep the exchange running."
        className="section-reveal"
      >
        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Hospitals and health systems",
            "Health information exchanges",
            "Health IT vendors",
            "TEFCA and QHIN ecosystem participants"
          ].map((label) => (
            <div
              key={label}
              className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-600 list-reveal"
            >
              {label}
            </div>
          ))}
        </div>
      </Section>
      <Section
        title="Why Now"
        subtitle="TEFCA readiness needs operational observability."
        className="section-reveal"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="TEFCA wave"
            description="New exchange pathways demand confidence in routing, compliance, and partner performance."
            className="card-reveal"
          />
          <Card
            title="Operational observability"
            description="Interoperability teams need to see failures early, not after downstream tickets."
            className="card-reveal"
          />
          <Card
            title="Reduce integration risk"
            description="Detect drift, certificate issues, and throughput anomalies before they become outages."
            className="card-reveal"
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;
