import { useContext, useEffect, useState } from "react";
import Purchasing from "./Purchasing";
import { CartContext } from '../../context/CartContext';

const PurchasingContainer = () => {
  const cartContext = useContext(CartContext);
  const { checkout } = cartContext;

  useEffect(() => {

  }, []);

  return <Purchasing checkout={checkout} />;
};
export default PurchasingContainer;