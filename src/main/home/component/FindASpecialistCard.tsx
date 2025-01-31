
import { SpecialistCardProps } from "./SpecialistCard";
const FindASpecialistCard = ({title,icon}:SpecialistCardProps) => {

    return (
        <div className="w-full p-4">
            <div className="m-2 w-full  flex place-items-center gap-4">
            <img src={icon} className="object-center bg-gray-600 object-cover  h-[50px] rounded-full" />
            <p className='w-fit font-extralight'>{title}</p>
        </div>
            <p className="h-[2px] border"></p>
        </div>
    )
}

export default FindASpecialistCard