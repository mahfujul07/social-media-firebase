import React from "react";
import { FcGallery } from "react-icons/fc";
import { BiHappyAlt } from "react-icons/bi";
import { BiVideoPlus } from "react-icons/bi";
import Image from "next/image";

const ContentPost = () => {
  return (
    <div>
      <div className="w-[94%] bg-white h-[20vh] m-auto mt-5 rounded-[10px]">
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <Image
            src="https://picsum.photos/30/30"
            width={30}
            height={30}
            className="rounded-[50%] ml-[10px]"
            alt="profileimage"
          />
          <input
            type="text"
            className="w-[29pc] ml-[10px] mt-[5px] h-[25px] border-none outline-none"
            placeholder="Whats on your mind?"
          />
        </div>
        <div >
          <div className="flex ml-[10px]">
            <FcGallery className="w-6 h-6 ml-5 mt-12" />
            <BiHappyAlt className="w-6 h-6 ml-5 mt-12" />
            <BiVideoPlus className="w-6 h-6 ml-5 mt-12" />
            <button
              style={{
                marginLeft: "350px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: 6,
                paddingBottom: 6,
                border: "none",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPost;
