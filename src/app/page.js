/** This file is used to redirect users based on their authentication status */
'use client';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function IndexPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/Dashboard");
    } else {
      router.replace("/Authentication/login");
    }
  }, [user, router]);

  return null; // Or show a loading spinner
}
