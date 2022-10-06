import style from "./banner.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Pagination, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from "next/image";
import Link from "next/link";
import {ROUTES} from "../../../constants/routes";


const Slide= ({item})=>     <>
        <div className={style.description}>
            <ul className={style.category}>
                {item?.categories?.nodes?.map((t, i)=>     <li key={i}><Link href="/"><a> {t.name}</a></Link></li>)}
            </ul>
            <h2>
                <Link href={ ROUTES.blogSingle(item.slug) }>
                    <a>{item?.title}</a>
                </Link>
            </h2>
            <div className={style.wrapBottom}>
                <p className="author"> {item?.author?.node?.name}</p>
                <time>{item.blogSingle?.readingTime}</time>
            </div>
        </div>
        <div className="banner-img">
            <Link href="/">
                <a>
                    <Image width={600}  height={500} src={item.featuredImage?.node?.sourceUrl} alt="banner"/>
                </a>
            </Link>
        </div>
</>


const Banner = ({sliderPosts}) => {
    return (
        <div className={style.bannerStyle}>
            <div className="container">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000000, //4000
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >

                    {sliderPosts?.map((item,i)=>   <SwiperSlide className={style.wrapBanner} key={i}><Slide item={item.node}  /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default Banner
