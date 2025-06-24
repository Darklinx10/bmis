// src/app/dashboard/layout.jsx
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 z-40 bg-white shadow">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-64">
        <header className="fixed top-0 left-67 right-0 z-30 bg-white shadow">
          <Topbar />
        </header>

        <main className="pt-20 p-6 mt-5">
          {children}
        </main>
      </div>
    </div>
  );
}
