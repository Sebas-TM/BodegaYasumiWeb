import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);

  const addCount = () => {
    if (count !== stock) setCount((counter) => counter + 1);
  };

  const reduceCount = () => {
    if (count > 0) setCount((counter) => counter - 1);
  };

  return finish ? (
    <>
      <Link
        to='cart'
        className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
      >
        Terminar la compra
      </Link>
    </>
  ) : (
    <section className='flex justify-between'>
      <div className='flex items-center'>
        <button
          onClick={reduceCount}
          className='btn btn-square btn-outline bg-red-500 text-white p-2 rounded hover:bg-red-500 hover:text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 12L20 12'
            />
          </svg>
        </button>
        <span id='counter' className='flex items-center mx-4 text-2xl'>
          {count}
        </span>
        <button
          onClick={addCount}
          className='btn btn-square btn-outline bg-red-500 text-white p-2 rounded hover:bg-red-600 hover:text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 12L20 12M12 4l0 16'
            />
          </svg>
        </button>
      </div>
      <button
        onClick={() => {
          if (count > 0) {
            onAdd(count);
            setCount(0);
            setFinish(true);
          }
        }}
        className='flex items-center ml-8 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
      >
        Agregar al carrito
      </button>
    </section>
  );
};
export default ItemCount;