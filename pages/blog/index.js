import Head from 'next/head'
import { getAllPostsForHome } from '../../lib/api'
import Layout from "../../components/layout/layout";
import Blog from "../../screens/blog/blog";


export default function Index({ BlogAll, preview }) {
    const posts = BlogAll?.posts?.edges;
    const categories = BlogAll?.categories?.nodes

    return (
        <Layout preview={preview}>
            <Head title={"Blog"}/>
            <Blog categories={categories} posts={posts}/>
        </Layout>
    )
}

export const getStaticProps = async ({ preview = false }) => {
    const BlogAll = await getAllPostsForHome(preview)

    return {
        props: { BlogAll, preview },
        revalidate: 10,
    }
}
