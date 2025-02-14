
import searchIcon from '../../../../assets/icons/home/cosmic-home-search-dark.svg'
import botChatIcon from '../../../../assets/icons/home/cosmic-home-bot-chat.svg'
import notificationIcon from '../../../../assets/icons/home/cosmic-home-notification.svg'

  interface NavBarProps {
    title:string
  }

const DoctorHomeNavBar = ({title}:NavBarProps) => {

    return  (

        <div className="md:ms-[294px] bg-white w-full h-fit  p-5  sticky top-0  shadow-md shadow-black z-[200px]">
          <div className="md:w-[85%]  w-full flex  flex-wrap relative   ">
            <p className="font-extrabold p-1">{title ?? 'Home'}</p>
            <div className=" absolute left-[20%]   flex flex-wrap justify-end  place-items-center gap-2 "> 

            <div className="font-extralight border p-[3px] ms-3 w-[350px] md:w-[600px] ps-4 rounded-md flex ">
                <img alt='search' src={searchIcon} />
                <textarea className='w-full resize-none h-[25px] outline-none' />

            </div>
            
            </div>

            <div className="md:absolute  right-[10%] flex flex-wrap md:justify-center  gap-1 md:w-fit w-full  justify-end mt-10 md:mt-0 ">
           
            <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
            <img alt='tune' src={botChatIcon} />
            </div>
            <div className="font-extralight min-w-[40px] rounded-md border p-1 flex  justify-center">
            <img alt='tune' src={notificationIcon} />
            </div>
            </div>
          </div>
        </div>
    )
}

export default  DoctorHomeNavBar