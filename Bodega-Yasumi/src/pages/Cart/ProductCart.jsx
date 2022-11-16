import { MdDelete as IconDelete } from "react-icons/md";
import consts from '../../utils/consts';

const ProductCart = ({
    item, removeItem
}) => {
  const {nombre, precio, qty} = item;

  return (
    <div className="py-5 sm:py-8">
        <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
        <div className="sm:-my-2.5">
            <a href="#" className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
            <img src={`${consts.API_PUBLIC}${item.Imagen.nombre}`} loading="lazy" alt="Photo by Thái An" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </a>
        </div>

        <div className="flex flex-col justify-between flex-1">
            <div>
            <span className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">{nombre}</span>

            <span className="block text-gray-500">{`Precio: s/${precio}`}</span>
            <span className="block text-gray-500">{`Cantidad: ${qty} unidades`}</span>
            </div>

            <div>
            <span className="block text-gray-800 md:text-lg font-bold mb-1">{`s/${precio * qty}`}</span>

            {/* <span className="flex items-center text-gray-500 text-sm gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                In stock
            </span> */}
            </div>
        </div>

        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none pt-4 sm:pt-0">

            <button
                className="text-red-500 hover:text-red-5000 active:text-red-700 text-sm font-semibold select-none transition duration-100"
                onClick={(e) => {
                    e.preventDefault();
                    removeItem(item.idProducto);
                }}>
                <IconDelete className='text-5xl'/>
            </button>

        </div>
        </div>
    </div>
  )
}
export default ProductCart