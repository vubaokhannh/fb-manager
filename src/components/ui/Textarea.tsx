import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Textarea = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="flex flex-col relative w-full">
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-lg border border-border bg-surface px-3 py-2 text-[14px] text-text-primary transition-colors",
          "placeholder:text-text-muted",
          "focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary-light",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-danger focus-visible:border-danger focus-visible:ring-red-100",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <span className="text-danger text-[12px] mt-1">{error}</span>}
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
