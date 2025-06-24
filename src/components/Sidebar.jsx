'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BsFillHousesFill } from 'react-icons/bs';
import { HiDocumentReport } from 'react-icons/hi';
import { IoMapSharp } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';

export default function Sidebar() {
  const pathname = usePathname().toLowerCase(); // normalize case

        const navItems = [
        {
        href: '/Dashboard',
        label: 'Dashboard',
        icon: <MdSpaceDashboard className="text-lg" />,
        isActive: pathname === '/dashboard',
        },
        {
        href: '/Dashboard/Household',
        label: 'Households',
        icon: <BsFillHousesFill className="text-lg" />,
        isActive: pathname.startsWith('/dashboard/household'),
        },
        {
        href: '/Dashboard/Maps',
        label: 'Maps',
        icon: <IoMapSharp className="text-lg" />,
        isActive: pathname.startsWith('/dashboard/maps'),
        },
        {
        href: '/Dashboard/Reports',
        label: 'Reports',
        icon: <HiDocumentReport className="text-lg" />,
        isActive: pathname.startsWith('/dashboard/reports'),
        },
    ];

    return (
        <aside className="w-64 h-screen bg-white shadow-md p-4 space-y-4">
        {/* Logo */}
        <div className="flex justify-center mb-2">
            <Image
            src="/ClarinLogo.png"
            alt="BMIS Logo"
            width={120}
            height={120}
            className="rounded-full"
            />
        </div>

        {/* Title */}
        <div className="text-xl font-bold text-center text-[#0BAD4A]">BMIS</div>

        {/* Navigation */}
        <nav className="space-y-2 text-sm">
            {navItems.map(({ href, label, icon, isActive }) => (
            <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${
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
