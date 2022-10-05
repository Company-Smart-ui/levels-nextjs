import React from 'react';
import * as style from './singlePost.module.scss'

export const SinglePost = ({post}) => {
    console.log(post)
    return <div className={style.singlePost + "container"}>
        <section>
            <h1>{post.title}</h1>

        </section>
        {post?.blogSingle?.contentOverview&&<section>
            <h2>ARTICLE HIGHLIGHTS</h2>
            {post?.blogSingle?.contentOverview.map((text, i) => (
                <li key={i}>
                    {text.item}
                </li>
            ))}
        </section>}

<section>
    <h3 style={{display:"none"}}> post content</h3>
    <pre> {post.content}</pre>
</section>

    </div>
};
 