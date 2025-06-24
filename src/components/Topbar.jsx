// src/components/Topbar.jsx
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Topbar() {
    return (
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200 bg-white shadow-sm">
        {/* Left: Hamburger/Menu (if needed for mobile or future responsiveness) */}
        <button className="text-2xl text-gray-700 hover:text-black focus:outline-none">
            <GiHamburgerMenu />
        </button>

        {/* Right: User Icon */}
        <div className="flex items-center gap-2 text-gray-700">
            <FaUserCircle className="text-3xl" />
        </div>
            
        </div>
    );
}
