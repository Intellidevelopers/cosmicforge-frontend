import { useEffect, useState } from "react"

const FavoriteHeader = () => {

  const [title,setTitle] = useState<string|undefined>('')

  useEffect(()=>{
    let url:string | string[] = window.location.href
    url = url.split('/')
      const location:string|undefined = url.pop()
    setTitle(location)
  },[])

  return (
    <div className="flex w-full h-12 my-2 justify-center items-center relative">
        
        <div className="absolute left-5 flex justify-center items-center gap-2">
          <i className="fas fa-angle-left "></i>
          <p className="hidden md:block" >Go Back</p>
        </div>
        <p className="font-bold col-span-2 capitalize">{title}</p>
        {/* <div></div> */}
    </div>
  )
}
export default FavoriteHeader