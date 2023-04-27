interface PortfolioItem{
    id: number,
    title: string,
    description: string,
    headerImage: string,
    content: string,
    tags: string[],
    date: string,
    category: string,
    slug: string
}

export default PortfolioItem;