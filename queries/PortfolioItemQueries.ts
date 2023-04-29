import { gql } from "@apollo/client";

export const QUERY_FULL_PORTFOLIOITEMS = gql`
query {
  portfolioItems{
    data{
      id
      attributes{
        Title
        Description
        Content
        Slug
        publishedAt
      }
    }
  }
}
`;