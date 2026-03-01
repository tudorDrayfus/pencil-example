export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 flex flex-row flex-wrap items-start justify-center gap-4 p-8">
      {/* Left column: stacked hero-containers */}
      <div className="flex flex-col gap-4">
        {/* hero-container */}
        <div
          className="bg-white rounded-lg p-4 flex flex-col gap-8"
          style={{ width: 354, height: 185 }}
        >
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
        <div
          className="bg-[#e5faff] rounded-lg p-4 flex flex-col gap-8"
          style={{ width: 354, height: 185 }}
        >
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
          <button className="font-albert-sans text-base font-medium text-white bg-black rounded-lg py-3 px-5 w-fit overflow-hidden flex flex-col justify-end">
            Button
          </button>
        </div>
      </div>

      {/* hero-container-lg */}
      <div
        className="bg-white rounded-lg p-4 flex flex-col gap-8"
        style={{ width: 563, height: 386 }}
      >
        {/* Input Group/Default */}
        <div className="flex flex-col gap-1.5" style={{ width: 392 }}>
          {/* Label Text */}
          <div className="flex items-center w-full">
            <span
              className="text-sm font-medium leading-[1.43] w-full"
              style={{ fontFamily: "Inter", color: "#2A2933" }}
            >
              Label Text
            </span>
          </div>
          {/* Input */}
          <div
            className="flex items-center w-full rounded-full border px-6 py-[18px]"
            style={{ backgroundColor: "#F5F5F5", borderColor: "#C5C5CB" }}
          >
            <span
              className="text-sm font-normal leading-[1.43] w-full"
              style={{ fontFamily: "Inter", color: "#616167" }}
            >
              Placeholder
            </span>
          </div>
        </div>

        {/* Input Group/Default */}
        <div className="flex flex-col gap-1.5" style={{ width: 392 }}>
          {/* Label Text */}
          <div className="flex items-center w-full">
            <span
              className="text-sm font-medium leading-[1.43] w-full"
              style={{ fontFamily: "Inter", color: "#2A2933" }}
            >
              Label Text
            </span>
          </div>
          {/* Input */}
          <div
            className="flex items-center w-full rounded-full border px-6 py-[18px] gap-2"
            style={{ backgroundColor: "#F5F5F5", borderColor: "#C5C5CB" }}
          >
            <span
              className="text-sm font-normal leading-[1.43] flex-1"
              style={{ fontFamily: "Inter", color: "#616167" }}
            >
              This has an icon
            </span>
            {/* Icon Button/Default */}
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 30, height: 30, backgroundColor: "#5749F4", padding: 10 }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1V9M1 5H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Input Group/Default */}
        <div className="flex flex-col gap-1.5" style={{ width: 392 }}>
          {/* Label Text */}
          <div className="flex items-center w-full">
            <span
              className="text-sm font-medium leading-[1.43] w-full"
              style={{ fontFamily: "Inter", color: "#2A2933" }}
            >
              Label Text
            </span>
          </div>
          {/* Input */}
          <div
            className="flex items-center w-full rounded-full border px-6"
            style={{ height: 51, backgroundColor: "#F5F5F5", borderColor: "#C5C5CB" }}
          >
            <span
              className="text-sm font-normal leading-[1.43] w-full"
              style={{ fontFamily: "Inter", color: "#616167" }}
            >
              Placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
