import { cn } from "../../lib/utils";

interface AvatarProps {
  src?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary";
  shape?: "circle" | "square";
  className?: string;
}

export function Avatar({ 
  src, 
  fallback, 
  size = "md", 
  variant = "default", 
  shape = "circle",
  className 
}: AvatarProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-[10px]",
    md: "w-10 h-10 text-[16px]",
    lg: "w-12 h-12 text-[18px]",
    xl: "w-20 h-20 text-[32px]"
  };
  
  const variantClasses = {
    default: "bg-[#E2E8F0] text-text-secondary",
    primary: "bg-primary-light text-primary"
  };

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-lg"
  };

  return (
    <div 
      className={cn(
        "flex items-center justify-center font-bold flex-shrink-0 overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        shapeClasses[shape],
        className
      )}
    >
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        fallback
      )}
    </div>
  );
}
