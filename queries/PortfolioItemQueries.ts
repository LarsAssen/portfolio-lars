import { gql } from "@apollo/client";

export const QUERY_FULL_PORTFOLIOITEMS = gql`
query {
  portfolioItems {
    data {
      id
      attributes {
        Title
        Description
        Content
        Slug
        publishedAt
        tags {
          data {
            attributes {
              Title
            }
          }
        }
        category {
          data {
            attributes {
              Title
            }
          }
        }
        HeaderImage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;