import svgPaths from "./svg-srzxc3vcv0";
import imgAbstractEWasteComponents from "./fd8227291bfb8e8adc0ff02f726d63758cea6c03.png";

function AbstractTechBackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-10" data-name="Abstract Tech Background Pattern">
      <div className="absolute border border-[#99f6e4] border-solid right-[-39px] rounded-[9999px] size-[320px] top-[-84.39px]" data-name="Border" />
      <div className="absolute border border-[#99f6e4] border-solid bottom-[168.8px] left-[-78px] rounded-[9999px] size-[384px]" data-name="Border" />
    </div>
  );
}

function AbstractEWasteComponents() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="abstract e-waste components">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[195%] left-0 max-w-none top-[-47.5%] w-full" src={imgAbstractEWasteComponents} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function VisualAnchorDecorativeImageAtBottom() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col h-[200px] items-start justify-center left-0 opacity-20 right-0" data-name="Visual Anchor: Decorative Image at Bottom">
      <AbstractEWasteComponents />
    </div>
  );
}

function Heading1BrandName() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[-1px]" data-name="Heading 1 - Brand Name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white tracking-[-0.8px] w-[156.39px]">
        <p className="leading-[38.4px]">Namma E-Waste</p>
      </div>
    </div>
  );
}

function Heading1BrandNameMargin() {
  return (
    <div className="absolute h-[46.39px] left-[116.8px] top-[288.41px] w-[156.39px]" data-name="Heading 1 - Brand Name:margin">
      <Heading1BrandName />
    </div>
  );
}

function Tagline() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 max-w-[280px] pb-[0.8px] top-[calc(50%+102.7px)]" data-name="Tagline">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[250.56px]">
        <p className="leading-[28.8px]">Turn Your E-Waste Into Value</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[70px] relative shrink-0 w-[70.091px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.0909 70">
        <g id="Container">
          <path d={svgPaths.p2f556b80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-px relative rounded-[32px] shrink-0 size-[128px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[128px] top-0" data-name="Overlay+Shadow" />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p88b8800} fill="var(--fill-0, #00450D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function CircuitOverlayIconPlaceholder() {
  return (
    <div className="absolute bg-[#99f6e4] bottom-[-8px] content-stretch flex items-center justify-center p-[4px] right-[-8px] rounded-[9999px] size-[48px]" data-name="Circuit Overlay Icon Placeholder">
      <div aria-hidden="true" className="absolute border-4 border-[#0f766e] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px]" data-name="Circuit Overlay Icon Placeholder:shadow" />
      <Container1 />
    </div>
  );
}

function LogoCluster() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Logo Cluster">
      <OverlayBorderOverlayBlur />
      <CircuitOverlayIconPlaceholder />
    </div>
  );
}

function LogoClusterMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[131px] pb-[32px] top-[128.41px]" data-name="Logo Cluster:margin">
      <LogoCluster />
    </div>
  );
}

function CentralBrandingSection() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Central Branding Section">
      <Heading1BrandNameMargin />
      <Tagline />
      <LogoClusterMargin />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[9.912px] relative shrink-0 w-[9.914px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91401 9.91218">
        <g id="Container">
          <path d={svgPaths.p2f459b80} fill="var(--fill-0, #99f6e4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-[89.69px]">
          <p className="leading-[12px]">SUSTAINABLE</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7.99px] items-center px-[17px] py-[9px] relative size-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
        <g id="Container">
          <path d={svgPaths.p35624880} fill="var(--fill-0, #99f6e4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-[78.73px]">
          <p className="leading-[12px]">PROFITABLE</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7.99px] items-center px-[17px] py-[9px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function FeatureChipsModernUiPattern() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-start justify-center relative shrink-0 w-full" data-name="Feature Chips (Modern UI Pattern)">
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex gap-[8px] h-[52px] items-center justify-center relative rounded-[9999px] shrink-0 w-full" data-name="CTA Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[52px] left-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="CTA Button:shadow" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[86.05px]">
        <p className="leading-[24px]">Get Started</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[52.64px]">
        <p className="leading-[24px]">Sign In</p>
      </div>
    </div>
  );
}

function ButtonSecondaryAction() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="Button - Secondary Action">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-center w-[199.86px]">
        <p className="leading-[24px]">{`Already have an account? `}</p>
      </div>
      <Container7 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[2.4px] uppercase w-[147.97px]">
        <p className="leading-[12px]">SKIP ONBOARDING</p>
      </div>
    </div>
  );
}

function SkipLink() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Skip Link">
      <Link />
    </div>
  );
}

function ActionSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Action Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[48px] px-[16px] relative size-full">
        <FeatureChipsModernUiPattern />
        <CtaButton />
        <ButtonSecondaryAction />
        <SkipLink />
      </div>
    </div>
  );
}

function MainContainerMobileViewportOptimized() {
  return (
    <div className="bg-[#0f766e] content-stretch flex flex-col h-[844px] items-start justify-between max-w-[390px] overflow-clip relative shrink-0 w-full" data-name="Main Container (Mobile Viewport Optimized)">
      <div className="absolute bg-gradient-to-b from-[rgba(0,69,13,0.4)] inset-0 to-[#0f766e] via-1/2 via-[#0f766e]" data-name="Background Gradient Layer" />
      <AbstractTechBackgroundPattern />
      <VisualAnchorDecorativeImageAtBottom />
      <div className="h-[48px] shrink-0 w-full" data-name="Top Spacer for Status Bar" />
      <CentralBrandingSection />
      <ActionSection />
      <div className="h-[32px] shrink-0 w-full" data-name="Bottom Safe Area Spacer" />
    </div>
  );
}

export default function SplashScreen() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(27, 94, 32) 0%, rgb(27, 94, 32) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Splash Screen">
      <MainContainerMobileViewportOptimized />
    </div>
  );
}
