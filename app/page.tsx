export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center gap-4 p-8">
      {/* hero-container */}
      <div className="bg-white rounded-lg p-4 flex flex-col gap-8 w-full max-w-lg">
        {/* hero-container-text */}
        <div className="flex flex-col">
          {/* hero-headlinne */}
          <h1 className="font-merriweather text-[48px] font-normal text-black leading-tight">
            Hero headline
          </h1>
          <p className="font-albert-sans text-base font-normal text-black">
            Subtitle content goes here
          </p>
        </div>
        {/* cta-button */}
        <button className="font-albert-sans text-base font-medium text-white bg-[#1a1a1a] rounded-lg py-3 px-5 w-fit overflow-hidden flex flex-col justify-end">
          Button
        </button>
      </div>

      {/* hero-container */}
      <div className="bg-[#e5f9ff] rounded-lg p-4 flex flex-col gap-8 w-full max-w-lg">
        {/* hero-container-text */}
        <div className="flex flex-col">
          {/* hero-headlinne */}
          <h1 className="font-merriweather text-[48px] font-normal text-black leading-tight">
            Hero headline
          </h1>
          <p className="font-albert-sans text-base font-normal text-black">
            Subtitle content goes here
          </p>
        </div>
        {/* cta-button */}
        <button className="font-albert-sans text-base font-medium text-white bg-[#1a1a1a] rounded-lg py-3 px-5 w-fit overflow-hidden flex flex-col justify-end">
          Button
        </button>
      </div>
    </div>
  );
}
