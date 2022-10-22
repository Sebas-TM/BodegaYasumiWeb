const Login = () => {
    return (
        <div className="login-wrap">
            <div className="login-html">
                <input type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Ingresar</label>
                <div className="login-form">
                    <div className="sign-in-htm">
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
                            <label htmlFor="check"><span className="icon"></span>Mantener sesion iniciada</label>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#htmlForgot">¿Olvidó su contraseña?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login