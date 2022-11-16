import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import Pricings from '../Cart/Pricings'

const Payment = ({
  user = {
    correo: 'jabo94454@gmail.com',
    nombre: 'Javier Alejandro',
    telefono: '923200599'
  }
}) => {
  const cartContext = useContext(CartContext);
  const { totalPrice } = cartContext;
  const [tipoEntrega, setEntrega] = useState('')

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
              <button onClick={(e) => setEntrega('entrega')}>
                <input className="bg-red-500 p-2 cursor-pointer" type="radio" name="tipoEntrega" value="entrega"/>Envío a domicilio
              </button>
              <button onClick={(e) => setEntrega('recojo')}>
                <input className="bg-red-500 p-2 cursor-pointer" type="radio" name="tipoEntrega" value="recojo"/>Recojo en tienda
              </button>
            </section>
            <div>
              <input type="date" name="" id="" />
            </div>
            {
              tipoEntrega === 'entrega' && (
                <input className='mt-4' type="text" placeholder='Dirección'/>
                )
            }
          </form>
        </section>
        <section className='border-2 border-gray-900'>
          <h1>Pagos</h1>
        </section>
      </section>
      <section className='flex flex-col justify-center gap-4 border-2 border-gray-900 w-1/3'>
        <Pricings totalPrice={totalPrice}/>
        <div className='flex justify-center'>
          <button className='bg-red-700 text-white py-2 px-8 rounded hover:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed' disabled={!tipoEntrega}>Ir a pagar</button>
        </div>
      </section>
    </section>
  )
}
export default Payment