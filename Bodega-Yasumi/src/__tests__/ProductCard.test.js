import { getProductsMax, getProductsMin } from "../helpers/getProductsFilter"
import { productDataMin, productDataMax } from "../data/productData";
import { expect, test } from 'vitest';


test('Debe ordenar de menor a mayor', () => {
    expect(getProductsMin()).toStrictEqual(productDataMin);
  })

test('Debe ordenar de mayor a menor', () => {
    expect(getProductsMax()).toStrictEqual(productDataMax);
  })