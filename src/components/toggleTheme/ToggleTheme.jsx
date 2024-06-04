"use client"
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleTheme = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    // console.log(theme);
    if (theme == "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative w-14 h-8 flex items-center bg-teal-500 dark:bg-gray-900 cursor-pointer rounded-full p-1"
      onClick={() => { setDarkMode(!darkMode) }}>
      <FaMoon className="text-white" size={18} />
      <div className='absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300'
        style={darkMode ? { left: "0.25rem" } : { right: "0.25rem" }}
      >
      </div> 
      <FaSun className="text-yellow-400 ml-auto" size={18} />
    </div>
  )
}

export default ToggleTheme