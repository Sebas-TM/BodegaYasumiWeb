import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import useFetchAndLoad from '../../hooks/useFetchAndLoad'
import { registerUser } from '../../services/user.service'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { loading, callEndpoint } = useFetchAndLoad()

    const navigator = useNavigate()

    const handleRegister = (data) => {
        console.log(data)
        callEndpoint(registerUser(data)).then(res => {
            console.log(res)
            navigator('/login')
        })
    }

    return (
        <div className="register-wrap">
            <div className="register-html">
                <div className='headerreg'><label htmlFor="tab-2" className="tab">Bodega Yasumi</label></div>
                <form className="register-form" onSubmit={handleSubmit(handleRegister)}>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="nombre" className="label">Nombre:</label>
                            <input
                                {...register('nombre',
                                    {
                                        required:
                                            { value: true, message: 'El Nombre es requerido' }
                                    })
                                } id="nombre" type="text" className="input" data-type="text" />
                            {errors.nombre && <span> { errors.nombre.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="apellidoPaterno" className="label">Apellido paterno:</label>
                            <input
                                {...register('apellidoPaterno',
                                    {
                                        required:
                                            { value: true, message: 'El Apellido Paterno es requerido' }
                                    })
                                } id="apellidoPaterno" type="text" className="input" data-type="text" />
                            {errors.apellidoPaterno && <span> { errors.apellidoPaterno.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="apellidoMaterno" className="label">Apellido Materno:</label>
                            <input
                                {...register('apellidoMaterno',
                                    {
                                        required:
                                            { value: true, message: 'El Apellido Materno es requerido' }
                                    })
                                } id="apellidoMaterno" type="text" className="input" data-type="text" />
                            {errors.apellidoMaterno && <span> { errors.apellidoMaterno.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="telefono" className="label">Teléfono:</label>
                            <input
                                {...register('telefono',
                                    {
                                        required:
                                            { value: true, message: 'El Telefono es requerido' }
                                    })
                                } id="telefono" type="number" className="input" data-type="number" />
                            {errors.telefono && <span> { errors.telefono.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="dni" className="label">DNI:</label>
                            <input
                                {...register('dni',
                                    {
                                        required:
                                            { value: true, message: 'El dni es requerido' }
                                    })
                                } id="dni" type="number" className="input" data-type="number" />
                            {errors.dni && <span> { errors.dni.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="sexo" className="label">Sexo:</label>
                            <select
                                {...register('sexo',
                                {
                                    required: { value: true, message: 'El sexo es requerido' }
                                })
                            } id="sexo" className="input">
                        
                            <option value="">Seleccionar</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                            
                            </select>
                            {errors.sexo && <span> { errors.sexo.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="label">Correo:</label>
                            <input
                            {...register('correo',
                                {
                                    required: { value: true, message: 'El correo es requerido' }
                                })
                            } id="correo" type="text" className="input" />
                            {errors.correo && <span> { errors.correo.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="contrasena" className="label">Contraseña:</label>
                            <input
                                {...register('contrasena',
                                    {
                                        required:
                                            { value: true, message: 'La contraseña es requerida' }
                                    })
                                } id="contrasena" type="contrasena" className="input" data-type="password" />
                            {errors.contrasena && <span> { errors.contrasena.message } </span>}
                        </div>
                        <div className="group">
                            <label htmlFor="contrasena_confirm" className="label">Confirmar contraseña:</label>
                            <input
                                {...register('contrasena_confirm',
                                    {
                                        required:
                                            { value: true, message: 'La contraseña es requerida' }
                                    })
                                } id="contrasena_confirm" type="contrasena_confirm" className="input" data-type="password" />
                            {errors.contrasena_confirm && <span> { errors.contrasena_confirm.message } </span>}
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