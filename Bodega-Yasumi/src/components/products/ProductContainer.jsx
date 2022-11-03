import React, { useEffect, useState } from 'react'
import { productData } from '../../data/productData'
import ProductList from './ProductList'
import useFetchAndLoad from '../../hooks/useFetchAndLoad'
import { getProducts } from '../../services/product.service'
import FilterBar from '../bar/FilterBar'

const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState({
    isOrdened: false,
    productsOrdened: {}
  })
  const { loading, callEndpoint } = useFetchAndLoad()

  useEffect(() => {
    console.log('Use Effect Runs!')

    callEndpoint(getProducts()).then(res => {
      setProducts(res.data.data)
    }).catch(error => {

      if (error.code === 'ERR_CANCELED') {
        console.log('Request has been ', error.message)
      }

    })
  }, [])

  return (
    <>
      <FilterBar setOrder={setOrder} />
      <ProductList products={products} />
    </>
  )
}

export default ProductContainer