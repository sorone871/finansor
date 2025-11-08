
const Menu = ({isOpen}) => {

    return(
        <nav
      className={`
        absolute top-full right-0 mt-2 w-84 bg-white rounded-lg shadow-lg transition-transform 

        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}
      `}
      style={{ transitionDuration: "300ms" }}
    >
      <ul>
        <li className="p-3 hover:bg-gray-100 cursor-pointer hover:bg-sky-700"> <a href="">Inicio</a></li>
        <li className="p-3 hover:bg-gray-100 cursor-pointer">Perfil</li>
        <li className="p-3 hover:bg-gray-100 cursor-pointer">Configuración</li>
        <li className="p-3 hover:bg-gray-100 cursor-pointer">Cerrar sesión</li>
      </ul>
    </nav>
    )
}
export default Menu;