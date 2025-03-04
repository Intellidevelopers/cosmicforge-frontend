import UseNavigateToPath  from "../hooks/navigateHook";

interface props{
    image:string;
    title:string;
}

const NonEmergentBox = ({image,title}:props) => {
  const nav= UseNavigateToPath()
  return (
    <div className='flex justify-start items-center border rounded-md p-3 w-full shadow-md cursor-pointer gap-2'
    onClick={()=>nav(title)}
    >
        <img src={image} alt={title} className='max-w-[80px] rounded-sm'/>
        <p className='font-bold text-sm'>{title}</p>
    </div>
  )
}

export default NonEmergentBox