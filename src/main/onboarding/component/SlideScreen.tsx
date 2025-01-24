import React, { useState } from 'react';
import nextIcon from '../../../assets/icons/Forward.png';
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
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className='h-screen w-[100%] items-center justify-center flex flex-col'>
                <img src={banner[currentSlide].image} width={'100%'} className='h-screen md:object-fit object-cover object-center' alt='banner'/>
                <div className='h-screen w-screen bg-black/20 fixed top-0'></div>
            </div>
            <div className='fixed flex flex-col md:gap-2 px-[10px] md:py-0 py-[10px] text-center md:justify-start justify-around items-center md:rounded-[3px] rounded-[30px] md:h-[180px] h-[300px] bottom-[5%] w-[95%] bg-white/20 backdrop-blur-[5px]'>
                <div className='flex md:pl-0 pl-[30px] gap-1 md:mt-[20px] mt-0 flex-row w-[100%] md:justify-center justify-start items-center'>
                    <div className={`${currentSlide===0?'w-[40px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                    <div className={`${currentSlide===1?'w-[40px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                    <div className={`${currentSlide===2?'w-[40px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                    <div className={`${currentSlide===3?'w-[40px] bg-[#272EA7]':'w-[25px] bg-[#272EA7]/40'} h-[3px] rounded-[20px]`}></div>
                </div>
                <div className='text-[28px] font-extrabold'>
                    <span>{banner[currentSlide].title}<span className='text-[#272EA7]'>{banner[currentSlide].highlight}</span></span>
                </div>
                <span className='text-white font-extrabold font-stretch-expanded text-[18px]'>{banner[currentSlide].paragraph}</span>
                <div className='flex flex-row w-full justify-center gap-3 items-center border-1 border-red-500'>
                    { ( currentSlide <= 2 ) && ( 
                        <Link className='w-[22%] flex flex-col justify-center items-center rounded-[3px] hover:text-[#272EA7] h-[50px] bg-transparent text-white font-bold text-[17px]' to={'/onboard'}>
                            Skip
                        </Link>
                    )}

                    { currentSlide===3 ? (
                        <Link className='md:w-[22%] flex flex-col justify-center items-center  w-[50%] hover:bg-[#272EA7]/80 rounded-[3px] h-[50px] bg-[#272EA7] text-white font-bold text-[17px]' to={'/onboard'}>
                           Get Started
                        </Link>
                    ):(
                        <button onClick={nextSlide} className='md:w-[22%] w-[50%] hover:bg-[#272EA7]/80 rounded-[3px] h-[50px] bg-[#272EA7] text-white font-bold text-[17px]'>
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SlideScreen;