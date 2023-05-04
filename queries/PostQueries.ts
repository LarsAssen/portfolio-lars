import { gql } from "@apollo/client";

export const QUERY_FULL_POSTS = gql`
query
{
  posts{
    data{
      id
      attributes{
        Title
        Content
        Description
        Slug
        publishedAt
      }
    }
  }
}
`;