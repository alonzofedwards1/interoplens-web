import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-sm text-slate-500">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Interoplens. All rights reserved.</span>
        <div className="flex flex-wrap gap-4">
          <Link to="/privacy" className="hover:text-slate-900">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-slate-900">
            Terms of Service
          </Link>
          <Link to="/faq" className="hover:text-slate-900">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
