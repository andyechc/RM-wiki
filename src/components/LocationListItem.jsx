// id":2,"name":"Abadango","type":"Cluster","dimension":"unknown","residents":["https://rickandmortyapi.com/api/character/6"],"url":"https://rickandmortyapi.com/api/location/2","created":"2017-11-10T13:06:38.182Z"},
export default function LocationListItem({ location }) {
  return (
    <li
      key={location.id}
      className="bg-gray-100 px-5 py-5 dark:bg-gray-800 min-w-[250px] h-[300px] md:h-full w-full sm:max-w-sm flex flex-col justify-center gap-1 rounded-2xl md:rounded shadow-md overflow-y-hidden snap-start snap-always hover:shadow-xl cursor-pointer hover:translate-y-1 animate-show transition-all"
    >
      <h4 className="text-2xl sm:text-3xl md:text-2xl dark:text-cyan-500 text-cyan-600 font-extrabold">
        {location.id}
      </h4>

      <h4 className="text-2xl sm:text-3xl md:text-2xl dark:text-gray-100 text-gray-900 font-extrabold">
        {location.name}
      </h4>

      <p className="text-md text-gray-700 dark:text-gray-300 font-normal">
        Type: {location.type}
      </p>

      <p className="text-md text-gray-700 dark:text-gray-300 font-normal">
        Dimension: {location.dimension}
      </p>
    </li>
  );
}

export function LocationPlaceholder() {
  return (
    <div className="bg-gray-600 h-[300px] md:h-32 min-w-[250px] w-full sm:max-w-sm p-5 flex flex-col justify-center gap-5 overflow-hidden cursor-wait snap-always rounded-2xl md:rounded animate-pulse transition-all">
      <div className="w-1/3 h-5 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-full h-5 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-1/2 h-3 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-1/2 h-3 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}
