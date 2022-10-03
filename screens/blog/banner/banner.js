import style from "./banner.module.scss";
import bannerPicture from "../../../images/hero-img.jpeg";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Pagination, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from "next/image";


const Banner = () => {
    return (
        <div className={style.bannerStyle}>
            <div className="container">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,

                    }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="wrap-banner">
                            <div className="description">
                                <ul className="category">
                                    <li>metabolic health</li>
                                    <li>ultimate guides</li>
                                </ul>
                                <h1>The ultimate guide to metabolic health</h1>
                                <p className="author">Casey Means, MD</p>
                                <time>11 min read</time>
                            </div>
                            <div className="banner-img">
                                <Image src={bannerPicture} alt="banner"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wrap-banner">
                            <div className="description">
                                <ul className="category">
                                    <li>metabolic health</li>
                                    <li>ultimate guides</li>
                                </ul>
                                <h1>2 The ultimate guide to metabolic health</h1>
                                <p className="author">Casey Means, MD</p>
                                <time>11 min read</time>
                            </div>
                            <div className="banner-img">
                                <Image src={bannerPicture} alt="banner"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wrap-banner">
                            <div className="description">
                                <ul className="category">
                                    <li>metabolic health</li>
                                    <li>ultimate guides</li>
                                </ul>
                                <h1>3 The ultimate guide to metabolic health</h1>
                                <p className="author">Casey Means, MD</p>
                                <time>11 min read</time>
                            </div>
                            <div className="banner-img">
                                <Image src={bannerPicture} alt="banner"/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>



            </div>
        </div>
    )
}

export default Banner
