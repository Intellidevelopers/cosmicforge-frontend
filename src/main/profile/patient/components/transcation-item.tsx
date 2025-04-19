interface TransactionProps {
    title:string;
    date:string;
    price:number;
}

const TranscationItem = ({title,date,price}:TransactionProps) => {

  return (
    <div className="flex w-full justify-between items-center p-4 shadow-md">
        <div className="flex gap-4 xs:max-w-[50%]">
            <div className="p-3 rounded-[50%]  bg-cosmic-primary-color opacity-50 w-fit">
                <i className="fas fa-shopping-bag "></i>
            </div>
            <div className="flex flex-col xs:max-w-full">
                <p className="font-bold">{title}</p>
                <p className="font-extralight text-sm truncate ">{date}</p>
            </div>
        </div>
        <p className="font-bold">-N{price}</p>
    </div>
  )
}

export default TranscationItem