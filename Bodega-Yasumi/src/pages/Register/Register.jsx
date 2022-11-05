import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register-wrap">
            <div className="register-html">
                <div className='headerreg'><label htmlFor="tab-2" className="tab">Bodega Yasumi</label></div>
                <form className="register-form">
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Nombre:</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">Apellido paterno:</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">Apellido Materno:</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">Teléfono:</label>
                            <input id="user" type="number" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">DNI:</label>
                            <input id="user" type="number" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">Sexo:</label>
                            <select name="" id="" className='input'>
                            <option disabled value="0">Seleccionar</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                            </select>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Correo:</label>
                            <input id="pass" type="email" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Contraseña:</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Confirmar contraseña:</label>
                            <input id="pass" type="password" className="input" />
                        </div>                        
                    </div>
                    <div className="group">
                            <input type="submit" className="button button__register" value="Registrar" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">
                                <Link to='/login'>¿Ya tiene una cuenta?</Link>
                            </label>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Register