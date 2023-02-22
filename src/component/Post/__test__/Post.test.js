import Post from '..';
import { render } from '@testing-library/react';
const imgSrc = require(`../../assets/Images/abstract.png`);
jest.mock('../../assets/Images/abstract.png', () => jest.fn());
beforeEach(() => {
  imgSrc.mockClear();
});
describe('Post', () => { 
  it('should render correctly', () => {
    imgSrc.mockImplementation(() => true);
    const props = {
      id: 1, 
      date: 'date', 
      readingTime: 'readingTime', 
      title: 'title', 
      description: 'description', 
      claps: 5, 
      claped: false, 
      clickClap: jest.fn(), 
      liked: false, 
      clickLike: jest.fn(), 
      image: 'abstract.png'
    }
    
    
    const { asFragment } = render(<Post {...props}/>);
    expect(asFragment()).toMatchSnapshot();
  })
});