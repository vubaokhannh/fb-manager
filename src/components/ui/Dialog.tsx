import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, title, children, footer, className }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[2px] transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Dialog content */}
      <div className={cn("relative z-10 w-full max-w-md bg-surface rounded-xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200", className)}>
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-[18px] font-semibold text-text-primary">{title}</h2>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-[#F1F5F9] transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5 overflow-y-auto">
          {children}
        </div>
        
        {footer && (
          <div className="p-4 border-t border-border flex justify-end gap-2 bg-[#F8FAFC] rounded-b-xl">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
