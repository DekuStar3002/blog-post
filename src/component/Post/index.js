import React from "react";
import "./Post.css";
import blackClapIcon from "../../assets/Icons/clapping-black.svg";
import redLikeIcon from "../../assets/Icons/heart-red.svg";
import blackLikeIcon from "../../assets/Icons/heart-black.svg";
import { PostImage, PostContent } from "..";

function Post({
  index,
  id,
  date,
  readingTime,
  title,
  description,
  claps,
  liked,
  image,
  handleClap,
  handleLike,
}) {
  return (
    <div className="post" data-testid='posts'>
      <PostImage imgSrc={image} />
      <PostContent
        index={index}
        id={id}
        date={date}
        readingTime={readingTime}
        title={title}
        description={description}
        clapIcon={blackClapIcon}
        claps={claps}
        likeIcon={liked ? redLikeIcon : blackLikeIcon}
        handleClap={handleClap}
        handleLike={handleLike}
      />
    </div>
  );
}

export default Post;
