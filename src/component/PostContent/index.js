import React from 'react'
import './PostContent.css';

const PostContent = ({ id, date, readingTime, title, description, clapIcon, claps, clickClap, likeIcon, clickLike }) => {
  return (
    <div className='content'>
      <div className='upper'>
        <p>{date}</p>
        <p>{readingTime}</p>
      </div>
      <div className='middle'>
        <p className='title'>{title}</p>
        <p className='about'>{description}</p>
      </div>
      <hr className='horizontalLine'/>
      <div className='bottom'>
        <div className='clap'>
          <img data-testid='clap-src' className='reaction' onClick={() => clickClap(id)} src={clapIcon} alt='clapping'/>
          <p data-testid='claps'>{claps}</p>
        </div>
        <img data-testid='heart' className='reaction' onClick={() => clickLike(id)} src={likeIcon}  alt='like'/>
      </div>
    </div>
  )
}

export default PostContent;