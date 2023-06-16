import PortfolioItem from "@/Models/PortfolioItemModel";
import Title from "@/components/atoms/Title";
import { getPortfolioItems } from "@/services/PortfolioItemService";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const portfolioItem: React.FC<{portfolioItem: PortfolioItem}> = ({portfolioItem}) => {

    //const imageUrl = post.attributes.Image.data.attributes.url
    return (
      <div className="container w-full px-4 md:px-6  md:max-w-3xl mx-auto pt-20">
        <div className="w-full text-xl text-gray-800 leading-normal">
        <Title size="large" text={portfolioItem.title} />
        <span className="text-sm md:text-base font-normal text-gray-600">Published <Moment format="MMM Do YYYY">{portfolioItem.date}</Moment></span>
        <img src="/lars.png" alt={"test"} />
      </div>
        <div className="pt-6 text-white">
          <ReactMarkdown>{portfolioItem.content}</ReactMarkdown>
          <div>
            <p>By Lars Assen</p>
          </div>
        </div>
      </div>
    )
}

export async function getStaticPaths() {
  const portfolioItems = await getPortfolioItems();

  return {
    paths: portfolioItems.map((portfolioItem:PortfolioItem) => ({
      params: {
        slug: portfolioItem.slug,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }:any) {
  const portfolioItems = await getPortfolioItems();

  return {
    props: { portfolioItem: portfolioItems[0]},
    revalidate: 10,
  };
}

export default portfolioItem;
