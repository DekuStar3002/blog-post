import BlogPage from "..";
import { render } from "@testing-library/react";

describe('BlogPage', () => { 
  it('should render correctly', () => {
    const { asFragment } = render(<BlogPage />);
    expect(asFragment()).toMatchSnapshot();
  })
 })