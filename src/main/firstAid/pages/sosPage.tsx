import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar"
import HomeNavBar from "../../home/component/patient/HomeNavBar"
import ambulanceSmall from '../../../assets/images/ambulanceSmall.png'
import fireStation from '../../../assets/images/fireStation.png'
import police from '../../../assets/images/police.png'
import SosComponent from "../components/sosComponent"



const SosPage = () => {


interface personCard {
  image:string;
  title:string
}

  


  const sos: personCard[] = [
    {
      image:ambulanceSmall,
      title:'Ambulance'
    },
    {
      image:fireStation,
      title:'Fire Station'
    },
    {
      image:police,
      title:'Police'
    },
  ]

  return (
    <>
      <HomeNavBar title='SOS'/>
      <HomeMobileNavBar title='SOS'/>
      <div className=" md:ms-[250px] flex flex-col items-start gap-4 p-4 bg-white  ">
        {
            sos.map((item,index)=>{
                return <SosComponent key={index} image={item.image} title={item.title}/>
              })
        }
      </div>
    </>
  )
}

export default SosPage