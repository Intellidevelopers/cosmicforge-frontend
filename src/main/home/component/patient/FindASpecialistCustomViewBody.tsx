import CustomCardSpecialistViewCard, { CustomCardSpecialistViewCardProps } from "./CustomCardSpecialistViewCard"
import HomeMobileNavBar from "./HomeMobileNavBar"
import HomeNavBar from "./HomeNavBar"
import doctorImage from '../../../../assets/images/doctor-image.jpeg'
import { useLocation, useNavigate } from "react-router-dom"
import Loader from "../../../../assets/Loader"
import { useEffect, useState } from "react"



const FindASpecalistCustomViewBody = () => {

    const { state } = useLocation()

    const details: CustomCardSpecialistViewCardProps[] = [{
        details: {
            address: "Lekki, Lagos Nigeria.",
            clinic: "Chastain Park Hospital",
            doctorSpecialization: 'General Medicine',
            doctorImage: doctorImage,
            doctorName: 'Dr Josh Olawale '
        }
    }, {
        details: {
            address: "Lekki, Lagos Nigeria.",
            clinic: "Chastain Park Hospital",
            doctorSpecialization: 'General Medicine',
            doctorImage: doctorImage,
            doctorName: 'Dr Josh Olawale '
        }
    }, {
        details: {
            address: "Lekki, Lagos Nigeria.",
            clinic: "Chastain Park Hospital",
            doctorSpecialization: 'General Medicine',
            doctorImage: doctorImage,
            doctorName: 'Dr Josh Olawale '
        }
    }, {
        details: {
            address: "Lekki, Lagos Nigeria.",
            clinic: "Chastain Park Hospital",
            doctorSpecialization: 'General Medicine',
            doctorImage: doctorImage,
            doctorName: 'Dr Josh Olawale '
        }
    }, {
        details: {
            address: "Lekki, Lagos Nigeria.",
            clinic: "Chastain Park Hospital",
            doctorSpecialization: 'General Medicine',
            doctorImage: doctorImage,
            doctorName: 'Dr Josh Olawale '
        }
    }]

    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        const interval = setTimeout(() => {
            setLoading(false)
        }, 2 * 1000)

        return () => {
            clearTimeout(interval)
        }
    }, [setLoading])

    const [activState, setActiveState] = useState(() => {

        return {
            all: true,
            topRatings: false,
            nearBy: false
        }
    })

    return (
        <div className="font-poppins w-full   relative  h-dvh overflow-x-hidden    overflow-y-hidden flex flex-col cursor-default">

            <HomeNavBar title={state.title} />
            <HomeMobileNavBar title={state.title} />

            <div className="w-full md:ps-[294px]  ">


                <div className="hidden m-8 md:flex place-items-center gap-1">
                    <i className="fa fa-chevron-left fa-2xl" aria-hidden="true" onClick={() => {
                        navigate(-1)
                    }}></i>
                    <p className="font-extralight">Go back</p>
                </div>



                <div className="w-full flex justify-center gap-3  text-cosmic-primary-color mt-5">
                    <p className={`${(activState.all) && 'bg-cosmic-primary-color text-white '}  md:w-[16%] w-[30%] flex justify-center place-items-center  text-center  rounded-md border border-cosmic-color-border-color hover:bg-cosmic-primary-color hover:text-white`} onClick={() => {
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
                    <p className={`${(activState.topRatings) && 'bg-cosmic-primary-color text-white '}   md:w-[16%] w-[30%] flex flex:1 justify-center place-items-center   rounded-md border border-cosmic-color-border-color hover:bg-cosmic-primary-color hover:text-white`} onClick={() => {

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
                    <p className={`${(activState.nearBy) && 'bg-cosmic-primary-color text-white '}   md:w-[16%] w-[30%] flex justify-center place-items-center   text-center p-2 rounded-md border border-cosmic-color-border-color hover:bg-cosmic-primary-color hover:text-white`} onClick={() => {
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
                </div>

                <div className={`${(loading) ? 'flex' : 'hidden'}  w-full h-dvh  justify-center mt-[20%]`}>
                    <Loader />
                </div>
                <div className={`${(!loading) ? 'flex' : 'hidden'} w-full h-[45%] md:h-dvh p-3   pb-10  flex-col gap-3 overflow-y-auto `}>

                    {
                        details.map((items, index) => (
                            <CustomCardSpecialistViewCard key={index} details={items.details} />
                        ))
                    }

                </div>


            </div>


        </div>
    )
}


export default FindASpecalistCustomViewBody