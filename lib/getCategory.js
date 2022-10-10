import {fetchAPI} from "./api";

export const createUrl = (item) => { return item.replace(/ /g,"_").toLowerCase() }

export async function getCategory() {
    const data = await fetchAPI(
        `
    query categories {
      categories(first: 100) {
    nodes {
      name
      slug
      posts(first: 5) {
        nodes {
          id
        }
      }
    }
  }
    }
  `  )
    return data.categories?.nodes?.filter((item)=>{
        return item?.posts?.nodes?.length>=5;
    })
}

export async function getPostsForCategory(catId     ) {
      return  await fetchAPI(
 `
 query BlogAll($categoryIn: [ID] ) {
  posts(
    first: 5
    where: {orderby: {field: DATE, order: DESC}, categoryIn: $categoryIn  }
  ) {
    edges {
      node {
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
        blogSingle {
          readingTime
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
}`,{
              variables: {$categoryIn:catId },
          }
    )
}

export async function getCategoryNameBySlug(slug) {
    const data = await fetchAPI(
        `
query categoryName($slug: [String] ) {
  categories(where: {slug: $slug}) {
    nodes {
      name 
      id
    }
  }
}
  `,{
            variables:{
                slug
            }
        }  )

    return data
}