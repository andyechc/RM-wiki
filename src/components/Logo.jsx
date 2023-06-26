import logoSvg from '/RM-wiki.svg'

export function Logo() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <img className="w-full h-full" src={logoSvg} />
    </div>
  );
}
