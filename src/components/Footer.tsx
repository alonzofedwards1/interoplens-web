import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-mist bg-white">
      <div className="container-base flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-ink">Interoplens</p>
          <p className="text-sm text-slate">
            Interoperability observability and operational clarity for the TEFCA era.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate">
          <Link to="/privacy" className="hover:text-ink">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-ink">
            Terms of Service
          </Link>
          <Link to="/faq" className="hover:text-ink">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
