import React from 'react';
import * as style from './singlePost.module.scss'
import HeroSinglePost from "./hero/hero";
import AuthorSinglePost from "./author/author";
import SocialSinglePost from "./social/social";

export const SinglePost = ({post}) => {
    return <div className={style.singlePost + "container"}>
        <HeroSinglePost post={post}/>
        <section className={style.wrapper}>

            <SocialSinglePost/>
            <AuthorSinglePost post={post}/>

            {post?.blogSingle?.contentOverview&&<div className={style.articleHighlights}>
                <h3>ARTICLE HIGHLIGHTS</h3>
                <ul>
                    {post?.blogSingle?.contentOverview.map((text, i) => (
                        <li key={i}>
                            {text.item}
                        </li>
                    ))}
                </ul>
            </div>}
            <div className={style.content}>
                <h3 style={{display:"none"}}>post content</h3>
                <div dangerouslySetInnerHTML={{__html:post?.content}}/>
            </div>
        </section>
    </div>
};
 