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
          <SocialIcon network="facebook" />
          <SocialIcon network="youtube" />
          <SocialIcon network="github" />
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