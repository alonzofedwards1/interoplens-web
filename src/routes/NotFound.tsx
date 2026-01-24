import { Link } from "react-router-dom";
import Section from "../components/Section";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div>
      <SEO title="Page Not Found | Interoplens" />
      <Section title="Page not found" subtitle="We could not find the page you requested.">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline"
        >
          Return to home
        </Link>
      </Section>
    </div>
  );
};

export default NotFound;
