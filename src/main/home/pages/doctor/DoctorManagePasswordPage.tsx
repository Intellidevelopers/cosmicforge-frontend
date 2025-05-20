import DoctorHomeNavBar from "../../component/doctor/DoctorHomeNavBar"
import DoctorHomeSideBar from "../../component/doctor/DoctorHomeSideBar.ls"
import DoctorNavBarHome from "../../component/doctor/DoctorNavBarMobile"


const DoctorManagePasswordPage = () => {

    return <div className="w-full h-screen flex overflow-hidden" >

        <div className="w-[25%] hidden md:block">
            <DoctorHomeSideBar />


        </div>

        
      




        {
            /**
             * Manage password main page
             */
        }

          <div className="w-full h-full">
            <DoctorHomeNavBar title="Manage Password" />
        <DoctorNavBarHome title="Manage password" />
           


           <div className="w-full h-full flex justify-center place-items-center">
         

            <div className="w-[500px] h-[300px] bg-orange-500">


            </div>




           </div>





        </div>


    </div>
}


export default DoctorManagePasswordPage