import ListLink from "../blog/listLink/listLink";
import {MorePosts} from "../blog/morePosts/morePosts";
import style from "./category.module.scss";


const Category = ({categories ,posts }) => {
    const morePosts = posts?.slice(3);
    console.log(posts)

    return (
        <div className={style.category}>
            <div className="hero">
                <ListLink  categories={categories} classWrapList={"wrap-list_white"}/>
                <MorePosts  morePosts={morePosts}/>
            </div>

        </div>

    )
}

export default Category
