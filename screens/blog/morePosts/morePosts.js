import React from 'react';
import  styles from './morePosts.module.scss'
import Image from "next/image";
import Link from "next/link";
import {ROUTES} from "../../../constants/routes";


const Card = ({post})=>{
    return <Link href={ ROUTES.blogSingle(post.slug) }>
        <a className={styles.card}>
            <h3> {post.title}</h3>
            <p> {post.categories?.nodes?.[0]?.name}</p>
            <div className={styles.imageWrap}>

                {post.featuredImage?.node?.sourceUrl&&<Image objectFit={'cover'} layout={'fill'} height={500} width={500} src={post.featuredImage?.node?.sourceUrl}/>}
            </div>
        </a>
    </Link>

}



export const MorePosts = ({morePosts}) => {

    return <section className={'container'}>
        <h2 style={{display:"none"}}> last posts </h2>
        <div className={styles.morePosts}>
            {morePosts.map((post, i)=><Card post={post.node}/>)}
        </div>

    </section>


};
 