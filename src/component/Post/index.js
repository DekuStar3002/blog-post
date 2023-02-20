import React from 'react';
import './Post.css';
import blackClapIcon from '../../assets/Icons/clapping-black.svg';
import greyClapIcon from '../../assets/Icons/clapping-grey.svg';
import redLikeIcon from '../../assets/Icons/heart-red.svg';
import blackLikeIcon from '../../assets/Icons/heart-black.svg';
import { PostImage, PostContent } from '..';

const Post = ({id, date, readingTime, title, description, claps, claped, clickClap, liked, clickLike, image}) => {
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
        clapIcon={claped ? blackClapIcon : greyClapIcon}
        claps={claps}
        clickClap={clickClap}
        likeIcon={liked ? redLikeIcon : blackLikeIcon}
        clickLike={clickLike}
      />
    </div>
  );
}

export default Post;