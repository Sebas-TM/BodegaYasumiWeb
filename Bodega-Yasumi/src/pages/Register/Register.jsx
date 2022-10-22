import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register-wrap">
            <div className="register-html">
                <input type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Registrarse</label>
                <form className="register-form">
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Usuario</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Contraseña</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Repetir contraseña</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Correo electrónico</label>
                            <input id="pass" type="text" className="input" />
                        </div>
                        <div className="group">
                            <input type="submit" className="button button__register" value="Sign Up" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">
                                <Link to='/login'>¿Ya tiene una cuenta?</Link>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register