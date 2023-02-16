import React from 'react';
import './post.css';
import clapIcon from '../../assets/Icons/clapping.svg';
import redLikeIcon from '../../assets/Icons/heart-red.svg';
import blackLikeIcon from '../../assets/Icons/heart-black.svg';
// import imgSrc from '../../assets/Images/abstract.png';
const Post = ({date, readingTime, title, description, claps, liked, image}) => {
  const imgSrc = `../../assets/Images/${image}`;
  console.log(imgSrc)
  return (
    <div className='post'>
      <div className='img'>
        <img src={`../../assets/Images/${image}`} alt='imgSrc'/>
      </div>
      <div className='content'>
        <div className='upper'>
          <p>{date}</p>
          <p>{readingTime}</p>
        </div>
        <div className='middle'>
          <p className='title'>{title}</p>
          <p className='about'>{description}</p>
        </div>
        <hr />
        <div className='bottom'>
          <div className='clap'>
            <img className='reaction' src={clapIcon} alt='clapping'/>
            <p>{claps}</p>
          </div>
          <img className='reaction' src={liked ? redLikeIcon : blackLikeIcon}  alt='like'/>
        </div>
      </div>
    </div>
  );
}

export default Post;