/* Hooks */
import { useState } from "react"

/* Components */
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"
import IconButton from "../../components/buttons/IconButton"
import ProductCard from "../../components/cards/ProductCard"
import DefaultButton from "../../components/buttons/DefaultButton"

/* Sections */
import HomeHero from "./HomeHero"
import HomeCarousel from "./HomeCarousel"
import HomeBenefit from "./HomeBenefit"
import HomeThematic from "./HomeThematic"

/* Icons */

function HomePage(){
    const [focused, setFocused] = useState<string | null>(null)

    return(
        <div className="w-full min-h-[100lvh] text-base sora text-gray bg-background-dark flex flex-col">
            <Navigation/>
            <main className="main w-full overflow-hidden grow">
                {/* HERO */}
                <div className="main__background">
                    <HomeHero/>
                </div>

                {/* BENEFÍCIOS */}
                <div className="main__background">
                    <HomeBenefit/>
                </div>

                {/* APRESENTACÃO DE PRODUTOS */}
                <div className="main__background">

                </div>
                <div className="main__background">
                    {/* Temática */}
                    <HomeThematic/>

                    {/* Produtos */}
                    <section className="section flex justify-center flex-wrap xl:flex-nowrap gap-5 py-5">
                        <div className="section__content flex flex-col items-start gap-6 relative xl:max-w-xl justify-center xl:justify-start">
                            <span className="w-48 rounded-full aspect-square bg-[#FFE4B3] absolute -top-20 -left-15 z-0"></span>
                            <h3 className="section__title text-6xl sm:text-7xl uppercase relative   "><strong className="font-bold">Queri<wbr/>dinho</strong> deles</h3>
                            <DefaultButton fill={false} text="Ver Tudo" link="#"/>
                        </div>
                        <div className="section__tracker flex gap-5 flex-wrap w-fit xl:justify-end xl:flex-nowrap sm:justify-start justify-center">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </section>

                    {/* Categorias */}
                    <section className="section grid justify-items-center py-10 pb-15 gap-5">
                        <h3 className="section__title uppercase tracking-[0.5em] font-bold text-lg text-center">Navegue Pelas Categorias</h3>
                        <div className="section__tracker flex justify-center gap-5 flex-wrap">
                            <IconButton fill={false} text={'Clássico'} link={'#'} icon="/icons/categories/classico.png"/>
                            <IconButton fill={false} text={'Minimalismo'} link={'#'} icon="/icons/categories/minimalismo.png"/>
                            <IconButton fill={false} text={'Maximalismo'} link={'#'} icon="/icons/categories/maximalismo.png"/>
                            <IconButton fill={false} text={'Boho'} link={'#'} icon="/icons/categories/boho.png"/>
                            <DefaultButton fill={false} text={'Ver Tudo'} link={'#'}/>
                        </div>
                    </section>
                </div>

                {/* Lorem Ipsum */}
                <div className="main__background bg-[url(/images/background/cats-ia.jpg)] bg-cover bg-center">
                    <section className="section py-5 h-[600px] flex justify-center items-center md:justify-end md:items-start">
                        <article className="card p-10 bg-background-light border-gray border-2 max-w-xs w-full grid gap-5 transition-all duration-500 hover:scale-[1.01]">
                            <h2 className="card__title text-3xl font-bold">Lorem Ipsum Dolor Sit</h2>    
                            <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <p className="card__text">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            <DefaultButton fill={false} text={'Ver Seleção'} link={'#'}/>
                        </article>
                    </section>      
                </div>

                {/* SOBRE */}
                <div className="main__background">
                    <section className="section py-20 flex justify-center gap-10 gap-y-20 flex-wrap">
                        <div className="section__content w-full max-w-xl relative basis-[450px] grow">
                            <span className="absolute left-[30%] -top-5 bg-[#BB3735] aspect-square w-72 z-0 rounded-full"></span>
                            <h2 className="section__title text-5xl/tight xsm:text-7xl/tight inline-block h-fit max-w-[400px] relative mt-[10%]">Decorar Arranhar & Relaxar</h2>
                        </div>
                        <div className="section__content w-full max-w-xl basis-96 grow grid gap-12 relative ">
                            <div className="section__video aspect-[16/9] bg-gray-400">
                                {/* Representando um video */}
                                <img className="w-full h-full object-cover" src="/images/video.jpg" alt="representação de um video" /> 
                            </div>
                            <p className="section__text text-sm/relaxed">Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.</p>
                            <DefaultButton fill={false} text={'MAIS SOBRE A GAT'} link={'#'}/>
                        </div>
                    </section>
                </div>

                {/* CARROSSEL DE GATOS */}
                <div className="main__background bg-background-light">
                    <HomeCarousel/>
                </div>

                {/* CAPTAÇÃO DE LEADS */}
                <div className="main__background relative before:w-[92%] before:absolute before:h-[1px] before:bg-gray">
                    <section className="section py-10 flex gap-5 items-center">
                        <img className="section__banner hidden md:block object-cover w-80 aspect-[3/4] lg:aspect-auto lg:w-auto" src="/images/gatinho-laranja.jpg" alt="" />
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
                                        <button type="submit" className="group cursor-pointer relative h-12 overflow-hidden overflow-x-hidden rounded-4xl px-8 py-2 border-2 duration-500  hover:text-light border-gray"><span className="relative z-10 uppercase">Cadastrar</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                                    </p>
                                </form>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage