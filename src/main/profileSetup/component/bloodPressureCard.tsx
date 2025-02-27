
const BloodPressureCard = () => {
  return (
    <div className="flex justify-between p-4 w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] border rounded-sm  shadow-md ">
        <div className="flex flex-col justify-center gap-2">
            <div className="flex flex-col place-content-center">
                <p className=''>SYS</p>
                <p className="text-xs">mmHg</p>
            </div>
            <div className="flex flex-col place-content-center">
                <p className=''>DIA</p>
                <p className="text-xs">mmHg</p>
            </div>
            <div className="flex flex-col place-content-center">
                <p className=''>PUL</p>
                <p className="text-xs">/min</p>
            </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
            <div className="flex justify-between gap-4" >
                <p className=" text-3xl">120</p>
                <div className="flex flex-col align-bottom gap-1">
                    <div className="w-[8px] h-[20px] rounded-md bg-red-700"></div>
                    <div className="w-[8px] h-[20px] rounded-md bg-red-700"></div>
                </div>
            </div>
            <div className="flex justify-between gap-4">
                <p className=" text-3xl">80</p>
                <div className="flex flex-col align-bottom gap-1">
                    <div className="w-[8px] h-[20px] rounded-md bg-yellow-400"></div>
                    <div className="w-[8px] h-[20px] rounded-md bg-yellow-400"></div>
                </div>
            </div>
            <div className="flex justify-between gap-4">
                <p className=" text-3xl">82</p>
                <div className="flex flex-col align-bottom gap-1">
                    <div className="w-[8px] h-[20px] rounded-md bg-green-700"></div>
                    <div className="w-[8px] h-[20px] rounded-md bg-green-700"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BloodPressureCard