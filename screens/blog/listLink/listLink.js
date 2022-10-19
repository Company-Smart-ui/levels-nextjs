import {Fragment, useEffect, useRef, useState} from "react";
import style from "./listLink.module.scss";
import Link from "next/link";
import {createUrl} from "../../../lib/getCategory";
import {ROUTES} from "../../../constants/routes";
import {ActiveLink} from "../../../components/activeLink";
import {useRouter} from "next/router";




const ListLink = ({categories, classWrapList}) => {
    const {asPath} = useRouter();
    const scrollBlock = useRef(null);

    const [scrollRight, setScrollRight] = useState(true);
    const [scrollLeft, setScrollLeft] = useState(false);
    const handlerScroll = e =>{
        if(e.currentTarget.clientWidth + e.currentTarget.scrollLeft > (scrollBlock.current.clientWidth - 70)) {
            setScrollRight(false);
            setScrollLeft(true);
            console.log("scrollRight false")

        }else if(e.currentTarget.scrollLeft > 70){
            setScrollRight(true);
            setScrollLeft(true);
            console.log("scrollRight true")
        } else {
            setScrollLeft(false);
        }
    }
    return (
        <div className={style.listLink}>
            <div className="container-middle">
                <div className={`wrap-list 
                ${classWrapList} 
                ${scrollRight === true ? "right" : ""}
                ${scrollLeft === true ? "left" : ""}
                `} onScroll={handlerScroll}>
                    <ul className={`list`} ref={scrollBlock}>
                        <li>
                            <Link href={ROUTES.blogHome}>
                                 <a  className={`list-item ${asPath === "/blog" ? 'active' : ''} `}>All</a>
                            </Link>
                        </li>
                        {categories?.map(({name,slug,posts}, index) => {
                            if(!posts?.nodes?.length){
                                return<Fragment key={index}> </Fragment>
                            }
                            return (
                                <li  key={index}>
                                    <ActiveLink
                                        href={ROUTES.singleCategory(slug)}
                                    >
                                        <a    className={`list-item`}
                                        >
                                    {name}
                                        </a>
                                    </ActiveLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListLink;
