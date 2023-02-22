import React from "react";
import { getFormattedDateFromUtcDate } from "../../utils/common";
import "./PostContent.css";

function PostContent({
  index,
  id,
  date,
  readingTime,
  title,
  description,
  clapIcon,
  claps,
  likeIcon,
  handleClap,
  handleLike,
}) {
  return (
    <div className="content">
      <div className="upper">
        <p>{getFormattedDateFromUtcDate(date)}</p>
        <p>{readingTime}</p>
      </div>
      <div className="middle">
        <p className="title">{title}</p>
        <p className="about">{description}</p>
      </div>
      <hr className="horizontalLine" />
      <div className="bottom">
        <div className="clap">
          <img
            data-testid="clap-src"
            className="reaction"
            onClick={() => handleClap(index, id)}
            src={clapIcon}
            alt="clapping"
          />
          <p data-testid="claps">{claps}</p>
        </div>
        <img
          data-testid="heart"
          className="reaction heart"
          onClick={() => handleLike(index, id)}
          src={likeIcon}
          alt="like"
        />
      </div>
    </div>
  );
}

export default PostContent;
