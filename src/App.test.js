import { render,fireEvent } from '@testing-library/react';

import {SlideShow} from './views/index';


const slides = [
  {
    title:"title1",
    text:"Hello this is text1"
  },
  {
    title:"title2",
    text:"Hello this is text2"
  },
  {
    title:"title3",
    text:"Hello this is text3"
  },
  {
    title:"title4",
    text:"Hello this is text4"
  }


]

const slides2 = [
  {
    title:"title1",
    text:"Hello this is text1"
  },
  {
    title:"title2",
    text:"Hello this is text2"
  }
 
]

it('button-container to be rendered',()=>{
  const {queryByTitle} = render(<SlideShow slides={slides}/>);
  const slideSh = queryByTitle("data-slide-show");
  expect(slideSh).toBeTruthy();
})



describe("clickNext",()=>{
  it("click next button",()=>{
    const {queryByTitle} = render(<SlideShow slides={slides} />);
    const prevBtn = queryByTitle('prevBtn');
    const nextBtn = queryByTitle('nextBtn');
    expect(prevBtn.disabled).toBe(true);
    fireEvent.click(nextBtn);
    expect(prevBtn.disabled).toBe(false);
  })
})

describe('clickStart',()=>{
  it('click restart button',()=>{
    const {queryByTitle} = render(<SlideShow slides={slides2} />);
    const prevBtn = queryByTitle('prevBtn');
    const nextBtn = queryByTitle('nextBtn');
    const restartBtn = queryByTitle('restartBtn');
    expect(prevBtn).toBeDisabled();
    fireEvent.click(nextBtn);
    expect(prevBtn).toBeEnabled();
    expect(restartBtn).toBeEnabled();
    fireEvent.click(restartBtn);
    expect(restartBtn).toBeDisabled();
    expect(prevBtn).toBeDisabled();
  })
})

