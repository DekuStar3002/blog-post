import React, { useEffect, useState, useContext } from "react";
import { ColorRing } from "react-loader-spinner";
import { Post } from "..";
import { API_ENDPOINT } from "../../constants";
import MakeRequest from "../../utils/makeRequest";
import { BlogPostContext } from "../../contexts/BlogPostContext";
import "./PostContainer.css";

function PostContainer() {
  const {posts, setPosts} = useContext(BlogPostContext);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState({
    isError: false,
    message: "",
  });
  
  const handleClap = async (index, id) => {
    await MakeRequest(
      API_ENDPOINT.UPDATE_BLOG_DATA(id, {
        claps: posts[index].claps + 1,
      })
    );
    const newPostData = [...posts];
    newPostData[index] = {
      ...newPostData[index],
      claps: posts[index].claps + 1,
    }
    setPosts(newPostData);
  };

  const handleLike = async (index, id) => {
    await MakeRequest(
      API_ENDPOINT.UPDATE_BLOG_DATA(id, {
        liked: !posts[index].liked,
      })
    );
    const newPostData = [ ...posts ];
    newPostData[index] = {
      ...newPostData[index],
      liked: !posts[index].liked
    };
    setPosts(newPostData);
  };

  useEffect(() => {
    setLoading(true);
    const getPostConfig = API_ENDPOINT.GET_BLOG_DATA();
    MakeRequest(getPostConfig)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorStatus({ isError: true, messaga: error.message });
        setLoading(false);
      });
  }, []);

  return (
    <div className="posts">
      {loading ? (
        <div data-testid="loader">
          <ColorRing
            visible
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : errorStatus.isError ? (
        <div data-testid='error'>{errorStatus.message}</div>
      ) : (
        posts.map((post, index) => (
          <Post
            key={index}
            index={index}
            id={post.id}
            date={post.date}
            readingTime={post.reading_time}
            title={post.title}
            description={post.description}
            claps={post.claps}
            liked={post.liked}
            image={post.image}
            handleClap={handleClap}
            handleLike={handleLike}
          />
        ))
      )}
    </div>
  );
}

export default PostContainer;
