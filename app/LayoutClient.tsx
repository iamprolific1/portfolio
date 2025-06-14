"use client";

import { useEffect, useState } from "react";
import ProlificDevLoader from "./components/ProlificDevLoader";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <ProlificDevLoader />
        </div>
      ) : (
        children
      )}
    </>
  );
}
