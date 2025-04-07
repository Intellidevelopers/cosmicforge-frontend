import { useParams } from "react-router-dom"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import StepComponent from "../components/stepComponent"
import cprImg from '../../../assets/images/cprImg.png';


interface params {
    [key: string ]: string | undefined
  }

const FirstAidSteps = () => {
    


    const params = useParams<params>()
    const {person} = params
    return (
        <>
            <HomeNavBar title={params.person ? params.person : ''}/>
            <HomeMobileNavBar title={params.person ? params.person : ''}/>
            <div className=' p-4 bg-white gap-4 flex flex-col '>
                <h2 className='font-bold '>Steps for {person} </h2>
                <div className="flex flex-col gap-2">
                    {
                        Array(8).fill(null).map((_,i)=>{
                            return <StepComponent number={i+1} step={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, veritatis.'}/>
                        })
                    }
                </div>
                <img src={cprImg} alt="Cpr Image" className='w-full'/>
            </div>
        </>
  )
}

export default FirstAidSteps