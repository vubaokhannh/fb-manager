import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Label = forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1.5 inline-block text-text-primary",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
