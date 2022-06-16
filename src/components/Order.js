import React from "react";
import { motion } from "framer-motion";
// import { containerVarients } from "./Home";
import Model from "./Model";
const containerVarients = {
  hidden: { x: "100vh" },
  visible: { x: 0, transition: { when: "beforeChildren" } },
};
const toppingVarients = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza, modle, showModle }) => {
  setTimeout(() => {
    showModle((prevValue) => true);
  }, 3000);
  return (
    <>
      <motion.div
        className="container order"
        variants={containerVarients}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 animate={{ scale: 1.3 }}>
          Thank you for your order :)
        </motion.h2>
        <p>You ordered a {pizza.base} pizza with:</p>
        {pizza.toppings.map((topping) => (
          <motion.div variants={toppingVarients} key={topping}>
            {topping}
          </motion.div>
        ))}
      </motion.div>
      {modle && <Model />}
    </>
  );
};

export default Order;
