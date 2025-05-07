import { motion } from "framer-motion";

import "./Title.css";

export const Title = ({ children, delay = 0 }) => {
  return (
    <div className="title-container md:my-[50px] ">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.4, delay: 0 }}
        className="font-bold color-gris "
      >
        {children}
      </motion.h1>
    </div>
  );
};
