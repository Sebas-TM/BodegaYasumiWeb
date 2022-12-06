import { Link, useNavigate } from "react-router-dom"
import { FaShoppingCart as CartIcon } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";

const Navigation = () => {

    const [user, setUser] = useState({}) 

    const navigator = useNavigate()

    useEffect(() => {

        let user = localStorage.getItem('user')
        let token = localStorage.getItem('token')

        console.log(JSON.parse(user))
        console.log(token)

        setUser(JSON.parse(user))
    }, [])

    const handleLogOut = () => {
        setUser({})
        localStorage.clear()
        navigator('/')
    }

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
                    {/* <a className="navegacion__enlace" href="productos.html">
                        ayuda 
                        <i className='icon header__icon bx bxs-help-circle' >
                        </i>
                    </a> */}
                    {
                        user?.idUsuario
                            ? <h5 className="navegacion__enlace"><button onClick={handleLogOut}>Bienvenido {user.nombre}</button></h5>
                            : <>
                                <Link className="navegacion__enlace" to="login">
                                    ingresar 
                                    <i className='icon header__icon bx bxs-lock-alt' />
                                </Link>
                                <Link className="navegacion__enlace navegacion__enlace--rojo" to="register">
                                    registrar 
                                    <i className='icon header__icon bx bxs-user-plus' />
                                </Link>
                            </>
                    }
                    <button title="Button Icon Bars" className="icon__bars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </nav>
                <Link to='cart' className="barra__linea__4 no-margin no-padding">
                    <CartIcon className='icon icon__cart'/>
                </Link>
            </div>
        </>
    )
}

export default Navigation