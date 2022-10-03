import style from "./banner.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Pagination, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from "next/image";


const Slide= ({item})=>      <div className="wrap-banner">
        <div className="description">
            <ul className="category">
                {item?.categories?.map((t, i)=>     <li key={i}>{t}</li>)}
            </ul>
            <h2>  {item?.title?.rendered}</h2>
            <p className="author"> {item?.yoast_head_json?.twitter_misc?.["Written by"]}</p>
            <time>{item?.yoast_head_json?.twitter_misc?.["Est. reading time"]}</time>
        </div>
        <div className="banner-img">
            <Image width={600}  height={500} src={item.featured_media} alt="banner"/>
        </div>
    </div>



const Banner = ({sliderPosts}) => {
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

                    {sliderPosts.map((item,i)=>   <SwiperSlide key={i}><Slide item={item}  /></SwiperSlide>)}
                </Swiper>



            </div>
        </div>
    )
}

export default Banner
