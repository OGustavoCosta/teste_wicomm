// import Swiper core and required modules
import { Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

/* Hooks */
import { useState } from 'react';

interface ICarousel{
    id: number,
    image: string,
    description: string,
}

function HomeCarousel(){
    const [cats] = useState<ICarousel[]>([
        {
            id: 1,
            image: '/images/carousel/cat-01.jpg',
            description: 'gato',
        },
        {
            id: 2,
            image: '/images/carousel/cat-02.jpg',
            description: 'gato',
        },
        {
            id: 3,
            image: '/images/carousel/cat-03.jpg',
            description: 'gato',
        },
        {
            id: 4,
            image: '/images/carousel/cat-04.jpg',
            description: 'gato',
        },
        {
            id: 5,
            image: '/images/carousel/cat-05.jpg',
            description: 'gato',
        },
        {
            id: 6,
            image: '/images/carousel/cat-06.jpg',
            description: 'gato',
        },
        {
            id: 7,
            image: '/images/carousel/cat-07.jpg',
            description: 'gato',
        },
        {
            id: 8,
            image: '/images/carousel/cat-08.jpg',
            description: 'gato',
        },
        {
            id: 9,
            image: '/images/carousel/cat-09.jpg',
            description: 'gato',
        },
        {
            id: 10,
            image: '/images/carousel/cat-10.jpg',
            description: 'gato',
        },
    ])

    return(
        <section className="section section--cards py-10 pb-20 bg-background-light grid text-gray">
            <header className='section__header relative ml-[5%] md:ml-[12%] translate-y-7 z-10 grid gap-1'>
                <p className='section__text w-full max-w-[500px] text-sm xms:text-base md:text-xl'>Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag:</p>
                <h3 className='section__title text-3xl xsm:text-5xl md:text-7xl text-highlight-cyan'>#Adoradores<wbr/>DePapelão</h3>
            </header>
            
            <Swiper
                className='ease-linear swiper-linear'
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
                {cats.map((cat) =>(
                    <SwiperSlide className='max-w-[290px]'><img src={cat.image} alt="" /></SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default HomeCarousel