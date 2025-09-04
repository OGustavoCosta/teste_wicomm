import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function Navigation(){  
    const navRef = useRef<HTMLDivElement>(null)
    
    const ToggleNavigation = () => {
        if(navRef.current){
            return navRef.current.classList.toggle('is-active')
        }
    }

    return(
        <header className={`header header--navigation fixed top-2.5 z-10`}>
            <nav className="nav font-pixelify flex justify-between text-light bg-dark z-5">
                <div className="bg-background-light relative w-36">
                    <img className="nav__logo absolute left-[50%] translate-x-[-50%] top-2.5" src="\images\logos\logo.png" alt="" />
                </div>
                <ul className={`nav__list hidden lg:flex items-center text-[14px] justify-between w-full`}>
                    <li className="nav__item cursor-pointer gap-2  px-5 py-2.5 border-[1px] h-full flex items-center border-light"><img className="aspect-square" src="\icons\menu\menu_01.png" alt="" /> produtos</li>
                    <li className="nav__item cursor-pointer gap-2  px-5 py-2.5 border-[1px] h-full flex items-center border-light"><img className="aspect-square" src="\icons\menu\menu_02.png" alt="" /> coleções</li>

                    <li className="nav__item cursor-pointer p-2.5  border-[1px] h-full flex items-center justify-end border-light grow">
                        <ul className="nav__list flex gap-5">
                            <li className="nav__item cursor-pointer"><a className="nav__link" href="">blog</a></li>
                            <li className="nav__item cursor-pointer"><a className="nav__link" href="">lookbook</a></li>
                            <li className="nav__item cursor-pointer"><a className="nav__link" href="">sobre a Gat</a></li>
                            <li className="nav__item cursor-pointer"><a className="nav__link" href="">wishlist</a></li>
                        </ul>
                    </li>

                    <li className="nav__item cursor-pointer p-2.5 border-[1px] h-full flex items-center border-light"> <input className="nav__search border-b-[1px] focus:outline-0 border-dark focus:border-light" type="search" name="nav__search" placeholder="digite aqui o que procura"/> </li>
                    <li className="nav__item cursor-pointer p-2.5 border-[1px] h-full flex items-center border-light"> <img src="\icons\user-cat.png" alt="" /></li>
                    <li className="nav__item cursor-pointer py-2.5 px-5 border-[1px] h-full flex items-center border-light"> <img src="icons\cart.png" alt="" /></li>
                </ul>
                <div className="nav__mobile-icon inline-block lg:hidden cursor-pointer py-2.5 px-5" onClick={ToggleNavigation}>
                    <Menu size={25} strokeWidth={1} />
                </div>

                {/* Mobile */}
                <div ref={navRef} className="nav__mobile lg:hidden bg-light text-background-dark top-0 left-0 h-lvh w-[90vw] px-[5%] py-5 grid grid-rows-[auto_1fr_auto] gap-8 fixed -translate-x-[90vw] transition-all duration-500">
                    <div className="nav__mobile-icon inline-block cursor-pointer" onClick={ToggleNavigation}>
                        <X size={25} strokeWidth={2} />
                    </div>
                    <ul className="nav__list flex flex-col gap-4">
                        <li className="nav__item"><a href="#inicio" className="nav__link" onClick={ToggleNavigation}>Início</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#tecnologias" className="nav__link">Tecnologias</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#projetos" className="nav__link">Projetos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#servicos" className="nav__link">Serviços</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#contato" className="nav__link">Contato</a></li>
                    </ul>
                    <p className="text-sm py-5 text-dark">Copyright © 2025. Gustavo Costa. Todos os direitos reservados.</p>
                </div>
            </nav>
        </header>
    )
}

export default Navigation