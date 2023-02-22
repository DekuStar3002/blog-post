import PostImage from '..';
import { render } from "@testing-library/react";

describe('PostImage', () => { 
  it('should render correctly', () => {
    const props = {
      imgSrc: 'imgSrc'
    }
    const { asFragment } = render(<PostImage {...props}/>);
    expect(asFragment()).toMatchSnapshot();
  })
});