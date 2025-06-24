// src/app/layout.jsx
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css"; // Global styles

// Optional metadata for the <head>
export const metadata = {
  title: "BMIS",
  description: "Barangay Management Information System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
