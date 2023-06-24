export default function ErrorMessage({ err }) {
  return (
    <p className="text-md block text-center font-bold text-red-600 dark:text-red-300 animate-show">
      {err}
    </p>
  );
}
