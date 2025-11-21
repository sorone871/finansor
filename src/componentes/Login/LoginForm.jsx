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
            <div className="">
                 {/* Campo Email */}
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo Electronico
                </label>

                {/* Cdiv para posicionar el icono */}
                <div className="relative flex items-center">
                     {/* input EMAIL */}
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="peer  block w-full text-white pl-12 pr-4 py-4 bg-white/10 border border-white/10 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-blue-500/50 backdrop-blur-lg 
                    shadow-2xl shadow-blue-500/20 focus:shadow-blue-500/40
                    transition-all duration-300"
                    placeholder="Tu@email.com"
                    
                    />
                    {/* Icono del email - Absoluto */}
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 text-blue-400/80 peer-focus:text-[#00f3ff]
                    peer-focus:[text-shadow:0_0_10px_rgba(0,243,255,0.7)]">

                       <i className="fas fa-envelope   text-lg
                       "></i> 

                    </div>
                </div>

            </div>

            
        </form>
    )
}

export default LoginForm;