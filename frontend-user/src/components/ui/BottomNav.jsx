import React from "react";

import { MdWindow } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { TbStopwatch } from "react-icons/tb";
import { FaPlus as FaPlus2 } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiNewsLine } from "react-icons/ri";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-[#736A68] rounded-2xl flex justify-around items-center py-3 shadow-lg z-50 max-w-lg w-full px-2">
      <div className="flex justify-around w-full">
        <div className=" p-3 rounded-xl">
          <MdWindow className="text-white text-xl" />
        </div>
        <div className=" p-3 rounded-xl">
          <BsFillJournalBookmarkFill className="text-white text-xl" />
        </div>
        <div className=" p-3 rounded-xl  ">
          <TbStopwatch className="text-white text-xl" />
        </div>
        <div className=" p-3 rounded-xl  ">
          <RiNewsLine className="text-white text-xl" />
        </div>
        <div className=" p-3 rounded-xl">
          <FaPlus2 className="text-white text-xl" />
        </div>
        <div className=" p-3 rounded-xl">
          <BsQuestionCircleFill className="text-white text-xl" />
        </div>
      </div>
    </nav>
  );
}
