import React from "react";
import { FaHome, FaBell } from "react-icons/fa";
import { BsPeopleFill, BsFillChatTextFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h1>Loading</h1>;

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
              className="text-2xl font-semibold cursor-pointer"
            ></Image>
          </div>

          <div className="flex items-center justify-center flex-grow gap-4">
            <div className="flex items-center justify-center space-x-2 cursor-pointer">
              <Link href="/">
                <a>
                  <FaHome className="w-6 h-6 ml-2 text-purple-700" />
                  Home
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/network">
                <a>
                  <BsPeopleFill className="w-6 h-6 ml-8 text-purple-700" />
                  My Network
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/message">
                <a>
                  <BsFillChatTextFill className="w-6 h-6 ml-6 text-purple-700" />
                  Messaging
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/notifications">
                <a>
                  <FaBell className="w-6 h-6 ml-7 text-purple-700" />
                  Notifications
                </a>
              </Link>
            </div>
          </div>
        </div>

        {!user && (
          <div className="flex items-center justify-end space-x-4">
            <Link href="/login">
              <a className="px-4 py-2 text-sm font-semibold text-gray-500 rounded-lg hover:bg-gray-100">
                Login
              </a>
            </Link>
          </div>
        )}
        {user && (
          <div className="flex items-center justify-end space-x-4">
            <Link href="/">
              <Image
                onClick={() => auth.signOut()}
                className="rounded-full cursor-pointer"
                src={user?.photoURL}
                alt="profile_picture"
                width={40}
                height={40}
              />
            </Link>
            <p className="font-semibold pr-3 whitespace-nowrap">
              {user?.displayName}{" "}
            </p>

            {/* <button
              onClick={() => auth.signOut()}
              className="text-blue-500 font-semibold"
            >
              Sign Out
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
