import { getProductsMax, getProductsMin } from "../helpers/getProductsFilter"
import { productDataMin, productDataMax } from "../data/productData";

describe('FUNCIONES DEL LISTADO', () => {

  describe('Orden products', () => {
    
    test('Debe ordenar de menor a mayor', () => {
        expect(getProductsMin()).toBe(productDataMin);
      })

    test('Debe ordenar de mayor a menor', () => {
        expect(getProductsMax()).toBe(productDataMax);
      })
  })

})