import { Compass, Folder, Users, Bookmark, Search, Plus, ArrowUp, MessageCircle, GitBranch } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-8">
      <div className="flex w-full max-w-[1200px] h-[820px] rounded-xl overflow-hidden bg-[#FAFAFA] border border-[#E5E5E5]">

        {/* Sidebar */}
        <aside className="w-[240px] shrink-0 h-full bg-white flex flex-col gap-8 p-6 pt-8 pb-6">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <div className="w-7 h-7 rounded-[6px] bg-[#0D6E6E]" />
            <span className="font-merriweather text-[20px] font-medium text-[#1A1A1A]">workstream</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            <div className="flex items-center gap-3 bg-[#F0F5F5] rounded-lg px-[14px] py-[10px]">
              <Compass size={20} className="text-[#0D6E6E]" />
              <span className="font-inter text-sm font-medium text-[#0D6E6E]">Explore</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px]">
              <Folder size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Projects</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px]">
              <Users size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Collaborators</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px]">
              <Bookmark size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Saved</span>
            </div>
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Profile */}
          <div className="flex items-center gap-[10px]">
            <div className="w-8 h-8 rounded-full bg-[#0D6E6E] shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Sarah Chen</span>
              <span className="font-inter text-[11px] text-[#888888]">Product Designer</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 h-full flex flex-col gap-7 px-10 py-8 overflow-hidden">

          {/* Top Bar */}
          <div className="flex items-center justify-between shrink-0">
            <h1 className="font-merriweather text-[28px] font-medium text-[#1A1A1A]">Explore</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-lg px-[14px] py-2 w-[220px]">
                <Search size={16} className="text-[#AAAAAA] shrink-0" />
                <span className="font-inter text-[13px] text-[#AAAAAA]">Search work, people...</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0D6E6E] rounded-lg px-4 py-2 cursor-pointer">
                <Plus size={16} className="text-white" />
                <span className="font-inter text-[13px] font-medium text-white">Share Work</span>
              </div>
            </div>
          </div>

          {/* Feed Grid */}
          <div className="flex gap-5 flex-1 overflow-hidden">

            {/* Column 1 */}
            <div className="flex flex-col gap-5 flex-1 overflow-y-auto">

              {/* Card 1 */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] overflow-hidden shrink-0">
                <div className="h-[200px] w-full overflow-hidden bg-[#CCCCCC]">
                  <img
                    src="/images/generated-1772352714527.png"
                    alt="Analytics dashboard redesign"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-7 h-7 rounded-full bg-[#E07B54] shrink-0" />
                    <div className="flex flex-col gap-[1px]">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Alex Rivera</span>
                      <span className="font-mono text-[10px] font-medium text-[#AAAAAA]">2h ago</span>
                    </div>
                  </div>
                  <p className="font-merriweather text-[15px] font-medium text-[#1A1A1A] leading-[1.4]">
                    Redesigned the analytics dashboard — focused on reducing cognitive load while keeping data density.
                  </p>
                  <div className="flex gap-1.5">
                    <span className="bg-[#F0F5F5] rounded px-[10px] py-1 font-mono text-[10px] font-semibold text-[#0D6E6E]">Design</span>
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-mono text-[10px] font-semibold text-[#888888]">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <ArrowUp size={16} className="text-[#AAAAAA]" />
                      <span className="font-mono text-[11px] font-medium text-[#888888]">24</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={16} className="text-[#AAAAAA]" />
                      <span className="font-mono text-[11px] font-medium text-[#888888]">8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] overflow-hidden shrink-0">
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-7 h-7 rounded-full bg-[#6B5CE7] shrink-0" />
                    <div className="flex flex-col gap-[1px]">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Mika Tanaka</span>
                      <span className="font-mono text-[10px] font-medium text-[#AAAAAA]">5h ago</span>
                    </div>
                  </div>
                  <p className="font-merriweather text-[15px] font-medium text-[#1A1A1A] leading-[1.4]">
                    Open-sourced our component library. 40+ accessible primitives, zero dependencies. Looking for contributors.
                  </p>
                  <div className="flex gap-1.5">
                    <span className="bg-[#F0F5F5] rounded px-[10px] py-1 font-mono text-[10px] font-semibold text-[#0D6E6E]">Open Source</span>
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-mono text-[10px] font-semibold text-[#888888]">Engineering</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <ArrowUp size={16} className="text-[#0D6E6E]" />
                      <span className="font-mono text-[11px] font-medium text-[#0D6E6E]">87</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={16} className="text-[#AAAAAA]" />
                      <span className="font-mono text-[11px] font-medium text-[#888888]">12</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#F0F5F5] rounded-[6px] px-[10px] py-1 cursor-pointer">
                      <GitBranch size={14} className="text-[#0D6E6E]" />
                      <span className="font-inter text-[11px] font-medium text-[#0D6E6E]">Collaborate</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5 flex-1 overflow-y-auto">

              {/* Card 3 */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] overflow-hidden shrink-0">
                <div className="h-[160px] w-full overflow-hidden bg-[#CCCCCC]">
                  <img
                    src="/images/generated-1772352747885.png"
                    alt="Mobile banking app v2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-7 h-7 rounded-full bg-[#D4A853] shrink-0" />
                    <div className="flex flex-col gap-[1px]">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Jordan Lee</span>
                      <span className="font-mono text-[10px] font-medium text-[#AAAAAA]">1d ago</span>
                    </div>
                  </div>
                  <p className="font-merriweather text-[15px] font-medium text-[#1A1A1A] leading-[1.4]">
                    Shipped v2 of our mobile banking app. Simplified flows, reduced steps to send money from 5 to 2.
                  </p>
                  <div className="flex gap-1.5">
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-mono text-[10px] font-semibold text-[#888888]">Mobile</span>
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-mono text-[10px] font-semibold text-[#888888]">Fintech</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <ArrowUp size={16} className="text-[#AAAAAA]" />
                      <span className="font-mono text-[11px] font-medium text-[#888888]">42</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={16} className="text-[#AAAAAA]" />
                      <span className="font-mono text-[11px] font-medium text-[#888888]">5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaborators Section */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] p-4 flex flex-col gap-3.5 shrink-0">
                <span className="font-mono text-[11px] font-semibold text-[#888888] tracking-[2px]">LOOKING TO BUILD</span>

                {/* Person 1 */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-8 h-8 rounded-full bg-[#3B82F6] shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Nina Patel</span>
                      <span className="font-inter text-[11px] text-[#888888]">iOS dev — building a habit tracker</span>
                    </div>
                  </div>
                  <button className="bg-[#F0F5F5] rounded-[6px] px-[10px] py-1 shrink-0 cursor-pointer">
                    <span className="font-inter text-[11px] font-medium text-[#0D6E6E]">Connect</span>
                  </button>
                </div>

                <div className="h-px bg-[#F0F0F0]" />

                {/* Person 2 */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-8 h-8 rounded-full bg-[#10B981] shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Sam Wright</span>
                      <span className="font-inter text-[11px] text-[#888888]">Brand designer — needs a frontend dev</span>
                    </div>
                  </div>
                  <button className="bg-[#F0F5F5] rounded-[6px] px-[10px] py-1 shrink-0 cursor-pointer">
                    <span className="font-inter text-[11px] font-medium text-[#0D6E6E]">Connect</span>
                  </button>
                </div>

                <div className="h-px bg-[#F0F0F0]" />

                {/* Person 3 */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-[10px] flex-1">
                    <div className="w-8 h-8 rounded-full bg-[#F59E0B] shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Rui Costa</span>
                      <span className="font-inter text-[11px] text-[#888888]">Data eng — open to side projects</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
