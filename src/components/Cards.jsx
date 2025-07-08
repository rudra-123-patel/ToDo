import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Cards({ data, reference, onDelete }) {
  motion;

  return (
    <motion.div
      drag
      whileDrag={{ scale: 0.8 }}
      dragConstraints={reference}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      className="relative flex-shrink-2 flex-wrap w-44 h-52 sm:w-60 sm:h-72 rounded-[40px] bg-zinc-900/90 text-white  overflow-hidden"
    >
      {data.tag.isOpen && (
        <div
          className={`tag w-full flex items-center justify-center ${
            data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
          } py-4 `}
        >
          <h3 className="text-xl font-semibold capitalize">
            {data.tag.tagTitle}
          </h3>
        </div>
      )}
      <p className="text-md leading-tight tracking-wide mt-5 capitalize font-semibold pl-5 ">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center px-8  justify-center mb-3">
          <span className="py-2 px-4 font-semibold tracking-wide bg-red-500 hover:bg-red-600 rounded-md flex items-center justify-center">
            <button onClick={onDelete}>Delete</button>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
