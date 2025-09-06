// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Keyboard, Parallax} from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import DefaultButton from '../../components/buttons/DefaultButton';

function HomeHero(){
    return(
        <section id="inicio" className="section section--hero w-full relative">
            <Swiper
                modules={[Navigation, Pagination, Keyboard, Parallax, Autoplay]}
                slidesPerView={1}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
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
                <SwiperSlide className='swiper__slide relative bg-[url(/images/banners/banner_home_4.jpg)] bg-cover bg-right flex px-[10%] pt-20 py-[5%]'>
                    <div className='swiper__content h-full flex flex-col gap-0 md:gap-5 justify-start items-center sm:items-start sm:justify-center lg:justify-end'>
                        <span className='uppercase text-5xl md:text-[10vw]/[1] lg:text-8xl text-center sm:text-left'>Nova  <br /> Coleção</span>
                        <h1 className='text-lg md:text-[2vw] xl:text-2xl  text-center sm:text-left'>Móveis para o seu gato <br /> <strong>engatanhar</strong> sem dó</h1>
                    </div>
                    <img className='swiper__banner absolute bottom-[20%] right-[50%] translate-x-[50%]  sm:translate-x-[0%]  sm:translate-y-[50%] lg:translate-y-[0%] sm:bottom-[50%] lg:bottom-[10%] sm:right-[10%] w-[25vw] min-w-40 max-w-72' src="/images/categories/minimalismo-banner.png" alt="" />
                    <DefaultButton fill={true} text='Ver Coleção' link='#' className='absolute left-[50%] -translate-x-[50%] bottom-[12%]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[600px] object-cover' src="/images/banners/banner_home_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[600px] object-cover' src="/images/banners/banner_home_3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HomeHero