import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-wrap">
            <form className="login-html">
                <h2>Ingresar</h2>
                <div className="login-form">
                    <div className="group">
                        <label htmlFor="user" className="label">Usuario</label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Contraseña</label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" />
                        <label htmlFor="check">
                            <span className="icon"></span>
                            Mantener sesion iniciada
                        </label>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Sign In" />
                    </div>
                    <div className="hr"/>
                    <div className="foot-lnk">
                        <Link to="/register">¿Olvidó su contraseña?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login