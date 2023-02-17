import React from 'react'
import './PostImage.css';
const PostImage = ({ imgSrc }) => {
  return (
    <div className='img'>
        <img src={imgSrc} alt='imgSrc'/>
    </div>
  )
}

export default PostImage;