import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600",
  secondary: "border border-slate-300 text-slate-700 hover:bg-slate-100",
  ghost: "text-slate-700 hover:bg-slate-100"
};

const Button = ({ variant = "primary", href, className, ...props }: ButtonProps) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className ?? ""}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {props.children}
      </a>
    );
  }

  return <button className={classes} {...props} />;
};

export default Button;
