import React from "react";

const Page = () => {
  return (
    <div className="mt-[65px] overflow-hidden py-5 flex flex-col gap-0 items-start relative w-[960px] bg-transparent">
      <div className="flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <div className="px-4 py-3 flex flex-col gap-0 items-start flex-1 self-stretch relative w-full h-full bg-transparent">
          <div className="overflow-hidden rounded-xl relative w-full h-[218px] bg-[url('https://picsum.photos/id/85/218/928')] bg-cover bg-center bg-white"></div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 items-start self-stretch relative w-full bg-transparent">
        <div className="flex gap-3 items-start flex-1 self-stretch relative w-full h-full bg-transparent">
          <div className="rounded-lg border border-[#dbe0e5] p-4 flex gap-3 items-center self-stretch relative w-[458px] h-full bg-white">
            <div className="flex flex-col gap-0 items-center justify-center relative bg-transparent">
              <div className="overflow-hidden relative w-6 h-full bg-transparent">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 5.25H14.4438L15.2378 0.884063C15.3042 0.480197 15.0345 0.0976961 14.6318 0.0245264C14.2291 -0.0486433 13.8421 0.214539 13.7622 0.615937L12.9184 5.25H8.44375L9.23781 0.884063C9.30418 0.480197 9.03451 0.0976961 8.63182 0.0245264C8.22913 -0.0486433 7.84214 0.214539 7.76219 0.615937L6.91938 5.25H2.5C2.08579 5.25 1.75 5.58579 1.75 6C1.75 6.41421 2.08579 6.75 2.5 6.75H6.64656L5.82812 11.25H1C0.585786 11.25 0.25 11.5858 0.25 12C0.25 12.4142 0.585786 12.75 1 12.75H5.55625L4.76219 17.1159C4.68821 17.5234 4.95849 17.9137 5.36594 17.9878C5.41015 17.996 5.45503 18.0001 5.5 18C5.86211 17.9995 6.17215 17.7403 6.23687 17.3841L7.08062 12.75H11.5562L10.7622 17.1159C10.6882 17.5234 10.9585 17.9137 11.3659 17.9878C11.4102 17.996 11.455 18.0001 11.5 18C11.8621 17.9995 12.1721 17.7403 12.2369 17.3841L13.0806 12.75H17.5C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25H13.3534L14.1719 6.75H19C19.4142 6.75 19.75 6.41421 19.75 6C19.75 5.58579 19.4142 5.25 19 5.25V5.25ZM11.8281 11.25H7.35344L8.17188 6.75H12.6466L11.8281 11.25Z"
                    fill="#121417"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start relative bg-transparent">
              <p className="font-bold leading-5 text-base text-[#121417]">
                Category
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-[#dbe0e5] p-4 flex gap-3 items-center self-stretch relative w-[458px] h-full bg-white">
            <div className="flex flex-col gap-0 items-start relative bg-transparent">
              <div className="overflow-hidden relative w-6 h-full bg-transparent">
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3.25C9.92893 3.25 8.25 4.92893 8.25 7C8.25 9.07107 9.92893 10.75 12 10.75C14.0711 10.75 15.75 9.07107 15.75 7C15.75 4.92893 14.0711 3.25 12 3.25V3.25ZM12 9.25C10.7574 9.25 9.75 8.24264 9.75 7C9.75 5.75736 10.7574 4.75 12 4.75C13.2426 4.75 14.25 5.75736 14.25 7C14.25 8.24264 13.2426 9.25 12 9.25V9.25ZM22.5 0.25H1.5C1.08579 0.25 0.75 0.585786 0.75 1V13C0.75 13.4142 1.08579 13.75 1.5 13.75H22.5C22.9142 13.75 23.25 13.4142 23.25 13V1C23.25 0.585786 22.9142 0.25 22.5 0.25V0.25ZM18.1547 12.25H5.84531C5.33369 10.5197 3.98033 9.16631 2.25 8.65469V5.34531C3.98033 4.83369 5.33369 3.48033 5.84531 1.75H18.1547C18.6663 3.48033 20.0197 4.83369 21.75 5.34531V8.65469C20.0197 9.16631 18.6663 10.5197 18.1547 12.25V12.25ZM21.75 3.75344C20.8504 3.36662 20.1334 2.64959 19.7466 1.75H21.75V3.75344ZM4.25344 1.75C3.86662 2.64959 3.14959 3.36662 2.25 3.75344V1.75H4.25344ZM2.25 10.2466C3.14959 10.6334 3.86662 11.3504 4.25344 12.25H2.25V10.2466ZM19.7466 12.25C20.1334 11.3504 20.8504 10.6334 21.75 10.2466V12.25H19.7466Z"
                    fill="#121417"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-0 items-start relative bg-transparent">
              <p className="font-bold leading-5 text-base text-[#121417]">
                $100
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          Product Name
        </h4>
      </div>
      <div className="px-4 pt-1 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <p className="leading-[21px] text-sm text-[#637587]">0x0d7a8c5e</p>
      </div>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          Description
        </h4>
      </div>
      <div className="px-4 pt-1 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <p className="leading-6 text-base text-[#121417]">
          The Great Wave off Kanagawa is a woodblock print by the Japanese
          ukiyo-e artist Hokusai. It was published sometime between 1829 and
          1833 in the late Edo period as the first print in Hokusai&apto;s
          series Thirty-six Views of Mount Fuji.
        </p>
      </div>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          Donate Contract
        </h4>
      </div>
      <div className="px-4 pt-1 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <p className="leading-[21px] text-sm text-[#637587]">0x0d7a8c5e</p>
      </div>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          Github
        </h4>
      </div>
      <div className="px-4 pt-1 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <p className="leading-[21px] text-sm text-[#637587]">
          https://mock/github
        </p>
      </div>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          Backers
        </h4>
      </div>
      <div className="px-4 pt-1 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <p className="leading-6 text-base text-[#121417]">3 backers</p>
      </div>
      <div className="px-4 py-3 flex gap-0 items-start self-stretch relative w-full bg-transparent">
        <div className="overflow-hidden rounded-xl px-5 flex gap-0 justify-center items-center flex-1 relative w-full h-12 bg-[#1a80e5]">
          <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
            <p className="text-center font-bold leading-6 text-base text-white">
              Donate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
