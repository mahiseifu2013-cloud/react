import React from 'react';

function Nav({ onToggleForm, isFormVisible, darkMode, toggleDarkMode }) {
  return (
    <nav className={`border-b px-6 py-4 transition-colors duration-300 ${
      darkMode ? "border-zinc-800 bg-zinc-950" : "border-gray-200 bg-white"
    }`}>
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <h1 className="text-2xl font-bold">
          mahi's to do list app
        </h1>
        
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              darkMode
                ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          
          <button
            onClick={onToggleForm}
            className={`rounded-xl px-5 py-2 font-semibold transition ${
              isFormVisible
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-blue-600 hover:bg-blue-500 text-white"
            }`}
          >
            {isFormVisible ? "Close Form" : "Add New Task"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;