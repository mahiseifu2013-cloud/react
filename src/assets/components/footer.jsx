import { SocialIcon } from "react-custom-social-icons";

function Footer({ darkMode }) {
  return (
    <footer
      className={`mt-16 flex w-full items-center justify-between px-8 py-8 transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div>
        <h2 className="mb-4 text-lg font-semibold">
          Social Media
        </h2>

        <div className="flex items-center gap-4">
          <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SocialIcon network="youtube" />
          </a>
          <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SocialIcon network="facebook" />
          </a>
          <a 
            href="https://github.com/mahiseifu2013-cloud/react" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SocialIcon network="github" />
          </a>
        </div>
      </div>

      <p
        className={`text-sm ${
          darkMode ? "text-zinc-400" : "text-gray-500"
        }`}
      >
        © 2026 Mahi PLC
      </p>
    </footer>
  );
}

export default Footer;