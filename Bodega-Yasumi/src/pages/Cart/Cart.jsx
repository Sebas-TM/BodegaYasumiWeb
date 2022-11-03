import ProductCart from './ProductCart'

const Cart = () => {
    return(
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="mb-6 sm:mb-10 lg:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Carrito de compras</h2>
                    </div>

                    <div className="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">
                    
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>

                    <div className="flex flex-col items-end gap-4">
                    <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
                        <div className="space-y-1">
                        <div className="flex justify-between text-gray-500 gap-4">
                            <span>Subtotal</span>
                            <span>$129.99</span>
                        </div>

                        <div className="flex justify-between text-gray-500 gap-4">
                            <span>Shipping</span>
                            <span>$4.99</span>
                        </div>
                        </div>

                        <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between items-start text-gray-800 gap-4">
                            <span className="text-lg font-bold">Total</span>

                            <span className="flex flex-col items-end">
                            <span className="text-lg font-bold">$134.98 USD</span>
                            <span className="text-gray-500 text-sm">Incluye IGV</span>
                            </span>
                        </div>
                        </div>
                    </div>

                    <button className="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Check out</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Cart