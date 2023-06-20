import loadingPng from "../assets/loading.png";

export function Loading() {
  return (
    <div className="w-full h-40 flex justify-center items-center">
      <img
        className="w-32 md:max-w-md animate-rotate drop-shadow-[0_0_30px_rgba(0,250,200,0.25)] animate-pulse"
        src={loadingPng}
      />
    </div>
  );
}
