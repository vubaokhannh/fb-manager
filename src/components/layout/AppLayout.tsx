import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-text-primary">
      {/* Mobile Sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar - Desktop and Mobile Drawer */}
      <div className={`fixed inset-y-0 left-0 z-30 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:block`}>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header toggleSidebar={() => setSidebarOpen(true)} />
        <main className="flex-1 p-[24px] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
