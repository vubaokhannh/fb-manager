import { Search } from "lucide-react";
import { Input, InputProps } from "./Input";
import { cn } from "../../lib/utils";

interface SearchInputProps extends InputProps {
  wrapperClassName?: string;
}

export function SearchInput({ wrapperClassName, className, ...props }: SearchInputProps) {
  return (
    <div className={cn("relative w-full", wrapperClassName)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
      <Input className={cn("pl-9", className)} {...props} />
    </div>
  );
}
