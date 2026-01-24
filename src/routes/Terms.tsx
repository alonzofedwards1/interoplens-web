import Section from "../components/Section";
import SEO from "../components/SEO";

const Terms = () => {
  return (
    <div>
      <SEO title="Terms of Service | Interoplens" />
      <Section title="Terms of Service" subtitle="Pilot-stage terms for website visitors.">
        <div className="space-y-4 text-slate-600">
          <p>
            This website provides general information about Interoplens and does not create
            a service agreement. Any services are governed by a signed statement of work or
            master services agreement.
          </p>
          <p>
            Content on this site is provided as-is and may be updated as the product evolves.
            By using this site, you agree not to misuse the content or attempt to gain
            unauthorized access to the service.
          </p>
          <p>
            Questions about these terms can be directed to contact@interoplens.com.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
