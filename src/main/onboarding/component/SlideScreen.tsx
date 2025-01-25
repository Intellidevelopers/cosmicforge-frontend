import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
    image:string,
    highlight:string,
    title: string,
    paragraph: string,
}
interface ComponentProps {
    banner: Slide[],
}


const  SlideScreen: React.FC<ComponentProps> =  ( { banner } ) =>{ 
    const [ currentSlide, setCurrentSlide ] = useState(0);

    function nextSlide() {
        setCurrentSlide(currentSlide+1);
    }


    return (
        <div className="w-screen h-screen">
                <div className='h-screen w-screen flex overflow-hidden'>
                { banner.map( (slide) =><img key={slide.title} src={slide.image} style={{translate: `${-100 * currentSlide }%`, transition:'translate 500ms ease-in-out'}} className='h-screen flex-shrink-0 flex-grow-0 w-screen block object-cover' alt='banner'/>)}
                <div className='h-screen w-screen bg-black/20 fixed top-0'></div>
                </div>
          
            <div className='fixed flex flex-col md:gap-2 px-[10px] md:py-[10px] py-[10px] text-center md:justify-start justify-around items-center md:rounded-[3px] rounded-[20px] md:h-[180px] h-[300px] bottom-[5%] w-[95%] ml-[2.5%] bg-white/20 backdrop-blur-[5px]'>
                <div className='flex md:pl-0 h-[50px] pl-[30px] gap-1 md:mt-[20px] mt-0 flex-row w-[100%] md:justify-center justify-start items-top'>
                    <div className={`${currentSlide===0?'w-[50px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                    <div className={`${currentSlide===1?'w-[50px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                    <div className={`${currentSlide===2?'w-[50px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                    <div className={`${currentSlide===3?'w-[50px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                </div>
                <div className='md:text-[25px] text-[20px] font-extrabold'>
                    <span>{banner[currentSlide].title}<span className='text-[#272EA7]'>{banner[currentSlide].highlight}</span></span>
                </div>
                <span className='text-white font-extrabold font-stretch-expanded md:text-[18px] text-[16px]'>{banner[currentSlide].paragraph}</span>
                <div className='flex flex-row w-full justify-center gap-3 items-center border-1 border-red-500'>
                    { ( currentSlide <= 2 ) && ( 
                        <Link className='w-[22%] flex flex-col justify-center items-center rounded-[3px] hover:text-[#272EA7] h-[40px] bg-transparent text-white font-bold text-[17px]' to={'/onboard'}>
                            Skip
                        </Link>
                    )}

                    { currentSlide === 3 ? (
                        <Link className='md:w-[22%] flex flex-col justify-center items-center  w-[50%] hover:bg-[#272EA7]/80 rounded-[3px] h-[40px] bg-[#272EA7] text-white font-bold text-[17px]' to={'/onboard'}>
                           Get Started
                        </Link>
                    ):(
                        <button onClick={nextSlide} className='md:w-[22%] w-[50%] hover:bg-[#272EA7]/80 rounded-[3px] h-[40px] bg-[#272EA7] text-white font-bold text-[17px]'>
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SlideScreen;