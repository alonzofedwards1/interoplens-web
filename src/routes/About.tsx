import Section from "../components/Section";
import SEO from "../components/SEO";

const About = () => {
  return (
    <div>
      <SEO title="About | Interoplens" />
      <Section
        title="About Interoplens"
        subtitle="Born from operational pain and built for interoperability leaders."
      >
        <div className="space-y-4 text-slate-600">
          <p>
            Interoplens started with a recurring challenge: interoperability programs were
            running on spreadsheets, manual reporting, and fragmented visibility. Teams were
            spending nights piecing together what happened and why.
          </p>
          <p>
            We built Interoplens to replace the ad hoc trackers with a unified operational
            system. By turning protocol traffic into explainable executions and governance
            insights, teams can run TEFCA-connected workflows with confidence.
          </p>
          <p>
            Our focus is practical outcomes: fewer escalations, clearer accountability, and a
            governance layer that scales as TEFCA adoption accelerates.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default About;
