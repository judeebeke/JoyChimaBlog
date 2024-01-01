import { request, gql } from 'graphql-request'

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT

export const getRecentBlogPost = async () => {
  if (!graphqlApi) {
    console.error('GraphQL API endpoint is not valid or defined')
    return
  }

  const query = gql`
    query RecentPosts {
      postsConnection(last: 6, orderBy: createdAt_DESC) {
        edges {
          node {
            title
            excerpt
            createdAt
            author {
              name
              slug
            }
            id
            slug
          }
        }
      }
    }
  `

  try {
    const result = await request<AboutBlog>(graphqlApi, query)
    return result.postsConnection
  } catch (error) {
    console.error('Error fetching data')
    throw 'Failed to fetch data'
  }
}

export const getAllBlogPost = async (skip: number) => {
  if (!graphqlApi) {
    // Handle the case where graphqlApi is undefined (e.g., log an error, throw an exception, etc.)
    console.error('GraphQL API endpoint is not valid or defined')
    return
  }

  const query = gql`
    query AllPosts($skip: Int) {
      postsConnection(orderBy: createdAt_DESC, skip: $skip) {
        edges {
          node {
            title
            excerpt
            createdAt
            author {
              name
              slug
            }
            id
            slug
          }
        }
      }
    }
  `

  try {
    const result = await request<AboutBlog>(graphqlApi, query, { skip })

    return result.postsConnection
  } catch (error) {
    console.error('Error fetching data')
    throw 'Failed to fetch data'
  }
}

export const getAboutBlog = async () => {
  if (!graphqlApi) {
    console.error('GraphQL API endpoint is not valid or defined')
    return
  }

  const query = gql`
    query AboutBlog {
      aboutBlogsConnection {
        edges {
          node {
            heading
            id
            aboutContent {
              raw
            }
          }
        }
      }
    }
  `

  try {
    const result = await request<AboutBlog>(graphqlApi, query)

    return result.aboutBlogsConnection
  } catch (error) {
    console.error('Error fetching data')
    throw 'Failed to fetch data'
  }
}
