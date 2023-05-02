import React from 'react'
import Card from '../card/Card'

const PostCardList:React.FC<{items: any[], type: string}> = ({items, type}) => {
  if(type === 'post') {
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} title={item.title} text={item.body} />
      ))}
    </div>

  } else if(type === 'portfolio') {
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} title={item.title} text={item.description} />
      ))}
    </div>
    
  } else {
    return null
  }

}

export default PostCardList