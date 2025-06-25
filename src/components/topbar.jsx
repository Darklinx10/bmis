'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        {/* Main page content */}
        <main className="flex-1 p-4 mt-2 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
