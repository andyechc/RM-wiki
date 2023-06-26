export default function CharacterListItem({ character }) {
  return (
    <li
      key={character.id}
      className="bg-gray-100 dark:bg-gray-800 h-32 w-full sm:max-w-sm flex rounded shadow-md overflow-hidden hover:shadow-xl dark:hover:shadow-[7px_7px_25px_rgba(0,250,200,0.25)] cursor-pointer hover:translate-y-1 animate-show transition-all"
    >
      <div>
        <img
          className="min-w-[120px] min-h-full text-md font-light text-cyan-800 text-center flex justify-center items-center"
          src={character.image}
          alt={character.name}
          lazy
        />
      </div>

      <div className="p-4 w-full">
        <h4 className="text-xl sm:text-2xl md:text-xl text-cyan-600 dark:text-cyan-500 font-extrabold">
          {character.id}
        </h4>

        <h4 className="text-xl sm:text-2xl md:text-xl dark:text-gray-100 text-gray-900 font-extrabold">
          {character.name}
        </h4>

        <p className="text-md text-gray-700 dark:text-gray-300 font-normal">
          {character.species}
        </p>
      </div>
    </li>
  );
}

export function CharacterPlaceholder() {
  return (
    <div className="bg-transparent h-32 w-full sm:max-w-sm p-5 flex overflow-hidden cursor-wait rounded animate-pulse transition-all">
      <div className="w-full h-full bg-gray-300 rounded animate-pulse"></div>
      <div className="p-4 w-full flex flex-col gap-5 flex-grow rounded animate-pulse">
        <div className="w-full h-5 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/3 h-3 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
