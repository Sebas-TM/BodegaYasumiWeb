import React from "react"
import Navigation from "./Navigation"

const Header = () => {
    return (
        <>
            <header className="header">
                <Navigation/>
                <div className="header__texto">
                    <h1 className="header__texto--titulo">Bodega Yasumi</h1>
                    <h4 className="header__texto--descripcion">Gran Variedad de Productos</h4>
                    <a href="" className="header__texto--boton">Conoce más</a>
                </div>
            </header>
        </>
    )
}
export default Header