import Image from "next/image";
import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <div className="flex-1">
      <div className="w-[20pc] h-[27vh] bg-white mt-5 rounded-[15px]">
        <div className="flex items-center ml-[10px] p-[10px]">
          <Image
            src="https://yt3.ggpht.com/zIdX1AzNkw6HpJMAELeUcz_U6BMKQApCjThzQ0f_n_uBzxh0B7d8EgG4SlKrCUyu-SfjGZSWmog=s176-c-k-c0x00ffffff-no-rj"
            width={37}
            height={37}
            className="w-[130px] h-[80px] object-cover"
          />
          <div className="">
            <p className="text-start ml-3 mt-[-20]">mashjama</p>
            <p className="text-start ml-3 text-[12px] mt-[-16]">
              Subscribe to my channel
            </p>
          </div>
        </div>
        <div className="flex items-center ml-[10px] p-[10px]">
          <Image
            src="/icon.png"
            width={37}
            height={37}
            className="w-[130px] h-[80px] object-cover"
          />
          <div className="">
            <p className="text-start ml-3 mt-[-20]">mashjama editz</p>
            <p className="text-start ml-3 text-[12px] mt-[-16]">
              Subscribe to my channel
            </p>
          </div>
        </div>
        <div className="flex items-center ml-[10px] p-[10px]">
          <Image
            src="https://yt3.ggpht.com/4ICEvaeYwp0SUICgnbSHeuIDW2mxhJuzQw4u6DrdACtVaVqrSrn_JD9ktXGSmOzfReWlAQnx=s176-c-k-c0x00ffffff-no-rj"
            width={37}
            height={37}
            className="w-[130px] h-[80px] object-cover"
          />
          <div className="">
            <p className="text-start ml-3 mt-[-20]">Discord Sings</p>
            <p className="text-start ml-3 text-[12px] mt-[-16]">
              Subscribe to my channel
            </p>
          </div>
        </div>
      </div>
      <div className="w-[20pc] h-[60vh] bg-white mt-5 rounded-[15px] mb-4">
        <h3 className="text-start ml-[10px]">Suggested For you</h3>
        <div className="mt-[-10]">
          <div className="flex items-center justify-between">
            <div className="flex items-center ml-[10px]">
              <Image
                src="https://picsum.photos/40/40"
                width={40}
                height={40}
                className="ml-[10px] rounded-[50%]"
              />
              <div>
                <p className="ml-3 text-start">Khalid</p>
                <p className="ml-3 text-start mt-[-16] text-sm">
                  Suggested for you
                </p>
              </div>
            </div>
            <div className="bg-[#aaa] p-[10px] mr-[13px] rounded-[50%] cursor-pointer">
              <BsPersonPlusFill width={20} height={20} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center ml-[10px]">
              <Image
                src="https://picsum.photos/40/40"
                width={40}
                height={40}
                className="ml-[10px] rounded-[50%]"
              />
              <div>
                <p className="ml-3 text-start">Mahfuz</p>
                <p className="ml-3 text-start mt-[-16] text-sm">
                  Suggested for you
                </p>
              </div>
            </div>
            <div className="bg-[#aaa] p-[10px] mr-[13px] rounded-[50%] cursor-pointer">
              <BsPersonPlusFill width={20} height={20} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center ml-[10px]">
              <Image
                src="https://picsum.photos/40/40"
                width={40}
                height={40}
                className="ml-[10px] rounded-[50%]"
              />
              <div>
                <p className="ml-3 text-start">Saifullah</p>
                <p className="ml-3 text-start mt-[-16] text-sm">
                  Suggested for you
                </p>
              </div>
            </div>
            <div className="bg-[#aaa] p-[10px] mr-[13px] rounded-[50%] cursor-pointer">
              <BsPersonPlusFill width={20} height={20} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center ml-[10px]">
              <Image
                src="https://picsum.photos/40/40"
                width={40}
                height={40}
                className="ml-[10px] rounded-[50%]"
              />
              <div>
                <p className="ml-3 text-start">Emitter</p>
                <p className="ml-3 text-start mt-[-16] text-sm">
                  Suggested for you
                </p>
              </div>
            </div>
            <div className="bg-[#aaa] p-[10px] mr-[13px] rounded-[50%] cursor-pointer">
              <BsPersonPlusFill width={20} height={20} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center ml-[10px]">
              <Image
                src="https://picsum.photos/40/40"
                width={40}
                height={40}
                className="ml-[10px] rounded-[50%]"
              />
              <div>
                <p className="ml-3 text-start">Rafi</p>
                <p className="ml-3 text-start mt-[-16] text-sm">
                  Suggested for you
                </p>
              </div>
            </div>
            <div className="bg-[#aaa] p-[10px] mr-[13px] rounded-[50%] cursor-pointer">
              <BsPersonPlusFill width={20} height={20} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center ml-[10px]">
              <Image
                src="https://picsum.photos/40/40"
                width={40}
                height={40}
                className="ml-[10px] rounded-[50%]"
              />
              <div>
                <p className="ml-3 text-start">Suzan</p>
                <p className="ml-3 text-start mt-[-16] text-sm">
                  Suggested for you
                </p>
              </div>
            </div>
            <div className="bg-[#aaa] p-[10px] mr-[13px] rounded-[50%] cursor-pointer">
              <BsPersonPlusFill width={20} height={20} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center ml-[10px]">
              <Image
                src="https://picsum.photos/40/40"
                width={40}
                height={40}
                className="ml-[10px] rounded-[50%]"
              />
              <div>
                <p className="ml-3 text-start">Sumon</p>
                <p className="ml-3 text-start mt-[-16] text-sm">
                  Suggested for you
                </p>
              </div>
            </div>
            <div className="bg-[#aaa] p-[10px] mr-[13px] rounded-[50%] cursor-pointer">
              <BsPersonPlusFill width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
