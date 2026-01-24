import Section from "../components/Section";
import SEO from "../components/SEO";

const Privacy = () => {
  return (
    <div>
      <SEO title="Privacy Policy | Interoplens" />
      <Section title="Privacy Policy" subtitle="A simple policy for a pilot-stage company.">
        <div className="space-y-4 text-slate">
          <p>
            Interoplens collects only the information you provide through contact forms or
            discovery conversations. We use the data solely to respond to inquiries and to
            design pilot engagements.
          </p>
          <p>
            We do not sell personal data or share it with third parties for marketing. Any
            operational data used in pilots is governed by signed agreements and scoped to
            the engagement.
          </p>
          <p>
            For questions about this policy, contact us at contact@interoplens.com.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;
