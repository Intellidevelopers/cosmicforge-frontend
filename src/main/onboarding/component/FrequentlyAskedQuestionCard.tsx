import { useState } from "react";

const FrequentlyAskedQuestionsCard = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  const [toggleOpenBody, setToggleOPenBody] = useState<boolean>(false);

  return (
    <div className="w-full relative p-6 ">
      <div className="w-full text-white grid grid-cols-3 ">
        <p className="text-[18px] col-span-2 w-full">{title}</p>
        <i
          className={` ${toggleOpenBody && "bg-white text-cosmic-primary-color rounded-md p-2"} col-span-1 absolute right-10 fa fa-plus`}
          onClick={() => {
            setToggleOPenBody(!toggleOpenBody);
          }}
        ></i>
      </div>
      <p
        className={`  ${toggleOpenBody ? "block" : "hidden"}    text-white font-light mt-3`}
      >
        {body}
      </p>

      <div className="w-full h-[2px] bg-white mt-8 relative"></div>
    </div>
  );
};

export default FrequentlyAskedQuestionsCard;
