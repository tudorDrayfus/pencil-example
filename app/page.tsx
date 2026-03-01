export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-8">
      {/* Tennis Class Sign-Up */}
      <div className="bg-white rounded-[24px] shadow-[0_4px_24px_0_rgba(0,0,0,0.063)] p-9 flex flex-col gap-8 w-[520px]">

        {/* header */}
        <div className="flex flex-col gap-2 w-full">
          {/* title */}
          <h1 className="font-merriweather text-[48px] font-normal text-black w-[451px] leading-tight">
            Tennis Class Registration
          </h1>
          {/* subtitle */}
          <p className="font-albert-sans text-base font-normal text-black">
            Sign up for your next session on the court
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5 w-full">

          {/* nameRow */}
          <div className="flex flex-row gap-4 w-full">
            {/* firstName */}
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center w-full">
                <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933] w-full">
                  First Name
                </span>
              </div>
              <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px]">
                <span className="font-sans text-sm font-normal leading-[1.43] text-[#616167] w-full">
                  John
                </span>
              </div>
            </div>
            {/* lastName */}
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center w-full">
                <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933] w-full">
                  Last Name
                </span>
              </div>
              <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px]">
                <span className="font-sans text-sm font-normal leading-[1.43] text-[#616167] w-full">
                  Doe
                </span>
              </div>
            </div>
          </div>

          {/* emailField */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center w-full">
              <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933] w-full">
                Email Address
              </span>
            </div>
            <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px] gap-2">
              <span className="font-sans text-sm font-normal leading-[1.43] text-[#616167] flex-1">
                john.doe@email.com
              </span>
              {/* Icon Button/Default */}
              <div className="flex items-center justify-center rounded-full bg-[#5749F4] w-[30px] h-[30px] shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </div>

          {/* phoneField */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center w-full">
              <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933] w-full">
                Phone Number
              </span>
            </div>
            <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px]">
              <span className="font-sans text-sm font-normal leading-[1.43] text-[#616167] w-full">
                +1 (555) 000-0000
              </span>
            </div>
          </div>

        </div>

        {/* Experience Level */}
        <div className="flex flex-col gap-[10px] w-full">
          <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933]" id="expLabel">
            Experience Level
          </span>
          {/* expOptions */}
          <div className="flex flex-row gap-[10px] w-full">
            {/* Beginner Selected */}
            <div className="flex-1 flex items-center justify-center gap-2 bg-[#8B5CF6] rounded-full h-[48px] px-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" fill="white" stroke="white" />
              </svg>
              <span className="font-sans text-sm font-semibold text-white" id="opt1Text">Beginner</span>
            </div>
            {/* Intermediate */}
            <div className="flex-1 flex items-center justify-center gap-2 bg-[#F5F5F5] border border-[#C5C5CB] rounded-full h-[48px] px-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#616167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="font-sans text-sm font-medium text-[#2A2933]" id="opt2Text">Intermediate</span>
            </div>
            {/* Advanced */}
            <div className="flex-1 flex items-center justify-center gap-2 bg-[#F5F5F5] border border-[#C5C5CB] rounded-full h-[48px] px-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#616167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="font-sans text-sm font-medium text-[#2A2933]" id="opt3Text">Advanced</span>
            </div>
          </div>
        </div>

        {/* Preferred Schedule */}
        <div className="flex flex-col gap-[10px] w-full">
          <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933]" id="schedLabel">
            Preferred Schedule
          </span>
          {/* daysRow */}
          <div className="flex flex-row justify-between w-full">
            {/* dayMon - selected */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#8B5CF6] flex items-center justify-center">
              <span className="font-sans text-xs font-semibold text-white" id="dayMonT">Mon</span>
            </div>
            {/* dayTue */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="dayTueT">Tue</span>
            </div>
            {/* dayWed - selected */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#8B5CF6] flex items-center justify-center">
              <span className="font-sans text-xs font-semibold text-white" id="dayWedT">Wed</span>
            </div>
            {/* dayThu */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="dayThuT">Thu</span>
            </div>
            {/* dayFri */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="dayFriT">Fri</span>
            </div>
            {/* daySat */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="daySatT">Sat</span>
            </div>
            {/* daySun */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="daySunT">Sun</span>
            </div>
          </div>
          {/* timeField */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center w-full">
              <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933] w-full">
                Preferred Time
              </span>
            </div>
            <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px] gap-2">
              <span className="font-sans text-sm font-normal leading-[1.43] text-[#616167] flex-1">
                6:00 PM - 7:30 PM
              </span>
              {/* Icon Button/Default */}
              <div className="flex items-center justify-center rounded-full bg-[#5749F4] w-[30px] h-[30px] shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Class Type */}
        <div className="flex flex-col gap-[10px] w-full">
          <span className="font-sans text-sm font-medium leading-[1.43] text-[#2A2933]" id="classLabel">
            Class Type
          </span>
          {/* classOptions */}
          <div className="flex flex-row gap-[10px] w-full">
            {/* classPriv */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#F5F5F5] border border-[#C5C5CB] rounded-[20px] h-[80px] p-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#616167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-sans text-[13px] font-medium text-[#2A2933]" id="classPrivText">Private</span>
            </div>
            {/* classGroup - selected */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#8B5CF6]/[.13] border-[1.5px] border-[#8B5CF6] rounded-[20px] h-[80px] p-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="font-sans text-[13px] font-semibold text-[#8B5CF6]" id="classGroupText">Group</span>
            </div>
            {/* classCamp */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#F5F5F5] border border-[#C5C5CB] rounded-[20px] h-[80px] p-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#616167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 22l9-18 9 18" />
                <path d="M7.5 14.5h9" />
              </svg>
              <span className="font-sans text-[13px] font-medium text-[#2A2933]" id="classCampText">Camp</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="flex items-center justify-center gap-2 bg-[#8B5CF6] rounded-full h-[56px] w-full cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="font-sans text-base font-semibold text-white" id="btnText">Register for Class</span>
        </button>

        {/* footer */}
        <div className="flex flex-row justify-center gap-1 w-full">
          <span className="font-sans text-[13px] text-[#71717A]" id="footerText">Already registered?</span>
          <span className="font-sans text-[13px] font-semibold text-[#8B5CF6] cursor-pointer" id="footerLink">View your bookings</span>
        </div>

      </div>
    </div>
  );
}
