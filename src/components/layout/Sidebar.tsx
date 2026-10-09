import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Flag,
  Inbox,
  MessageSquare,
  FileText,
  CalendarDays,
  BarChart3,
  Users,
  Settings,
  UserSquare,
  Zap
} from "lucide-react";
import { cn } from "../../lib/utils";

const FacebookIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const menuItems = [
  { path: "/", label: "Tổng quan", icon: LayoutDashboard },
  { path: "/accounts", label: "Tài khoản Facebook", icon: FacebookIcon },
  { path: "/pages", label: "Fanpage", icon: Flag },
  { path: "/inbox", label: "Hộp thư chung", icon: Inbox },
  { path: "/comments", label: "Bình luận", icon: MessageSquare },
  { path: "/posts", label: "Bài viết", icon: FileText },
  { path: "/calendar", label: "Lịch đăng bài", icon: CalendarDays },
  { path: "/stats", label: "Thống kê", icon: BarChart3 },
  { path: "/customers", label: "Khách hàng", icon: UserSquare },
  { path: "/automations", label: "Tự động hóa", icon: Zap },
  { path: "/staff", label: "Nhân viên", icon: Users },
  { path: "/settings", label: "Cài đặt", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-[248px] bg-sidebar border-r border-border h-screen sticky top-0 flex flex-col hidden md:flex shrink-0">
      <div className="h-[64px] flex items-center justify-center px-4 border-b border-border">
        <h1 className="flex items-center justify-center w-full">
          <img src="/logofb.png" alt="Socialyn Logo" className="h-12 w-auto object-contain max-w-[200px]" />
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-[12px] h-[40px] px-3 rounded-lg text-[14px] font-medium transition-colors",
              isActive
                ? "bg-primary-light text-primary"
                : "text-text-secondary hover:bg-[#F1F5F9] hover:text-text-primary"
            )}
          >
            <item.icon className="w-[18px] h-[18px]" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
