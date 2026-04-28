import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Cards({ data, reference, onDelete, onEdit }) {
  motion;

  return (
    <motion.div
      drag
      whileDrag={{ scale: 0.8 }}
      dragConstraints={reference}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      className="relative flex-shrink-2 flex-wrap w-44 h-50 sm:w-56 sm:h-64 rounded-[35px] bg-zinc-900/90 text-white  overflow-hidden"
    >
      <div
        className={
          "tag w-full flex items-center justify-center bg-green-600 py-4 "
        }
      >
        <h3 className="text-xl font-semibold capitalize">
          {data.tag.tagTitle}
        </h3>
      </div>
      <p className="text-md leading-tight tracking-wide mt-5 capitalize font-semibold pl-5  ">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center px-4 justify-center mb-3 gap-2">
          <button onClick={onEdit} className="py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base font-semibold tracking-wide bg-blue-500 hover:bg-blue-600 rounded-md flex items-center justify-center">
            Edit
          </button>
          <button onClick={onDelete} className="py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base font-semibold tracking-wide bg-red-500 hover:bg-red-600 rounded-md flex items-center justify-center">
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
