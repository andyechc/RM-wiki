export function Cover() {
  return (
    <section className="block md:h-96 h-screen flex flex-wrap justify-center items-center dark:bg-gray-900 transition-colors">
      <div className="p-10 flex flex-col gap-3  justify-between text-center sm:text-justify">
        <img
          className="w-28 h-28 m-auto sm:m-0 animate-show"
          src="/RM-wiki.svg"
        />
        <h2 className="font-bold text-4xl text-cyan-600 sm:text-5xl animate-show">
          Rick & Morty's Wiki
        </h2>
        <p className="font-light text-md text-gray-800 dark:text-gray-100 xl:text-xl transition-colors animate-show">
          This is a Documentations of the Rick & Morty animated serie.
        </p>
      </div>
      <div>
        <img
          className="w-64 h-64 drop-shadow-[0_0_35px_rgba(0,250,200,0.25)] xl:w-72 xl:h-72 animate-show"
          src="/cover.png"
        />
      </div>
    </section>
  );
}
