"use client";

import { useState } from "react";

export default function Home() {
  const [experience, setExperience] = useState("beginner");
  const [classType, setClassType] = useState("group");
  const [selectedDays, setSelectedDays] = useState<string[]>(["Mon", "Wed"]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="min-h-screen bg-[var(--accent)] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-lg p-8 flex flex-col gap-8">

        {/* header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-merriweather text-[32px] font-normal text-[var(--foreground)] leading-tight">
            Tennis Class Registration
          </h1>
          <p className="font-albert-sans text-base text-[var(--muted-foreground)]">
            Sign up for a class that fits your schedule and skill level.
          </p>
        </div>

        <div className="flex flex-col gap-5">

          {/* nameRow */}
          <div className="flex gap-4">
            {/* firstName */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="font-inter text-sm font-medium text-[var(--foreground)]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="font-inter text-sm border border-[var(--border)] rounded-lg px-3 py-2.5 outline-none focus:border-[#7C3AED] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
              />
            </div>
            {/* lastName */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="font-inter text-sm font-medium text-[var(--foreground)]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="font-inter text-sm border border-[var(--border)] rounded-lg px-3 py-2.5 outline-none focus:border-[#7C3AED] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
              />
            </div>
          </div>

          {/* emailField */}
          <div className="flex flex-col gap-1">
            <label className="font-inter text-sm font-medium text-[var(--foreground)]">
              Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="font-inter text-sm border border-[var(--border)] rounded-lg px-3 py-2.5 outline-none focus:border-[#7C3AED] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
            />
          </div>

          {/* phoneField */}
          <div className="flex flex-col gap-1">
            <label className="font-inter text-sm font-medium text-[var(--foreground)]">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="font-inter text-sm border border-[var(--border)] rounded-lg px-3 py-2.5 outline-none focus:border-[#7C3AED] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
            />
          </div>

          {/* Experience Level */}
          <div className="flex flex-col gap-2">
            <span className="font-inter text-sm font-medium text-[var(--foreground)]">
              Experience Level
            </span>
            <div className="flex gap-2">
              {[
                { id: "beginner", label: "Beginner" },
                { id: "intermediate", label: "Intermediate" },
                { id: "advanced", label: "Advanced" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setExperience(id)}
                  className={`font-inter text-sm px-4 py-2 rounded-full border transition-colors ${
                    experience === id
                      ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                      : "bg-white text-[var(--muted-foreground)] border-[var(--border)] hover:border-[#7C3AED]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Schedule */}
          <div className="flex flex-col gap-2">
            <span className="font-inter text-sm font-medium text-[var(--foreground)]">
              Preferred Schedule
            </span>
            {/* daysRow */}
            <div className="flex gap-1.5">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`font-inter text-xs font-medium w-10 h-10 rounded-lg border transition-colors ${
                    selectedDays.includes(day)
                      ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                      : "bg-white text-[var(--muted-foreground)] border-[var(--border)] hover:border-[#7C3AED]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            {/* timeField */}
            <select className="font-inter text-sm border border-[var(--border)] rounded-lg px-3 py-2.5 outline-none focus:border-[#7C3AED] text-[var(--foreground)] bg-white">
              <option>Morning (8am – 12pm)</option>
              <option>Afternoon (12pm – 5pm)</option>
              <option>Evening (5pm – 9pm)</option>
            </select>
          </div>

          {/* Class Type */}
          <div className="flex flex-col gap-2">
            <span className="font-inter text-sm font-medium text-[var(--foreground)]">
              Class Type
            </span>
            <div className="flex gap-3">
              {/* classPriv */}
              <button
                onClick={() => setClassType("private")}
                className={`font-inter text-sm flex-1 py-3 rounded-xl border transition-colors ${
                  classType === "private"
                    ? "bg-[#7C3AED]/5 border-[#7C3AED] text-[#7C3AED]"
                    : "bg-white border-[var(--border)] text-[var(--foreground)] hover:border-[#7C3AED]"
                }`}
              >
                Private
              </button>
              {/* classGroup */}
              <button
                onClick={() => setClassType("group")}
                className={`font-inter text-sm flex-1 py-3 rounded-xl border transition-colors relative ${
                  classType === "group"
                    ? "bg-[#7C3AED]/5 border-[#7C3AED] text-[#7C3AED]"
                    : "bg-white border-[var(--border)] text-[var(--foreground)] hover:border-[#7C3AED]"
                }`}
              >
                Group
                {classType === "group" && (
                  <span className="absolute -top-2 -right-2 bg-[#7C3AED] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                )}
              </button>
              {/* classCamp */}
              <button
                onClick={() => setClassType("camp")}
                className={`font-inter text-sm flex-1 py-3 rounded-xl border transition-colors ${
                  classType === "camp"
                    ? "bg-[#7C3AED]/5 border-[#7C3AED] text-[#7C3AED]"
                    : "bg-white border-[var(--border)] text-[var(--foreground)] hover:border-[#7C3AED]"
                }`}
              >
                Camp
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="font-inter text-base font-semibold text-white bg-[#7C3AED] rounded-xl py-3.5 flex items-center justify-center gap-2 hover:bg-[#6D28D9] transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M15 4.5L7 12.5L3 8.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Register for Class
        </button>

        {/* footer */}
        <p className="font-inter text-sm text-center text-[var(--muted-foreground)]">
          Already registered?{" "}
          <a href="#" className="text-[#7C3AED] font-medium hover:underline">
            View your bookings
          </a>
        </p>

      </div>
    </div>
  );
}
