import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const containerVarients = {
  hidden: { x: "100vh" },
  visible: { x: 0, transition: { deley: 1.5 } },
  exit: { x: "-100vh", transition: { ease: "easeInOut" } },
};
const Home = () => {
  const h2Varients = {
    hidden: { scale: 0.5 },
    visible: { type: "spring", scale: 1.2 },
  };
  return (
    <motion.div
      className="home container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 variants={h2Varients} initial="hidden" animate="visible">
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          // initial={{ x: "-100vh" }}
          // animate={{ x: 0, deley: 1.5 }}
          // transition={{ type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.1,
            transition: { yoyo: Infinity },
            color: "yellow",
            boxShadow: "0 0 5px white",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
