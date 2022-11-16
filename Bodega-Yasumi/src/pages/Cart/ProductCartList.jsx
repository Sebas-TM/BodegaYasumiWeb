import { Link } from "react-router-dom";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import ProductCart from './ProductCart';
import ProductCart from './Pricings';

const ProductCartList = ({
  items,
  removeItem,
  totalProducts,
  totalPrice,
  clear,
}) => {
  console.log('totalPrice', totalPrice());
  return (
    <div className='mt-4 flex flex-col justify-center items-center'>
      {items.length ? (
        <>
          <h2 className='text-title text-2xl font-semibold text-center mb-0'>
          Mi carrito de compras
          </h2>
          <span className='font-normal text-base block text-center'>{`${totalProducts(
            items
          )}
           ${totalProducts(items) > 1 ? "items" : "item"}`}</span>
          <div className='flex flex-col items-center overflow-y-auto overscroll-y-contain p-4 space-y-4 scrollbar-hide max-h-[30rem] mobile:justify-between w-full mobile:w-4/5 mobile:p-0 tablet:w-2/3 laptop:w-3/5 desktop:w-1/3'>
            {items.map((item, i) => {
              return (
                <ProductCart
                  key={i}
                  item={item}
                  removeItem={removeItem}
                />
              );
            })}
          </div>
          <section className='mt-16 w-full mobile:w-4/5 mobile:p-0 tablet:w-2/3 laptop:w-full px-8'>
            <Pricings totalPrice={totalPrice}/>
            <div className='flex flex-col justify-center items-center mx-4 py-8'>
              <button
                className='my-4 btn btn-outline btn-error'
                onClick={clear}
              >
                Vaciar carrito
              </button>
              <div>
                <Link
                  to='/payment'
                  className='btn btn-primary bg-secondary border-secondary w-full px-4  mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4 hover:bg-secondary-hover hover:border-none bg-red-700 p-4 rounded-md text-white'
                  >
                  Siguiente
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className={`flex flex-col justify-center items-center w-64 p-4`}>
            <p>Your cart is empty</p>
            <CartIcon className='h-16 w-16 m-2' />
            <div className='card-actions pt-2'>
              <Link
                to='/'
                className='btn btn-primary bg-secondary border-secondary w-full px-4 hover:bg-secondary-hover hover:border-none'
              >
                Back to home
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductCartList;