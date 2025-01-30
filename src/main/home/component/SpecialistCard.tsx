 
 export interface SpecialistCardProps {
   icon:string,
   title:string
 }
const SpecialistCard = ({icon,title}:SpecialistCardProps) => {
      return (

        <div className="m-2 min-w-[120px] ">
            <img src={icon} className="object-center object-cover  h-[80px] rounded-full" />
            <p className='w-fit font-light'>{title} </p>
        </div>
      )
}

export default SpecialistCard