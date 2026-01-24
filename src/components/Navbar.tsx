import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition ${
    isActive ? "text-ink" : "text-slate hover:text-ink"
  }`;

const Navbar = () => {
  return (
    <nav className="border-b border-mist bg-white">
      <div className="container-base flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-semibold text-ink">Interoplens</span>
        </Link>
        <div className="flex flex-wrap gap-4 text-sm">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/process" className={navLinkClass}>
            Process
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/who-we-are" className={navLinkClass}>
            Who we are
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
