import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";
import Layout from "../../components/layout/layout";
import {SinglePost} from "../../screens/singlePost/singlePost";

export default function Post({ post, posts, preview }) {
    const router = useRouter()
    const morePosts = posts?.edges

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <SinglePost post={post}/>
        </Layout>

    )
}

export const getStaticProps = async ({
                                                         params,
                                                         preview = false,
                                                         previewData,
                                                     }) => {
    const data = await getPostAndMorePosts(params?.slug, preview, previewData)

    return {
        props: {
            preview,
            post: data.post,
            posts: data.posts,
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
        fallback: true,
    }
}