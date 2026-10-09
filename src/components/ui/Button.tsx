import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none text-[14px]";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-surface border border-border text-text-primary hover:bg-[#F1F5F9]",
    ghost: "bg-transparent text-text-primary hover:bg-[#F1F5F9]",
    danger: "bg-danger text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "h-[32px] px-3",
    md: "h-[36px] px-4",
    lg: "h-[40px] px-5",
  };

  return (
    <button
      ref={ref}
      disabled={isLoading || disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
