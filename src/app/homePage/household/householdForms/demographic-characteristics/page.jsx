'use client';

export default function DemographicCharacteristicsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Demographic Characteristics
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Middle Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Middle Name
          </label>
          <input
            type="text"
            placeholder="Enter middle name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Birthdate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Birthdate
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Sex */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sex
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        {/* Civil Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Civil Status
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Select</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Separated</option>
          </select>
        </div>
      </form>

      <div className="mt-6 flex justify-end gap-4">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
          Back
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Next
        </button>
      </div>
    </div>
  );
}