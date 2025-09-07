// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Keyboard, Parallax} from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import DefaultButton from '../../components/buttons/DefaultButton';

/* Hooks */
import { useEffect, useState } from 'react';

function HomeHero(){
    const [enableNav, setEnableNav] = useState(window.innerWidth>=768)

    useEffect(() => {
        const handleResize = () => {
            setEnableNav(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return(
        <section id="inicio" className="section section--hero w-full relative">
            <Swiper
                modules={[Navigation, Pagination, Keyboard, Parallax, Autoplay]}
                slidesPerView={1}
                /* navigation={enableNav == true ? {
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',
                } : enableNav} */
                navigation={{
                    enabled: enableNav,
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',
                }}
                pagination={{
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                keyboard={true}
                parallax={true}
                speed={1000}
                spaceBetween={50}
                className="swiper h-[600px]"
            >  
                <SwiperSlide className='swiper__slide relative bg-[url(/images/banners/banner-01.jpg)] bg-cover bg-right flex px-[12%] pt-20 py-[5%]'>
                    <div className='swiper__content h-full flex flex-col gap-0 md:gap-5 justify-start items-center sm:items-start sm:justify-center lg:justify-end'>
                        <span data-swiper-parallax="-300" className='uppercase text-5xl sm:text-[9.6vw]/[1] lg:text-8xl text-center sm:text-left'>Nova  <br /> Coleção</span>
                        <h1 data-swiper-parallax="-400" className='text-lg md:text-[2vw] xl:text-2xl  text-center sm:text-left'>Móveis para o seu gato <br /> <strong>engatanhar</strong> sem dó</h1>
                    </div>
                    <img data-swiper-parallax="-500" className='swiper__banner absolute bottom-[20%] right-[50%] translate-x-[50%]  sm:translate-x-[0%]  sm:translate-y-[50%] lg:translate-y-[0%] sm:bottom-[50%] lg:bottom-[10%] sm:right-[10%] w-[25vw] min-w-40 max-w-72' src="/images/categories/minimalismo-banner.png" alt="" />
                    <div data-swiper-parallax="-550" className='absolute left-[50%] -translate-x-[50%] bottom-[10%]'>
                        <DefaultButton fill={true} text='Ver Coleção' link='#'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper__slide relative bg-[url(/images/banners/banner-02.jpg)] bg-cover bg-right justify-center flex px-[12%] pt-20 py-[5%]'>
                    <div className='swiper__content h-full gap-10 flex flex-col md:flex-row justify-center items-center md:justify-start'>
                        <h1 data-swiper-parallax="-300" className='uppercase text-5xl md:text-6xl lg:text-8xl text-center md:text-left text-light'>Tudo para o seu gato </h1>
                        <img data-swiper-parallax="-800" className=' w-full xsm:w-auto' src="/images/categories/classico-banner.png" alt="gato" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper__slide relative bg-[url(/images/banners/banner-03.jpg)] bg-cover bg-left flex px-[12%] pt-20 py-[5%]'>
                    <div className='swiper__content h-full gap-10 flex flex-col justify-center items-center'>
                        <h1 data-swiper-parallax="-300" className='uppercase text-5xl md:text-6xl lg:text-8xl text-center md:text-left text-light'>Seu gato merece o melhor </h1>
                    </div>
                </SwiperSlide>
                {enableNav && <div className="swiper-prev"></div>}
                {enableNav && <div className="swiper-next"></div>}
                <div className="swiper-pagination"></div>
            </Swiper>
        </section>
    )
}

export default HomeHero