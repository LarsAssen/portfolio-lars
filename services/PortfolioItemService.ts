import PortfolioItem from "@/Models/PortfolioItemModel";
import { QUERY_FULL_PORTFOLIOITEMS } from "@/queries/PortfolioItemQueries";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const link = new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_API,
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
  
const mapPortfolioItem = (portfolioItemData: any) => {
  const portfolioItem = {
    id: portfolioItemData.id,
    title: portfolioItemData.attributes.Title,
    content: portfolioItemData.attributes.Content,
    description: portfolioItemData.attributes.Description,
    slug: portfolioItemData.attributes.Slug,
    headerImage: portfolioItemData.attributes.HeaderImage.data.attributes.url,
    tags: portfolioItemData.attributes.tags.data.map((tagData: any) => { return tagData.attributes.Title; }),
    date: portfolioItemData.attributes.publishedAt,
    category: portfolioItemData.attributes.category.data.attributes.Title,
  } as PortfolioItem;
  return portfolioItem;
}

const mapPortfolioItems = (portfolioItemsData: any[]) => {
  const portfolioItems = portfolioItemsData.map((portfolioItemData) => {
    return mapPortfolioItem(portfolioItemData);
  });
  return portfolioItems;
}

export const getPortfolioItems = async () => {
    const { data } = await client.query({
        query: QUERY_FULL_PORTFOLIOITEMS,
      });

      const portfolioItems = mapPortfolioItems(data.portfolioItems.data);
      return portfolioItems;
}