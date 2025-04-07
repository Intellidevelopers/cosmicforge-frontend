
import tuneIcon from '../../../../assets/icons/home/cosmic-home-tune.svg'
import searchIcon from '../../../../assets/icons/home/cosmic-home-search-dark.svg'
import shopIcon from '../../../../assets/icons/home/cosmic-home-shop.svg'
import cartIcon from '../../../../assets/icons/home/cosmic-home-cart.svg'
import botChatIcon from '../../../../assets/icons/home/cosmic-home-bot-chat.svg'
import notificationIcon from '../../../../assets/icons/home/cosmic-home-notification.svg'

interface NavBarProps {
  title: string
}




const HomeNavBar = ({ title }: NavBarProps) => {


  return (

    <div className="  hidden md:block  bg-white w-full min-h-[70px] h-fit  p-5  sticky top-0  shadow-md shadow-black/10 z-[100]">

      <div className="md:w-[75%]  w-full flex  relative   ">

        <p className="font-extrabold pt-2 min-w-fit pe-2 text-wrap  ">{title ?? 'Home'}</p>

        <div className=' p-1 w-dvw  relative '>

          <div className=" w-[50%] md:w-[80%] font-light  absolute left-[8%]  flex flex-wrap   place-items-center gap-2  ">
            <div className='w-[50%] md:w-[60%] font-extralight min-w-[40px] rounded-md border p-1  flex gap-1'>
              <img alt='tune' src={searchIcon} />
              <input className='w-full outline-none' type='search' placeholder='search here' />



            </div>

            <div className="font-extralight min-w-[40px]  rounded-md border p-1 ">
              <img alt='tune' src={tuneIcon} />
            </div>
          </div>



          <div className="hidden    absolute  right-[0%] md:flex flex-wrap md:justify-center  gap-1 md:w-fit    ">
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





      </div>




    </div>



  )
}

export default HomeNavBar