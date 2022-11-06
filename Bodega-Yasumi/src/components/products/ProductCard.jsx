import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { FaExpandAlt as ExpandIcon } from 'react-icons/fa'
import "../../assets/scss/components/product/productCard.scss";
import consts from '../../utils/consts'
import ItemCount from './ItemCount';
import { CartContext } from "../../context/CartContext";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ProductCard = ({
    item
}) => {
    const cartContext = useContext(CartContext);
    const { addToCart, cart } = cartContext;
    console.log('cart',cart);
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const itemTemplate = {
        nombre : 'Aceite',
        precio : 4.50,
        brand : 'Belcorp',
        stock : 10,
        descripcion : 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.',
        image : "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42757359-7GhlDHOt.jpg"
    }

    const product = {...itemTemplate, ...item};
     const { nombre, brand, descripcion, precio, stock } = item;

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const onAdd = (qty) => {
        addToCart(product, qty);
    };

    return (
        <div className="productoCard shadow-lg relative">
            <button className='absolute right-0 top-4 p-4 rounded-lg opacity-30 hover:bg-slate-200 hover:opacity-70' title='Open Modal' onClick={openModal}>
                <ExpandIcon className='h-8 w-8' />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Product Modal">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`${consts.API_PUBLIC}${product.Imagen.nombre}`} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{brand?.toUpperCase()}</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{nombre}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <span className="text-gray-600 ml-3">4 Reviews</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                                <p className="leading-relaxed">{descripcion}</p>
                                <ItemCount stock={stock} onAdd={onAdd}/>
                                <div className="flex mt-8 items-center">
                                    <span className="title-font font-medium text-5xl text-gray-900">
                                        {/* {`s/ ${price.toFixed(2)}`} */}
                                        {`s/ ${precio}`}
                                    </span>
                                </div>
                                    {/* <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Agregar al carrito</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button> */}
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
            <div className="contenedor-imagen">
                {/* <img src={image} className="producto__imagen" alt="imagen del producto"/> */}
                <img src={`${consts.API_PUBLIC}${product.Imagen.nombre}`} className="producto__imagen" alt="imagen del producto" />
            </div>
            <div className="contenedor-texto">
                <p className="producto__nombre ">{nombre}</p>
                <div className="grid2">
                    <div className="producto__informacion">
                        <p className="producto__precio--titulo">Precio: </p>
                        {/* <p className="producto__precio">{`s/ ${price.toFixed(2)}`}</p> */}
                        <p className="producto__precio">{`s/ ${precio}`}</p>
                    </div>
                    {/* <div className="producto__boton">
                        <a className="boton" href="">
                            Añadir al carrito
                            <i className="producto_icono" />
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProductCard