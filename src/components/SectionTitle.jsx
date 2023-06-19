export default function SectionTitle({ title, subTitle }) {
  return (
    <>
      <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-500 animate-show">
        {title}
      </h2>
      <p className="md:text-xl text-md font-light text-gray-600 dark:text-gray-100 animate-show">
        {subTitle}
      </p>
    </>
  );
}
