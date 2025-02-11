
import tuneIcon from '../../../assets/icons/home/cosmic-home-tune.svg'
import searchIcon from '../../../assets/icons/home/cosmic-home-search-dark.svg'
import shopIcon from '../../../assets/icons/home/cosmic-home-shop.svg'
import cartIcon from '../../../assets/icons/home/cosmic-home-cart.svg'
import botChatIcon from '../../../assets/icons/home/cosmic-home-bot-chat.svg'
import notificationIcon from '../../../assets/icons/home/cosmic-home-notification.svg'
import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"

  // interface NavBarProps {
  //   title:string
  // }

export const changeWidthToFit = "ms-[0] md:ms-[180px] lg:ms-[294px]"
export const changeWidthToFit2 = "md:ms-[180px] lg:ms-[294px]"

const HomeNavBar = () => {
  const [pgTitle,setTitle] = useState<string|undefined>('')
  const windowLocation = useLocation()

  
  useEffect(()=>{
    
    const sanitizeString = (string:string)=>{
      return string.split('-').join(' ')
    }

    let url:string | string[] = window.location.href;

    url = url.split('/')
      const location:string|undefined = url.pop()
      if(typeof location === 'string'){
        setTitle(sanitizeString(location))
      }else{
        setTitle('')
      }
  },[windowLocation])

    return  (

        <div className="ms-[0] md:ms-[180px] lg:ms-[294px] bg-white w-full h-fit mb-4 p-5  sticky top-0  shadow-md shadow-black z-[200px]">
          <div className="relative flex flex-row-reverse justify-start items-start md:flex-col  md:gap-4">
            <div className="md:w-[85%]  w-full flex  flex-wrap relative justify-center items-center md:justify-start">
              <p className="font-extrabold p-1 capitalize">{pgTitle}</p>
              <div className=" absolute left-[20%]   md:flex md:flex-wrap justify-end  place-items-center gap-2 hidden"> 
              <div className="font-extralight border p-[3px] md:w-[300px] rounded-md xl:flex hidden">
                  <img alt='search' src={searchIcon} />
                  <textarea className='w-full resize-none h-[25px] outline-none' title='search' />

              </div>
              <div className="font-extralight min-w-[40px] rounded-md border p-1 hidden">
                <img alt='tune' src={tuneIcon} />
              </div>
              </div>

              <div className="hidden md:absolute  right-[10%] md:flex flex-wrap md:justify-center  gap-1 md:w-fit w-full  justify-end mt-10 md:mt-0 ">
              <div className="font-extralight min-w-[40px] flex  justify-center rounded-md border p-1 ">
                <img alt='tune' src={shopIcon} />
              </div>
              <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
                <img alt='tune' src={cartIcon} />
              </div>
              <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
                <img alt='tune' src={botChatIcon} />
              </div>
              <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
                <img alt='tune' src={notificationIcon} />
              </div>
              </div>
            </div>
            <div className=" left-5 flex justify-center items-center gap-2 md:gap-1 absolute md:static">
              <i className="fas fa-angle-left "></i>
              <p className="hidden md:block" >Go Back</p>
            </div>
          </div>
        </div>
    )
}

export default  HomeNavBar