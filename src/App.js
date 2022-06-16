import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const [modle, showModle] = React.useState(false);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route
            exact
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            exact
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            exact
            path="/order"
            element={
              <Order pizza={pizza} modle={modle} showModle={showModle} />
            }
          />
          <Route path="/PizzaJoint" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
