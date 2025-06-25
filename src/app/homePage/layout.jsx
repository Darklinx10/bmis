'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
      {/* Topbar (spans full width) */}
      <header className="col-span-2">
        <Topbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </header>

      {/* Sidebar (left column, second row) */}
      {sidebarOpen && (
        <aside className="row-start-2 col-start-1 bg-white border-r shadow-md h-full w-64">
          <Sidebar sidebarOpen={sidebarOpen} />
        </aside>
      )}

      {/* Main Content (right column, second row) */}
      <main className="row-start-2 col-start-2 overflow-auto p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}