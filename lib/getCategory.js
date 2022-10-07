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
      posts(first: 1) {
        nodes {
          id
        }
      }
    }
  }
    }
  `  )

    return data
}

export async function getPostsForCategory(categoryName     ) {
      return  await fetchAPI(
 `
 query BlogAll($categoryName: String ) {
  posts(
    first: 5
    where: {orderby: {field: DATE, order: DESC}, categoryName: $categoryName}
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
              variables: {categoryName },
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