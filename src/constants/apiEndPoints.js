const BACKEND_URL = 'http://localhost:8080/';

const GET_BLOG_DATA = () => {
  return {
    baseURL: BACKEND_URL,
    url: 'blog-posts',
    method: 'get',
  };
};

const UPDATE_BLOG_DATA = (id, data) => {
  return {
    baseURL: BACKEND_URL,
    url: `blog-posts/${id}`,
    method: 'put',
    data: data
  };
};

export default { BACKEND_URL, GET_BLOG_DATA, UPDATE_BLOG_DATA };