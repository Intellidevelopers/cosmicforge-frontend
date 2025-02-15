 
 export interface SpecialistCardProps {
   icon:string,
   title:string
 }
const SpecialistCard = ({icon,title}:SpecialistCardProps) => {
      return (

        <div className="m-3 min-w-fit flex flex-col justify-center place-items-center gap-2 ">
            <img src={icon} className="object-center object-cover  w-[80px] h-[80px] rounded-full" />
            <p className='w-fit font-light text-[14px]'>{title} </p>
        </div>
      )
}

export default SpecialistCard