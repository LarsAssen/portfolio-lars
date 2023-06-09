import { CardType } from '@/Enums/cardType';
import Post from '@/Models/PostModel';
import Title from '@/components/atoms/Title';
import CardList from '@/components/molecules/cardlist/CardList';
import { getPosts } from '@/services/PostService';
import React from 'react'

const index:React.FC<{posts:Post[]}> = ({posts}) => {
  return (
    <div>
      <Title text='Blog' size='large' />
      <CardList items={posts} type={CardType.Post} />
    </div>
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

export default index