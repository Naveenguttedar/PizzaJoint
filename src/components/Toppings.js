import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVarients } from "./Home";
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVarients}
      className="toppings container"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.4,
                originX: 0,
                color: "yellow",
                type: "spring",
                stiffness: 300,
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button initial={{ x: "-100vh" }} animate={{ x: 0 }}>
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
