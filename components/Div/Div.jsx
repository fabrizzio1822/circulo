import { motion } from "framer-motion";

import "./Div.css";

export const DIV = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: "50%",
        opacity: 0,
        transition: { duration: 0.25, delay, ease: "easeInOut" },
      }}
      transition={{ duration: 0.75, ease: "easeInOut", delay }}
      className="product"
    >
      {children}
      
    </motion.div>
  );
};
