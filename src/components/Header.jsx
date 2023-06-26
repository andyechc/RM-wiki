import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";
import { MenuButton } from "./MenuButton";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const navMenuButtonClass = isVisible ? "visible" : "invisible";

  const handleVisible = () => setIsVisible(!isVisible);

  return (
    <header className="w-full h-[60px] bg-white bg-opacity-30 backdrop-blur-md border-b dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-70 flex px-5 py-2 justify-between items-center shadow-md sticky top-0 left-0 transition-colors z-20">
      <Link to="/" className="w-12">
        <Logo />
      </Link>

      <MenuButton onClick={handleVisible} />

      <div
        onClick={handleVisible}
        className={`absolute ${navMenuButtonClass} md:hidden h-screen w-screen top-0 left-0 z-30 bg-zinc-700 bg-opacity-50 backdrop-blur-md`}
      ></div>

      <aside
        className={`md:visible ${navMenuButtonClass} flex flex-col md:flex-row justify-center items-center gap-20 md:gap-4 w-[250px] md:w-fit h-screen md:h-full absolute top-0 right-0 px-10 bg-gray-200 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent z-40 md:z-0 animate-show`}
      >
        <div className="md:hidden w-20 h-20">
          <Logo />
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <NavLink
            onClick={handleVisible}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 dark:text-cyan-500 md:text-[16px] text-xl font-semibold"
                : "md:text-[16px] text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-600 hover:dark:text-cyan-500"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={handleVisible}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 dark:text-cyan-500  md:text-[16px] text-xl font-semibold"
                : "md:text-[16px] text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-600 hover:dark:text-cyan-500"
            }
            to="/characters"
          >
            Characters
          </NavLink>

          <NavLink
            onClick={handleVisible}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 dark:text-cyan-500  md:text-[16px] text-xl font-semibold"
                : "md:text-[16px] text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-600 hover:dark:text-cyan-500"
            }
            to="/locations"
          >
            Locations
          </NavLink>
        </div>

        <hr className="w-full border border-gray-400 md:hidden" />

        <ThemeButton />
      </aside>
    </header>
  );
}
