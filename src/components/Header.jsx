import { Logo } from "./Logo";
import { DarkModeButton } from "./DarkModeButton";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full h-30 bg-white bg-opacity-30 backdrop-blur-md border-b dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-30 flex px-5 py-2 justify-between items-center shadow-md sticky top-0 left-0 transition-colors z-20">
      <Link to="/">
        <Logo />
      </Link>

      <div>
        <DarkModeButton />
      </div>
    </header>
  );
}
