function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav
      className={`flex items-center justify-between px-8 py-5 shadow-lg transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      
      {/* Mahi */}
      <h1 className="text-2xl font-bold tracking-wide">
        Mahi
      </h1>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <a
          href="#"
          className="transition duration-200 hover:text-blue-400"
        >
          Home
        </a>

        <a
          href="#"
          className="transition duration-200 hover:text-blue-400"
        >
          About
        </a>

        <a
          href="#"
          className="transition duration-200 hover:text-blue-400"
        >
          Contact
        </a>

        <button
          onClick={toggleDarkMode}
          className="rounded-lg px-3 py-2 transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          {darkMode ? " Light mode" : " Dark mode"}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;