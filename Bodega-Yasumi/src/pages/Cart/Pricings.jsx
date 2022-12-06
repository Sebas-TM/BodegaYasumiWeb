import { useEffect, useState } from 'react';

const Pricings = ({totalPrice, isShipping}) => {

  const [shipping, setShipping] = useState(5)

  useEffect(() => {
    setShipping(isShipping ? 5 : 0)
  }, [isShipping])
  
  return (
    <div className='flex flex-col items-center justify-around'>
      <div className='flex justify-around items-center w-full px-4'>
        <span>Sub Total:</span>
        <span className='text-title font-bold text-lg my-2'>{`$${totalPrice()}`}</span>
      </div>
      {
        isShipping && (
          <div className='flex justify-around items-center w-full px-4'>
            <span>Shipping:</span>
            <span className='text-title font-bold text-lg my-2'>{`$${shipping}`}</span>
          </div>
        )
      }
      <hr className='w-full px-4 my-3 border-dashed border-t-2' />
      <div className='flex justify-around items-center w-full px-4'>
        <span>Total:</span>
        <span className='text-secondary font-bold text-lg my-2'>{`$${
          totalPrice() + shipping
        }`}</span>
      </div>
    </div>
  )
}
export default Pricings