// src/app/layout.jsx
import { AuthProvider } from "@/contexts/authcontext";
import "@/styles/globals.css"; // Global styles




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}