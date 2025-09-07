/* Hooks */
import { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay, Navigation, Parallax} from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import Thematic from "../../components/Thematic";

interface IThematic{
    id: number,
    title: string,
    banner: string,
    text: string,
    image: string,
    link: string,
    color: string,
}

function HomeThematic(){
    const [thematics] = useState<IThematic[]>([
        {
            id: 1,
            title: 'Minimalismo',
            banner: '/images/categories/minimalismo-banner.png',
            text: "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's",
            image: '/images/categories/minimalismo-01.jpg',
            link: '#',
            color: 'bg-highlight-cyan',
        },
        {
            id: 2,
            title: 'Clássico',
            banner: '/images/categories/classico-banner-v2.png',
            text: "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's",
            image: '/images/categories/classico-01.jpg',
            link: '#',
            color: 'bg-green-700',
        },
        {
            id: 3,
            title: 'Maximalismo',
            banner: '/images/categories/maximalismo-banner.png',
            text: "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's",
            image: '/images/categories/maximalismo-01.jpg',
            link: '#',
            color: 'bg-highlight-red',
        },
        {
            id: 4,
            title: 'Boho',
            banner: '/images/categories/boho-banner.png',
            text: "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's",
            image: '/images/categories/boho-01.jpg',
            link: '#',
            color: 'bg-amber-800',
        },
    ])

    return(
        <section className="section my-10 relative z-1">
            {/* <header className="section__header flex gap-20 items-center justify-between md:justify-end xl:absolute top-0 right-0 z-5 mb-2.5">
                <h2 className="section__title uppercase font-bold text-xl">Coleções</h2>
                <a className="section__link uppercase underline text-sm" href="#">Ver Todas</a>
                <nav className="nav gap-2 hidden sm:flex">
                    <img className="nav_left cursor-pointer" src="/icons/arrow-left.svg" alt="" />
                    <img className="nav_right cursor-pointer" src="/icons/arrow-right.svg" alt="" />
                </nav>
            </header> */}

            <Swiper
                modules={[Navigation, Parallax, Autoplay]}
                slidesPerView={1}
                navigation={{
                    enabled: true,
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',
                }}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                parallax={true}
                speed={1000}
                spaceBetween={300}
                className="swiper swiper-visible"
            >
                {thematics.map(({id, title, banner, text, image, link, color}) => (
                    <SwiperSlide className="w-full h-full flex pt-10 xl:pt-0">
                        <Thematic key={id} title={title} banner={banner} text={text} image={image} link={link} color={color}/>
                    </SwiperSlide>
                ))}

                <header className="section__header flex gap-20 items-center justify-between md:justify-end absolute top-0 right-0 z-5 mb-2.5 w-full">
                    <h2 className="section__title uppercase font-bold text-xl hidden sm:flex">Coleções</h2>
                    <a className="section__link uppercase underline text-sm" href="#">Ver Todas</a>
                    <nav className="nav gap-2 flex relative w-32">
                        <span className="swiper-prev"></span>
                        <span className="swiper-next"></span>
                    </nav>
                </header>
            </Swiper>
        </section>
    )
}

export default HomeThematic