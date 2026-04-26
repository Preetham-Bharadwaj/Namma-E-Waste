import svgPaths from "./svg-pqaohbf6u1";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-full">
        <p className="leading-[24px]">Pickup Address</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] w-full">
        <p className="leading-[24px]">House No</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#647067] text-[16px] w-full">
          <p className="leading-[normal]">102-B</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[16px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] w-full">
        <p className="leading-[24px]">Pincode</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#647067] text-[16px] w-full">
          <p className="leading-[normal]">560001</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[16px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] w-full">
        <p className="leading-[24px]">Street Name</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#647067] text-[16px] w-full">
          <p className="leading-[normal]">Green Valley Estate, Sector 4</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[16px] relative size-full">
          <Container6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Container() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__80px_80px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

function AddressFormSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Address Form Section">
      <Heading1 />
      <Container />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-full">
        <p className="leading-[24px]">Select Date</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[38.97px]">
        <p className="leading-[24px]">MON</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[20.16px]">
        <p className="leading-[24px]">22</p>
      </div>
    </div>
  );
}

function ButtonActiveDay() {
  return (
    <div className="absolute bg-[#0f766e] content-stretch flex flex-col h-[80px] items-center justify-center left-0 rounded-[16px] shadow-[0px_4px_12px_0px_rgba(27,94,32,0.15)] top-0 w-[64px]" data-name="Button - Active Day">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[31.94px]">
          <p className="leading-[24px]">TUE</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[20.41px]">
          <p className="leading-[24px]">23</p>
        </div>
      </div>
    </div>
  );
}

