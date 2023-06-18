import { Logo } from "./Logo";
import { DarkModeButton } from "./DarkModeButton";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white opacity-90 backdrop-blur-xl dark:bg-gray-800 border-b dark:border-gray-600 flex px-5 py-2 justify-between items-center shadow-sm sticky top-0 left-0 transition-colors">
      <Link to="/">
        <Logo />
      </Link>

      <div>
        <DarkModeButton />
      </div>
    </header>
  );
}
