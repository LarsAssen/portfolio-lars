import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const link = new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_API,
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
  