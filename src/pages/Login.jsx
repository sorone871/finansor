import { useState } from 'react';
import BackgroundEffects from "../componentes/helper/BackgroundEffects";


const Login = ({ onLogin }) => { // ✅ Recibir la prop onLogin
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLoginSuccess = () => { // ✅ Quitar el parámetro onLogin
    setLoginSuccess(true);
    // Llamar a la función prop después de un pequeño delay para mostrar el mensaje
    setTimeout(() => {
      onLogin(); // ✅ Usar la prop que viene del padre
    }, 1500);
  };

  const handleLoginError = (error) => {
    setLoginError(error);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
      <BackgroundEffects />
      
      <section className='w-full max-w-md z-10 '>
        <div className="bg-white/10 backdrop-blur-xl p-[1rem] rounded-3xl border-white/20 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-400 hover:-translate-y-2">
            {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/15 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/25 shadow-lg shadow-blue-500/20 text-blue-400 text-3xl">
              <i className="fas fa-wallet"></i>
             <div>

                <img className="w-full h-full" src="/image/FS-1.png" alt="Logo" />
             </div>
            </div>
          </div>

          {/* Título */}
          <header className="text-center mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              FinanSor
            </h1>
            <p className="text-gray-300 mt-2">
              Ingresa a tu cuenta para gestionar tus finanzas personales
            </p>
          </header>


          {/* Mensajes de éxito/error */}
          {loginSuccess && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center backdrop-blur-sm">
              <i className="fas fa-check-circle mr-2"></i>
              ¡Inicio de sesión exitoso! Redirigiendo...
            </div>
          )}

          {loginError && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center backdrop-blur-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {loginError}
            </div>
          )}

           {/* Formulario */}
          {/* <LoginForm 
            onLoginSuccess={handleLoginSuccess}
            onLoginError={handleLoginError}
          /> */}

           {/* Divisor */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-gray-900/80 text-gray-400 backdrop-blur-sm rounded-lg border border-gray-600/30">
                o continuar con
              </span>
            </div>
          </div>

          {/* Login Social */}
          {/* <SocialLogin /> */}

          {/* Registro */}
          <footer className="text-center mt-8">
            <p className="text-gray-400">
              ¿No tienes una cuenta?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Regístrate ahora
              </a>
            </p>
          </footer>
        </div>
      </section>
      
    </main>
  );
}

export default Login;