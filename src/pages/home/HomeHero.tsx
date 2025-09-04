// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Keyboard, Parallax} from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

function HomeHero(){
    return(
        <section id="inicio" className="section section--hero w-full relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Keyboard, Parallax]}
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
                className="Swiper"
            >  
                <SwiperSlide>
                    <img className='w-full max-h-[600px] object-cover' src="\images\banners\banner_home_1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[600px] object-cover' src="\images\banners\banner_home_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[600px] object-cover' src="\images\banners\banner_home_3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HomeHero