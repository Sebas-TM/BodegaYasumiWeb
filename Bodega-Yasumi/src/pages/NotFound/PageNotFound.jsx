import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center">

            <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">Hemos buscado a conciencia.</p>
            <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">Página no encontrada</h1>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">Al parecer alguien será despedido. Sin embargo, nos jura que la página no existe. Es posible que la página que buscas se haya eliminado o que la dirección simplemente no exista.</p>

            <Link to="/" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Regresar al home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default PageNotFound