import CustomCardSpecialistViewCard from "./CustomCardSpecialistViewCard"
import HomeMobileNavBar from "./HomeMobileNavBar"
import HomeNavBar from "./HomeNavBar"
import { useLocation, useNavigate } from "react-router-dom"
import Loader from "../../../../assets/Loader"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"
import { getDoctorsBySpecificDeparment } from "../../service"



const FindASpecalistCustomViewBody = () => {

    const { state } = useLocation()

    const user = useSelector((state:RootReducer)=>state.user)

     const subscription = useSelector((state:RootReducer)=>state.subscription.userSubcription)
     

    

    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)

    const [doctorDetails,setDoctorDetails] = useState<{ 
        userId:{
            fullName?: string,
            lastName?:string,
        },
        userCosmicID?:string,
        professionalTitle?: string,
        specialization?: string,
        currentClinic?: string,
        department?: string,
        bio?: string,
        pricing?: string,
        experience?: {
            hospitalName?: string,
            NoOfPatientTreated?: string,
            specializationAndDepartment?: string,
            date?: string
        },
        workTime?: {
            day?: string,
            time?: string
        },
    isVerified?:boolean}[]>([])

    
        const [doctorDetailsCache,setDoctorDetailsCache] = useState<{ 
            userId:{
                fullName?: string,
                lastName?:string,
            },
            userCosmicID?:string,
            professionalTitle?: string,
            specialization?: string,
            currentClinic?: string,
            department?: string,
            bio?: string,
            pricing?: string,
            experience?: {
                hospitalName?: string,
                NoOfPatientTreated?: string,
                specializationAndDepartment?: string,
                date?: string
            },
            workTime?: {
                day?: string,
                time?: string
            },
        isVerified?:boolean}[]>([])


    useEffect(() => {
       
     
        if((subscription?.planName?? 'Free') === 'Free' &&  (state.title.trim().toLowerCase()!== 'General Medicine'.trim().toLowerCase())){
            setLoading(false)
            setDoctorDetails([])
        setCustomMessage('You can only access General Medicine on free plan')
        return
        }

       (async()=>{
        setLoading(true)
        setCustomMessage('No specialist available now')
        try {
            
          const result = await getDoctorsBySpecificDeparment(user.data?.token!!,state?.title)
          setLoading(false)
            if(result.status === 200){
                setDoctorDetails(result.data)
                setDoctorDetailsCache(result.data)
                
            }
          

        } catch (error) {
            
        }
       })()
       
    }, [])

    const [activState, setActiveState] = useState(() => {

        return {
            all: true,
            topRatings: false,
            nearBy: false
        }
    })


    const  [customMessage,setCustomMessage] = useState<string>('No specialist available now')


    

    return (
        <div className="font-poppins w-full   relative  h-dvh overflow-x-hidden    overflow-y-hidden flex flex-col cursor-default">

            <HomeNavBar title={state.title} onSearchFired={(path,query)=>{
                   
                   if(path === state.title && query){
                   

                    const filter = doctorDetailsCache.filter(doctorDetails => {


                        return new RegExp(`^${query.toLocaleLowerCase()}`).test(doctorDetails.userId.fullName?.toLocaleLowerCase()!!) || doctorDetails.userCosmicID === query ||new RegExp(`^${query.toLocaleLowerCase()}`).test(doctorDetails.userId.lastName?.toLocaleLowerCase()!!)
          
          
                      })
          
                      
                      if (filter.length > 0) {
                        setDoctorDetails(filter )
          
                      }
                    } else {
                      setDoctorDetails(doctorDetailsCache)
                    }
                   
            }} />
            <HomeMobileNavBar title={state.title} onSearchFired={()=>{}} />

            <div className="w-full  ">


                <div className="hidden m-8 md:flex place-items-center gap-1">
                    <i className="fa fa-chevron-left fa-2xl" aria-hidden="true" onClick={() => {
                        navigate(-1)
                    }}></i>
                    <p className="font-extralight">Go back</p>
                </div>



                <div className="w-full flex justify-evenly gap-3  text-cosmic-primary-color mt-5 p-2">
                    <p className={`${(activState.all) && 'bg-cosmic-primary-color text-white '}  md:w-[40%] w-[50%] p-2 flex justify-center place-items-center  text-center  rounded-md border border-cosmic-color-border-color hover:bg-cosmic-primary-color hover:text-white`} onClick={() => {
                        setActiveState({
                            ...activState,
                            all: true,
                            topRatings: false,
                            nearBy: false
                        })
                        setLoading(!loading)

                        setTimeout(() => {
                            setLoading(false)
                        }, 2 * 1000)


                    }}>All</p>



                    <p className={`${(activState.topRatings) && 'bg-cosmic-primary-color text-white '}  p-2  md:w-[40%] w-[50%] flex flex:1 justify-center place-items-center   rounded-md border border-cosmic-color-border-color hover:bg-cosmic-primary-color hover:text-white`} onClick={() => {

                        setActiveState({
                            ...activState,
                            all: false,
                            topRatings: true,
                            nearBy: false
                        })

                        setLoading(!loading)

                        setTimeout(() => {
                            setLoading(false)
                        }, 2 * 1000)
                    }}>Top Ratings</p>
                   
                   {
                    /**
                     *  <p className={`${(activState.nearBy) && 'bg-cosmic-primary-color text-white '}   md:w-[16%] w-[30%] flex justify-center place-items-center   text-center p-2 rounded-md border border-cosmic-color-border-color hover:bg-cosmic-primary-color hover:text-white`} onClick={() => {
                        setActiveState({
                            ...activState,
                            all: false,
                            topRatings: false,
                            nearBy: true
                        })
                        setLoading(!loading)

                        setTimeout(() => {
                            setLoading(false)
                        }, 2 * 1000)
                    }}>Nearby</p>
                     */
                   }
                </div>

                <div className={`${(loading) ? 'flex' : 'hidden'}  w-full h-dvh  justify-center mt-[20%]`}>
                    <Loader />
                </div>

                <div className={`${(!loading && doctorDetails.length===0) ? 'flex' : 'hidden'}  w-full h-dvh  justify-center mt-[20%]`}>
                    <p>{customMessage}</p>
                </div>
                <div className={`${(!loading ) ?'flex' : 'hidden'} w-full h-[80vh]  p-3  pb-[100px]  flex-col gap-3 overflow-y-auto `}>

                    {
                     doctorDetails.length>0 &&   doctorDetails.map((item, index) => (
                            <CustomCardSpecialistViewCard key={index} details={item
                            } />
                        ))
                    }

                </div>


            </div>


        </div>
    )
}


export default FindASpecalistCustomViewBody