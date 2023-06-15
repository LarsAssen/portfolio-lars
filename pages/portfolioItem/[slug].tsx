import ReactMarkdown from "react-markdown";

const Post: React.FC<{portfolioItem: any}> = ({portfolioItem}) => {

    //const imageUrl = post.attributes.Image.data.attributes.url
    return (
      <div className="container w-full px-4 md:px-6  md:max-w-3xl mx-auto pt-20">
        <div className="pt-6">
          <ReactMarkdown>{portfolioItem.attributes.Content}</ReactMarkdown>
          <div>
            <p>By Lars Assen</p>
          </div>
        </div>
      </div>
    )
}

export async function getStaticPaths() {
  const postsData = await fetchAPI("/portfolioItems");
  const posts = postsData.data;

  return {
    paths: posts.map((post:any) => ({
      params: {
        slug: post.attributes.Slug,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }:any) {

//   const portfolioItemData = await fetchAPI(
//     `/por`,
//   );
//   const portfolioItems = portfolioItemData.data.filter((post:any) => post.attributes.Slug === params.slug);

//   const categories = await fetchAPI("/categories");

  return {
    props: { portfolioItem: portfolioItems[0], categories },
    revalidate: 10,
  };
}

export default Post;
