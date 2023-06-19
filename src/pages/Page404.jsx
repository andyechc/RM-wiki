import page404Png from "../assets/404.png";

export function Page404() {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen transition-colors">
      <div className="w-full h-full flex flex-col justify-center items-center gap-3 p-10">
        <h2 className="text-4xl font-extrabold dark:text-white">
          Ups! Error 404
        </h2>
        <p className="text-xl font-light dark:text-gray-200">
          This pages does'nt exist. Return or write well the url.
        </p>
        <img
          className="w-full max-w-md drop-shadow-[0_0_20px_rgb(0,250,200,.25)]"
          src={page404Png}
        />
      </div>
    </section>
  );
}
