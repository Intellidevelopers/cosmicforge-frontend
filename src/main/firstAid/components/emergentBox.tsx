import UseNavigateToPath from '../hooks/navigateHook.tsx';

interface props{
    image:string;
    title:string;
}



const EmergentBox = ({image,title}:props) => {
    
    const nav= UseNavigateToPath()
    
  return (
    <div className='flex flex-col items-center border rounded-md p-3 shadow-lg cursor-pointer' 
        onClick={()=>nav(title)}
        >
        <img src={image} alt={title} className='max-w-[80px] rounded-sm'/>
        <p className='font-bold text-sm'>{title}</p>
    </div>
  )
}

export default EmergentBox