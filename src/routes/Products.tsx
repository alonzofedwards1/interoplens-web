import Card from "../components/Card";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { useGsapReveal } from "../hooks/useGsapReveal";

const products = [
  {
    title: "Interoplens Dashboard",
    description: "Unified observability and analytics for interoperability operations."
  },
  {
    title: "OID Directory",
    description: "Organization and OID mapping with confidence scoring and stewardship."
  },
  {
    title: "PD Execution Intelligence",
    description: "Group events into explainable executions for traceable outcomes."
  },
  {
    title: "Findings & Risk Register",
    description: "Severity, triage, and governance workflows aligned to operational risk."
  },
  {
    title: "Certificate Health",
    description: "Monitor expiry, rotation, and trust chain signals across partners."
  }
];

const Products = () => {
  useGsapReveal(".product-card");

  return (
    <div>
      <SEO title="Products | Interoplens" />
      <Section
        title="Our Products"
        subtitle="Modular products designed to bring operational clarity to complex exchange."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.title}
              title={product.title}
              description={product.description}
              className="product-card"
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Products;
