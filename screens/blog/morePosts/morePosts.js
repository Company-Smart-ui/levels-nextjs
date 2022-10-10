import React from 'react';
import  styles from './morePosts.module.scss'
import Image from "next/image";
import Link from "next/link";
import {ROUTES} from "../../../constants/routes";


const Card = ({post})=>{
    return <Link href={ ROUTES.blogSingle(post.slug) }>
        <a className={styles.card}>
            <div className={styles.imageWrap}>
                {post.featuredImage?.node?.sourceUrl&&<Image objectFit={'cover'} layout={'fill'} height={500} width={500} src={post.featuredImage?.node?.sourceUrl}/>}
            </div>
            <div className={styles.context}>
                <p className={styles.category}> {post?.types?.nodes?.[0]?.name}</p>
                <h3> {post.title}</h3>
            </div>
        </a>
    </Link>

}



export const MorePosts = ({morePosts}) => {
if(!morePosts?.length){
    return <></>
}
    return <section className={'container'}>
        <h2 style={{display:"none"}}> last posts </h2>
        <div className={styles.morePosts}>
            {morePosts?.map((post, i)=><Card key={i} post={post.node}/>)}
        </div>
    </section>


};
 