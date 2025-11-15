import { useState } from "react";

//Componente Formulario de Login
const LoginForm = ({onLoginSucces, onLoginError}) =>{
    const [showPassword, setPassword] = useState(false); //Controla si la contraseña es visible
    const [rememberMe, setRememberMe] = useState(false); //Estado del checkbox sesion
    const [isLoading, setIsLoading] = useState(false); // Estado de carga durante el Login 

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = async (e) =>{
        e.preventDefault(); //Previene el comportamiento por defecto del formulario
        setIsLoading(true); // Activa el estado de carga 
        onLoginError(''); // Limpia cualquier error anterior

        //Obtiene los datos del formulario

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        //Simula una peticion a una API (En produccion seria una llamada real)
        setTimeout(()=>{
            setIsLoading(false); //Desactiva el estado de carga

            //Valida las credenciales (Para probar)
            if (email === 'sorone@finansor.com' && password === 'sorone') {
                onLoginSucces(); //Llama a  la funcion de exito si las credenciales son las correctas 
            }else {
                onLoginError('Usuario o contraseña incorrectas.'); //Muestra el error 
            }
        }, 2000); //Simula 2 segundos de delay
    }

    return(
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Email */}
            <div className="">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo Electronico
                </label>

                {/* Cdiv para posicionar el icono */}
                <div className="relative">
                    {/* Icono del email - Absoluto */}
                    <div className="absolute inset-y-0">
                       <i className="fas fa-envelope text-blue-400/80 text-lg"></i> 
                    </div>
                </div>

            </div>

            
        </form>
    )
}

export default LoginForm;