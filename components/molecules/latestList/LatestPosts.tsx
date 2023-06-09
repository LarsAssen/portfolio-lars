import Post from '@/Models/PostModel'
import React from 'react'
import Card from '../card/Card'

const LatestPosts:React.FC<{posts: Post[]}> = ({posts}) => {
  return (
    <div>
        <ul>
            {posts.map((post: Post) => (
                <Card key={1} category='' variant='default' tags={[""]} title=''  ></Card>
            ))}
        </ul>
    </div>
  )
}

export default LatestPosts