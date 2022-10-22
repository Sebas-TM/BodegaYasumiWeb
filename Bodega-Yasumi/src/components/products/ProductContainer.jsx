import React, { useEffect, useState } from 'react'
import { productData } from '../../data/productData'
import ProductList from './ProductList'

const ProductContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productData)
  }, [products])
  
  return (
    <ProductList products={products}/>
  )
}

export default ProductContainer