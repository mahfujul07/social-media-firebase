import React from "react";
import { FaHome, FaBell } from "react-icons/fa";
import { BsPeopleFill, BsFillChatTextFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <div className="flex items-center p-4 bg-white shadow-md">
        <div className="flex items-center flex-grow">
          <div className="flex items-center space-x-2">
            <Image 
            src="/icon.png"
            width={40}
            height={40}
            href="/" 
            className="text-2xl font-semibold cursor-pointer">
            </Image>
          </div>

          <div className="flex items-center justify-center flex-grow gap-4">
            <div className="flex items-center justify-center space-x-2 cursor-pointer">
              <Link href="/">
                <a>
                  <FaHome className="w-6 h-6" />
                  Home
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/network">
                <a>
                  <BsPeopleFill className="w-6 h-6" />
                  My Network
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/message">
                <a>
                  <BsFillChatTextFill className="w-6 h-6" />
                  Messaging
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/notifications">
                <a>
                  <FaBell className="w-6 h-6" />
                  Notifications
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Link href="/profile">
          <Image
            className="rounded-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/85120196?s=400&u=a2722e9a12be7313ea5195dfabe7589dd8a8e04f&v=4"
            alt="profile_picture"
            width={40}
            height={40}
          />
          </Link>
          <p className="font-semibold pr-3 whitespace-nowrap">Mahfuz</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
