'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BsFillHousesFill } from 'react-icons/bs';
import { HiDocumentReport } from 'react-icons/hi';
import { IoMapSharp } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';

export default function Sidebar({ sidebarOpen }) {
  const pathname = usePathname().toLowerCase(); // normalize case

        const navItems = [
        {
        href: '/homePage/dashboard',
        label: 'Dashboard',
        icon: <MdSpaceDashboard className="text-2xl" />,
        isActive: pathname === '/homePage/dashboard',
        },
        {
        href: '/homePage/household',
        label: 'Households',
        icon: <BsFillHousesFill className="text-2xl" />,
        isActive: pathname.startsWith('/homePage/household'),
        },
        {
        href: '/homePage/maps',
        label: 'Maps',
        icon: <IoMapSharp className="text-2xl" />,
        isActive: pathname.startsWith('/homePage/maps'),
        },
        {
        href: '/homePage/reports',
        label: 'Reports',
        icon: <HiDocumentReport className="text-2xl" />,
        isActive: pathname.startsWith('/homePage/reports'),
        },
    ];

    return (
        <aside
      className={`
        fixed top-0 left-0  h-full w-64 bg-white shadow-md p-4 space-y-4
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
            {/* Logo + Title Container */}
            <div className="flex flex-col items-center mb-4 space-y-2">
                {/* Logo */}
                <Image
                    src="/ClarinLogo.png"
                    alt="BMIS Logo"
                    width={120}
                    height={120}
                    className="rounded-full"
                />

                {/* Title */}
                <div className="text-xl font-bold text-[#0BAD4A]">BMIS</div>
            </div>


            {/* Navigation */}
            <nav className="space-y-2 text-sm">
                {navItems.map(({ href, label, icon, isActive }) => (
                <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-6 px-3 py-2 rounded-md hover:text-[#0BAD4A] hover:bg-green-100 ${
                    isActive
                        ? 'bg-[#0BAD4A] text-white font-semibold'
                        : 'text-gray-700 hover:text-[#0BAD4A]'
                    }`}
                >
                    {icon}
                    {label}
                </Link>
                ))}
            </nav>
        </aside>
    );
}