import axios from "axios";
import MakeRequest from "..";
import { API_ENDPOINT } from '../../../constants';

jest.mock('axios');

describe('MakeRequest', () => { 
  const mockData = {
    data: [{
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
    }]
  };
  const mockNavigate = jest.fn();

  it('should return data for get request when api is been called', async () => {
    axios.mockResolvedValueOnce(mockData);
    expect(axios).not.toHaveBeenCalled();
    const response = await MakeRequest(API_ENDPOINT.GET_BLOG_DATA(), mockNavigate);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: API_ENDPOINT.BACKEND_URL,
      url: 'blog-posts',
      method: 'get',
    });
    expect(response).toEqual(mockData.data);
  });

  it('should return updated value of clap when clap is updated', async () => {
    axios.mockResolvedValueOnce({ data: { claps: 60 } });
    expect(axios).not.toHaveBeenCalled();
    const response = await MakeRequest(API_ENDPOINT.UPDATE_BLOG_DATA(1, { claps: 60 }));
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: API_ENDPOINT.BACKEND_URL,
      url: `blog-posts/${1}`,
      method: 'put',
      data: { claps: 60 }
    });
    expect(response).toEqual({ claps: 60 });
  })

  it('should return updated value of like when like is updated', async () => {
    axios.mockResolvedValueOnce({ data: { liked: true } });
    expect(axios).not.toHaveBeenCalled();
    const response = await MakeRequest(API_ENDPOINT.UPDATE_BLOG_DATA(1, { liked: true }));
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: API_ENDPOINT.BACKEND_URL,
      url: `blog-posts/${1}`,
      method: 'put',
      data: { liked: true }
    });
    expect(response).toEqual({ liked : true });
  })

  it('should render error page when receive error from server', async () => {
    axios.mockRejectedValueOnce({ });
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(axios).not.toHaveBeenCalled();
    await MakeRequest(API_ENDPOINT.GET_BLOG_DATA(), mockNavigate);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/error')
  });

  it('should render error page with status code when receive error from server', async () => {
    axios.mockRejectedValueOnce({ response: { status: 500 } });
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(axios).not.toHaveBeenCalled();
    await MakeRequest(API_ENDPOINT.GET_BLOG_DATA(), mockNavigate);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/error/500')
  });
 })