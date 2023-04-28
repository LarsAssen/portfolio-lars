import { QUERY_FULL_POSTS } from "@/queries/PostQueries";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_API,
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

const mapPost = (postData: any) => ({
    id: postData.id,
    title: postData.title,
    description: postData.description,
    slug: postData.slug,
    //tags: postData.tags.map(mapTag)
});

export const getPosts = async () => {
    const { data } = await client.query({
        query: QUERY_FULL_POSTS,
      });
    return data.posts.data.map(mapPost);
};