function ButtonInactiveDays() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[80px] items-center justify-center left-[76px] p-px rounded-[16px] top-0 w-[64px]" data-name="Button - Inactive Days">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[37.25px]">
          <p className="leading-[24px]">WED</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[20.66px]">
          <p className="leading-[24px]">24</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[80px] items-center justify-center left-[152px] p-px rounded-[16px] top-0 w-[64px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[34.2px]">
          <p className="leading-[24px]">THU</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[20.03px]">
          <p className="leading-[24px]">25</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[80px] items-center justify-center left-[228px] p-px rounded-[16px] top-0 w-[64px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[24.16px]">
          <p className="leading-[24px]">FRI</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[20.47px]">
          <p className="leading-[24px]">26</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[80px] items-center justify-center left-[304px] p-px rounded-[16px] top-0 w-[64px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[30.67px]">
          <p className="leading-[24px]">SAT</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] text-center w-[19.39px]">
          <p className="leading-[24px]">27</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[80px] items-center justify-center left-[380px] p-px rounded-[16px] top-0 w-[64px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[88px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ButtonActiveDay />
      <ButtonInactiveDays />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function DatePickerSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Date Picker Section">
      <Heading2 />
      <Container7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-full">
        <p className="leading-[24px]">Time Slot</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p3db5e500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[65.72px]">
        <p className="leading-[24px]">Morning</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[130.25px]">
        <p className="leading-[20px]">8:00 AM - 11:00 AM</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130.25px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SlotActive() {
  return (
    <div className="bg-[#0f766e] relative rounded-[16px] shrink-0 w-full" data-name="Slot Active">
      <div aria-hidden="true" className="absolute border border-[#134e4a] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container21 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p4f09bc8} fill="var(--fill-0, #41493E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-[78.95px]">
        <p className="leading-[24px]">Afternoon</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[14px] w-[131.64px]">
        <p className="leading-[20px]">12:00 PM - 3:00 PM</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[131.64px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function SlotInactive() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Slot Inactive">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container27 />
          <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
            <div aria-hidden="true" className="absolute border-2 border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Container">
          <path d={svgPaths.p2f8c8280} fill="var(--fill-0, #41493E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-[62.94px]">
        <p className="leading-[24px]">Evening</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[14px] w-[125.27px]">
        <p className="leading-[20px]">4:00 PM - 7:00 PM</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125.27px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function SlotInactive1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Slot Inactive">
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container32 />
          <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
            <div aria-hidden="true" className="absolute border-2 border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <SlotActive />
      <SlotInactive />
      <SlotInactive1 />
    </div>
  );
}

function SectionTimeSlotSelector() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Time Slot Selector">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-full">
          <p className="leading-[24px]">Pickup Summary</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] w-[121.05px]">
          <p className="leading-[24px]">Waste Category</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-[115.48px]">
          <p className="leading-[24px]">{`Plastic & Paper`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-b border-solid inset-0 pointer-events-none" />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[16px] w-[169.3px]">
          <p className="leading-[24px]">Estimated EPR Credits</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[16px] w-[57.81px]">
          <p className="leading-[24px]">+ 14.50</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-b border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#33423f] text-[16px] w-[113.42px]">
        <p className="leading-[24px]">Confirmed Slot</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#10201c] text-[16px] w-[133.97px]">
        <p className="leading-[24px]">Mon, 22 - 8-11am</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
        <Container42 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#99f6e4] content-stretch flex items-start px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#002203] text-[16px] w-[85.59px]">
        <p className="leading-[24px]">Bento Draft</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute right-px top-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[10px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function SectionOrderSummaryCard() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section - Order Summary Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative size-full">
          <Heading4 />
          <Container37 />
          <Container45 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6e7df] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(27,94,32,0.04)]" />
    </div>
  );
}

function SectionMainActionButtonButton() {
  return (
    <div className="bg-[#0f766e] content-stretch flex h-[52px] items-center justify-center relative rounded-[9999px] shadow-[0px_8px_16px_0px_rgba(27,94,32,0.2)] shrink-0 w-full" data-name="Section - Main Action Button to Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[120.92px]">
        <p className="leading-[24px]">Confirm Pickup</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 pb-[160px] pt-[80px] px-[16px] right-0 top-0" data-name="Main">
      <AddressFormSection />
      <DatePickerSection />
      <SectionTimeSlotSelector />
      <SectionOrderSummaryCard />
      <SectionMainActionButtonButton />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1c483e80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFloatingChatbotBrandAnchor() {
  return (
    <div className="absolute bg-[#0f766e] bottom-[96px] content-stretch flex items-center justify-center right-[16px] rounded-[9999px] size-[56px]" data-name="Button - Floating Chatbot (Brand Anchor)">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px]" data-name="Button - Floating Chatbot (Brand Anchor):shadow" />
      <Container46 />
    </div>
  );
}

function Container48() {
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

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container48 />
        <Heading />
      </div>
    </div>
  );
}

function Container49() {
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

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function HeaderTopAppBarSharedComponent() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar (Shared Component)">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_20px_0px_rgba(27,94,32,0.08)]" />
      <Container47 />
      <Button4 />
    </div>
  );
}

function Container50() {
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

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] text-center w-[33.89px]">
        <p className="leading-[18px]">Home</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pd785e0} fill="var(--fill-0, #14532D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] text-center w-[53.66px]">
        <p className="leading-[18px]">Schedule</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container54() {
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

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] text-center w-[32.2px]">
        <p className="leading-[18px]">Track</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container56() {
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

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] text-center w-[37.05px]">
        <p className="leading-[18px]">Profile</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function BottomNavBarSharedComponent() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[50.3px] items-center left-0 pb-[12px] pl-[41.14px] pr-[41.17px] pt-[13px] rounded-tl-[24px] rounded-tr-[24px] w-[390px]" data-name="BottomNavBar (Shared Component)">
      <div aria-hidden="true" className="absolute border-[#e5eee9] border-solid border-t inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_20px_0px_rgba(27,94,32,0.08)]" />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

export default function SchedulePickup() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Schedule Pickup">
      <Main />
      <ButtonFloatingChatbotBrandAnchor />
      <HeaderTopAppBarSharedComponent />
      <BottomNavBarSharedComponent />
    </div>
  );
}
