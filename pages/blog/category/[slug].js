
import Layout from "../../../components/layout/layout";
import { getCategory, getCategoryNameBySlug, getPostsForCategory} from "../../../lib/getCategory";
import Head from "next/head";
import Category from "../../../screens/blog/category/category";
import ErrorPage from "next/error";
import {useRouter} from "next/router";

export default function CategoryPage({ posts , error, categories}) {
    const router = useRouter();
    if (!router.isFallback && error) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout>

                <Head>
                    Blog
                </Head>
            <Head>
                Blog
            </Head>
            <Category categories={categories?.nodes||[]} posts={posts?.posts?.edges}/>
        </Layout>

    )
}

export const getStaticProps = async ( {params}) => {


    const catName  =await  getCategoryNameBySlug(params.slug);

    const name = catName?.categories?.nodes?.[0]?.name;
    if(!name){
        return {
            props:{
                error:true,
                posts:[]
            }
        }
    }
    const posts = await getPostsForCategory(name);
    const {categories} = await getCategory();
    return {
        props: {
            posts,
            params,
            categories
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
   const {categories} = await getCategory()

    return {
        paths: categories?.nodes?.map(({ slug }) => `/blog/category/${slug}`) || [],
        fallback: true,
    }
}