/* Components */
import { useState } from "react"
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"

/* Sections */
import HomeHero from "./HomeHero"
import HomeCarousel from "./HomeCarousel"

function HomePage(){
    const [focused, setFocused] = useState<string | null>(null)

    return(
        <div className="w-full min-h-[100lvh] text-base sora text-light bg-background-dark flex flex-col">
            <Navigation/>
            <main className="main w-full overflow-hidden grow">
                <section className="main__background">
                    <HomeHero/>
                </section>
                <section className="main__background bg-background-light">
                    <HomeCarousel/>
                </section>
                <section className="main__background relative before:w-[92%] before:absolute before:h-[1px] before:bg-gray">
                    <section className="section py-10 flex gap-5 items-center">
                        <img className="section__banner hidden md:block object-cover w-80 aspect-[3/4] lg:aspect-auto lg:w-auto" src="\images\gatinho-laranja.jpg" alt="" />
                        <article className="article text-gray w-full grid gap-8">
                            <h2 className="article__title text-5xl">NEWS<wbr/>LETTER</h2>
                            <div className="flex flex-wrap w-full gap-5 gap-y-8">
                                <div className="article__content grow basis-[330px]">
                                    <p className="article__text font-bold">Cadastre-se e ganhe 10% off na sua primeira compra</p>
                                    <p className="article__text">Seja a primeira a receber lançamentos, novidades e promoções</p>
                                </div>
                                <form className="form grow basis-[330px] flex flex-col gap-8 justify-center" action="">
                                    <p className="relative mt-2">
                                        <label htmlFor="petName" className={`form__label uppercase absolute left-0 transition-all duration-300 ${focused === "petName" ? "text-[10px] bottom-6" : "bottom-1  text-[12px]"}`}> Nome do seu pet </label>
                                        
                                        <input type="text" className="form__input border-b-2 w-full relative z-10" name="petName" onFocus={() => setFocused('petName')} onBlur={() => setFocused(null)}/>
                                    </p>
                                    <p className="relative">
                                        <label htmlFor="yourEmail" className={`form__label uppercase absolute left-0 transition-all duration-300 ${focused === "yourEmail" ? "text-[10px] bottom-6" : "bottom-1  text-[12px]"}`}> Seu email </label>
                                        <input type="text" className="form__input border-b-2 w-full relative z-10" name="yourEmail" onFocus={() => setFocused('yourEmail')} onBlur={() => setFocused(null)}/>
                                    </p>
                                    <p>
                                        {/* <input className="uppercase border-2 py-2 px-5 rounded-4xl cursor-pointer" type="submit" value="Cadastrar" /> */}
                                        <button type="submit" className="group cursor-pointer relative h-12 overflow-hidden overflow-x-hidden rounded-4xl px-8 py-2 border-2 duration-500  hover:text-light border-gray"><span className="relative z-10 uppercase">Cadastrar</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                                    </p>
                                </form>
                            </div>
                        </article>
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage