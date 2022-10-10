import Head from 'next/head'
import { getAllPostsForHome } from '../../lib/api'
import Layout from "../../components/layout/layout";
import Blog from "../../screens/blog/blog";
import {getCategory} from "../../lib/getCategory";


export default function Index({ BlogAll, preview }) {
    const posts = BlogAll?.posts?.edges;
    return (
        <Layout preview={preview}>
            <Head title={"Blog"}/>
            <Blog categories={BlogAll.categories} posts={posts}/>
        </Layout>
    )
}

export const getStaticProps = async ({ preview = false }) => {
    const {posts} = await getAllPostsForHome(preview)
     const categories =await getCategory() ;
    const BlogAll= {posts,categories}
    return {
        props: { BlogAll, preview },
        revalidate: 10,
    }
}
