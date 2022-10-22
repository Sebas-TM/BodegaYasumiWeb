import { Link } from "react-router-dom"
import { FaShoppingCart as CartIcon } from "react-icons/fa";

const Navigation = () => {
    return(
        <>
            <div className="barra">
                <div className="barra__linea__1 ">
                    <a className="logo" href="index2.html">
                        <h1 className="logo__nombre no-margin centrar-texto">B<span className="logo__bold">Y</span></h1>
                    </a>
                </div>
                <div className="barra__linea__2">
                    <label className="header__label" htmlFor="buscar"><i className='icon header__icon bx bx-search-alt-2' ></i></label>
                    <input className="header__input" type="text" placeholder="Buscar ..."/>
                </div>
                <nav className="barra__linea__3 ">
                    <a className="navegacion__enlace" href="productos.html">ayuda <i className='icon header__icon bx bxs-help-circle' ></i></a>
                    <Link className="navegacion__enlace" to="login">ingresar <i className='icon header__icon bx bxs-lock-alt' ></i></Link>
                    <a className="navegacion__enlace navegacion__enlace--rojo" href="">registrar <i className='icon header__icon bx bxs-user-plus' ></i></a>
                    <button className="icon__bars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </nav>
                <div className="barra__linea__4 no-margin no-padding">
                    <CartIcon className='icon icon__cart'/>
                </div>
            </div>
        </>
    )
}

export default Navigation