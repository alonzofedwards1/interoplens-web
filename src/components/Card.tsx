import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const Card = ({ title, description, children }: CardProps) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 md:text-base">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
