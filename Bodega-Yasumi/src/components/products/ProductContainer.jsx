import React, { useEffect, useState } from 'react'
import { productData } from '../../data/productData'
import ProductList from './ProductList'
import useFetchAndLoad from '../../hooks/useFetchAndLoad'
import { getProducts } from '../../services/product.service'

const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const { loading, callEndpoint } = useFetchAndLoad()

  const handleGetProducts = async() => {
    const response = await callEndpoint(getProducts())

    setProducts(response.data.data)
    console.log(response.data.data)
  }
  
  useEffect(() => {
    // setProducts(productData)
    handleGetProducts()
  }, [])
  
  return (
    <ProductList products={products}/>
  )
}

export default ProductContainer