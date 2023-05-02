interface PortfolioItem{
    id: number,
    title: string,
    description: string,
    headerImage: string | null,
    content: string,
    tags: string[] | null,
    date: string,
    category: string | null,
    slug: string
}

export default PortfolioItem;