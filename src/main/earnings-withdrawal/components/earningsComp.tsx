import { useEffect, useState } from "react";
import '../pages/earnings.css'


interface EarningsProps {
    date:string;
    time:string;
    id:string;
    amount:number;
    status:string;
    action:string;
}


const EarningsComp = ({date,time,id,amount,status,action}:EarningsProps)=> {

    const [color,setColor] = useState('Black')

    useEffect(()=>{
        switch (status) {
            case 'successful':
                setColor('text-green-400')
                break;
            case 'pending':
                setColor('text-yellow-400')
                break;
            case 'failed':
                setColor('text-red-400')
                break;
        
            default:
                break;
        }
    },[status])

  return (
    <tr className="gap-4 border-b-2 border-black" >
        <td className="flex flex-col gap-1 ">
            <p className="text-sm sm:text-regular font-bold truncate">{date}</p>
            <p className="text-sm sm:text-regular font-extralight">At {time}</p>
        </td>
        <td>
            <p className="text-sm sm:text-regular font-extralight">{id}</p>
        </td>
        <td>
            <p className="text-sm sm:text-regular font-bold truncate">-N{amount}</p>
        </td>
        <td>
            <p className={`text-sm sm:text-regular font-bold ${color}`}>{status}</p>
        </td>
        <td>
            <p className="text-sm sm:text-regular font-bold">{action}</p>
        </td>
    </tr>
  )
}

export default EarningsComp