import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchAndLoad from '../../hooks/useFetchAndLoad'
import { getPurchases } from '../../services/purchases.service'

const Purchases = () => {

  const [purchases, setPurchase] = useState([
    {
      monto: 79,
      items: 3,
    },
    {
      monto: 35,
      items: 1,
    },
    {
      monto: 62,
      items: 3,
    },
  ])

  const { loading, callEndpoint } = useFetchAndLoad()

  useEffect(() => {
    callEndpoint(getPurchases()).then(res => {
      setPurchase(res.data.data)
  })
  }, [])

  return (
    <section className='h-screen overflow-hidden'>
      <section className="flex items-center pl-4 text-white font-sans uppercase font-bold text-3xl h-24 bg-[#f93449]"><Link to={'/'}>Mis pedidos</Link></section>
      <section className='flex'>
        <section className='w-1/5 h-[95vh] bg-[#e74f5f]'>
          <ul>
            <li></li>
          </ul>
        </section>
        <main className='grid grid-rows-5 grid-flow-col gap-4 p-8'>
          {purchases ? (
            purchases.map((purchase, i) => {
              return (
                <article key={i} className='font-sans w-64 h-44 shadow-xl p-8 rounded-md'>
                  <h2 className='text-3xl mb-3'>{`Compra ${i + 1}`}</h2>
                  <p className='text-[#333] text-lg'>{`Monto: ${purchase.montoTotal}`}</p>
                  <p className='text-[#333] text-lg'>{`${ new Date(purchase.fechaRealiza).toLocaleString()}`}</p>
                </article>
              );
            })) : (
            <p>Sin compras registradas</p>
          )
          }
        </main>
      </section>
    </section>
  )
}
export default Purchases