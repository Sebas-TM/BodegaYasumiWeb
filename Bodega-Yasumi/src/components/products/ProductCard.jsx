import React from 'react'
import "../../assets/scss/components/product/productCard.scss";

const ProductCard = ({
    name = "Aceite",
    price = 4.50,
    image = "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42757359-7GhlDHOt.jpg",
}) => {
  return (
    <div className="productoCard">
        <div className="contenedor-imagen">
            <img src={image} className="producto__imagen" alt="imagen del producto"/>
        </div>
        <div className="contenedor-texto">
            <p className="producto__nombre ">{name}</p>
            <div className="grid2">
                <div className="producto__informacion">
                    <p className="producto__precio--titulo">Precio: </p>
                    <p className="producto__precio">{`s/ ${price.toFixed(2)}`}</p>
                </div>
                <div className="producto__boton">
                    <a className="boton" href="">
                        Añadir al carrito
                        <i className="producto_icono"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard