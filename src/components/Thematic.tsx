/* Components */
import DefaultButton from "./buttons/DefaultButton"

interface IThematicProps{
    title: string,
    banner: string,
    text: string,
    image: string,
    link: string,
    color: string,
}

function Thematic({title, banner, text, image, link, color}: IThematicProps){
    return(
        <section className={`section w-full h-full flex justify-center items-center lg:items-start flex-col lg:flex-row gap-10 grow ${(title === 'Minimalismo' || title === 'Maximalismo') ? 'gap-10' : ' gap-15 sm:gap-20'}`}>
            <div className="section__content  flex flex-col items-end gap-15 relative w-full sm:w-fit">
                <span className="bg-[url(/images/background/patterns/pattern-1-4-circle.png)] bg-center bg-cover w-[105%] min-w-96 aspect-square absolute left-[25%] md:left-[15%] top-5 z-0"></span>
                <header className={`section__header p-5 sm:p-10 self-start pl-20 sm:pl-30 sm:mr-30 lg:mr-40 relative w-fit ${color}`}>
                    <img className="section__banner absolute top-10 -left-[40%] sm:-left-[50%] w-[70%] sm:w-[80%] max-w-72" src={banner} alt="" />
                    <h3 className="section__title uppercase font-bold text-4xl sm:text-5xl text-light">
                        {title == 'Minimalismo' ? <span>Minima<br/>lismo</span> : title == 'Maximalismo' ? <span>Maxima<br/>lismo</span> : title}
                    </h3>
                </header>
                <article className="article flex flex-col gap-5 ml-22">
                    <p className="article__text text-sm w-full sm:text-lg max-w-60 sm:max-w-80 ">{text}.</p>
                    <DefaultButton fill={false} text="Explorar" link={link}/>
                </article>
            </div>
            <div className="section__content relative flex justify-center">
                <span className="bg-[url(/images/background/patterns/pattern-circle.png)] bg-center bg-cover w-[50%] aspect-square absolute left-[20%] top-20 z-0"></span>
                <img className="section__image mb-15 lg:mb-0 lg:mt-[35%] lg:max-w-96 relative lg:aspect-[3/4] object-cover" src={image} alt="" />
            </div>
        </section>
    )
}

export default Thematic