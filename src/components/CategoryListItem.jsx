export default function CategoryListItem({ title, icon }) {
  return (
    <li className="min-w-1/3 bg-white dark:bg-gray-900 max-w-sm h-min flex rounded-3xl shadow-[7px_7px_0_rgba(0,250,200,0.25)] hover:shadow-[7px_7px_30px_rgba(0,250,200,0.25)] cursor-pointer p-2  gap-2 hover:translate-y-1 animate-show transition-all">
      <div className="flex items-center justify-center items-center w-20 h-20 text-md font-light text-cyan-800 text-center xl:p-1">
        <img
          className="w-full rounded-full object-cover aspect-square"
          src={icon}
          alt={title}
        />
      </div>

      <div>
        <h4 className="text-2xl dark:text-gray-100 text-gray-900 font-extrabold">
          {title}
        </h4>
        <p className="text-md text-gray-700 dark:text-gray-300 font-normal">
          See all the {title} and details of every one
        </p>
      </div>
    </li>
  );
}
