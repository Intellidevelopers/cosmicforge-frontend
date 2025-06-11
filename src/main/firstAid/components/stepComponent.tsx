interface props {
  number: number;
  step: string;
}

const StepComponent = ({ number, step }: props) => {
  return (
    <div className="flex flex-row justify-start items-center gap-2 p-1.5 bg-violet-500 rounded-md">
      <div className="text-white bg-cosmic-primary-color rounded-full p-2 flex flex-col justify-center item-center text-[13px] h-[30px] text-center w-[30px]">
        {number}
      </div>
      <p className="text-sm font-semibold">{step}</p>
    </div>
  );
};

export default StepComponent;
