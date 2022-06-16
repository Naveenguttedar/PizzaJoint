import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVarients } from "./Home";
const buttonVariants = {
  hidden: { x: "-100vh", scale: 1.1 },
  visible: { x: 0 },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.4,
                originX: 0,
                transition: { type: "spring", stiffness: 300 },
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={buttonVariants}>
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
