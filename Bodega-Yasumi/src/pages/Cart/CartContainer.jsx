import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCartList from "./ProductCartList";

const CartContainer = () => {
  const cartContext = useContext(CartContext);
  const { cart, clear, removeItem, total, totalProducts, totalPrice } =
    cartContext;

  return (
    <>
      <ProductCartList
        items={cart}
        clear={clear}
        removeItem={removeItem}
        total={total}
        totalProducts={totalProducts}
        totalPrice={totalPrice}
      />
    </>
  );
};
export default CartContainer;