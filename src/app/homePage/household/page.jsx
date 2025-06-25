'use client';

import { useRouter } from 'next/navigation';
import { FaUserEdit } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

export default function HouseholdPage() {
  const router = useRouter();

  // ✅ Define this handler
  const handleAddClick = () => {
    router.push('/homePage/household/householdForms/geographic-identification');
  };

  return (
    <div className="p-6">
      {/* Header with title and add button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Household Information (2025)</h1>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          <FiPlus />
          Add Household
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search here"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
      />

      {/* Table */}
      <div className="overflow-x-auto border rounded-md shadow-sm">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Family Head</th>
              <th className="p-2 border">Barangay</th>
              <th className="p-2 border">Sex</th>
              <th className="p-2 border">Contact Number</th>
              <th className="p-2 border">Age</th>
              <th className="p-2 border">Map</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row */}
            <tr className="hover:bg-gray-50">
              <td className="p-2 border">1</td>
              <td className="p-2 border">John Lyndon Sarongad</td>
              <td className="p-2 border">Poblacion Centro</td>
              <td className="p-2 border">Male</td>
              <td className="p-2 border">09123456789</td>
              <td className="p-2 border">45</td>
              <td className="p-2 border text-center">
                <button className="text-green-600 hover:text-green-800">
                  <FaUserEdit />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}