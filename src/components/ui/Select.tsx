import { useState, useRef, useEffect, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown, Check } from "lucide-react";

export const Select = forwardRef(({ className, options = [], error, placeholder, value, onChange, defaultValue, ...props }: any, ref: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || (options.length > 0 ? options[0].value : ""));
  const containerRef = useRef<HTMLDivElement>(null);

  const actualValue = value !== undefined ? value : internalValue;
  const selectedOption = options.find((opt: any) => opt.value === actualValue);

  // Handle click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (optionValue: string) => {
    setInternalValue(optionValue);
    if (onChange) {
      // Mock event to maintain compatibility with existing handlers
      onChange({ target: { value: optionValue } });
    }
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col relative w-full" ref={containerRef}>
      <div 
        className={cn(
          "flex items-center justify-between h-[40px] w-full rounded-lg border bg-surface px-3 py-2 text-[14px] cursor-pointer transition-colors shadow-sm",
          isOpen ? "border-primary ring-2 ring-primary-light" : "border-border hover:border-primary/30",
          error && "border-danger ring-danger/20",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <span className={cn("block truncate", !selectedOption && "text-text-muted")}>
          {selectedOption ? selectedOption.label : placeholder || options[0]?.label || "Chọn..."}
        </span>
        <ChevronDown className={cn("h-4 w-4 text-text-muted transition-transform duration-200", isOpen && "rotate-180 text-primary")} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-surface border border-border rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="max-h-[250px] overflow-auto p-1 m-0 list-none">
            {options.map((opt: any) => {
              const isSelected = actualValue === opt.value;
              return (
                <li
                  key={opt.value}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 text-[14px] rounded-lg cursor-pointer transition-colors",
                    isSelected ? "bg-primary-light text-primary font-medium" : "text-text-primary hover:bg-[#F1F5F9]"
                  )}
                  onClick={() => handleSelect(opt.value)}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check className="w-4 h-4" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      
      {/* Hidden native select for form accessibility */}
      <select ref={ref} value={actualValue} onChange={() => {}} className="hidden" {...props}>
        {options.map((opt: any) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      
      {error && <span className="text-danger text-[12px] mt-1">{error}</span>}
    </div>
  );
});

Select.displayName = "Select";
