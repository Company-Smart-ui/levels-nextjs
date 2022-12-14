import style from "./hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const HeroSinglePost = ({post}) => {
    return (
        <section className={style.hero}>
            <div className="postImg">
                <Image width={600}  height={500} src={post?.featuredImage?.node?.sourceUrl} alt="banner"/>
            </div>
            <div className="container">
                <div className="inner">
                    {post?.categories?.edges&&<div className={style.articleHighlights}>
                        <ul className={style.category}>
                                <li  >  {post?.categories?.edges[0].node?.name}   </li>
                                <li  >  {post?.tags?.edges?.[0]?.node?.name}  </li>
                        </ul>
                    </div>}

                    <h1>{post?.title}</h1>
                    <div className={style.description} dangerouslySetInnerHTML={{__html:post?.excerpt}}/>
                </div>
            </div>
        </section>


    )
}

export default HeroSinglePost