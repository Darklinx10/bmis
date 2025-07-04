"use client";

import { auth } from "@/lib/firebase"; // Make sure this exports `auth` from firebase config
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully");
        router.push("/Dashboard");
    } catch (err) {
        console.error(err.message);
        toast.error("Login failed. Please check your credentials.");
    }
    };

    return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 font-roboto">
        <div className="w-full max-w-md flex flex-col items-center">
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

        {/* BMIS Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">BMIS</h1>

        {/* Login Form Box */}
        <div className="bg-white border border-gray-300 p-8 rounded-2xl shadow-md w-[342px] h-[445px]">
            <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">Login</h2>

          {/* Form */}
            <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#0BAD4A]/80">
                <FiMail className="text-gray-500 mr-2" />
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full outline-none text-sm"
                    required
                />
                </div>
            </div>

            {/* Password Field */}
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
                Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#0BAD4A]/80">
                <FiLock className="text-gray-500 mr-2" />
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full outline-none text-sm"
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 text-gray-500 focus:outline-none"
                >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                </button>
                </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-6 text-sm">
                <label className="text-sm font-normal italic flex items-center text-gray-400/90">
                <input type="checkbox" className="mr-2 accent-blue-600" />
                Remember me
                </label>
                <a href="#" className="text-[#0BAD4A] hover:underline text-sm">
                Forgot password?
                </a>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
                <button
                type="submit"
                className="w-[200px] bg-[#0BAD4A] hover:bg-[#0a9c43] text-white font-medium py-2 rounded-lg transition"
                >
                Login
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
    );
}
