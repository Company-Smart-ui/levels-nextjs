import style from "./author.module.scss";
import Image from "next/image";
import React from "react";
import star from "../icons/star.svg";
import clock from "../icons/clock.svg";


const AuthorSinglePost = ({post}) => {
    return (
        <div className={style.wrapperSingleAuthorReviwer}>
            <div className={style.captionProfiles}>
                <div className={style.photoAuthor}>
                    <Image width={50} height={50} src={post?.author.node.avatar.url} alt={'photo author'}/>
                </div>
                <div className={style.authorProfile}>
                    <div className={style.name}>{post?.author.node.name}</div>
                    <div className={style.writtenReviewedBy}>
                        <div className={style.star}>
                            <Image src={star} alt={'star'}/>
                        </div>
                        <p>Author</p>
                    </div>
                </div>
            </div>
            <div className={style.wrapReadingTime}>
                <div className={style.clock}>
                    <Image src={clock} alt={'clock'}/>
                </div>
                <p className="reading_time">{post?.blogSingle.readingTime} read</p>
            </div>
        </div>


    )
}

export default AuthorSinglePost