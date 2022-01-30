import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="">
        <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 p-3 rounded focus:outline-none"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        {mounted && (
            <span>
            {theme === "dark" ? (
                <BsSun />
            ) : (
                <MdOutlineDarkMode />
            )}
            </span>
        )}
        </button>
    </div>
  );
}
