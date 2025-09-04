import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react"

function Footer(){
    return(
        <footer className="footer text-gray border-gray">
            <div className="footer__background">
                <section className="section flex flex-wrap pt-5 text-[12px]">
                    <div className="w-full basis-[200px] grow bg-gray flex justify-center items-center p-5">
                        <img src="\images\logos\logo-vertical.png" alt="logo da cat" />
                    </div>
                    <div className="section__grid grid grid-cols-5 w-full basis-[400px] grow h-fit">
                        <div className="section__content section__nav col-span-5">
                            <ul className="section__list uppercase font-bold flex justify-start p-4 border-[1px] flex-wrap gap-3">
                                <li className="section__item"><a className="section__link" href="#">Produtos</a></li>
                                <li className="section__item"><a className="section__link" href="#">Coleções</a></li>
                                <li className="section__item"><a className="section__link" href="#">LookBook</a></li>
                                <li className="section__item"><a className="section__link" href="#">Sobre</a></li>
                                <li className="section__item"><a className="section__link" href="#">WishList</a></li>
                                <li className="section__item"><a className="section__link" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="section__content p-4 border-[1px] flex flex-col gap-5 col-span-2">
                            <h3 className="section__title uppercase font-bold">Formas de Pagamento</h3>
                            <ul className="section__list flex flex-wrap gap-1 justify-start ">
                                <li className="section__item"><img className="section__icon" src="\images\payment\payment-01.jpg" alt="mastercard" /></li>
                                <li className="section__item"><img className="section__icon" src="\images\payment\payment-02.jpg" alt="" /></li>
                                <li className="section__item"><img className="section__icon" src="\images\payment\payment-03.jpg" alt="pix" /></li>
                                <li className="section__item"><img className="section__icon" src="\images\payment\payment-04.jpg" alt="elo" /></li>
                                <li className="section__item"><img className="section__icon" src="\images\payment\payment-05.jpg" alt="american express" /></li>
                                <li className="section__item"><img className="section__icon" src="\images\payment\payment-06.jpg" alt="hipercard" /></li>
                                <li className="section__item"><img className="section__icon" src="\images\payment\payment-07.jpg" alt="visa" /></li>
                            </ul>
                        </div>
                        <div className="section__content p-4 border-[1px] flex flex-col gap-2 col-span-3">
                            <h3 className="section__title uppercase font-bold">Certificados de Segurança</h3>
                            <ul className="section__list flex justify-center xsm:justify-between items-center flex-wrap">
                                <li className="section__item"><img className="section__icon saturate-0 hover:saturate-100 transition-all duration-300 w-[70%]" src="\images\security\security-01.png" alt="" /></li>
                                <li className="section__item"><img className="section__icon saturate-0 hover:saturate-100 transition-all duration-300 w-[70%]" src="\images\security\security-02.png" alt="ssl" /></li>
                                <li className="section__item"><img className="section__icon saturate-0 hover:saturate-100 transition-all duration-300 w-[70%]" src="\images\security\security-03.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="section__grid grid w-full basis-[400px] grow grid-cols-2">
                        <div className="section__content p-4 border-[1px] flex flex-col gap-2 row-span-2">
                            <h3 className="section__title uppercase font-bold">Ajuda</h3>
                            <ul className="section__list flex flex-col gap-1">
                                <li className="section__item"><a className="section__link" href="#">FAQ</a></li>
                                <li className="section__item"><a className="section__link" href="#">Sobre nossos produtos</a></li>
                                <li className="section__item"><a className="section__link" href="#">Trocas e devoluções</a></li>
                                <li className="section__item"><a className="section__link" href="#">Entregas</a></li>
                                <li className="section__item"><a className="section__link" href="#">Indique e ganhe</a></li>
                                <li className="section__item"><a className="section__link" href="#">Garantias</a></li>
                            </ul>
                        </div>
                        <div className="section__content p-4 border-[1px] flex flex-col gap-2 justify-center">
                            <h3 className="section__title uppercase font-bold">Contato</h3>
                            <p className="section__text">WhatsApp - (51) 9999-9999</p>
                            <p className="section__text">E-mail - ajuda@gat.com.br</p>
                        </div>
                        <div className="section__content p-4 border-[1px] flex flex-col gap-2 justify-center">
                            <h3 className="section__title uppercase font-bold">Redes Sociais</h3>
                            <ul className="section__list flex gap-5 flex-wrap">
                                <li className="section__item"><a className="section__link" href="#"><InstagramIcon/></a></li>
                                <li className="section__item"><a className="section__link" href="#"><YoutubeIcon/></a></li>
                                <li className="section__item"><a className="section__link" href="#"><LinkedinIcon/></a></li>
                                <li className="section__item"><a className="section__link" href="#"><FacebookIcon/></a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className="footer__background py-3">
                <section className="section flex justify-center flex-col-reverse lg:flex-row lg:justify-between gap-x-5 text-[10px]">
                    <p className="footer__text text-center">© 2025, GAT. TODOS OS DIREITOS RESERVADOS.</p>
                    <p className="footer__text text-center">GAT  LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
                </section>
            </div>
        </footer>
    )
}

export default Footer