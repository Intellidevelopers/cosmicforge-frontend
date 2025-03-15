
const DepartmentCardS = ({name,image}:{name:string,image:string}) =>{

    return  <div className='w-[150px] h-[200px] bg-white m-6 p-6 flex flex-col justify-center place-items-center gap-8 '>
    <img src={image}  />
     <p className='text-center'>{name}</p>
    </div>
}


export default DepartmentCardS