'use client';

import FormSectionSidebar from '@/components/formSectionSidebar';

export default function FormLayout({ children }) {
  return (
    <div className="flex h-screen gap-x-6">
      <aside className="h-full">
        {/* Sidebar */}
        <FormSectionSidebar />
      </aside>

      {/* Main Form Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-auto h-full">
        {children}
      </main>
    </div>
  );
}
