import React from 'react';

function Footer2({ darkMode }) {
  return (
    <footer className={`border-t py-6 px-6 transition-colors duration-300 ${
      darkMode ? "border-zinc-800 bg-zinc-950" : "border-gray-200 bg-white"
    }`}>
      <div className="mx-auto max-w-3xl text-center">
        <p className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
          darkMode ? "text-zinc-400" : "text-gray-500"
        }`}>
          MADE BY MAHI PLC's
        </p>
      </div>
    </footer>
  );
}

export default Footer2;