import { productData } from "../data/productData";

export const getProductsMin = () => {
  return productData.sort((a, b) => {
    return a.price - b.price;
  });
}

export const getProductsMax = () => {
  let productDataMin = getProductsMin();
  return productDataMin.reverse();
}