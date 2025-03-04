import UseNavigateToPath from "../hooks/navigateHook";



interface props{
    image:string;
    title:string;
}


const SelectPersonCard = ({image,title}:props) => {

  const navigate = UseNavigateToPath()
  
  return (
    <div className='flex justify-start gap-4 p-4 ronded-md shadow-lg items-center cursor-pointer w-full' onClick={()=>{navigate(title)}}>
        <img src={image} alt={title} className='max-w-[70px]'/>
        <p className='font-bold'>{title}</p>
    </div>
  )
}

export default SelectPersonCard