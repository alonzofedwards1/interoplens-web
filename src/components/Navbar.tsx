import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition ${
    isActive ? "text-ink" : "text-slate hover:text-ink"
  }`;

const Navbar = () => {
  return (
    <nav className="border-b border-mist bg-white">
      <div className="container-base flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-mist bg-white text-xs font-semibold text-ink">
            IP
          </div>
          <span className="text-lg font-semibold text-ink">Interoplens</span>
        </div>
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
