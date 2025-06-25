// pages/index.jsx
"use client";

import { useAuth } from "@/contexts/authcontext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function IndexPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Don't redirect until auth state is known

    if (user) {
      router.replace("/homePage");
    } else {
      router.replace("/auth/login");
    }
  }, [user, loading, router]);

  return null; // or <div>Loading...</div>
}
