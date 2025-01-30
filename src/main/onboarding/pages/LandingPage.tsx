import frame1 from '../../../assets/images/frame1.jpeg';
import frame2 from '../../../assets/images/frame2.jpeg';
import frame3 from '../../../assets/images/frame3.jpeg';
import frame4 from '../../../assets/images/frame4.jpeg';
import React, { useEffect, useState } from 'react';
import SlideScreen from '../component/SlideScreen';
import SplashScreen from '../component/SplashScreen';

const banner = [ 
    {
        image: frame1,
        title: 'Your Virtual AI assistant and ' ,
        highlight:'Diagnostic Partner',
        paragraph:'Seamless virtual consultations, Intelligent diagnosis at your fingertips'
    },
    {
        image: frame2,
        title: 'Virtual consultation with ',
        highlight:'Specialist',
        paragraph:'Connect with top specialists, Expert care to you anytime, anywhere'
    },
    {
        image: frame3,
        title: 'With Health Education, ',
        highlight:'Learn, Understand, Thrive',
        paragraph:'Access reliable health resources and expert insights to guide you to better'
    },
    {
        image: frame4,
        title: 'Telehealth revolutionized with ',
        highlight:'Cosmicforge',
        paragraph:'Cosmicforge transforms telehealth, bringing advanced healthcare to your convinience'
    }
]


const  LandingPage: React.FC =  () =>{
    const [ isImageLoaded, setIsImageLoaded ] = useState(false);

    useEffect( () => {
        // setTimeout(() => {
        //     setIsImageLoaded(true)
        // }, 5000);
        let loadedCount:number = 0;
        banner.map( (slide) => {
            const img = new Image;
            img.src = slide.image;
            img.onload = () => {
                loadedCount++;
                if ( loadedCount === banner.length ) {
                    setIsImageLoaded(true);
                }
            }
            img.onerror = () => {
                console.log(`error occurred loading frame ${loadedCount+1}`);
            }
        })

    })


    return (
        <div>
            { isImageLoaded && <SlideScreen banner={banner}/> }
            { (!isImageLoaded) && <SplashScreen/>} 
        </div>
    )
}

export default LandingPage