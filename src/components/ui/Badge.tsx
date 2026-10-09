import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Badge = forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-surface border-border text-text-primary",
    primary: "bg-primary text-white border-transparent",
    primaryLight: "bg-primary-light text-primary border-transparent",
    success: "bg-[#DCFCE7] text-success border-transparent",
    warning: "bg-[#FEF3C7] text-warning border-transparent",
    danger: "bg-[#FEE2E2] text-danger border-transparent",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
