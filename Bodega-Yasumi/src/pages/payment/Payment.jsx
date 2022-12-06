import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import Pricings from '../Cart/Pricings'
// import PaypalButton from '../../components/paypal/PaypalButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Payment = () => {
  const cartContext = useContext(CartContext);
  const { cart, totalPrice } = cartContext;
  const [tipoEntrega, setEntrega] = useState('')
  const [user, setUser] = useState({})

  const navigator = useNavigate()

  useEffect(() => {

    let user = localStorage.getItem('user')
    let token = localStorage.getItem('token')

    if (!user) {
      navigator('/')
    }
    setUser(JSON.parse(user))
  }, [])


  const handlePayment = async (e) => {
    console.log(cart)
    e.preventDefault()
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
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })

    navigator('/')
  }

  return (
    <section className='flex justify-center gap-4 m-4'>
      <section className='border-2 border-gray-900 w-1/3'>
        <h1>Identificación</h1>
        <p><span>Correo: </span>{user.correo}</p>
        <p><span>Nombre: </span>{user.nombre}</p>
        <p><span>Teléfono: </span>{user.telefono}</p>
      </section>
      <section className='flex flex-col gap-4 w-1/3'>
        <section className='border-2 border-gray-900'>
          <h1>Entrega</h1>
          <form>
            <section className='flex gap-4'>
              {/* <button onClick={(e) => setEntrega('entrega')}> */}
              <input onClick={(e) => setEntrega('entrega')} className="bg-red-500 p-2 cursor-pointer" type="radio" id="entrega" name="tipoEntrega" value="entrega" /><label htmlFor="entrega">Envío a domicilio</label>
              {/* </button> */}
              {/* <button onClick={(e) => setEntrega('recojo')}> */}
              <input onClick={(e) => setEntrega('recojo')} className="bg-red-500 p-2 cursor-pointer" type="radio" id="recojo" name="tipoEntrega" value="recojo" /><label htmlFor="recojo">Recojo en tienda</label>
              {/* </button> */}
            </section>
            <div>
              <input type="date" name="" id="" />
            </div>
            {
              tipoEntrega === 'entrega' && (
                <input className='mt-4' type="text" placeholder='Dirección' />
              )
            }
          </form>
        </section>
        <section className='border-2 border-gray-900'>
          <h1>Pagos</h1>
        </section>
      </section>
      <section className='flex flex-col justify-center gap-4 border-2 border-gray-900 w-1/3'>
        <Pricings totalPrice={totalPrice} />
        <div className='flex justify-center'>
          <button type='button' onClick={(e) => handlePayment(e)} className='bg-red-700 text-white py-2 px-8 rounded hover:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed' disabled={!tipoEntrega}>Ir a pagar</button>
        </div>
        {/* <PaypalButton/> */}
      </section>
    </section>
  )
}
export default Payment