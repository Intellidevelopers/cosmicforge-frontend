import React from "react";

interface components {
    image: string,
    mobileSize: string,
    deskSize: string,
    classes: string,
}

const IconContainer:React.FC<components> = ( { image, mobileSize, deskSize, classes }) => {
    return (
        <div className={`md:h-[${deskSize}] w-[${mobileSize}] h-[${mobileSize}px] ${classes}  flex flex-col justify-center items-center md:w-[${deskSize}px] bg-transparent`}>
            <img src={image} alt="fb icon" className="h-[100%] w-[100%]"/>
        </div>
    )
}

export default IconContainer;