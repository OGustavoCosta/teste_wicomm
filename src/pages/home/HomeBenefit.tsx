// import Swiper core and required modules
import { Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

function HomeBenefit(){
    const benefitStyleList = 'flex gap-4 before:w-[25px] before:aspect-square before:bg-[url(/icons/paw.png)] before:bg-no-repeat before:bg-center before:bg-cover] w-fit ml-4 py-3'

    return(
        <section className="section p-10 bg-highlight-red text-light grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] xl:grid-cols-[1.5fr_1fr_1fr_1fr] border-t-8 border-dark">
            <article className='article border-[1px] p-5 flex justify-center items-center gap-3 xsm:gap-5 col-span-2 lg:col-span-1 row-span-2'>
                <div className='w-full flex justify-center items-start'>
                    <img className="article__image min-w-16 max-w-32 w-full" src="/icons/10.png" alt="" />
                </div>
                <div className="article__content flex flex-col xsm:gap-2 w-full">
                    <h4 className="article__title font-bold text-2xl xsm:text-3xl">Benefício Principal</h4>
                    <p className="article__text text-[12px] xsm:text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </article>
            <span className="article border-[1px] p-5 hidden sm:flex flex-col justify-center gap-3 font-bold text-3xl xl:hidden">
                Ofertas Especiais
            </span> 
            <article className="article border-[1px] p-5 hidden sm:flex flex-col justify-center gap-3">
                <header className="article__header flex gap-5 items-center w-full">
                    <img className="article__icon aspect-square h-full" src="/icons/prize.png" alt="icon" />
                    <h4 className="article__title text-right font-bold text-xl">Benefício Secundário</h4>
                </header>
                <p className="article__text text-sm">Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
            </article>
            <article className="article border-[1px] p-5 hidden sm:flex flex-col justify-center gap-3">
                <header className="article__header flex gap-5 items-center">
                    <img className="article__icon aspect-square h-full" src="/icons/prize.png" alt="icon" />
                    <h4 className="article__title text-right font-bold text-xl">Benefício Secundário</h4>
                </header>
                <p className="article__text text-sm">Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
            </article>
            <article className="article border-[1px] p-5 hidden sm:flex flex-col justify-center gap-3">
                <header className="article__header flex gap-5 items-center">
                    <img className="article__icon aspect-square h-full" src="/icons/prize.png" alt="icon" />
                    <h4 className="article__title text-right font-bold text-xl">Benefício Secundário</h4>
                </header>
                <p className="article__text text-sm">Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
            </article>
            <Swiper
                className='section__swiper ease-linear swiper-linear col-span-2 lg:col-span-3 w-full py-3 border-[1px]'
                modules={[Autoplay]}
                slidesPerView={'auto'}
                spaceBetween={0}
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='slide-content'><p className={`${benefitStyleList}`}>Benefício Terciário</p></SwiperSlide>
                <SwiperSlide className='slide-content'><p className={`${benefitStyleList}`}>Lisan Al Gaib</p></SwiperSlide>
                <SwiperSlide className='slide-content'><p className={`${benefitStyleList}`}>Benefício Terciário</p></SwiperSlide>
                <SwiperSlide className='slide-content'><p className={`${benefitStyleList}`}>Benefício Terciário</p></SwiperSlide>
                <SwiperSlide className='slide-content'><p className={`${benefitStyleList}`}>Benefício Terciário</p></SwiperSlide>
                <SwiperSlide className='slide-content'><p className={`${benefitStyleList}`}>Benefício Terciário</p></SwiperSlide>
                <SwiperSlide className='slide-content'><p className={`${benefitStyleList}`}>Benefício Terciário</p></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HomeBenefit