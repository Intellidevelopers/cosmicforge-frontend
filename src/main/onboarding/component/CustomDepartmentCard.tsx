//import { useNavigate } from "react-router-dom"

import { useNavigate } from "react-router"




const CustomDepartmentCard = ({title,icon,backgroundImage,bodyText}:{title:string,icon:string,backgroundImage?:string,bodyText?:string}) => {

    const navigate = useNavigate()

    return (
        <div className="w-full p-4" onClick={()=>{
            navigate('/department/overview',{
                state:{
                    department:{
                        title:title,
                        backgroundImage,
                        bodyText,
                        relatedPath:'/departments'
                    }
                }
               }) 
        }}>
            
            <div className="m-2 w-full  flex place-items-center gap-4">
            <img alt="specialistCard" src={icon} className="object-center bg-gray-600 object-cover  h-[50px] rounded-full" />
            <p className='w-fit font-extralight'>{title}</p>
        </div>
            <p className="h-[2px] border"></p>
        </div>
    )
}


export default CustomDepartmentCard