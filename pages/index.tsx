import Head from 'next/head'
import Hero from '@/components/molecules/hero/Hero'
import { getPosts } from '@/services/PostService'
import Post from '@/Models/PostModel'

const personalImage = "/lars.png"
const bgimage = 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

export default function Home({posts} :any) {
  return (
    <>
      <Head>
        <title>Portfolio Lars</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero title='Lars Assen' backgroundImageUrl={bgimage} imageUrl={personalImage} text='And I design and build stuff for the web' buttonText='follow me' onClick={() => {}} />
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts: posts,
    },
  };
}