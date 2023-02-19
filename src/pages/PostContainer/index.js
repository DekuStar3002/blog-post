import React, { useEffect, useState } from 'react';
import { Post } from '../../component/index';
import jsonData from '../../assets/mockData/index.json';
import './PostContainer.css';
const PostContainer = () => {
  const [ posts, setPosts ] = useState([]);

  const clickLike = (id) => {
    posts[id].liked = !posts[id].liked;
    setPosts([ ...posts ]);
  }

  const clickClap = (id) => {
    if(posts[id].claped) {
      posts[id].claps -= 1;
    } else {
      posts[id].claps += 1;
    }
    posts[id].claped = !posts[id].claped;
    setPosts([ ...posts ]);
  }

  useEffect(() => {
    setPosts([ ...jsonData ]);
  }, []);

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
            claped={post.claped}
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