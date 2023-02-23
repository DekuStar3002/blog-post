import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import PostContainer from "..";
import MakeRequest from "../../../utils/makeRequest";

jest.mock('../../../utils/makeRequest');

describe('PostContainer', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

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

  it('should show loading when api call is made to backend', async () => {
    MakeRequest.mockResolvedValue(mockData);
    render(<PostContainer />);
    // console.log(screen.getByTestId('loader'));
    expect(screen.getByTestId('loader')).toBeTruthy();
    await waitFor(() => {
      expect(screen.queryAllByTestId('posts')).toHaveLength(2);
    })
  });

  it('should show data when call is made to backend and data is fetched', async () => {
    MakeRequest.mockResolvedValue(mockData);
    render(<PostContainer />);
    await waitFor(() => {
      expect(screen.queryAllByTestId('posts').length).toEqual(2);
    })
  });

  it('should show error message when call is made to backend and error occure', async () => {
    MakeRequest.mockRejectedValue(new Error('Something went wrong!'));
    render(<PostContainer />);
    await waitFor(() => {
      expect(screen.queryByTestId('error')).toBeTruthy() 
    })
  });

});