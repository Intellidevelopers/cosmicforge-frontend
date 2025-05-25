import React from "react";
import TotalEarningsCard from "./TotalEarningsCard";
import POCard from "./POCard";


const DoctorDashboardPOandECard:React.FC = () => {
    return (
        <div className="w-[100%] md:flex-row flex-col flex justify-between gap-3">
            <div className="md:w-[64%] w-[100%] h-[250px]">
                <POCard c="250" h={150}/>
            </div>

            <div className="h-[250px] md:w-[34%] w-[100%] shadow-lg shadow-black/10 rounded-[5px]">
                <TotalEarningsCard h={140}/>
            </div>
        </div>
    )
}

export default DoctorDashboardPOandECard;