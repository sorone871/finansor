import React, {useState} from "react";
import BotonMenu from "../botones/BotonMenu";
import Menu from "../Menu/Menu";
const Header =() =>{

    const [isOpen, setOpen] = useState(false);

    return(
        <header className="flex justify-between relative container mx-auto p-6">
            <a href="/" className="flex justify-center items-center h-[70px] w-[70px] rounded-full shadow-[12px_12px_24px_#b8bec7,-12px_-12px_24px_#ffffff] transition-all duration-200 ease-in-out
                    active:shadow-[inset_12px_12px_24px_#b8bec7,inset_-12px_-12px_24px_#ffffff]
                    cursor-pointer">
                <div>
                    <img className="w-full h-full" src="/image/FS-1.png" alt="Logo" />
                </div>
            </a>

            <BotonMenu isOpen={isOpen} toggleMenu={() => setOpen(!isOpen)}/>

            {/* Menu */}
            <Menu isOpen={isOpen} />
        </header>
    )
}

export default Header;