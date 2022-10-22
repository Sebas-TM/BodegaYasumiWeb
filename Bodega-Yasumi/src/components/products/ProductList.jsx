import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <main className="grid section">
        {
            products.map((product, i) => (
                <ProductCard
                    key={i}
                    name={product.name}
                    price={product.price}
                    image={product.image}/>
            ))
        }
    </main>
  )
}

export default ProductList