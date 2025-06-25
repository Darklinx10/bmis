'use client';

export default function GeographicIdentificationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-green-700">
      Geographic Identification 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Region" className="border p-2 rounded w-full" />
        <input type="text" placeholder="Province" className="border p-2 rounded w-full" />
        <input type="text" placeholder="Municipality" className="border p-2 rounded w-full" />
        <input type="text" placeholder="Barangay" className="border p-2 rounded w-full" />
        <input type="text" placeholder="Purok / Sitio" className="border p-2 rounded w-full" />
      </div>

      <div className="pt-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Save and Continue
        </button>
      </div>
    </div>
  );
}
