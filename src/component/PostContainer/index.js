import React, { useEffect, useState } from 'react';
import { Post } from '../index';
import jsonData from '../../assets/mockData/index.json';
import './PostContainer.css';
const PostContainer = () => {
  const [ posts, setPosts ] = useState([ ...jsonData ]);
  const clickLike = (id) => {
    posts[id].liked = !posts[id].liked;
    setPosts([ ...posts ]);
  }
  const clickClap = (id) => {
    posts[id].claps += 1;
    setPosts([ ...posts ]);
  }
  return (
    <div className='posts'>
      {
        posts.map((post, index) => (
          <Post 
            id={index}
            date={post.date}
            readingTime={post.readingTime}
            title={post.title}
            description={post.description}
            claps={post.claps}
            clickClap={clickClap}
            liked={post.liked}
            clickLike={clickLike}
            image={post.image}
          />
        ))
      }
    </div>
  )
}

export default PostContainer;