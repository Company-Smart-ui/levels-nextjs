import ListLink from "../listLink/listLink";
import {MorePosts} from "../morePosts/morePosts";
import style from "./category.module.scss";


const Category = ({categories ,posts }) => {
    return (
        <div className={style.category}>
            <div className="hero">
                <ListLink  categories={categories} classWrapList={"wrap-list_white"}/>
                <MorePosts  morePosts={posts}/>
            </div>
        </div>
    )
}

export default Category
