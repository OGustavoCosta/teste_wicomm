/* hooks */
import { useRef, useState}  from "react"

/* icons */
import { Menu, X } from "lucide-react"

function Navigation(){  
    const navRef = useRef<HTMLDivElement>(null)

    const [navBar, setNavBar] = useState<boolean>(false)

    return(
        <header className={`header header--navigation fixed top-2.5 z-10 lg:border-0`}>
            <nav className="nav font-pixelify flex justify-between text-light bg-dark z-5 border-[1px]">
                <div className="bg-background-light relative w-36">
                    <img className="nav__logo absolute left-[50%] translate-x-[-50%] top-2.5" src="/images/logos/logo.png" alt="" />
                </div>
                <ul className={`nav__list hidden lg:flex items-center text-[14px] justify-between w-full`}>
                    <li className="nav__item cursor-pointer gap-2  px-5 py-2.5 border-[1px] h-full flex items-center border-light"><img className="aspect-square" src="/icons/menu/menu_01.png" alt="" /> produtos</li>
                    <li className="nav__item cursor-pointer gap-2  px-5 py-2.5 border-[1px] h-full flex items-center border-light"><img className="aspect-square" src="/icons/menu/menu_02.png" alt="" /> coleções</li>

                    <li className="nav__item cursor-pointer p-2.5  border-[1px] h-full flex items-center justify-end border-light grow">
                        <ul className="nav__list flex items-center gap-5">
                            <li className="nav__item cursor-pointer"><a className="nav__link underline-animation before:bg-light" href="">blog</a></li>
                            <li className="nav__item cursor-pointer"><a className="nav__link underline-animation before:bg-light" href="">lookbook</a></li>
                            <li className="nav__item cursor-pointer"><a className="nav__link underline-animation before:bg-light" href="">sobre a Gat</a></li>
                            <li className="nav__item cursor-pointer"><a className="nav__link underline-animation before:bg-light" href="">wishlist</a></li>
                        </ul>
                    </li>

                    <li className="nav__item cursor-pointer p-2.5 gap-2.5 border-[1px] h-full flex items-center border-light">
                        <img className="aspect-square" src="/icons/search.png" alt="" />
                        <input className="nav__search border-b-[1px] border-dark focus:border-light font-light" type="search" name="nav__search" placeholder="digite aqui o que procura"/> 
                    </li>
                    <li className="nav__item cursor-pointer p-2.5 border-[1px] h-full flex items-center border-light"> <img src="/icons/user-cat.png" alt="" /></li>
                    <li className="nav__item cursor-pointer py-2.5 px-5 border-[1px] h-full flex items-center border-light"> <img src="icons/cart.png" alt="" /></li>
                </ul>
                <div className="nav__mobile-icon inline-block lg:hidden cursor-pointer py-2.5 px-5" onClick={() => setNavBar(!navBar)}>
                    <Menu size={25} strokeWidth={1} />
                </div>

                {/* Mobile */}
                <div ref={navRef} className={`nav__mobile lg:hidden bg-background-light text-dark top-0 left-0 h-lvh w-dvw px-[5%] py-5 grid grid-rows-[auto_1fr_auto] gap-8 fixed  transition-all duration-500 ${navBar == true ? 'translate-y-0' : '-translate-y-[110lvh]'}`}>
                    <div className="w-full flex justify-between pr-4.5">
                        <img className="nav__logo" src="/images/logos/logo.png" alt="" />
                        <X size={25} strokeWidth={2} className="nav__mobile-icon inline-block cursor-pointer" onClick={() => setNavBar(!navBar)}/>
                    </div>
                    <ul className="nav__list flex flex-col">
                        <li className="nav__item cursor-pointer">
                            <a className="nav__link flex items-center gap-2 py-2" href="">
                                <img className="w-[20px] aspect-square" src="/icons/user-cat-black.png" alt="" />
                                <span>perfil</span>
                            </a>
                        </li>
                        <li className="nav__item cursor-pointer">
                            <a className="nav__link flex items-center gap-2 py-2" href="">
                                <img className="w-[20px] aspect-square" src="/icons/cart-black.png" alt="" />
                                <span>carrinho</span>
                            </a>
                        </li>
                        <hr className="my-2"/>
                        <li className="nav__item cursor-pointer font-bold"><a className="nav__link inline-block py-2" href="">produtos</a></li>
                        <li className="nav__item cursor-pointer"><a className="nav__link inline-block py-2" href="">colecões</a></li>
                        <li className="nav__item cursor-pointer"><a className="nav__link inline-block py-2" href="">blog</a></li>
                        <li className="nav__item cursor-pointer"><a className="nav__link inline-block py-2" href="">lookbook</a></li>
                        <li className="nav__item cursor-pointer"><a className="nav__link inline-block py-2" href="">sobre a Gat</a></li>
                        <li className="nav__item cursor-pointer"><a className="nav__link inline-block py-2" href="">wishlist</a></li>
                    </ul>
                    <p className="text-sm py-5 text-dark">Copyright © 2025. Cat. Todos os direitos reservados.</p>
                </div>
            </nav>
        </header>
    )
}

export default Navigation