import {shipping} from '../../utils/pricings.js'

const Pricings = ({totalPrice}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-between items-center w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4'>
        <span>Sub Total:</span>
        <span className='text-title font-bold text-lg my-2'>{`$${totalPrice()}`}</span>
      </div>
      <div className='flex justify-between items-center w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4'>
        <span>Shipping:</span>
        <span className='text-title font-bold text-lg my-2'>{`$${shipping}`}</span>
      </div>
      <hr className='w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4 my-3 border-dashed border-t-2' />
      <div className='flex justify-between items-center w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4'>
        <span>Total:</span>
        <span className='text-secondary font-bold text-lg my-2'>{`$${
          totalPrice() + shipping
        }`}</span>
      </div>
    </div>
  )
}
export default Pricings