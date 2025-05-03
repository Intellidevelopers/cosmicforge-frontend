import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../home/component/patient/HomeNavBar";
import mapImg from '../../../assets/images/mapImage.png'
import FindAmbulanceComp from "../components/findAmbulanceComp";
import UseNavigateToPath from '../hooks/navigateHook';

const FindAnAmbulance = () => {

    const navigate= UseNavigateToPath()

  return (
    <>
        <HomeNavBar title={'Find an Ambulance'} onSearchFired={()=>{}}/>
        <HomeMobileNavBar title={'Find an Ambulance'} onSearchFired={()=>{}}/>
        <div className=" p-4 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[60%] max-h-[40dvh] lg:max-h-[800dvh] md:h-[80dvh] shadow-2xl border rounded-md overflow-hidden">
                <img src={mapImg} alt="Map Image" className="min-w-fit" />
            </div>
            <div className="flex flex-col justify-between max-h-[40dvh] items-center lg:w-[40%] lg:max-h-full">
                <div className="w-full h-[60%] lg:h-[80%] overflow-y-scroll">
                    {
                        Array(5).fill(null).map((_,i)=>{
                            return <FindAmbulanceComp name={`Ambulance ${i}`} distance={`${i+10} minutes`}/>
                        })
                    }
                </div>
                <button type="button" 
                    onClick={()=>{navigate('/patient/first-aid/ambulance-en-route')}}
                    className='text-white rounded-md p-2 w-full max-w-[400px] bg-cosmic-primary-color'>Select Ambulance</button>
            </div>

        </div>
    </>
  )
}

export default FindAnAmbulance