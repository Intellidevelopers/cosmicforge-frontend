
import { useNavigate } from "react-router-dom";
import { SpecialistCardProps } from "./SpecialistCard";
const FindASpecialistCard = ({name,image}:SpecialistCardProps) => {

    const navigate = useNavigate()

    return (
        <div className="w-full p-4" onClick={()=>{
            navigate('/patient/find-a-specialist/view',{state:{
                title:name
            }})
        }}>
            
            <div className="m-2 w-full  flex place-items-center gap-4">
            <img alt="specialistCard" src={image} className="object-center bg-gray-600 object-cover  h-[50px] rounded-full" />
            <p className='w-fit font-extralight'>{name}</p>
        </div>
            <p className="h-[2px] border"></p>
        </div>
    )
}

export default FindASpecialistCard