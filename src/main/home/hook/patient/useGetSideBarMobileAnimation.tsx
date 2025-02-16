import { MutableRefObject } from "react"

let ref:MutableRefObject<HTMLDivElement | null> 


const useGetSideBarMobileAnimation = (sideBarRef:MutableRefObject<HTMLDivElement | null>) =>{
  
      ref= sideBarRef

}







 export const openSideBar = () =>{
   
    if(ref.current){
           ref.current.style.display = 'flex'
        ref.current.animate([
            {
             transform:'translateX(-100%)'
            },
            {

                transform:'translateX(0%)'
            }
        ],{duration:500,easing:'ease-out',fill:'both'})
    }
  }


 export const closeSideBar = () =>{
    if(ref.current){
     
        ref.current.animate([
            {
             transform:'translateX(0%)'
            },
            {

                transform:'translateX(-100%)'
            }
        ],{duration:500,easing:'ease-out',fill:'forwards'})
    }
  }

export default  useGetSideBarMobileAnimation