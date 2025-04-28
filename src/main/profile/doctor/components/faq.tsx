import { useState } from "react";

interface FAQ {
    question:string;
    answer:string;
}

const Faq = ({question,answer}:FAQ) => {

    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="p-4 rounded-md border bg-white my-2">
        <div className="flex justify-between">
            <p className=' font-bold p-1'>{question}</p>
            <div className="flex">
               {showAnswer ? 
               <i onClick={()=>{setShowAnswer(!showAnswer)}} className="fas fa-angle-up"></i> :
               <i onClick={()=>{setShowAnswer(!showAnswer)}} className="fas fa-angle-down"></i>}
            </div>
        </div>
        {showAnswer && <p className=" font-extralight bg-gray-200 p-2 rounded-md">{answer}</p>}
    </div>
  )
}

export default Faq