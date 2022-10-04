const Login = () => {
    return(
        <div className="container-login">      
            <div className="container-form sign-up">
                <div className="welcome-back">
                <div className="message">
                    <h2>Bienvenido</h2>
                    <p>Si ya tienes una cuenta por favor inicia sesión aquí</p>
                    <button className="sign-up-btn">Iniciar Sesión</button>
                </div>
                </div>
                <form className="formulario">
                    <h2 className="create-account">Crear una cuenta</h2>
                    <div className="iconos">
                        <div className="border-icon">
                            <i className='bx bxl-instagram'></i>
                        </div>
                        <div className="border-icon">
                            <i className='bx bxl-facebook-circle'></i>
                        </div>
                        <div className="border-icon">
                            <i className='bx bxl-linkedin'></i>
                        </div>
                    </div>
                    <p className="cuenta-gratis">Crear una cuenta gratis</p>
                    <input type="text" placeholder="Nombre"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Contraseña"/>
                    <input type="button" value="Registrarse"/>
                </form>
            <div className="container-form sign-in">
            <form className="formulario">
                <h2 className="create-account">Iniciar Sesión</h2>
                <div className="iconos">
                    <div className="border-icon">
                        <i className='bx bxl-instagram'></i>
                    </div>
                    <div className="border-icon">
                        <i className='bx bxl-facebook-circle'></i>
                    </div>
                    <div className="border-icon">
                        <i className='bx bxl-linkedin'></i>
                    </div>
                </div>
                <p className="cuenta-gratis">¿Aún no tienes cuenta?</p>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Contraseña"/>
                <input type="button" value="Inciar sesión"/>
            </form>
            <div className="welcome-back">
                <div className="message">
                    <p>Si aún no tienes una cuenta por favor regístrese aquí</p>
                    <button className="sign-in-btn">Registrarse</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Login