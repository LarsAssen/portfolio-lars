import Post from "@/Models/PostModel";
import { QUERY_FULL_POSTS } from "@/queries/PostQueries";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_API,
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

const mapPost = (postData: any) => {
  console.log(postData)
  const post = {
    id: postData.id,
    title: postData.attributes.Title,
    content: postData.attributes.Content,
    description: postData.attributes.Description,
    slug: postData.attributes.Slug,
    publishedAt: postData.attributes.publishedAt,
    headerImage: null,
    tags: null,
    date: null,
    category: null
  } as Post;
  return post;
};

const mapPosts = (postsData: any[]) => {
  const posts = postsData.map((postData) => {
    return mapPost(postData);
  });
  return posts;
};

export const getPosts = async () => {
    const { data } = await client.query({
        query: QUERY_FULL_POSTS,
      });
      //console.log(data.posts.data);
      const posts = mapPosts(data.posts.data);
      console.log(posts)
      return posts;
};