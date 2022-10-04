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
                    <label className="header__label" for="buscar"><i className='icon header__icon bx bx-search-alt-2' ></i></label>
                    <input className="header__input" type="text" placeholder="Buscar ..."/>
                </div>
                <nav className="barra__linea__3 ">
                    <a className="navegacion__enlace" href="productos.html">ayuda <i className='icon header__icon bx bxs-help-circle' ></i></a>
                    <a className="navegacion__enlace" href="">ingresar <i className='icon header__icon bx bxs-lock-alt' ></i></a>
                    <a className="navegacion__enlace navegacion__enlace--rojo" href="">registrar <i className='icon header__icon bx bxs-user-plus' ></i></a>
                    <button className="icon__bars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </nav>
                <div className="barra__linea__4 no-margin no-padding">
                    <i className='bx bxs-cart icon icon__cart'></i>
                </div>
            </div>
        </>
    )
}

export default Navigation