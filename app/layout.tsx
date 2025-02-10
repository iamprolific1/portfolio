import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulmalik Abdulrahman",
  description: "Minimalist Fullstack portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-primary min-h-screen text-white"
      >
        {children}
      </body>
    </html>
  );
}
