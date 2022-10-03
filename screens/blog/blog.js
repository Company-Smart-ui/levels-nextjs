import Banner from "./banner/banner";
import ListLink from "./listLink/listLink";


const Blog = ({categories ,sliderPosts }) => {
    return (
        <>
            <ListLink  categories={categories}/>
            <Banner sliderPosts={sliderPosts}/>
        </>

    )
}

export default Blog
