import svgPaths from "./svg-yd9af05qhi";

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[-1px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#00450d] text-[32px] text-center tracking-[-0.64px] w-[285.45px]">
        <p className="leading-[38.4px]">Pickup Completed!</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="absolute h-[62.39px] left-[52.27px] top-[256px] w-[285.45px]" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#41493e] text-[12px] tracking-[1.2px] uppercase w-[163.23px]">
          <p className="leading-[12px]">TRANSACTION DETAILS</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#964900] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[44.89px]">
          <p className="leading-[15px]">VERIFIED</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(27,94,32,0.05)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c0c9bb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative size-full">
          <Container />
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1afd1800} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#41493e] text-[16px] w-[51.91px]">
        <p className="leading-[24px]">Device</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[16px] w-[171.36px]">
          <p className="leading-[24px]">Smartphone (E-Waste)</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f5f3f3] border-b border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[9.33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32975 10.5">
        <g id="Container">
          <path d={svgPaths.p397d4280} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#41493e] text-[16px] w-[52.67px]">
        <p className="leading-[24px]">Weight</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[16px] w-[43.61px]">
          <p className="leading-[24px]">1.2 kg</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f5f3f3] border-b border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
        <g id="Container">
          <path d={svgPaths.p3f8e080} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#00450d] text-[16px] w-[148.86px]">
        <p className="leading-[24px]">EPR Credits Earned</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#00450d] text-[16px] w-[43.06px]">
        <p className="leading-[24px]">₹ 630</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(145,215,138,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[24px] relative size-full">
          <Container10 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
        <Overlay />
      </div>
    </div>
  );
}

function SummaryCardBentoStyle() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Summary Card (Bento Style)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder />
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c0c9bb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_20px_0px_rgba(27,94,32,0.08)]" />
    </div>
  );
}

function SummaryCardBentoStyleMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[32px] right-[16px] top-[318.39px]" data-name="Summary Card (Bento Style):margin">
      <SummaryCardBentoStyle />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#41493e] text-[16px] text-center w-[167.17px]">
        <p className="leading-[24px]">SHARE YOUR IMPACT</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #964900)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c0c9bb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3ffd6800} fill="var(--fill-0, #25D366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c0c9bb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c0c9bb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function SocialShare() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Social Share">
      <Container14 />
      <Container15 />
    </div>
  );
}

function SocialShareMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pt-[32px] right-[16px] top-[690.39px]" data-name="Social Share:margin">
      <SocialShare />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[34.516px] relative shrink-0 w-[45.878px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.8784 34.5161">
        <g id="Container">
          <path d={svgPaths.p1eb9e380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#00450d] content-stretch flex items-center justify-center relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,69,13,0.24)] shrink-0 size-[128px]" data-name="Background+Shadow">
      <Container19 />
    </div>
  );
}

function SuccessAnimationPlaceholder() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[128px]" data-name="Success Animation Placeholder">
      <div className="absolute flex inset-[-16px] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] w-[100cqw]">
          <div className="bg-[#00450d] opacity-10 rounded-[9999px] size-full" data-name="Background" />
        </div>
      </div>
      <div className="absolute flex inset-[-6.4px] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] w-[100cqw]">
          <div className="bg-[#00450d] opacity-20 rounded-[9999px] size-full" data-name="Background" />
        </div>
      </div>
      <BackgroundShadow />
    </div>
  );
}

function SuccessAnimationPlaceholderMargin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start left-[131px] pb-[32px] top-[96px] w-[128px]" data-name="Success Animation Placeholder:margin">
      <SuccessAnimationPlaceholder />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3bae3440} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="absolute bg-[#00450d] content-stretch flex gap-[8px] h-[52px] items-center justify-center left-[16px] right-[16px] rounded-[9999px] top-[638.39px]" data-name="Action Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[52px] left-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="Action Button:shadow" />
      <Container20 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[159.19px]">
        <p className="leading-[24px]">Download Certificate</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[22px] relative shrink-0 w-[195.66px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#91d78a] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#00450d] text-[16px] top-[10px] w-[195.66px]">
        <p className="leading-[24px]">Schedule Another Pickup</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[97.17px] pb-[24px] pt-[50px] top-[818.39px]" data-name="Margin">
      <Link />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1042.39px] relative shrink-0 w-full" data-name="Main">
      <Heading1Margin />
      <SummaryCardBentoStyleMargin />
      <SocialShareMargin />
      <SuccessAnimationPlaceholderMargin />
      <ActionButton />
      <Margin />
    </div>
  );
}

function Container22() {
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

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#14532d] text-[18px] tracking-[-0.45px] w-[87.97px]">
        <p className="leading-[28px]">Namma E-Waste</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container22 />
        <Container23 />
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

function Button3() {
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
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_20px_0px_rgba(27,94,32,0.08)]" />
      <Container21 />
      <Button3 />
    </div>
  );
}

function Container26() {
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

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[33.89px]">
        <p className="leading-[18px]">Home</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
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

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[53.66px]">
        <p className="leading-[18px]">Schedule</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
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

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#14532d] text-[12px] w-[33.05px]">
        <p className="leading-[18px]">Track</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
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

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[37.05px]">
        <p className="leading-[18px]">Profile</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-white bottom-[0.39px] content-stretch flex gap-[50.1px] items-center left-0 pb-[12px] pl-[41.03px] pr-[41.09px] pt-[13px] right-0 rounded-tl-[24px] rounded-tr-[24px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_20px_0px_rgba(27,94,32,0.08)]" />
      <Container25 />
      <Container28 />
      <Container31 />
      <Container34 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p24855620} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FloatingChatbot() {
  return (
    <div className="absolute bg-[#1b5e20] bottom-[96.39px] content-stretch flex items-center justify-center p-[2px] right-[16px] rounded-[9999px] size-[56px]" data-name="Floating Chatbot">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[56px]" data-name="Floating Chatbot:shadow" />
      <Container37 />
    </div>
  );
}

export default function CompletionCertificate() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Completion Certificate">
      <Main />
      <div className="absolute bg-[#00450d] blur-[32px] left-[-96px] opacity-5 rounded-[9999px] size-[256px] top-[-96px]" data-name="Decorative Top Background Blur" />
      <div className="-translate-y-1/2 absolute bg-[#964900] blur-[32px] opacity-5 right-[-96px] rounded-[9999px] size-[192px] top-[calc(50%+95.8px)]" data-name="Background+Blur" />
      <HeaderTopAppBar />
      <BottomNavBar />
      <FloatingChatbot />
    </div>
  );
}
