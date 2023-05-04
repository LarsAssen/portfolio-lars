interface Post {
    id: number,
    title: string,
    description: string,
    headerImage: string | null,
    content: string,
    tags: string[] | null,
    date: string | null,
    category: string | null,
    slug: string
}

export default Post;