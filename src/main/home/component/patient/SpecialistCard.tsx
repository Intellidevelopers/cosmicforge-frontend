import { useNavigate } from "react-router-dom"

 
 export interface SpecialistCardProps {
  name?: string, image?: string, backgroundImage?:string ,
    bodyText?:string 
 }
const SpecialistCard = ({image,name}:SpecialistCardProps) => {
      const navigate = useNavigate();
      return (

        <div onClick={()=>{navigate('/patient/find-a-specialist/view',{state:{title:name}})}} 
                className="m-3 min-w-[160px] flex flex-col justify-center  hover:scale-95 place-items-center gap-2 ">
            <img src={image} className="object-center object-cover hover:cursor-pointer hover:opacity-70  w-[70px] h-[70px] rounded-full" />
            <p className='w-fit hover:cursor-pointer font-light text-[14px]'>{name} </p>
        </div>
      )
}

export default SpecialistCard