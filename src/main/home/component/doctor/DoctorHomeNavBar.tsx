
import searchIcon from '../../../../assets/icons/home/cosmic-home-search-dark.svg'
import botChatIcon from '../../../../assets/icons/home/cosmic-home-bot-chat.svg'
import notificationIcon from '../../../../assets/icons/home/cosmic-home-notification.svg'


interface NavBarProps {
  title: string
}

const DoctorHomeNavBar = ({ title }: NavBarProps) => {

 

  return (

    <div className="hidden md:block  bg-white w-full h-fit  p-5  sticky top-0  shadow-md  z-[200]">
      <div className="  w-full   flex   relative   ">
        <p className="font-extrabold p-1 w-[200px]">{title ?? 'Home'}</p>

        <div className='w-full grid grid-cols-6 gap-4'>
          <div className=" col-span-4   flex ms-20 place-items-center gap-2 ">

            <div className="font-extralight border p-[3px] ms-3 w-[400px] ps-4 rounded-md flex ">
              <img alt='search' src={searchIcon} />
              <textarea className='w-full resize-none h-[25px] outline-none' />

            </div>

          </div>

          <div className=" col-span-2  w-full flex  justify-end  gap-3 pe-8 ">

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

export default DoctorHomeNavBar