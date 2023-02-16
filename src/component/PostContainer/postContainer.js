import React, { useEffect, useState } from 'react';
import Post from '../Post/post';
import jsonData from '../../assets/mockData/index.json';
import './postContainer.css';
const PostContainer = () => {
  const [ posts, setPosts ] = useState([ ...jsonData ]);
  console.log(posts);
  return (
    <div className='posts'>
      {
        posts.map((post) => (
          <Post 
            date={post.date}
            readingTime={post.readingTime}
            title={post.title}
            description={post.description}
            claps={post.claps}
            liked={post.liked}
            image={post.image}
          />
        ))
      }
    </div>
  )
}

export default PostContainer;