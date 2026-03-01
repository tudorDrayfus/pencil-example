export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-8">
      {/* Tennis Class Sign-Up */}
      <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.063)] p-9 flex flex-col gap-8 w-[520px]">

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
              <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border-2 border-[#8B5CF6] shadow-[0_0_0_8px_#8B5CF620] px-6 py-[18px] gap-2">
                <span className="font-sans text-sm font-normal leading-[1.43] text-[#2A2933] flex-1">
                  John
                </span>
                {/* Text Cursor */}
                <div className="w-[1.5px] h-5 bg-[#8B5CF6] rounded-[1px] shrink-0" />
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
                <span className="font-sans text-sm font-normal leading-[1.43] text-[#2A2933] w-full">
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
            <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px] gap-2 shadow-[0_1px_4px_rgba(0,0,0,0.031)]">
              <span className="font-sans text-sm font-normal leading-[1.43] text-[#2A2933] flex-1">
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
            <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px] shadow-[0_1px_4px_rgba(0,0,0,0.031)]">
              <span className="font-sans text-sm font-normal leading-[1.43] text-[#2A2933] w-full">
                +1 (555) 123-4567
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
            <div className="flex-1 flex items-center justify-center gap-2 bg-[#8B5CF6] rounded-full h-[48px] px-4 shadow-[0_3px_10px_#8B5CF630]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" fill="white" stroke="white" />
              </svg>
              <span className="font-sans text-sm font-semibold text-white" id="opt1Text">Beginner</span>
            </div>
            {/* Intermediate */}
            <div className="flex-1 flex items-center justify-center gap-2 bg-[#FAFAFE] border border-[#C5C5CB] rounded-full h-[48px] px-4 shadow-[0_2px_8px_#8B5CF615]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#616167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="font-sans text-sm font-medium text-[#2A2933]" id="opt2Text">Intermediate</span>
            </div>
            {/* Advanced */}
            <div className="flex-1 flex items-center justify-center gap-2 bg-[#F5F5F5] border border-[#C5C5CB] rounded-full h-[48px] px-4 shadow-[0_2px_6px_rgba(0,0,0,0.031)]">
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
            {/* dayTue - semi-selected */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F3F0FF] border border-[#C5C5CB] flex items-center justify-center shadow-[0_2px_6px_#8B5CF615]">
              <span className="font-sans text-xs font-medium text-[#6D28D9]" id="dayTueT">Tue</span>
            </div>
            {/* dayWed - selected */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#8B5CF6] flex items-center justify-center">
              <span className="font-sans text-xs font-semibold text-white" id="dayWedT">Wed</span>
            </div>
            {/* dayThu */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.031)]">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="dayThuT">Thu</span>
            </div>
            {/* dayFri */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.031)]">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="dayFriT">Fri</span>
            </div>
            {/* daySat */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.031)]">
              <span className="font-sans text-xs font-medium text-[#2A2933]" id="daySatT">Sat</span>
            </div>
            {/* daySun */}
            <div className="w-[52px] h-[52px] rounded-[18px] bg-[#F5F5F5] border border-[#C5C5CB] flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.031)]">
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
            <div className="flex items-center w-full rounded-full bg-[#F5F5F5] border border-[#C5C5CB] px-6 py-[18px] gap-2 shadow-[0_1px_4px_rgba(0,0,0,0.031)]">
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
            <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#F5F5F5] border border-[#C5C5CB] rounded-[20px] h-[80px] p-4 shadow-[0_2px_6px_rgba(0,0,0,0.031)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#616167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-sans text-[13px] font-medium text-[#2A2933]" id="classPrivText">Private</span>
            </div>
            {/* classGroup - selected */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#8B5CF6]/[.13] border-[1.5px] border-[#8B5CF6] rounded-[20px] h-[80px] p-4 shadow-[0_3px_10px_#8B5CF625] relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="font-sans text-[13px] font-semibold text-[#8B5CF6]" id="classGroupText">Group</span>
              {/* Check Badge */}
              <div className="absolute top-2 right-2 w-[18px] h-[18px] rounded-full bg-[#8B5CF6] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            {/* classCamp */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#F5F5F5] border border-[#C5C5CB] rounded-[20px] h-[80px] p-4 shadow-[0_2px_6px_rgba(0,0,0,0.031)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#616167" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 21 12 3l8.5 18" />
                <path d="M7.5 13.5h9" />
              </svg>
              <span className="font-sans text-[13px] font-medium text-[#2A2933]" id="classCampText">Camp</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="flex items-center justify-center gap-2 bg-[#7C3AED] rounded-full h-[56px] w-full cursor-pointer shadow-[0_6px_16px_0_#8B5CF640]">
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
