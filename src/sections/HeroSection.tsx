import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section className="section-reveal py-20 md:py-28">
      <div className="container-base grid gap-10 rounded-2xl border border-slate-200 bg-white p-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-14">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Healthcare interoperability observability
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Interoplens brings operational clarity to TEFCA-scale exchange.
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            A single source of truth for integration health, execution context, and governance
            readiness across cross-network data exchange.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">
              Request a Pilot
            </Button>
            <Button href="#capabilities" variant="secondary">
              View Capabilities
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Phase 0
            </div>
            <p className="text-base font-semibold text-slate-900">
              Proof of capability with pilot cohorts.
            </p>
            <p>
              Establish operational baselines, capture real exchange traffic, and deliver
              governance-ready reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
