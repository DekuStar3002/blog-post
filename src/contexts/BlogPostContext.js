import React, { createContext, useState } from 'react';

const BlogPostContext = createContext({});

const BlogPostProvider = ({ children }) => {
  const [ posts, setPosts ] = useState([]);
  return (
    <BlogPostContext.Provider value={{posts, setPosts}}>
      {children}
    </BlogPostContext.Provider>
  )
};

export { BlogPostContext, BlogPostProvider };