import axios from "axios"
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const PaypalButton = () => {

    const cartContext = useContext(CartContext);
    const { cart, clear, removeItem, total, totalProducts, totalPrice } = cartContext;

    const renderPaypalButton = () => {
        paypal.
            Buttons({
                createOrder: async () => {
                    try {
                        const response = await axios({
                            url: 'http://localhost:3000/api/ventas',
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: {
                                productos: cart,
                                extras: {
                                    id_usuario: 24
                                }
                            }
                        })
                        
                        return response.data.id
                    } catch (error) {
                        console.log(error)                        
                    }
                },
                onCancel: function (data){
                    console.log('cancelado')
                },
                onApprove: function (data, actions) {
                    console.log(data)
                    return actions.order.capture()
                }
            }).render('#paypal-button-container')
    }

    useEffect(() => {
        renderPaypalButton()
    }, [])
    

    return(
        <div>
            <div id="paypal-button-container"></div>
        </div>
    )

}

export default PaypalButton