import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, subtitle, children, className }: SectionProps) => {
  return (
    <section className={`py-12 ${className ?? ""}`.trim()}>
      <div className="container-base space-y-6">
        {(title || subtitle) && (
          <header className="space-y-2">
            {title && (
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-slate text-base md:text-lg">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
