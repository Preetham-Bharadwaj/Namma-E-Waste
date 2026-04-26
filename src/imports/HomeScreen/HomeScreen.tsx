import svgPaths from "./svg-4wkiykfvzk";
import imgWasteManagement from "./48ed888e1c0283497a8826e19bca83cbe29ac571.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#134e4a] text-[24px] tracking-[-0.24px] w-full">
        <p className="leading-[31.2px]">Hello, Bengaluru!</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#647067] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[12px]">MONDAY, OCTOBER 23, 2023</p>
      </div>
    </div>
  );
}

function GreetingSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Greeting Section">
      <Heading1 />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#647067] text-[16px] w-full">
          <p className="leading-[normal]">Enter your pincode...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[49px] pr-[17px] py-[16px] relative size-full">
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #717A6D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-[16px] top-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function SearchBarSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search Bar Section">
      <Input />
      <Container2 />
    </div>
  );
}

function WasteManagement() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Waste Management">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[124.31%] left-0 max-w-none top-[-12.15%] w-full" src={imgWasteManagement} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-4.47%_0_54.47%] items-start justify-center opacity-20" data-name="Container">
      <WasteManagement />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[25px] mb-0">{`Recycle & Earn`}</p>
        <p className="leading-[25px]">Credits</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#b45309] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[74.48px]">
        <p className="leading-[15px]">LEARN MORE</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[217.33px]" data-name="Container">
      <Container6 />
      <Button />
    </div>
  );
}

function SectionBentoPromoCardInjectedDesign() {
  return (
    <div className="bg-[#134e4a] h-[144px] relative rounded-[12px] shadow-[0px_4px_20px_0px_rgba(27,94,32,0.12)] shrink-0 w-full" data-name="Section - Bento Promo Card (Injected Design)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[20px] w-full">
        <p className="leading-[28px]">What are you disposing today?</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-[18.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 27.5">
        <g id="Container">
          <path d={svgPaths.p3ee39400} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eef6f3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container9 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] text-center w-[105.47px]">
          <p className="leading-[24px]">Mobile Phone</p>
        </div>
      </div>
    </div>
  );
}

function MobilePhone() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Mobile Phone">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[21.25px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 21.25">
        <g id="Container">
          <path d={svgPaths.p4f1ea0} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eef6f3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container11 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] text-center w-[53.44px]">
          <p className="leading-[24px]">Laptop</p>
        </div>
      </div>
    </div>
  );
}

function Laptop() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Laptop">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin1 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.5">
        <g id="Container">
          <path d={svgPaths.p15e14500} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#eef6f3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container13 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] text-center w-[78.22px]">
          <p className="leading-[24px]">Television</p>
        </div>
      </div>
    </div>
  );
}

function Television() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Television">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin2 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[25px] relative shrink-0 w-[16.25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 25">
        <g id="Container">
          <path d={svgPaths.p3bf91d16} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#eef6f3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container15 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] text-center w-[56.25px]">
          <p className="leading-[24px]">Battery</p>
        </div>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Battery">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin3 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p28a79bd8} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#eef6f3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container17 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] text-center w-[93px]">
          <p className="leading-[24px]">Refrigerator</p>
        </div>
      </div>
    </div>
  );
}

function Refrigerator() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-3 self-start shrink-0" data-name="Refrigerator">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin4 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[5px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
        <g id="Container">
          <path d={svgPaths.p1512ea90} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#eef6f3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container19 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] text-center w-[43.59px]">
          <p className="leading-[24px]">Other</p>
        </div>
      </div>
    </div>
  );
}

function Other() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-3 self-start shrink-0" data-name="Other">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin5 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[___118px_118px_118px] relative shrink-0 w-full" data-name="Container">
      <MobilePhone />
      <Laptop />
      <Television />
      <Battery />
      <Refrigerator />
      <Other />
    </div>
  );
}

function CategoriesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Categories Section">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[112px] pt-[80px] px-[16px] relative size-full">
        <GreetingSection />
        <SearchBarSection />
        <SectionBentoPromoCardInjectedDesign />
        <CategoriesSection />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p49e8c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFloatingChatbotBubble() {
  return (
    <div className="absolute bg-[#0f766e] bottom-[96px] content-stretch flex items-center justify-center right-[16px] rounded-[9999px] size-[56px]" data-name="Button - Floating Chatbot Bubble">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px]" data-name="Button - Floating Chatbot Bubble:shadow" />
      <Container21 />
    </div>
  );
}

function Container23() {
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

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[18px] tracking-[-0.45px] w-[87.97px]">
        <p className="leading-[28px]">Namma E-Waste</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container23 />
        <Heading />
      </div>
    </div>
  );
}

function Container24() {
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

function Button1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[16px] right-0 top-0" data-name="Header - TopAppBar">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_20px_0px_rgba(27,94,32,0.08)]" />
      <Container22 />
      <Button1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #14532D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] w-[33.89px]">
        <p className="leading-[18px]">Home</p>
      </div>
    </div>
  );
}

function LinkHomeActive() {
  return (
    <div className="relative shrink-0" data-name="Link - Home (Active)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
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

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[53.66px]">
        <p className="leading-[18px]">Schedule</p>
      </div>
    </div>
  );
}

function LinkSchedule() {
  return (
    <div className="relative shrink-0" data-name="Link - Schedule">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[32.2px]">
        <p className="leading-[18px]">Track</p>
      </div>
    </div>
  );
}

function LinkTrack() {
  return (
    <div className="relative shrink-0" data-name="Link - Track">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
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

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[37.05px]">
        <p className="leading-[18px]">Profile</p>
      </div>
    </div>
  );
}

function LinkProfile() {
  return (
    <div className="relative shrink-0" data-name="Link - Profile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[50.3px] items-center left-0 pb-[12px] pl-[41.14px] pr-[41.17px] pt-[13px] right-0 rounded-tl-[24px] rounded-tr-[24px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-solid border-t inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_20px_0px_rgba(27,94,32,0.08)]" />
      <LinkHomeActive />
      <LinkSchedule />
      <LinkTrack />
      <LinkProfile />
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Home Screen">
      <Main />
      <ButtonFloatingChatbotBubble />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}
