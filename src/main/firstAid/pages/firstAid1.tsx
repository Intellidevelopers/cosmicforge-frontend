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


const FirstAid1 = () => {

    const dummyImageSet:{image:string,title:string}[] = [
        {
            image:cprImg,
            title:'CPR'
        },
        {
            image:cprImg,
            title:'CPR'
        },
        {
            image:cprImg,
            title:'CPR'
        },
        {
            image:cprImg,
            title:'CPR'
        },
        {
            image:cprImg,
            title:'CPR'
        },
        {
            image:cprImg,
            title:'CPR'
        },
        {
            image:cprImg,
            title:'CPR'
        },
        {
            image:cprImg,
            title:'CPR'
        },
    ]
    const dummyImageSet2:{image:string,title:string}[] = [
        {
            image:woundImg,
            title:'Wound'
        },
        {
            image:woundImg,
            title:'Wound'
        },
        {
            image:woundImg,
            title:'Wound'
        },
        {
            image:vomitingImg,
            title:'Vomiting'
        },
        {
            image:vomitingImg,
            title:'Vomiting'
        },
        {
            image:vomitingImg,
            title:'Vomiting'
        },
        {
            image:noseBleedImg,
            title:'Nose Bleed'
        },
        {
            image:noseBleedImg,
            title:'Nose Bleed'
        },
        {
            image:noseBleedImg,
            title:'Nose Bleed'
        },
        {
            image:noseBleedImg,
            title:'Nose Bleed'
        },
    ]


    const navigate = UseNavigateToPath()

  return (
    <>
        <HomeNavBar title={'First Aid'}/>
        <HomeMobileNavBar title={'First Aid'}/>
        <div className='md:ms-[250px] p-4 flex flex-col gap-4'>
            <div id="ambulance&sos" className='flex bg-white w-full space-x-4'>
                <div className='w-1/2 flex justify-center items-center rounded border shadow-md cursor-pointer' onClick={()=>{navigate('find-an-ambulance')}}>
                    <img src={ambulance} alt="Ambulance image" className=''/>
                </div>
                <div className='w-1/2 flex justify-center items-center rounded border shadow-md cursor-pointer' onClick={()=>{navigate('sos')}}>
                    <img src={sos} alt="SOS" />
                </div>
            </div>
            <div id="emergent">
                <div className='flex justify-between'>
                    <h2 className="font-bold">Emergent</h2>
                    <p className="text-purple-600 font-extralight text-[0.8rem] cursor-pointer md:hidden">View More</p>
                </div>
                <div className='flex space-x-4 overflow-hidden'>
                    {dummyImageSet.map((item,index)=>{
                        return <EmergentBox image={item.image} key={index} title={item.title}/>
                    })}
                </div>
            </div>
            <div id="nonEmergent">
                <div className='flex justify-between'>
                    <h2 className="font-bold">Non-Emergent</h2>
                    <p className="text-purple-600 font-extralight text-[0.8rem] cursor-pointer md:hidden">View More</p>
                </div>
                <div className=' overflow-hidden'>
                    {dummyImageSet2.map((item,index)=>{
                        return <NonEmergentBox image={item.image} key={index} title={item.title}/>
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default FirstAid1