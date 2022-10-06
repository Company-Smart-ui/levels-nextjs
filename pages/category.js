import Head from 'next/head'
import { getAllPostsForHome } from '../lib/api'
import Layout from "../components/layout/layout";
import Category from "../screens/category/category";


export default function CategoryPage({ BlogAll, preview }) {
    const posts = BlogAll?.posts?.edges;
    const categories = BlogAll?.categories?.nodes

    return (
        <Layout preview={preview}>
            <Head>
                Blog
            </Head>
            <Category categories={categories} posts={posts}/>
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
