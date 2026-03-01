export default function Home() {
  return (
    <div className="bg-[#0c0c10] min-h-screen overflow-x-auto">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ width: 2200, height: 680, backgroundColor: "#0c0c10" }}
      >

        {/* ── Notes ──────────────────────────────────────────── */}
        <p
          className="absolute font-inter text-[10px] leading-[1.5]"
          style={{ left: 40, top: 30, width: 140, color: "#ffffff66" }}
        >
          full flexibility to explore ideas, both in Figma and directly in code
        </p>
        <p
          className="absolute font-inter text-[10px] leading-[1.5]"
          style={{ left: 200, top: 30, width: 140, color: "#ffffff66" }}
        >
          anybody in the company is able to use this to express ideas.
        </p>
        <p
          className="absolute font-inter text-[10px] leading-[1.5]"
          style={{ left: 40, top: 80, width: 160, color: "#ffffff66" }}
        >
          context, guidelines, metrics, design principles, component library must be extremely clear.
        </p>

        {/* ── Section Labels ─────────────────────────────────── */}
        <span className="absolute font-inter font-medium text-[9px]" style={{ left: 640, top: 175, color: "#ffffff40", letterSpacing: 2 }}>CONTEXT</span>
        <span className="absolute font-inter font-medium text-[9px]" style={{ left: 810, top: 153, color: "#ffffff40", letterSpacing: 2 }}>CLI</span>
        <span className="absolute font-inter font-medium text-[9px]" style={{ left: 1260, top: 65, color: "#ffffff40", letterSpacing: 2 }}>BUILD</span>
        <span className="absolute font-inter font-medium text-[9px]" style={{ left: 1560, top: 173, color: "#ffffff40", letterSpacing: 2 }}>VS CODE</span>
        <span className="absolute font-inter font-medium text-[9px]" style={{ left: 1720, top: 173, color: "#ffffff40", letterSpacing: 2 }}>GIT</span>
        <span className="absolute font-inter font-medium text-[9px]" style={{ left: 1880, top: 176, color: "#ffffff40", letterSpacing: 2 }}>VERCEL</span>

        {/* ── Product Hub ─────────────────────────────────────── */}
        <div
          className="absolute flex flex-col rounded-[6px]"
          style={{ left: 230, top: 120, width: 340, height: 260, backgroundColor: "#16161e", border: "1px solid #2a2a38", paddingTop: 16, paddingBottom: 16, paddingLeft: 20, paddingRight: 20, gap: 6 }}
        >
          <span className="font-inter font-semibold text-[13px]" style={{ color: "#ffffffee" }}>Product Hub</span>
          <div style={{ height: 1, backgroundColor: "#2a2a38" }} />
          <span className="font-inter text-[10px]" style={{ color: "#ffffff90" }}>Production</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffff90" }}>Dev</span>
          <div style={{ height: 1, backgroundColor: "#1e1e28" }} />
          <span className="font-inter text-[10px]" style={{ color: "#ffffffcc" }}>Latest prototype in a repo linked to initiative A</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffff60" }}>&nbsp;&nbsp;Variant prototype on above</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffff60" }}>&nbsp;&nbsp;Variant prototype on above</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffffcc" }}>Latest prototype in a repo linked to initiative B</span>
          <div style={{ height: 1, backgroundColor: "#1e1e28" }} />
          <span className="font-inter text-[10px]" style={{ color: "#ffffff50" }}>Create a new prototype</span>
        </div>

        {/* ── DS Library ──────────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 230, top: 440, width: 120, height: 80, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter font-medium text-[11px]" style={{ color: "#ffffffdd" }}>DS library</span>
          <span className="font-inter text-[9px] leading-[1.4] whitespace-pre-line" style={{ color: "#ffffff80", width: 96 }}>{"Drawings,\nloose Figma concepts."}</span>
        </div>

        {/* ── DS Components ───────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 230, top: 530, width: 120, height: 80, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter font-medium text-[11px]" style={{ color: "#ffffffdd" }}>DS components</span>
          <span className="font-inter text-[9px]" style={{ color: "#ffffff80" }}>Product context</span>
        </div>

        {/* ── Exploration Box ─────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 360, top: 440, width: 120, height: 80, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter font-medium text-[11px]" style={{ color: "#ffffffdd" }}>Exploration</span>
          <span className="font-inter text-[9px] leading-[1.4] whitespace-pre-line" style={{ color: "#ffffff80", width: 96 }}>{"Drawings,\nloose Figma concepts."}</span>
        </div>

        {/* ── Context Box ─────────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 360, top: 530, width: 120, height: 80, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter font-medium text-[11px]" style={{ color: "#ffffffdd" }}>Context</span>
          <span className="font-inter text-[9px]" style={{ color: "#ffffff80" }}>Product context</span>
        </div>

        {/* ── Input Source ────────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 643, top: 190, width: 131, height: 100, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter font-semibold text-[11px]" style={{ color: "#ffffffee" }}>Input</span>
          <span className="font-inter text-[9px]" style={{ color: "#ffffffaa" }}>Prompt</span>
          <span className="font-inter text-[9px]" style={{ color: "#ffffffaa" }}>Jira story</span>
          <span className="font-inter text-[9px]" style={{ color: "#ffffffaa" }}>Existing page, folder, repo</span>
          <span className="font-inter text-[9px]" style={{ color: "#ffffffaa" }}>Design</span>
        </div>

        {/* ── Pencil Editor ───────────────────────────────────── */}
        <div
          className="absolute flex flex-col rounded-[6px]"
          style={{ left: 810, top: 170, width: 320, height: 130, backgroundColor: "#16161e", border: "1px solid #2a2a38", paddingTop: 14, paddingBottom: 14, paddingLeft: 18, paddingRight: 18, gap: 8 }}
        >
          <span className="font-inter text-[10px]" style={{ color: "#ffffff40", width: 280 }}>Create a new page layout...</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffffcc" }}>+Precise context</span>
          <div className="flex" style={{ gap: 12 }}>
            <span className="font-inter text-[10px]" style={{ color: "#ffffff60" }}>Page</span>
            <span className="font-inter text-[10px]" style={{ color: "#ffffff60" }}>Element</span>
          </div>
          <div
            className="flex items-center justify-center rounded-[4px]"
            style={{ width: 60, height: 26, backgroundColor: "#ffffff18", border: "1px solid #ffffff30" }}
          >
            <span className="font-inter font-medium text-[10px]" style={{ color: "#ffffffdd" }}>Run</span>
          </div>
        </div>

        {/* ── Design / code in Pencil ─────────────────────────── */}
        <div
          className="absolute flex flex-col rounded-[6px]"
          style={{ left: 1180, top: 80, width: 320, height: 320, backgroundColor: "#16161e", border: "1px solid #2a2a38", paddingTop: 16, paddingBottom: 16, paddingLeft: 20, paddingRight: 20, gap: 8 }}
        >
          <span className="font-inter font-semibold text-[12px]" style={{ color: "#ffffffee" }}>Design / code in Pencil.</span>
          <div style={{ height: 1, backgroundColor: "#2a2a38" }} />
          <span className="font-inter font-medium text-[11px]" style={{ color: "#ffffffdd" }}>Iterating together</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffff90" }}>Direct manipulation</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffff90" }}>Prompting</span>
          <span className="font-inter text-[10px]" style={{ color: "#ffffff90" }}>Importing from Figma</span>
        </div>

        {/* ── Claude Match ────────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 1560, top: 190, width: 120, height: 100, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter text-[9px] leading-[1.5]" style={{ color: "#ffffffaa", width: 96 }}>Claude to match code in git to code in Pencil.</span>
        </div>

        {/* ── Push to Main ────────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 1720, top: 190, width: 120, height: 100, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter text-[10px] leading-[1.5]" style={{ color: "#ffffffaa", width: 96 }}>Push code to main</span>
        </div>

        {/* ── Deploy / Vercel ─────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 1880, top: 190, width: 120, height: 100, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter text-[9px] leading-[1.5]" style={{ color: "#ffffffaa", width: 96 }}>Redeployed automatically</span>
        </div>

        {/* ── Wave API ────────────────────────────────────────── */}
        <div
          className="absolute flex flex-col justify-center rounded-[6px]"
          style={{ left: 1620, top: 320, width: 120, height: 80, backgroundColor: "#16161e", border: "1px solid #2a2a38", padding: 12, gap: 4 }}
        >
          <span className="font-inter text-[9px] leading-[1.5]" style={{ color: "#ffffffaa", width: 96 }}>Wave API to check accessibility</span>
        </div>

        {/* ── Connector Arrows ────────────────────────────────── */}
        {/* Hub → Input */}
        <div className="absolute" style={{ left: 570, top: 240, width: 73, height: 1, backgroundColor: "#ffffff30" }} />
        {/* Input → Pencil Editor */}
        <div className="absolute" style={{ left: 774, top: 240, width: 36, height: 1, backgroundColor: "#ffffff30" }} />
        {/* Pencil Editor → Design/Pencil */}
        <div className="absolute" style={{ left: 1130, top: 240, width: 50, height: 1, backgroundColor: "#ffffff30" }} />
        {/* Design/Pencil → Claude */}
        <div className="absolute" style={{ left: 1500, top: 240, width: 60, height: 1, backgroundColor: "#ffffff30" }} />
        {/* Claude → Push */}
        <div className="absolute" style={{ left: 1680, top: 240, width: 40, height: 1, backgroundColor: "#ffffff30" }} />
        {/* Push → Deploy */}
        <div className="absolute" style={{ left: 1840, top: 240, width: 40, height: 1, backgroundColor: "#ffffff30" }} />

      </div>
    </div>
  );
}
