import { useNavigate } from "react-router-dom"

const DepartmentCardS = ({name,image,backgroundImage,bodyText}:{name:string,image:string,backgroundImage?:string,bodyText?:string}) =>{
    const navigate = useNavigate()


    return  <div className='rounded-md  hover:bg-cosmic-light-color-call  w-[200px] h-[200px] bg-white m-6 p-6 flex flex-col justify-center place-items-center gap-8 ' onClick={()=>{
       navigate('/department/overview',{
        state:{
            department:{
                title:name,
                backgroundImage,
                bodyText
            }
        }
       })
    }}>
    <img src={image}  />
     <p className='text-center font-light'>{name}</p>
    </div>
}


export default DepartmentCardS