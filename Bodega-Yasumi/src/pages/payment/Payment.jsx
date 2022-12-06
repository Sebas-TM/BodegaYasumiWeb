import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import Pricings from '../Cart/Pricings'
// import PaypalButton from '../../components/paypal/PaypalButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Payment = ({
  user = {
    correo: 'jabo94454@gmail.com',
    nombre: 'Javier Alejandro',
    telefono: '923200599'
  }
}) => {
  const cartContext = useContext(CartContext);
  const { cart, totalPrice } = cartContext;
  const [isShipping, setShipping] = useState(false)
  const [userClient, setUser] = useState({})

  const navigator = useNavigate()

  useEffect(() => {

    let userLocal = localStorage.getItem('user')
    let tokenLocal = localStorage.getItem('token')

    if (!userLocal) {
      navigator('/')
    }
    setUser(JSON.parse(userLocal))
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
    <section>
      <header className='text-3xl flex items-center p-6 font-sans w-full bg-[#f93449] text-white'>
        Bodega <span className='font-bold'>Yasumi</span>
      </header>
      <section className='flex justify-center gap-4 m-4'>
        <section className='p-4 border-2 rounded-xl w-1/3 h-48 shadow-lg font-sans'>
          <h1 className='text-3xl pb-4'>Identificación</h1>
          <p className='text-xl'><span className='font-bold'>Correo: </span>{user.correo}</p>
          <p className='text-xl'><span className='font-bold'>Nombre: </span>{user.nombre}</p>
          <p className='text-xl'><span className='font-bold'>Teléfono: </span>{user.telefono}</p>
        </section>
        <section className='flex flex-col gap-12 w-1/3 '>
          <section className='p-4 border-2 rounded-xl shadow-lg font-sans'>
            <h1 className='text-3xl mb-4'>Entrega</h1>
            <form>
              <section className='flex gap-4'>
                {/* <button className='text-xl flex items-center' onClick={(e) => setEntrega('entrega')}> */}
                <input onClick={() => setShipping(true)} className="bg-red-500 p-2 cursor-pointer mr-2" type="radio" id="entrega" name="tipoEntrega" value="entrega" /><label htmlFor="entrega">Envío a domicilio</label>
                <input onClick={() => setShipping(false)} className="bg-red-500 p-2 cursor-pointer mr-2" type="radio" id="recojo" name="tipoEntrega" value="recojo" checked/><label htmlFor="recojo">Recojo en tienda</label>
              </section>
              <div className='pt-4'>
                <input type="date" name="" id="" />
              </div>
              {
                isShipping && (
                  <input className='mt-4' type="text" placeholder='Dirección' />
                )
              }
            </form>
          </section>
          <section className='p-4 rounded-xl shadow-lg font-sans'>
            <h1 className='text-3xl mb-4'>Pagos</h1>
            <p className='text-xl text-[#777777]'>No se encontraron métodos de pago</p>
          </section>
        </section>
        <section className='flex flex-col justify-center gap-4 border-2 p-4 rounded-xl w-1/3 shadow-lg font-sans'>
          <Pricings isShipping={isShipping} totalPrice={totalPrice} />
          <div className='flex justify-center'>
            <button type='button' onClick={(e) => handlePayment(e)} className='bg-[#fb3449] text-white py-1 px-8 rounded hover:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed'>Ir a pagar</button>
          </div>
        {/* <PaypalButton/> */}
        </section>
      </section>
    </section>
  )
}
export default Payment