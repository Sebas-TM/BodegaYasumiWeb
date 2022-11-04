import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import useFetchAndLoad from '../../hooks/useFetchAndLoad'
import { login } from '../../services/user.service'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { loading, callEndpoint } = useFetchAndLoad()
            
    const navigator = useNavigate()

    const handleLogin = (data) => {
        console.log(data)
        
        callEndpoint(login(data)).then(res => {
            navigator('/')
            console.log(res)
        })
    }

    return (
        <div className="login-wrap">
            <form className="login-html" onSubmit={handleSubmit(handleLogin)}>
                <div className="headerlog"><label htmlFor="tab-2" className="tab">Ingresar</label></div>
                <div className="login-form">
                    <div className="group">
                        <label htmlFor="email" className="label">Correo:</label>
                        <input
                            {...register('email',
                                {
                                    required: { value: true, message: 'El email es requerido' }
                                })
                            } id="email" type="text" className="input" />
                        {errors.email && <span> { errors.email.message } </span>}
                    </div>
                    <div className="group">
                        <label htmlFor="password" className="label">Contraseña:</label>
                        <input
                            {...register('password',
                                {
                                    required:
                                        { value: true, message: 'La contraseña es requerida' }
                                })
                            } id="password" type="password" className="input" data-type="password" />
                        {errors.password && <span> { errors.password.message } </span>}
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" />
                        <label htmlFor="check" className='group-check_label'>
                            <span className="icon"></span>
                            Mantener sesion iniciada
                        </label>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Ingresar" />
                    </div>
                    <div className="hr"/>
                    <div className="foot-lnk">
                        <Link to="/register">¿Olvidó su contraseña? | Crear cuenta</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login