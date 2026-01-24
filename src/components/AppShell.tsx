import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

interface AppShellProps {
  children: ReactNode;
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Process", to: "/process" },
  { label: "Services", to: "/services" },
  { label: "Who We Are", to: "/who-we-are" },
  { label: "Contact", to: "/contact" }
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-slate-900 text-white"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
  `flex flex-1 items-center justify-center rounded-md px-2 py-2 text-[11px] font-semibold transition ${
    isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
  }`;

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">
        <div className="flex items-center gap-3 px-6 py-6">
          <Logo />
          <div>
            <p className="text-base font-semibold text-slate-900">Interoplens</p>
            <p className="text-xs text-slate-500">Interoperability observability</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-6 pb-6 text-xs text-slate-500">
          TEFCA-ready operational insights.
        </div>
      </aside>

      <div className="flex min-h-screen flex-col md:pl-64">
        <main className="flex-1 pb-20 pt-10 md:pb-10">{children}</main>
        <footer className="border-t border-slate-200 bg-white py-6 text-sm text-slate-500">
          <div className="container-base flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>© 2026 Interoplens. All rights reserved.</span>
            <span>contact@interoplens.com</span>
          </div>
        </footer>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white md:hidden">
        <nav className="flex items-center justify-between gap-1 px-3 py-2 text-xs">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={mobileNavClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppShell;
