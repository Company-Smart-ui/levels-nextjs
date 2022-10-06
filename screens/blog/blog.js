import Banner from "./banner/banner";
import ListLink from "./listLink/listLink";
import {MorePosts} from "./morePosts/morePosts";
import style from "./blog.module.scss";


const Blog = ({categories ,posts }) => {
    const sliderPosts = posts?.slice(0,3)||[];
    const morePosts = posts?.slice(3);

    return (
        <div className={style.blog}>
            <div className="hero">
                <ListLink  categories={categories}/>
                <Banner sliderPosts={sliderPosts}/>
            </div>
            <MorePosts  morePosts={morePosts}/>
        </div>

    )
}

export default Blog
