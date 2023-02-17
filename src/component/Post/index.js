import React from 'react';
import './Post.css';
import clapIcon from '../../assets/Icons/clapping.svg';
import redLikeIcon from '../../assets/Icons/heart-red.svg';
import blackLikeIcon from '../../assets/Icons/heart-black.svg';
import { PostImage, PostContent } from '../index';

const Post = ({id, date, readingTime, title, description, claps, clickClap, liked, clickLike, image}) => {
  const imgSrc = require(`../../assets/Images/${image}`);
  return (
    <div className='post'>
      <PostImage
        imgSrc={imgSrc} 
      />
      <PostContent 
        id={id}
        date={date}
        readingTime={readingTime}
        title={title}
        description={description}
        clapIcon={clapIcon}
        claps={claps}
        clickClap={clickClap}
        likeIcon={liked ? redLikeIcon : blackLikeIcon}
        clickLike={clickLike}
      />
    </div>
  );
}

export default Post;