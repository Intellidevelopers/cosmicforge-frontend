


const useSetScrollbar = () => {

     
   
    

     const scrollWellnessProductCardRight = (scrollContainerRef:React.MutableRefObject<HTMLDivElement | null>) =>{
        const childWidth = scrollContainerRef?.current?.children[0].clientWidth
         
       let t = 0
       if(scrollContainerRef?.current?.scrollLeft && childWidth){
        t=scrollContainerRef?.current?.scrollLeft - childWidth
       }
        
        scrollContainerRef?.current?.scroll({
            left:t, behavior:'smooth'
        })
     }

     const scrollWellnessProductCardLeft = (scrollContainerRef:React.MutableRefObject<HTMLDivElement | null>) =>{
        const childWidth = scrollContainerRef?.current?.children[0].clientWidth
         
       let t = 0
       if(childWidth && t===0){
        t = childWidth
       }
       if(scrollContainerRef?.current?.scrollLeft ){
      
        t+=scrollContainerRef?.current?.scrollLeft 
      
       }
        
        scrollContainerRef?.current?.scroll({
            left:t, behavior:'smooth'
        })
     }

     return {scrollWellnessProductCardRight,scrollWellnessProductCardLeft}
}


export default useSetScrollbar