import { Search, Bell, Menu } from "lucide-react";

export function Header({ toggleSidebar }) {
  return (
    <header className="h-[64px] bg-surface border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="md:hidden text-text-secondary hover:text-text-primary focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden sm:flex items-center text-[14px] text-text-secondary font-medium">
          <span className="text-text-muted">Tổng quan</span>
          <span className="mx-2">/</span>
          <span className="text-text-primary">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="w-[16px] h-[16px] absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input 
            type="text" 
            placeholder="Tìm kiếm nhanh..." 
            className="h-[36px] w-[240px] rounded-lg border border-border bg-background pl-9 pr-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary transition-all placeholder:text-text-muted"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative text-text-secondary hover:text-text-primary transition-colors focus:outline-none">
            <Bell className="w-[20px] h-[20px]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-danger rounded-full border-2 border-surface"></span>
          </button>
          
          <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-[14px] cursor-pointer">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
