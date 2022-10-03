import Layout from "../components/layout/layout";
import Blog from "../screens/blog/blog";
import {useEffect} from "react";
import blog from "../screens/blog/blog";


const findCategoryById = (categories,id)=>{
    const result = categories.find((item)=>{
        return item.id ===id
    })
    return result?.name ||""
}
export const getStaticProps = async ()=>{

    const [categoryResp, postsResp] = await Promise.all([
        fetch(`https://www.levelshealth.com/wp-json/wp/v2/categories?per_page=100&_fields=name,id`),
        fetch(`https://www.levelshealth.com/wp-json/wp/v2/posts?per_page=3&_fields=title,categories,excerpt,featured_media,yoast_head_json.twitter_misc`)
    ]);
    const [categories, posts] = await Promise.all([
        categoryResp.json(),
        postsResp.json()
    ]);



    const postsFiltered =  posts.map((item)=>{
        const categoryNames =  item.categories.map((categoryId)=>{
            return findCategoryById(categories, categoryId)
        })

        return {...item , categories:categoryNames}
    })
    const mediaLinks = postsFiltered.map((p)=> `https://www.levelshealth.com/wp-json/wp/v2/media/${p?.featured_media}?&_fields=guid`)
    const promises = mediaLinks.map((link)=>fetch(link))
    const responses = await Promise.all(promises)
    const images = await Promise.all( responses.map((res)=>res?.json()));
    const postsWithMedia =  postsFiltered.map((p,i)=>({...p ,featured_media:images[i]?.guid?.rendered} ))

    return {
        props: {categories :categories , sliderPosts: postsWithMedia}
    }
}


const IndexPage = ({categories , sliderPosts}) => {

  return (
      <>
          <Layout>  <Blog sliderPosts={sliderPosts} categories={categories}/></Layout>
      </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
