import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Model() {
  return (
    <ModelStyles
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        tranistion: { ease: "easeInOut", duration: 1.5 },
      }}
      exit={{ opacity: 0 }}
    >
      <OrderAgain
        initial={{ y: "-100vh" }}
        animate={{ y: 200 }}
        exit={{ y: "-100vh" }}
      >
        <OrderMessage> Lorem ipsum dolor sit amet </OrderMessage>
        <Link to="/PizzaJoint">
          <Orderbtn
            animate={{ scale: 1.1, transition: { yoyo: Infinity } }}
            whileHover={{ animate: false }}
          >
            Order Again
          </Orderbtn>
        </Link>
      </OrderAgain>
    </ModelStyles>
  );
}
const ModelStyles = styled(motion.div)`
  color: black;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #0000007a;
`;
const OrderAgain = styled(motion.div)`
  width: 400px;
  height: 200px;
  color: grey;
  background-color: white;
  font-weight: bold;
  position: relative;
  margin: auto;
  padding: 14px;
  border-radius: 17px;
  box-shadow: 0 0 20px grey;
  bos-sizing: border-box;
  text-align: center;
`;
const Orderbtn = styled(motion.button)`
  color: white;
  background-color: grey;
  font-weight: bold;
  display: block;
`;
const OrderMessage = styled.h1`
  color: grey;
`;
export default Model;
