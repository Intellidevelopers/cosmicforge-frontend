const OxySaturationCard = () => {
  return (
    <div className="flex flex-col justify-between p-4 w-[150px] h-[200px] sm:w-[150px] sm:h-[200px] border rounded-sm relative shadow-md ">
      <div className="flex font-bold">
        <div className="flex space-x-2  w-fit  absolute rotate-90 left-[-20%] top-[60px]">
          <p>%SPO2</p>
          <p>
            <i className="far fa-heart"></i>/min
          </p>
        </div>
        <div className="font-medium text-cosmic-primary-color text-[2.5rem] absolute right-[35px]">
          <p>98</p>
          <p>84</p>
        </div>
      </div>
      <div className="flex text-sm font-bold gap-4 ms-2">
        <div className="text-sm">
          <p>PI</p>
          <p>RR</p>
        </div>
        <div className=" text-cosmic-primary-color">
          <p>3.71</p>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};

export default OxySaturationCard;
