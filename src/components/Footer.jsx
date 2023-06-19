export function Footer(){
  return(
  <footer className="w-full h-20 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 dark:border-t dark:border-gray-600 transition-colors">
        <h4 className="text-md font-medium text-gray-500 dark:text-gray-400">
          Created with 🧠 by{" "}
          <a
            className="underline hover:text-cyan-700 text-cyan-500 transition-colors"
            target="_blank"
            href="https://github.com/andev-code/"
          >
            andev
          </a>
        </h4>
        <p className="text-sm font-normal text-gray-400">
          PNG & SVG by
          <a
            className="text-green-600"
            target="_blank"
            href="https://iconos8.es/"
          >
            {" "}
            Icons8
          </a>
        </p>
      </footer>  
  )
}