import React, { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/footer";

function Display() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`flex min-h-screen flex-col transition-colors duration-300 ${
        darkMode ? "bg-zinc-950 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor n reprehenderit n voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
         occaecat cupidatat non proident, sunt n culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Display;