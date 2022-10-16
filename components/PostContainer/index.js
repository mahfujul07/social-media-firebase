import Image from "next/image";
import React, { useState } from "react";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { BiComment, BiShare, BiDislike } from "react-icons/bi";
import { userAgent } from "next/server";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

const PostContainer = () => {
  const [user] = useAuthState(auth);
  const [Like, setLike] = useState(BsHeart);
  const [unLike, setunLike] = useState(BiDislike);
  const [count, setCount] = useState(1);
  const [countunlikes, setCountunlikes] = useState(1);

  const handleLike = () => {
    if (Like === BsHeart) {
      setLike(BsHeartFill);
      setCount(count - 1);
    } else {
      setLike(BsHeart);
      setCount(count + 1);
    }
  };

  const handleUnLike = () => {
    if (unLike === BiDislike) {
      setunLike(BiDislike);
      setCountunlikes(count + 1);
    } else {
      setunLike(BiDislike);
      setCountunlikes(count - 1);
    }
  };

  return (
    <div className="PostContainer">
      <div className="w-[93%] bg-white mt-5 ml-5 rounded-xl">
        <div className="ml-5 mt-3">
          <div className="flex items-center ml-3 ">
            <Image
              src="https://picsum.photos/40/40"
              width={40}
              height={40}
              className="rounded-[50%] ml-3 !mt-2"
              alt="profileimage"
            />
            <div className="">
              <p className="ml-[5px] font-semibold !mt-3 text-start">
                {user?.displayName}
              </p>
              <p className="text-[11px] text-start ml-2 mt-0 text-gray-500">
                Followed by Elon Musk
              </p>
              <p className="ml-[5px] text-gray-500 text-sm !mt-1">1d</p>
            </div>
            {/* <p className="text-[11px] text-start !mt-3 ml-1 text-black">
              Following by a random friend
            </p> */}
            {/* <BsThreeDots className="cursor-pointer place-self-end" /> */}
          </div>
          <p className="text-start  w-[96%] ml-[10px] mt-4 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et
            a quod quia voluptas quae quas ...
          </p>
          <Image
            src="https://picsum.photos/450/450"
            width={450}
            height={450}
            className="rounded-[10px] ml-[10px] m-3 object-contain"
            alt="postimage"
          />
          <div className="flex">
            <div className="flex ml-4 mt-3 mb-3">
              <div
                className="flex items-center cursor-pointer"
                onClick={handleLike}
              >
                <BsHeart src={Like} className="w-5 h-5" />
                <p className="ml-[6px]">{count} Likes</p>
              </div>
              {/* <div className="flex items-center cursor-pointer">
                <BiDislike
                  src={unLike}
                  className="w-5 h-5"
                  onClick={handleUnLike}
                />
                <p className="ml-[6px]">{countunlikes} Un Likes</p>
              </div> */}

              <div className="flex items-center ml-5 cursor-pointer">
                <BiComment className="w-5 h-5" />
                <p className="ml-[6px]">869 Comments</p>
              </div>
            </div>
            <div className="flex items-center ml-[90px] cursor-pointer">
              <BiShare className="w-5 h-5" />
              <p className="ml-[6px]">43 Shares</p>
            </div>
          </div>
          {/* <div className="">
            <Image
                src={user?.photoURL}
                width={40}
                height={40}
                className="rounded-[50%] ml-3 !mt-2"
                alt="profileimage"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
