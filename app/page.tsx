import { Compass, Folder, Users, Bookmark, BarChart2, CreditCard, Search, Plus, ArrowUp, MessageCircle, GitBranch } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-8">
      <div className="flex w-full max-w-[1200px] h-[820px] rounded-xl overflow-hidden bg-[#FAFAFA] border border-[#E5E5E5]">

        {/* Sidebar */}
        <aside className="w-[240px] shrink-0 h-full bg-white flex flex-col gap-8 pt-8 pr-6 pb-6 pl-6">

          {/* logo */}
          <div className="flex items-center gap-[10px] w-full">
            <div className="w-7 h-7 rounded-[6px] bg-[#0D6E6E] shrink-0" />
            <span className="font-newsreader text-[20px] font-medium text-[#1A1A1A]">workstream</span>
          </div>

          {/* nav */}
          <nav className="flex flex-col gap-1 w-full">
            {/* navItem1 — active */}
            <div className="flex items-center gap-3 bg-[#F0F5F5] rounded-lg px-[14px] py-[10px] w-full">
              <Compass size={20} className="text-[#0D6E6E]" />
              <span className="font-inter text-sm font-medium text-[#0D6E6E]">Explore</span>
            </div>
            {/* navItem2 */}
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px] w-full">
              <Folder size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Projects</span>
            </div>
            {/* navItem3 */}
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px] w-full">
              <Users size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Collaborators</span>
            </div>
            {/* navItem4 */}
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px] w-full">
              <Bookmark size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Saved</span>
            </div>
            {/* navItem5 — Reports */}
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px] w-full">
              <BarChart2 size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Reports</span>
            </div>
            {/* navItem6 — Billing */}
            <div className="flex items-center gap-3 rounded-lg px-[14px] py-[10px] w-full">
              <CreditCard size={20} className="text-[#888888]" />
              <span className="font-inter text-sm text-[#666666]">Billing</span>
            </div>
          </nav>

          {/* spacer */}
          <div className="flex-1" />

          {/* profileRow */}
          <div className="flex items-center gap-[10px] w-full">
            <div className="w-8 h-8 rounded-full bg-[#0D6E6E] shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Sarah Chen</span>
              <span className="font-inter text-[11px] text-[#888888]">Product Designer</span>
            </div>
          </div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 h-full flex flex-col gap-7 py-8 px-10 overflow-hidden">

          {/* topBar */}
          <div className="flex items-center justify-between w-full shrink-0">
            <h1 className="font-newsreader text-[28px] font-medium text-[#1A1A1A]">Explore</h1>
            {/* topActions */}
            <div className="flex items-center gap-3">
              {/* searchBar */}
              <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-lg px-[14px] py-2 w-[220px]">
                <Search size={16} className="text-[#AAAAAA] shrink-0" />
                <span className="font-inter text-[13px] text-[#AAAAAA]">Search work, people...</span>
              </div>
              {/* shareBtn */}
              <div className="flex items-center gap-2 bg-[#0D6E6E] rounded-lg px-4 py-2">
                <Plus size={16} className="text-white" />
                <span className="font-inter text-[13px] font-medium text-white">Share Work</span>
              </div>
            </div>
          </div>

          {/* Feed Grid */}
          <div className="flex gap-5 flex-1 overflow-hidden">

            {/* col1 */}
            <div className="flex flex-col gap-5 flex-1 overflow-y-auto">

              {/* card1 */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] overflow-hidden shrink-0">
                {/* card1Img */}
                <div className="h-[200px] w-full overflow-hidden">
                  <img src="/images/generated-1772352714527.png" alt="Analytics dashboard redesign" className="w-full h-full object-cover" />
                </div>
                {/* card1Body */}
                <div className="p-4 flex flex-col gap-3 w-full">
                  {/* card1Header */}
                  <div className="flex items-center gap-[10px] w-full">
                    <div className="w-7 h-7 rounded-full bg-[#E07B54] shrink-0" />
                    {/* card1Author */}
                    <div className="flex flex-col gap-[1px]">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Alex Rivera</span>
                      <span className="font-jetbrains-mono text-[10px] font-medium text-[#AAAAAA]">2h ago</span>
                    </div>
                  </div>
                  {/* card1Title */}
                  <p className="font-newsreader text-[15px] font-medium text-[#1A1A1A] leading-[1.4] w-full">
                    Redesigned the analytics dashboard — focused on reducing cognitive load while keeping data density.
                  </p>
                  {/* card1Tags */}
                  <div className="flex gap-1.5 w-full">
                    <span className="bg-[#F0F5F5] rounded px-[10px] py-1 font-jetbrains-mono text-[10px] font-semibold text-[#0D6E6E]">Design</span>
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-jetbrains-mono text-[10px] font-semibold text-[#888888]">Dashboard</span>
                  </div>
                  {/* card1Actions */}
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center gap-1.5">
                      <ArrowUp size={16} className="text-[#AAAAAA]" />
                      <span className="font-jetbrains-mono text-[11px] font-medium text-[#888888]">24</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={16} className="text-[#AAAAAA]" />
                      <span className="font-jetbrains-mono text-[11px] font-medium text-[#888888]">8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* card2 */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] overflow-hidden shrink-0">
                {/* card2Body */}
                <div className="p-4 flex flex-col gap-3 w-full">
                  {/* card2Header */}
                  <div className="flex items-center gap-[10px] w-full">
                    <div className="w-7 h-7 rounded-full bg-[#6B5CE7] shrink-0" />
                    {/* card2Author */}
                    <div className="flex flex-col gap-[1px]">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Mika Tanaka</span>
                      <span className="font-jetbrains-mono text-[10px] font-medium text-[#AAAAAA]">5h ago</span>
                    </div>
                  </div>
                  {/* card2Title */}
                  <p className="font-newsreader text-[15px] font-medium text-[#1A1A1A] leading-[1.4] w-full">
                    Open-sourced our component library. 40+ accessible primitives, zero dependencies. Looking for contributors.
                  </p>
                  {/* card2Tags */}
                  <div className="flex gap-1.5 w-full">
                    <span className="bg-[#F0F5F5] rounded px-[10px] py-1 font-jetbrains-mono text-[10px] font-semibold text-[#0D6E6E]">Open Source</span>
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-jetbrains-mono text-[10px] font-semibold text-[#888888]">Engineering</span>
                  </div>
                  {/* card2Actions */}
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center gap-1.5">
                      <ArrowUp size={16} className="text-[#0D6E6E]" />
                      <span className="font-jetbrains-mono text-[11px] font-medium text-[#0D6E6E]">87</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={16} className="text-[#AAAAAA]" />
                      <span className="font-jetbrains-mono text-[11px] font-medium text-[#888888]">12</span>
                    </div>
                    {/* collabBtn */}
                    <div className="flex items-center gap-1.5 bg-[#F0F5F5] rounded-[6px] px-[10px] py-1">
                      <GitBranch size={14} className="text-[#0D6E6E]" />
                      <span className="font-inter text-[11px] font-medium text-[#0D6E6E]">Collaborate</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* col2 */}
            <div className="flex flex-col gap-5 flex-1 overflow-y-auto">

              {/* card3 */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] overflow-hidden shrink-0">
                {/* card3Img */}
                <div className="h-[160px] w-full overflow-hidden">
                  <img src="/images/generated-1772352747885.png" alt="Mobile banking app v2" className="w-full h-full object-cover" />
                </div>
                {/* card3Body */}
                <div className="p-4 flex flex-col gap-3 w-full">
                  {/* card3Header */}
                  <div className="flex items-center gap-[10px] w-full">
                    <div className="w-7 h-7 rounded-full bg-[#D4A853] shrink-0" />
                    {/* card3Author */}
                    <div className="flex flex-col gap-[1px]">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Jordan Lee</span>
                      <span className="font-jetbrains-mono text-[10px] font-medium text-[#AAAAAA]">1d ago</span>
                    </div>
                  </div>
                  {/* card3Title */}
                  <p className="font-newsreader text-[15px] font-medium text-[#1A1A1A] leading-[1.4] w-full">
                    Shipped v2 of our mobile banking app. Simplified flows, reduced steps to send money from 5 to 2.
                  </p>
                  {/* card3Tags */}
                  <div className="flex gap-1.5 w-full">
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-jetbrains-mono text-[10px] font-semibold text-[#888888]">Mobile</span>
                    <span className="bg-[#F0F0F0] rounded px-[10px] py-1 font-jetbrains-mono text-[10px] font-semibold text-[#888888]">Fintech</span>
                  </div>
                  {/* card3Actions */}
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center gap-1.5">
                      <ArrowUp size={16} className="text-[#AAAAAA]" />
                      <span className="font-jetbrains-mono text-[11px] font-medium text-[#888888]">42</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={16} className="text-[#AAAAAA]" />
                      <span className="font-jetbrains-mono text-[11px] font-medium text-[#888888]">5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* collabSection */}
              <div className="bg-white rounded-[10px] border border-[#E5E5E5] p-4 flex flex-col gap-3.5 shrink-0 w-full">
                {/* collabHeader */}
                <span className="font-jetbrains-mono text-[11px] font-semibold text-[#888888] tracking-[2px]">LOOKING TO BUILD</span>

                {/* person1 */}
                <div className="flex items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-8 h-8 rounded-full bg-[#3B82F6] shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Nina Patel</span>
                      <span className="font-inter text-[11px] text-[#888888]">iOS dev — building a habit tracker</span>
                    </div>
                  </div>
                  {/* p1Btn */}
                  <button className="bg-[#F0F5F5] rounded-[6px] px-[10px] py-1 shrink-0">
                    <span className="font-inter text-[11px] font-medium text-[#0D6E6E]">Connect</span>
                  </button>
                </div>

                {/* divider1 */}
                <div className="h-px bg-[#F0F0F0] w-full" />

                {/* person2 */}
                <div className="flex items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-8 h-8 rounded-full bg-[#10B981] shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-inter text-[13px] font-medium text-[#1A1A1A]">Sam Wright</span>
                      <span className="font-inter text-[11px] text-[#888888]">Brand designer — needs a frontend dev</span>
                    </div>
                  </div>
                  {/* p2Btn */}
                  <button className="bg-[#F0F5F5] rounded-[6px] px-[10px] py-1 shrink-0">
                    <span className="font-inter text-[11px] font-medium text-[#0D6E6E]">Connect</span>
                  </button>
                </div>

                {/* divider2 */}
                <div className="h-px bg-[#F0F0F0] w-full" />

                {/* person3 */}
                <div className="flex items-center gap-3 w-full">
                  <div className="flex items-center gap-[10px]">
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
