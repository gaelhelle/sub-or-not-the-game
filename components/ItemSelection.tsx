import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../providers/AppProvier";

type Itemprops = {
  number: number;
  disabled?: boolean;
};

const ItemSelection = (props: Itemprops) => {
  const { number, disabled } = props;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={item} key={number}>
      <div
        className={`group relative flex items-center justify-between px-3 h-9 my-3 overflow-hidden transition cursor-default ${
          disabled
            ? "bg-[#555555] shadow-[0_4px_0_#34373B] text-black/20"
            : "bg-gradient-to-r from-[#FD7E31] to-[#FD9962] shadow-[0_4px_0_#C35334] text-[#F96425]"
        }`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-xl font-bold text-black/70">$ {number}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-white/10 rotate-45 w-32 h-10 absolute left-1/4" />
        <div className="bg-white/10 rotate-45 w-32 h-4 absolute left-2/4" />
      </div>
    </motion.div>
  );
};

export default ItemSelection;
