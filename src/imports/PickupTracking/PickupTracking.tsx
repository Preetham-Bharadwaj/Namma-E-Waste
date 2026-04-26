import svgPaths from "./svg-yd76rpn7i2";
import imgMapSection from "./4e25cfc536ae424cf222af830aa970d86987621b.png";
import imgRaviKProfile from "./2f9ed622f47c9ea50f4be378023a9a7133293570.png";

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#0f766e] inset-[-8px_-2.02px_-8px_-2px] rounded-[9999px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[2px] relative size-full">
        <div className="bg-[rgba(255,255,255,0)] h-[44px] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Overlay+Shadow" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[9999px] shrink-0 z-[2]" data-name="Container">
      <div className="-translate-x-1/2 absolute bottom-[-4.48px] flex items-center justify-center left-1/2 size-[16.971px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[#0f766e] size-[12px]" data-name="Background" />
        </div>
      </div>
      <BackgroundBorder />
      <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
          <path d={svgPaths.p8da0700} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[10px] w-[43px]">
        <p className="leading-[15px]">En Route</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 z-[1]" data-name="Margin">
      <BackgroundBorderShadow />
    </div>
  );
}

function LiveCollectorPin() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[38.59%_58.81%_38.59%_25.47%] isolate items-center" data-name="Live Collector Pin">
      <Container />
      <Margin />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p27200f00} fill="var(--fill-0, #b45309)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function DestinationPin() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[40%_20%_48.75%_72.27%] items-center" data-name="Destination Pin">
      <Container1 />
    </div>
  );
}

function MapSection() {
  return (
    <div className="absolute bg-[#e5eee9] h-[320px] left-0 overflow-clip right-0 top-[64px]" data-name="Map Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[121.25%] left-0 max-w-none top-[-10.62%] w-full" src={imgMapSection} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(251, 249, 248, 0.9) 0%, rgba(251, 249, 248, 0) 15%, rgba(251, 249, 248, 0) 85%, rgb(251, 249, 248) 100%)" }} data-name="Gradient" />
      <LiveCollectorPin />
      <DestinationPin />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[16px] w-[77.78px]">
        <p className="leading-[24px]">Track Live</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#0f766e] rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
      <Container3 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e5eee9] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] w-[101.98px]">
        <p className="leading-[24px]">ID: #WL-9821</p>
      </div>
    </div>
  );
}

