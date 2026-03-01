"use client";

import { Check, CircleDot, Circle, User, Users, Tent } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl flex flex-col gap-8 p-9 w-full max-w-[520px] shadow-[0_4px_24px_rgba(0,0,0,0.063)]">

        {/* Header */}
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-merriweather text-[48px] font-normal text-black leading-tight max-w-[451px]">
            Tennis Class Registration 1/3
          </h1>
          <p className="font-albert-sans text-base font-normal text-black">
            Sign up for your next session on the court
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5 w-full">
          {/* Name Row */}
          <div className="flex gap-4 w-full">
            {/* First Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-albert-sans text-sm font-medium text-[var(--foreground)]">
                First Name
              </label>
              <div className="flex items-center rounded-full bg-[var(--accent)] px-6 py-[18px] border-2 border-[#8B5CF6] shadow-[0_0_8px_rgba(139,92,246,0.125)] gap-2">
                <span className="font-albert-sans text-sm font-normal text-[var(--foreground)] flex-1">
                  John
                </span>
                <div className="w-[1.5px] h-5 bg-[#8B5CF6] rounded-sm flex-shrink-0" />
              </div>
            </div>
            {/* Last Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-albert-sans text-sm font-medium text-[var(--foreground)]">
                Last Name
              </label>
              <div
                className="flex items-center rounded-full bg-[var(--accent)] px-6 py-[18px] gap-2 shadow-[0_0_6px_rgba(139,92,246,0.125)]"
                style={{ border: "1.5px solid #8B5CF6" }}
              >
                <span className="font-albert-sans text-sm font-normal text-[var(--foreground)] flex-1">
                  Doe
                </span>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-albert-sans text-sm font-medium text-[var(--foreground)]">
              Email Address
            </label>
            <div
              className="flex items-center rounded-full bg-[var(--accent)] px-6 py-[18px] gap-2 shadow-[0_0_6px_rgba(139,92,246,0.125)]"
              style={{ border: "1.5px solid #8B5CF6" }}
            >
              <span className="font-albert-sans text-sm font-normal text-[var(--foreground)] flex-1">
                john.doe1@email.com
              </span>
              <div className="w-[30px] h-[30px] rounded-full bg-[#8B5CF6] flex-shrink-0" />
            </div>
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-albert-sans text-sm font-medium text-[var(--foreground)]">
              Phone Number
            </label>
            <div
              className="flex items-center rounded-full bg-[var(--accent)] px-6 py-[18px] gap-2 shadow-[0_0_6px_rgba(139,92,246,0.125)]"
              style={{ border: "1.5px solid #8B5CF6" }}
            >
              <span className="font-albert-sans text-sm font-normal text-[var(--foreground)] flex-1">
                +1 (555) 123-4567
              </span>
            </div>
          </div>
        </div>

        {/* Experience Level */}
        <div className="flex flex-col gap-2.5 w-full">
          <span className="font-inter text-sm font-medium text-[var(--foreground)] leading-[1.43]">
            Experience Level
          </span>
          <div className="flex gap-2.5 w-full">
            <div className="flex items-center justify-center gap-2 rounded-full bg-[#8B5CF6] h-12 flex-1 px-4 shadow-[0_3px_10px_rgba(139,92,246,0.188)]">
              <CircleDot size={16} className="text-white flex-shrink-0" />
              <span className="font-inter text-sm font-semibold text-white">Beginner</span>
            </div>
            <div
              className="flex items-center justify-center gap-2 rounded-full bg-[#EDE9FE] h-12 flex-1 px-4 shadow-[0_2px_8px_rgba(139,92,246,0.145)]"
              style={{ border: "1.5px solid #8B5CF6" }}
            >
              <Circle size={16} className="text-[#8B5CF6] flex-shrink-0" />
              <span className="font-inter text-sm font-semibold text-[#6D28D9]">Intermediate</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-full bg-[#FAF9FE] h-12 flex-1 px-4 border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)]">
              <Circle size={16} className="text-[var(--muted-foreground)] flex-shrink-0" />
              <span className="font-inter text-sm font-medium text-[var(--foreground)]">Advanced</span>
            </div>
          </div>
        </div>

        {/* Preferred Schedule */}
        <div className="flex flex-col gap-2.5 w-full">
          <span className="font-inter text-sm font-medium text-[var(--foreground)] leading-[1.43]">
            Preferred Schedule
          </span>
          <div className="flex justify-between w-full gap-2">
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#8B5CF6] flex-shrink-0">
              <span className="font-inter text-[12px] font-semibold text-white">Mon</span>
            </div>
            <div
              className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#EDE9FE] shadow-[0_2px_6px_rgba(139,92,246,0.082)] flex-shrink-0"
              style={{ border: "1.5px solid #8B5CF6" }}
            >
              <span className="font-inter text-[12px] font-semibold text-[#6D28D9]">Tue</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#8B5CF6] flex-shrink-0">
              <span className="font-inter text-[12px] font-semibold text-white">Wed</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)] flex-shrink-0">
              <span className="font-inter text-[12px] font-medium text-[var(--foreground)]">Thu</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)] flex-shrink-0">
              <span className="font-inter text-[12px] font-medium text-[var(--foreground)]">Fri</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)] flex-shrink-0">
              <span className="font-inter text-[12px] font-medium text-[var(--foreground)]">Sat</span>
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-[18px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_2px_6px_rgba(0,0,0,0.063)] flex-shrink-0">
              <span className="font-inter text-[12px] font-medium text-[var(--foreground)]">Sun</span>
            </div>
          </div>

          {/* Time Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-albert-sans text-sm font-medium text-[var(--foreground)]">
              Preferred Time
            </label>
            <div
              className="flex items-center rounded-full bg-[var(--accent)] px-6 py-[18px] gap-2 shadow-[0_0_6px_rgba(139,92,246,0.125)]"
              style={{ border: "1.5px solid #8B5CF6" }}
            >
              <span className="font-albert-sans text-sm font-normal text-[var(--muted-foreground)] flex-1">
                6:00 PM - 7:30 PM
              </span>
              <div className="w-[30px] h-[30px] rounded-full bg-[#8B5CF6] flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Class Type */}
        <div className="flex flex-col gap-2.5 w-full">
          <span className="font-inter text-sm font-medium text-[var(--foreground)] leading-[1.43]">
            Class Type
          </span>
          <div className="flex gap-2.5 w-full">
            <div className="flex flex-col items-center justify-center gap-1 rounded-[20px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_3px_8px_rgba(0,0,0,0.063)] h-20 flex-1 p-4">
              <User size={20} className="text-[var(--muted-foreground)]" />
              <span className="font-inter text-[13px] font-medium text-[var(--foreground)]">Private</span>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-1 rounded-[20px] bg-[#EDE9FE] shadow-[0_4px_12px_rgba(139,92,246,0.188)] h-20 flex-1 p-4"
              style={{ border: "2px solid #8B5CF6" }}
            >
              <Users size={20} className="text-[#8B5CF6]" />
              <div className="flex items-center gap-1">
                <span className="font-inter text-[13px] font-semibold text-[#8B5CF6]">Group</span>
                <div className="w-[18px] h-[18px] rounded-[9px] bg-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 rounded-[20px] bg-[#FAF9FE] border border-[#D4D4D8] shadow-[0_3px_8px_rgba(0,0,0,0.063)] h-20 flex-1 p-4">
              <Tent size={20} className="text-[var(--muted-foreground)]" />
              <span className="font-inter text-[13px] font-medium text-[var(--foreground)]">Camp</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] h-14 w-full shadow-[0_8px_20px_-2px_rgba(139,92,246,0.314)]">
          <Check size={20} className="text-white" />
          <span className="font-inter text-base font-semibold text-white">Register for Class</span>
        </button>

        {/* Footer */}
        <div className="flex items-center justify-center gap-1">
          <span className="font-inter text-[13px] font-normal text-[#71717A]">Already registered?</span>
          <span className="font-inter text-[13px] font-bold text-[#8B5CF6]">View your bookings</span>
        </div>

      </div>
    </main>
  );
}
