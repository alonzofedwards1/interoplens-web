import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const Card = ({ title, description, children }: CardProps) => {
  return (
    <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm text-slate md:text-base">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
