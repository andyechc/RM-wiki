import DeathIcon from "../icons/DeathIcon";
import AliveIcon from "../icons/AliveIcon";
import MaleIcon from "../icons/MaleIcon";
import FemaleIcon from "../icons/FemaleIcon";

export default function CharacterDescription({ character }) {
  return (
    <article className=" w-full flex flex-col gap-20">
      <div className="w-full h-40 md:h-44 xl:h-52 flex justify-center items-center animate-show">
        <img
          className="h-full rounded-full aspect-square shadow-xl hover:scale-105 transition-all"
          src={character.image}
        />
      </div>

      <div className="w-full flex-grow sm:flex sm:flex-col sm:item-center animate-show">
        <h2 className="text-3xl md:text-5xl text-gray-800 dark:text-gray-200 font-extrabold">
          {character.name}
        </h2>
        <span className="flex gap-1 items-center text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold">
          Status: {character.status}
          {character.status === "Alive" && <AliveIcon />}
          {character.status === "Dead" && <DeathIconIcon />}
          {character.status === "unknown" && (
            <p className="text-2xl font-extrabold text-green-500">?</p>
          )}
        </span>
      </div>

      <div className="w-full sm:flex sm:item-center flex-grow animate-show">
        <h4 className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
          Specie: {character.species}
        </h4>

        <h4 className="flex gap-1 items-center text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
          Gender: {character.gender}
          {character.gender === "Male" && <MaleIcon />}
          {character.gender === "Female" && <FemaleIcon />}
          {character.gender === "unknown" && (
            <p className="text-2xl font-extrabold text-green-500">?</p>
          )}
        </h4>

        <h4 className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
          Origin: {character.origin.name}
        </h4>

        <h4 className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
          Location: {character.location.name}
        </h4>
      </div>
    </article>
  );
}

export function CharacterDescriptionPlaceholder() {
  return (
    <div className="w-full flex flex-col items-center gap-20 cursor-wait">
      <div className="w-40 md:w-44 xl:w-52 h-40 md:h-44 xl:h-52 m-auto rounded-full bg-gray-300 animate-pulse"></div>

      <div className="w-full flex-grow flex flex-col gap-6">
        <div className="w-4/5 h-8 md:h-10 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/3 h-5 md:h-7 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      <div className="w-full flex-grow flex flex-col gap-6">
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
