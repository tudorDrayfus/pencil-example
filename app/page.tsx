export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-[520px] bg-white rounded-3xl p-9 flex flex-col gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.063)]">

        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-merriweather text-[48px] font-normal text-[var(--foreground)] leading-tight">
            Tennis Class Registration 1/3
          </h1>
          <p className="font-albert-sans text-base font-normal text-[var(--foreground)]">
            Sign up for your next session on the court
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="font-albert-sans text-sm font-medium text-[var(--foreground)] leading-[1.43]">
                First Name
              </label>
              <div className="flex items-center gap-2 bg-[var(--accent)] border-2 border-[#8B5CF6] rounded-full px-6 py-[18px] shadow-[0_0_8px_rgba(139,92,246,0.125)]">
                <input
                  type="text"
                  defaultValue="John"
                  className="bg-transparent font-albert-sans text-sm text-[var(--foreground)] w-full outline-none leading-[1.43]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="font-albert-sans text-sm font-medium text-[var(--foreground)] leading-[1.43]">
                Last Name
              </label>
              <div className="flex items-center gap-2 bg-[var(--accent)] border-[1.5px] border-[#8B5CF6] rounded-full px-6 py-[18px] shadow-[0_0_6px_rgba(139,92,246,0.125)]">
                <input
                  type="text"
                  defaultValue="Doe"
                  className="bg-transparent font-albert-sans text-sm text-[var(--foreground)] w-full outline-none leading-[1.43]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-albert-sans text-sm font-medium text-[var(--foreground)] leading-[1.43]">
              Email Address
            </label>
            <div className="flex items-center gap-2 bg-[var(--accent)] border-[1.5px] border-[#8B5CF6] rounded-full px-6 py-[18px] shadow-[0_0_6px_rgba(139,92,246,0.125)]">
              <input
                type="email"
                defaultValue="john.doe1@email.com"
                className="bg-transparent font-albert-sans text-sm text-[var(--foreground)] w-full outline-none leading-[1.43]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-albert-sans text-sm font-medium text-[var(--foreground)] leading-[1.43]">
              Phone Number
            </label>
            <div className="flex items-center gap-2 bg-[var(--accent)] border-[1.5px] border-[#8B5CF6] rounded-full px-6 py-[18px] shadow-[0_0_6px_rgba(139,92,246,0.125)]">
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="bg-transparent font-albert-sans text-sm text-[var(--foreground)] w-full outline-none leading-[1.43]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <span className="font-inter text-sm font-medium text-[var(--foreground)] leading-[1.43]">
            Experience Level
          </span>
          <div className="flex gap-2.5 w-full">
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-[#8B5CF6] shadow-[0_3px_10px_rgba(139,92,246,0.375)] px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="3" fill="white" stroke="white"/>
              </svg>
              <span className="font-inter text-sm font-semibold text-white">Beginner</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-[#EDE9FE] border-[1.5px] border-[#8B5CF6] shadow-[0_2px_8px_rgba(139,92,246,0.145)] px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
              </svg>
              <span className="font-inter text-sm font-semibold text-[#6D28D9]">Intermediate</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)] px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
              </svg>
              <span className="font-inter text-sm font-medium text-[var(--foreground)]">Advanced</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <span className="font-inter text-sm font-medium text-[var(--foreground)] leading-[1.43]">
            Preferred Schedule
          </span>
          <div className="flex justify-between w-full">
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#8B5CF6]">
              <span className="font-inter text-xs font-semibold text-white">Mon</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#EDE9FE] border-[1.5px] border-[#8B5CF6] shadow-[0_2px_6px_rgba(139,92,246,0.082)]">
              <span className="font-inter text-xs font-semibold text-[#6D28D9]">Tue</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#8B5CF6]">
              <span className="font-inter text-xs font-semibold text-white">Wed</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)]">
              <span className="font-inter text-xs font-medium text-[var(--foreground)]">Thu</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)]">
              <span className="font-inter text-xs font-medium text-[var(--foreground)]">Fri</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)]">
              <span className="font-inter text-xs font-medium text-[var(--foreground)]">Sat</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)]">
              <span className="font-inter text-xs font-medium text-[var(--foreground)]">Sun</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-albert-sans text-sm font-medium text-[var(--foreground)] leading-[1.43]">
              Preferred Time
            </label>
            <div className="flex items-center gap-2 bg-[var(--accent)] border-[1.5px] border-[#8B5CF6] rounded-full px-6 py-[18px] shadow-[0_0_6px_rgba(139,92,246,0.125)]">
              <input
                type="text"
                placeholder="6:00 PM - 7:30 PM"
                className="bg-transparent font-albert-sans text-sm text-[var(--muted-foreground)] w-full outline-none leading-[1.43]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <span className="font-inter text-sm font-medium text-[var(--foreground)] leading-[1.43]">
            Class Type
          </span>
          <div className="flex gap-2.5 w-full">
            <button className="flex-1 flex flex-col items-center justify-center gap-1 h-20 rounded-[20px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_3px_8px_rgba(0,0,0,0.063)] p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="font-inter text-[13px] font-medium text-[var(--foreground)]">Private</span>
            </button>
            <button className="flex-1 flex flex-col items-center justify-center gap-1 h-20 rounded-[20px] bg-[#EDE9FE] border-2 border-[#8B5CF6] shadow-[0_4px_12px_rgba(139,92,246,0.188)] p-4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span className="font-inter text-[13px] font-semibold text-[#8B5CF6]">Group</span>
              <div className="absolute top-2 right-2 w-[18px] h-[18px] rounded-full bg-[#8B5CF6] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </button>
            <button className="flex-1 flex flex-col items-center justify-center gap-1 h-20 rounded-[20px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_3px_8px_rgba(0,0,0,0.063)] p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 21 14 3"/>
                <path d="M20.5 21 10 3"/>
                <path d="M15.5 21 12 15l-3.5 6"/>
                <path d="M2 21h20"/>
              </svg>
              <span className="font-inter text-[13px] font-medium text-[var(--foreground)]">Camp</span>
            </button>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 h-14 rounded-full bg-[#7C3AED] shadow-[0_8px_20px_-2px_rgba(139,92,246,0.313)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span className="font-inter text-base font-semibold text-white">Register for Class</span>
        </button>

        <div className="flex items-center justify-center gap-1">
          <span className="font-inter text-[13px] text-[#71717A]">Already registered?</span>
          <a href="#" className="font-inter text-[13px] font-bold text-[#8B5CF6]">View your bookings</a>
        </div>

      </div>
    </main>
  );
}
