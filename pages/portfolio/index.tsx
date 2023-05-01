import Title from '@/components/atoms/Title'
import React from 'react'

const index:React.FC = () => {
  return (
    <div>
      <Title text='Portfolio' />

    </div>
  )
}
//// TODO - add portfolio items functionality
// export async function getStaticProps() {
//   const posts = await getPortfolioItems();
//   return {
//     props: {
//       posts: posts,
//     },
//   };
// }

export default index