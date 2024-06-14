import React from 'react'

export default function Posts({ posts, loading}) {
    if(loading){
        return <h2>Loading</h2>
    }


    // console.log("posts", posts)
  return (
   <ul className='mb-4'>
    {posts.map((post) => (
        <li key={post.id} className='flex'>
            {post.title}
        </li>
    ))}
   </ul>
  )
}