function TrackingHeaderStatus() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 p-[16px] right-0 top-0" data-name="Tracking Header Status">
      <Container2 />
      <Background />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-full">
        <p className="leading-[24px]">Pickup Status</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8667 8.01667">
        <g id="Container">
          <path d={svgPaths.p8c91f20} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#0f766e] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px] z-[2]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative self-stretch shrink-0" data-name="Container">
      <Background1 />
      <div className="bg-[#0f766e] h-[48px] shrink-0 w-[2px] z-[1]" data-name="Vertical Divider" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-[135.72px]">
        <p className="leading-[24px]">Pickup Confirmed</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[12px] tracking-[0.6px] w-[108.45px]">
        <p className="leading-[12px]">Today, 08:30 AM</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative self-stretch shrink-0 w-[135.72px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Step1Completed() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Step 1: Completed">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8667 8.01667">
        <g id="Container">
          <path d={svgPaths.p8c91f20} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#0f766e] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px] z-[2]" data-name="Background">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative self-stretch shrink-0" data-name="Container">
      <Background2 />
      <div className="bg-[#0f766e] h-[48px] shrink-0 w-[2px] z-[1]" data-name="Vertical Divider" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-[142.89px]">
        <p className="leading-[24px]">Collector Assigned</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[12px] tracking-[0.6px] w-[105.33px]">
        <p className="leading-[12px]">Today, 09:15 AM</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative self-stretch shrink-0 w-[142.89px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Step2Completed() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Step 2: Completed">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px] z-[2]" data-name="Background">
      <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative self-stretch shrink-0" data-name="Container">
      <Background3 />
      <div className="bg-[#e5eee9] h-[48px] shrink-0 w-[2px] z-[1]" data-name="Vertical Divider" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[16px] w-[67.09px]">
        <p className="leading-[24px]">En Route</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold h-[12px] italic justify-center leading-[0] relative shrink-0 text-[#33423f] text-[12px] tracking-[0.6px] w-[157.78px]">
        <p className="leading-[12px]">Estimated arrival: 3 mins</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative self-stretch shrink-0 w-[157.78px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Step3Active() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Step 3: Active">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e5eee9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="bg-[#647067] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Background4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#647067] text-[16px] w-[82.5px]">
        <p className="leading-[24px]">Completed</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[12px] tracking-[0.6px] w-[106.98px]">
        <p className="leading-[12px]">Pending delivery</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative self-stretch shrink-0 w-[106.98px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Step4Pending() {
  return (
    <div className="content-stretch flex gap-[16px] h-[60px] items-start relative shrink-0 w-full" data-name="Step 4: Pending">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Step1Completed />
      <Step2Completed />
      <Step3Active />
      <Step4Pending />
    </div>
  );
}

function TimelineSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 px-[16px] py-[32px] right-0 top-[434px]" data-name="Timeline Section">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[16.992px] relative shrink-0 w-[16.995px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9955 16.9923">
        <g id="Container">
          <path d={svgPaths.p12cee600} fill="var(--fill-0, #0C5216)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#134e4a] text-[16px] w-[168.52px]">
        <p className="leading-[24px]">2.4kg of Plastic Waste</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #0C5216)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function QuickActionChip() {
  return (
    <div className="absolute bg-[#99f6e4] content-stretch flex items-center justify-between left-[16px] p-[17px] right-[16px] rounded-[12px] top-[814px]" data-name="Quick Action Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(145,215,138,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container23 />
      <Container26 />
    </div>
  );
}

function RaviKProfile() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Ravi K. profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRaviKProfile} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[56px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <RaviKProfile />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-[51.7px]">
        <p className="leading-[24px]">Ravi K.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #f59e0b)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[12px] tracking-[0.6px] w-[92.58px]">
        <p className="leading-[12px]">4.8 - Collector</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108.247px]" data-name="Container">
      <Heading />
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Border />
        <Container28 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3ffd6800} fill="var(--fill-0, #0f766e)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#eef6f3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f766e] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="Button:shadow" />
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function CollectorCard() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[16px] p-[17px] right-[16px] rounded-[12px] top-[344px]" data-name="Collector Card">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_20px_0px_rgba(27,94,32,0.08)]" />
      <Container27 />
      <Container32 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Main Content (Canvas)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MapSection />
        <TrackingHeaderStatus />
        <TimelineSection />
        <QuickActionChip />
        <CollectorCard />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[21px] relative shrink-0 w-[21.027px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0273 21">
        <g id="Container">
          <path d={svgPaths.p390fa040} fill="var(--fill-0, #14532D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[18px] tracking-[-0.45px] w-[87.97px]">
        <p className="leading-[28px]">Namma E-Waste</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #14532D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function HeaderSharedComponentTopAppBar() {
  return (
    <div className="absolute bg-white h-[64px] left-0 top-[-20px] w-[390px]" data-name="Header - Shared Component: TopAppBar">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_20px_0px_rgba(27,94,32,0.08)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
        <Container35 />
        <Button2 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[33.89px]">
        <p className="leading-[18px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container39 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[53.66px]">
        <p className="leading-[18px]">Schedule</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container40 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p303da380} fill="var(--fill-0, #14532D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] w-[32.2px]">
        <p className="leading-[18px]">Track</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container41 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[37.05px]">
        <p className="leading-[18px]">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container42 />
        <Margin4 />
      </div>
    </div>
  );
}

function SharedComponentBottomNavBar() {
  return (
    <div className="absolute bg-white bottom-[-20px] left-0 rounded-tl-[24px] rounded-tr-[24px] w-[390px]" data-name="Shared Component: BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-solid border-t inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_20px_0px_rgba(27,94,32,0.08)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[50.3px] items-center pb-[12px] pl-[41.14px] pr-[41.17px] pt-[13px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p130fc908} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFloatingChatbotBrandAnchor() {
  return (
    <div className="absolute bg-[#0f766e] bottom-[76px] right-[16px] rounded-[9999px] size-[56px]" data-name="Button - Floating Chatbot (Brand Anchor)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px]" data-name="Button - Floating Chatbot (Brand Anchor):shadow" />
        <Container43 />
      </div>
    </div>
  );
}

function MainMobileContainer390X() {
  return (
    <div className="bg-[#f8faf7] h-[844px] relative shrink-0 w-[390px]" data-name="Main - Mobile Container (390x844)">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-px pt-[65px] px-px relative rounded-[inherit] size-full">
        <MainContentCanvas />
        <HeaderSharedComponentTopAppBar />
        <SharedComponentBottomNavBar />
        <ButtonFloatingChatbotBrandAnchor />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function PickupTracking() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Pickup Tracking">
      <MainMobileContainer390X />
    </div>
  );
}
