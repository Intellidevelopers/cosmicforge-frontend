import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import {useParams} from 'react-router-dom';
import adultImg from '../../../assets/images/Frame 359Adult.png';
import childImg from '../../../assets/images/Frame 359child.png';
import infantImg from '../../../assets/images/Frame 359infant.png';
import SelectPersonCard from "../components/selectPersonCard";


interface params {
  [key: string ]: string | undefined
}



interface personCard {
  image:string;
  title:string
}

const SelectCase = () => {
  const params = useParams<params>();
  


  const persons: personCard[] = [
    {
      image:adultImg,
      title:'Adult'
    },
    {
      image:childImg,
      title:'Child'
    },
    {
      image:infantImg,
      title:'Infant'
    },
  ]

  return (
    <>
      <HomeNavBar title={params.case ? params.case : ''}/>
      <HomeMobileNavBar title={params.case ? params.case : ''}/>
      <div className="  flex flex-col items-start gap-4 p-4 bg-white  ">
        {
          persons.map((item,index)=>{
            return <SelectPersonCard key={index} image={item.image} title={item.title}/>
          })
        }
      </div>
    </>
  )
}

export default SelectCase