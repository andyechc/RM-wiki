import logoSvg from "/RM-wiki.svg";
import coverPng from "../assets/cover.png";

export function Cover() {
  return (
    <section className="bg-white block md:h-full h-screen pb-10 md:p-28 pt-0 flex flex-wrap justify-evenly items-center dark:bg-gray-900 transition-colors">
      <div className="p-10 flex flex-col gap-3  justify-between text-center sm:text-justify">
        <img className="w-28 h-28 m-auto sm:m-0 animate-show" src={logoSvg} />
        <h2 className="font-bold text-4xl text-cyan-600 sm:text-5xl animate-show">
          Rick & Morty's Wiki
        </h2>
        <p className="font-light text-md text-gray-800 dark:text-gray-100 xl:text-xl transition-colors animate-show">
          This is a Documentations of the Rick & Morty animated serie.
        </p>
      </div>
      <div className="w-64 h-64 xl:w-72 xl:h-72 animate-show">
        <img
          className="w-full top-0 left-0 drop-shadow-[0_0_30px_rgba(0,250,200,0.25)] "
          src={coverPng}
        />
      </div>
    </section>
  );
}
