import { Link } from "react-router-dom"
import { MdDelete as IconDelete } from "react-icons/md";

const ProductCart = ({
    id=1,
    name= 'Atún en lata 300g',
    image= 'https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200',
    price= 5.4,
    quantity= 4,
}) => {
  return (
    <div className="py-5 sm:py-8">
        <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
        <div className="sm:-my-2.5">
            <a href="#" className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
            <img src={image} loading="lazy" alt="Photo by Thái An" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </a>
        </div>

        <div className="flex flex-col justify-between flex-1">
            <div>
            <Link to={`/product/${id}`} className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">{name}</Link>

            <span className="block text-gray-500">{`Precio: s/${price}`}</span>
            <span className="block text-gray-500">{`Cantidad: ${quantity} unidades`}</span>
            </div>

            <div>
            <span className="block text-gray-800 md:text-lg font-bold mb-1">{`s/${price * quantity}`}</span>

            {/* <span className="flex items-center text-gray-500 text-sm gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                In stock
            </span> */}
            </div>
        </div>

        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none pt-4 sm:pt-0">


            <button className="text-red-500 hover:text-red-5000 active:text-red-700 text-sm font-semibold select-none transition duration-100">
                <IconDelete className='text-5xl'/>
            </button>

        </div>
        </div>
    </div>
  )
}
export default ProductCart