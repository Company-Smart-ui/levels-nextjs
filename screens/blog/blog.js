import Banner from "./banner/banner";
import ListLink from "./listLink/listLink";
import {MorePosts} from "./morePosts/morePosts";


const Blog = ({categories ,posts }) => {
    const sliderPosts = posts?.slice(0,3)||[];
    const morePosts = posts.slice(3);

    return (
        <>
            <ListLink  categories={categories}/>
            <Banner sliderPosts={sliderPosts}/>
            <MorePosts  morePosts={morePosts}/>
        </>

    )
}

export default Blog
