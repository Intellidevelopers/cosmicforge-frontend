import ambulance from '../../../assets/images/Ambulance.png';
import sos from '../../../assets/images/sos.png';
import HomeNavBar from '../../home/component/patient/HomeNavBar';
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import cprImg from '../../../assets/images/cpr.png';
import EmergentBox from '../components/emergentBox.tsx';
import woundImg from '../../../assets/images/wound.png'
import vomitingImg from '../../../assets/images/vomiting.png'
import noseBleedImg from '../../../assets/images/noseBleed.png'
import NonEmergentBox from '../components/nonEmergentBox.tsx';
import UseNavigateToPath from '../hooks/navigateHook.tsx';

import diagnosis from '../../../assets/search/searchDiagnosis.svg'

import searchBookAppointment from '../../../assets/search/searchBookAppoinment.png'
import searchFindASpecialist from '../../../assets/search/searchFindASpecialist.png'
import searchFirstAid from '../../../assets/search/searchFirtstAid.png'
import searchChatBot from '../../../assets/search/searchChatBot.png'
import { useState } from 'react';
import CustomHomeSearchCard, { CustomHomeSearchCardProps } from '../../home/component/patient/CustomHomeSearchCard.tsx';


const FirstAid1 = () => {

    const dummyImageSet: { image: string, title: string }[] = [
        {
            image: cprImg,
            title: 'CPR'
        },
        {
            image: cprImg,
            title: 'CPR'
        },
        {
            image: cprImg,
            title: 'CPR'
        },
        {
            image: cprImg,
            title: 'CPR'
        },
        {
            image: cprImg,
            title: 'CPR'
        },
        {
            image: cprImg,
            title: 'CPR'
        },
        {
            image: cprImg,
            title: 'CPR'
        },
        {
            image: cprImg,
            title: 'CPR'
        },
    ]
    const dummyImageSet2: { image: string, title: string }[] = [
        {
            image: woundImg,
            title: 'Wound'
        },
        {
            image: woundImg,
            title: 'Wound'
        },
        {
            image: woundImg,
            title: 'Wound'
        },
        {
            image: vomitingImg,
            title: 'Vomiting'
        },
        {
            image: vomitingImg,
            title: 'Vomiting'
        },
        {
            image: vomitingImg,
            title: 'Vomiting'
        },
        {
            image: noseBleedImg,
            title: 'Nose Bleed'
        },
        {
            image: noseBleedImg,
            title: 'Nose Bleed'
        },
        {
            image: noseBleedImg,
            title: 'Nose Bleed'
        },
        {
            image: noseBleedImg,
            title: 'Nose Bleed'
        },
    ]


    const searchCards: CustomHomeSearchCardProps[] | null = [{
        title: 'Run Diagnosis',
        image: diagnosis,
        navigationPath: '/patient/run-diagnosis'
    },
    {
        title: 'Book Appointment',
        image: searchBookAppointment,
        navigationPath: '/patient/find-a-specialist'
    },

    {
        title: 'Find A Specialist',
        image: searchFindASpecialist,
        navigationPath: '/patient/find-a-specialist'
    },
    {
        title: 'First Aid',
        image: searchFirstAid,
        navigationPath: '/patient/first-aid'
    },

    {
        title: 'Chat Bot',
        image: searchChatBot,
        navigationPath: '/patient/chatbot'
    }

    ]


    const navigate = UseNavigateToPath()

    const [toggleSearch, setToggleSearch] = useState<boolean>(false)

    return (
        <div className='w-full relative '>
            <HomeNavBar title={'First Aid'} onSearchFired={(path) => {

                if (path === 'First Aid') {
                    setToggleSearch(!toggleSearch)
                }

            }} />
            <HomeMobileNavBar title={'First Aid'} onSearchFired={(path) => {

                if (path === 'First Aid') {
                    setToggleSearch(!toggleSearch)
                }

            }} />

            {
                toggleSearch && <div className="absolute  bg-white w-full top-[5%] z-[600] min-h-[350px] p-10 md:flex flex-col place-items-center justify-center">
                    <div className="w-full h-[20px] relative ">
                        <i className="fa  font-bold text-[30px] fa-times absolute right-0 hover:text-cosmic-primary-color" onClick={() => {
                            setToggleSearch(false)
                        }} />


                    </div>

                    <div className="mt-6 bg-black bg-opacity-5 w-[90%] h-full flex  justify-center gap-8 p-8 flex-wrap ">


                        {
                            searchCards && searchCards.map((card) => (
                                <CustomHomeSearchCard title={card.title} image={card.image} navigationPath={card.navigationPath} />
                            ))
                        }


                    </div>
                </div>
            }



            <div className=' p-4 flex flex-col gap-4 relative'>

                <div id="ambulance&sos" className='flex bg-white w-full space-x-4'>
                    <div className='w-1/2 flex justify-center items-center rounded border shadow-md cursor-pointer' onClick={() => { navigate('find-an-ambulance') }}>
                        <img src={ambulance} alt="Ambulance image" className='' />
                    </div>
                    <div className='w-1/2 flex justify-center items-center rounded border shadow-md cursor-pointer' onClick={() => { navigate('sos') }}>
                        <img src={sos} alt="SOS" />
                    </div>
                </div>
                <div id="emergent">
                    <div className='flex justify-between'>
                        <h2 className="font-bold">Emergent</h2>
                        <p className="text-purple-600 font-extralight text-[0.8rem] cursor-pointer md:hidden">View More</p>
                    </div>
                    <div className='flex space-x-4 overflow-hidden'>
                        {dummyImageSet.map((item, index) => {
                            return <EmergentBox image={item.image} key={index} title={item.title} />
                        })}
                    </div>
                </div>
                <div id="nonEmergent">
                    <div className='flex justify-between'>
                        <h2 className="font-bold">Non-Emergent</h2>
                        <p className="text-purple-600 font-extralight text-[0.8rem] cursor-pointer md:hidden">View More</p>
                    </div>
                    <div className=' overflow-hidden'>
                        {dummyImageSet2.map((item, index) => {
                            return <NonEmergentBox image={item.image} key={index} title={item.title} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstAid1