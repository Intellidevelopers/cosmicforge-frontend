interface props{
    number:number;
    step:string;
}


const StepComponent = ({number,step}:props) => {


  return (

    <div className="flex justify-start items-center gap-2 p-1.5 bg-violet-500 rounded-md">
        <p className='text-white bg-cosmic-primary-color rounded-[50%] p-2 text-xs h-fit text-center w-[2rem]'>{number}</p>
        <p className="text-sm font-semibold truncate">{step}</p>
    </div>
  )
}

export default StepComponent