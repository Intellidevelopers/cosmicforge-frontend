import logo from '../../../assets/logo/logo_comsic_splash.svg'
import  fbIcon from    '../../../assets/icons/facebookIcon.svg'
import  instalIcon from    '../../../assets/icons/instagramIcon.svg'
import  youtubeIcon from    '../../../assets/icons/playstoreIcon.svg'
import  linkdin from    '../../../assets/icons/linkendIcon.svg'
import  twitterIcon from    '../../../assets/icons/XIcon.png'
import  location from '../../../assets/icons/cosmic-location-icon.svg'
import  email   from '../../../assets/icons/cosmic-email-icon.svg'

import healthEdu from '../../../assets/icons/cosmic-features-health-edu.svg'
import pharmacy from '../../../assets/icons/cosmic-features-physiotherapy.svg'
import lab from '../../../assets/icons/cosmic-features-lab.svg'
import ai from '../../../assets/icons/cosmic-features-virtual-reality.svg'
import fitness from '../../../assets/icons/cosmic-features-fit-and-emergency.svg'
import therapy from '../../../assets/icons/cosmic-features-therapy.svg'


const Footer = () => {
    return <div className="bg-cosmic-footer-bg h-fit grid grid-cols-1 w-full bg-no-repeat bg-cover bg-center ">



        <div className=" w-full  col-span-1  grid grid-cols-1   md:grid-cols-4 h-fit gap-8">

        <div className="w-full h-full  col-span-1 relative">
           <img src={logo} className='md:m-8' />
           <div className=' left-12 md:absolute bottom-[10%] flex md:p-6 gap-3 justify-center place-items-center mt-8 md:mt-0'>
           <img src={fbIcon} className='w-[50px] h-[50px]' />
           <img src={instalIcon} className='w-[50px] h-[50px]' />
           <img src={youtubeIcon} className='w-[50px] h-[50px]' />
           <img src={linkdin} className='w-[50px] h-[50px]' />
           <img src={twitterIcon} className='w-[50px] h-[50px]' />
           </div>
        </div>

        <div className="w-full h-full  col-span-1 p-10">
           <p>Quick links</p>
           <div className='flex flex-col gap-8 font-light mt-8'>
            <p>Home</p>
            <p>About us</p>
            <p>Features</p>
            <p>Menu</p>
        
         
           </div>
        </div>

        <div className="w-full h-full p-10 col-span-1">
        <p>Legal</p>
           <div className='flex flex-col gap-8 font-light mt-8'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Services</p>
            <p>Blog Post</p>
        
         
           </div>
        </div>

        
        <div className="w-full h-full p-6 col-span-1">
        <p>Contact</p>
           <div className='flex flex-col gap-8 font-light mt-8'>
            <div className='flex gap-2'>
            <img src={location} className='w-[20px] h-[20px]' />
            <p>2118, Thornbridge, Syracruse Connecticut 35624</p>
            </div>

            <div className='flex gap-2'>
            <img src={email} className='w-[20px] h-[20px]' />
            <p>cosmicforge@gmail.com</p>
            </div>
            
        
            <div>
            <p>+234-907-118-1860</p>
            </div>
         
           </div>
        </div>

        </div>

        <p className='font-light text-center p-2'>Copyright Cosmicforge Health Net</p>

    
        
    </div>
}



export default Footer