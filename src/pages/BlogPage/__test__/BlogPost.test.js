import BlogPage from "..";
import { render } from "@testing-library/react";
import { BlogPostContext } from "../../../contexts/BlogPostContext";

describe('BlogPage', () => { 
  const mockData = [
    {
        "id": 3,
        "date": "2023-02-20T21:00:00.001Z",
        "reading_time": "2 mins",
        "title": "10 young painters you need to know",
        "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.",
        "claps": 26,
        "liked": false,
        "image": "https://i.ibb.co/V38cHQ3/young-painters.png"
    },
    {
        "id": 1,
        "date": "2023-02-01T14:46:22.001Z",
        "reading_time": "2 mins",
        "title": "The future of abstract art and the culture is a bright one",
        "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.",
        "claps": 4,
        "liked": false,
        "image": "https://i.ibb.co/LNxt44v/abstract.png"
    }
  ];

  const mockSetPosts = jest.fn();

  it('should render correctly', () => {
    const { asFragment } = render(
      <BlogPostContext.Provider value={{ posts: mockData, setPosts: mockSetPosts }}>
        <BlogPage />
      </BlogPostContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  })
 })