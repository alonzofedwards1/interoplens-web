import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-slate focus-visible:outline-ink",
  secondary: "border border-ink text-ink hover:bg-mist focus-visible:outline-ink",
  ghost: "text-ink hover:bg-mist focus-visible:outline-ink"
};

const Button = ({ variant = "primary", href, className, ...props }: ButtonProps) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className ?? ""}`.trim();

  if (href) {
    return (
      <Link to={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
};

export default Button;
