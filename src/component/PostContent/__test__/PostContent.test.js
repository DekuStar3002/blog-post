import PostContent from "..";
import { fireEvent, render, screen } from "@testing-library/react";
import redLikeIcon from '../../../assets/Icons/heart-red.svg';
import blackLikeIcon from '../../../assets/Icons/heart-black.svg';
import blackClapIcon from '../../../assets/Icons/clapping-black.svg';
import greyClapIcon from '../../../assets/Icons/clapping-grey.svg';

describe('PostContent', () => { 
  it('should call handleLike function when clicked on the heart button', () => {
    const props = {
      index: 0,
      id: 0,
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      clapIcon: 'clapIcon',
      claps: 5,
      likeIcon: 'likeIcon',
      handleClap: jest.fn(),
      handleLike: jest.fn(),
    }
    render(<PostContent { ...props } />);
    fireEvent.click(screen.queryByTestId('heart'));
    expect(props.handleLike).toHaveBeenCalled(); 
  });

  it('should display liked heart when heart button is clicked and blog is not liked', () => {
    const props = {
      index: 0,
      id: 0,
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      clapIcon: 'clapIcon',
      claps: 5,
      likeIcon: 'likeIcon',
      handleClap: jest.fn(),
      handleLike: jest.fn(),
    }
    render(<PostContent { ...props } />);
    fireEvent.click(screen.queryByTestId('heart'));
    expect(screen.queryByTestId('heart').src).toContain('likeIcon'); 
  });

  it('should display black heart when heart button is clicked and blog is liked', () => {
    const props = {
      index: 0,
      id: 0,
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      clapIcon: 'clapIcon',
      claps: 5,
      likeIcon: 'likeIcon',
      handleClap: jest.fn(),
      handleLike: jest.fn(),
    }
    render(<PostContent { ...props } />);
    fireEvent.click(screen.queryByTestId('heart'));
    expect(screen.queryByTestId('heart').src).toContain('likeIcon'); 
  });

  it('should display black clap when clap button is clicked and blog is not claped', () => {
    const props = {
      index: 0,
      id: 0,
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      clapIcon: 'clapIcon',
      claps: 5,
      likeIcon: 'likeIcon',
      handleClap: jest.fn(),
      handleLike: jest.fn(),
    }
    render(<PostContent {...props} />);
    fireEvent.click(screen.queryByTestId('clap-src'));
    expect(screen.queryByTestId('clap-src').src).toContain('clapIcon');
  });

  it('should display grey clap when clap button is clicked and blog is claped', () => {
    const props = {
      index: 0,
      id: 0,
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      clapIcon: 'clapIcon',
      claps: 5,
      likeIcon: 'likeIcon',
      handleClap: jest.fn(),
      handleLike: jest.fn(),
    }
    render(<PostContent {...props} />);
    fireEvent.click(screen.queryByTestId('clap-src'));
    expect(screen.queryByTestId('clap-src').src).toContain('clapIcon');
  });

  it('should call handleClap function when clicked on the like button', () => {
    const props = {
      index: 0,
      id: 0,
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      clapIcon: 'clapIcon',
      claps: 5,
      likeIcon: 'likeIcon',
      handleClap: jest.fn(),
      handleLike: jest.fn(),
    }
    render(<PostContent { ...props } />);
    fireEvent.click(screen.queryByTestId('clap-src'));
    expect(props.handleClap).toHaveBeenCalled(); 
  });
 })