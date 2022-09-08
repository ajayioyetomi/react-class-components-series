import React,{Fragment,useState,useEffect} from 'react'

const SlideShow = ({slides}) => {
    const [slideLength,setSlideLength] = useState(slides.length);
    const [slideIndex,setSlideIndex] = useState(0);
    const [currentSlide,setCurrentSlide] = useState({});
    const [restart,setRestart]  = useState(false);
    const [disablePrev,setDisablePrev] = useState(true);
    const [disableNext,setDisableNext] = useState(false);

    const handleNext = () =>{
        if(slideIndex < slideLength){
            setSlideIndex(slideIndex+1);
        }
    }
    const handlePrev = () =>{
        if(slideIndex > 0){
            setSlideIndex(slideIndex-1);
        }
    }

    const handleRestart = () =>{
        setSlideIndex(0);
    }

    useEffect(()=>{
        if(slides && Object.keys(currentSlide).length <= 0){
            setCurrentSlide(slides[0]);
        }
    },[])

    useEffect(()=>{
        if(slideIndex === 0){
            setDisablePrev(true);
            setRestart(false);
        }
        else{
            setDisablePrev(false);
            setRestart(true);
        }
        if(slideIndex === slideLength){
            setDisableNext(true);
        }
        else{
            setDisableNext(false);
        }
        setCurrentSlide(slides[slideIndex]);
    },[slideIndex])

    useEffect(()=>{
        setSlideLength(slides.length - 1);
    },[slides])
    return (
    <Fragment>
        <div className='button-container' title="data-slide-show">
            <button onClick={handleRestart} title="restartBtn" disabled={!restart}>Restart</button>
            <button onClick={handlePrev} title="prevBtn" disabled={disablePrev} >Prev</button>
            <button onClick={handleNext} title="nextBtn" disabled={disableNext} >Next</button>
        </div>
        {Object.keys(currentSlide).length > 0 && <div className='slide-container'>
            <h1>{currentSlide.title}</h1>
            <p>{currentSlide.text}</p>
        </div>}
    </Fragment>
    
  )
}

export default SlideShow