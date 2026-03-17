import { clsx } from "clsx";
import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" &&
          "bg-sap-bright text-white hover:bg-sap-bright/90 hover:shadow-lg hover:shadow-sap-bright/25",
        variant === "secondary" &&
          "border border-border-glass text-text-secondary hover:border-border-glass-hover hover:text-text-primary",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
