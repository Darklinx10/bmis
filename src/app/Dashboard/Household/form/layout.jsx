'use client';

import FormSectionSidebar from '@/components/FormSectionSidebar';

export default function FormLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <FormSectionSidebar />

      {/* Main Form Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
