import PostContent from "..";
import { fireEvent, render, screen } from "@testing-library/react";
import redLikeIcon from '../../../assets/Icons/heart-red.svg';
import blackLikeIcon from '../../../assets/Icons/heart-black.svg';
import blackClapIcon from '../../../assets/Icons/clapping-black.svg';
import greyClapIcon from '../../../assets/Icons/clapping-grey.svg';

describe('PostContent', () => { 
  it('should display liked heart when heart button is clicked and blog is not liked', () => {
    const props = {
      id: 0, 
      date: 'date', 
      readingTime: 'readingTime', 
      title: 'title', 
      description: 'description', 
      clapIcon: blackClapIcon, 
      claps: 5,
      clickClap: jest.fn(), 
      likeIcon: redLikeIcon, 
      clickLike: jest.fn(),
    }
    render(<PostContent { ...props } />);
    fireEvent.click(screen.queryByTestId('heart'));
    expect(screen.queryByTestId('heart').src).toContain('heart-red.svg'); 
  });

  it('should display black heart when heart button is clicked and blog is liked', () => {
    const props = {
      id: 0, 
      date: 'date', 
      readingTime: 'readingTime', 
      title: 'title', 
      description: 'description', 
      clapIcon: blackClapIcon, 
      claps: 5, 
      clickClap: jest.fn(), 
      likeIcon: blackLikeIcon, 
      clickLike: jest.fn(),
    }
    render(<PostContent { ...props } />);
    fireEvent.click(screen.queryByTestId('heart'));
    expect(screen.queryByTestId('heart').src).toContain('heart-black.svg'); 
  });

  it('should display black clap when clap button is clicked and blog is not claped', () => {
    const props = {
      id: 0, 
      date: 'date', 
      readingTime: 'readingTime', 
      title: 'title', 
      description: 'description', 
      clapIcon: blackClapIcon, 
      claps: 5,
      clickClap: jest.fn(), 
      likeIcon: redLikeIcon, 
      clickLike: jest.fn(),
    }
    render(<PostContent {...props} />);
    fireEvent.click(screen.queryByTestId('clap-src'));
    expect(screen.queryByTestId('clap-src').src).toContain('clapping-black.svg');
  });

  it('should display grey clap when clap button is clicked and blog is claped', () => {
    const props = {
      id: 0, 
      date: 'date', 
      readingTime: 'readingTime', 
      title: 'title', 
      description: 'description', 
      clapIcon: greyClapIcon, 
      claps: 5,
      clickClap: jest.fn(), 
      likeIcon: redLikeIcon, 
      clickLike: jest.fn(),
    }
    render(<PostContent {...props} />);
    fireEvent.click(screen.queryByTestId('clap-src'));
    expect(screen.queryByTestId('clap-src').src).toContain('clapping-grey.svg');
  });
 })