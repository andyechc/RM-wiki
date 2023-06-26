export function MenuButton({onClick}) {
  return (
    <button
      className="md:hidden cursor-pointer w-10 h-10 p-1 bg-cyan-200 dark:bg-opacity-10 bg-opacity-30 rounded flex justify-center items-center hover:bg-opacity-50 hover:dark:bg-opacity-20 transition-all"
      onClick={onClick}
    >
      <svg
        className="w-full h-full text-cyan-600 dark:text-cyan-500"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
      </svg>
    </button>
  );
}
