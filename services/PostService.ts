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
  const post = {
    id: postData.id,
    title: postData.attributes.Title,
    content: postData.attributes.Content,
    description: postData.attributes.Description,
    slug: postData.attributes.Slug,
    publishedAt: postData.attributes.publishedAt,
    headerImage: postData.attributes.HeaderImage.data.attributes.url,
    tags: postData.attributes.tags.data.map((tagData: any) => { return tagData.attributes.Title; }),
    date: postData.attributes.publishedAt,
    category: postData.attributes.category.data.attributes.Title,
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

      const posts = mapPosts(data.posts.data);
      return posts;
};