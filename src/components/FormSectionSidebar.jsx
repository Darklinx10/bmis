'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const formSections = [
  'Geographic Identification',
  'Demographic Characteristics',
  'Migration',
  'Education and Literacy',
  'Community and Political',
  'Economic Characteristics',
  'Languages and Religion',
  'Family Income',
  'Food Consumption Expenditure',
  'Food Security',
  'Health',
  'Climate Change and Disaster Risk Management',
  'Environmental and Digital Economy',
  'Crime Victimization',
  'Social Protection Programs',
  'Water Senitation and Hygiene',
  'Housing Characteristics',
  'Refusal and Special Cases',
];

export default function FormSectionSidebar() {
  const pathname = usePathname().toLowerCase(); // normalize for consistency

  return (
    <aside className="w-64 h-screen overflow-y-auto border-r bg-white p-4 shadow-md text-sm">
      <h2 className="text-lg font-bold text-[#0BAD4A] mb-4">Form Sections</h2>
      <ul className="space-y-1">
        {formSections.map((section) => {
          const slug = section.toLowerCase().replace(/\s+/g, '-');
          const isActive = pathname.includes(`/dashboard/household/form/${slug}`);

          return (
            <li key={slug}>
              <Link
                href={`/dashboard/household/form/${slug}`}
                className={`block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-[#0BAD4A] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
