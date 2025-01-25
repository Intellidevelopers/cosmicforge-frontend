
import useScrollToNextScreen from "../hook/useScrollToNextScreen";

interface SlidderProps {
  imageUrl: string;
  textHeader: string;
  textBody: string;
  buttonText: string;
  id: number;
  scrollRef: React.RefObject<HTMLDivElement>;
}
const Slidder = ({
  imageUrl,
  textHeader,
  textBody,
  buttonText,
  id,
  scrollRef
}: SlidderProps) => {
    

  const scrollNext = useScrollToNextScreen((position: number) => {
     
     //alert(position)
  });

  return (
    <div key={id} className={`font-poppins w-full h-dvh relative    inline-block`}>
      <img
        src={imageUrl}
        className="w-[100%] h-[100%] object-fill opacity-50 absolute"
      />
      d
      <div className="absolute w-full bottom-0 h-[40%] opacity-90 md:p-6">
        <div
          className=" bg-gray-500 h-full   "
          onClick={() => {
            scrollNext(scrollRef);
          }}
        >
          <div className="w-full flex p-8 gap-1 justify-center " >
            <p className={`${(id ===0) ?'w-[50px]':'w-[15px]'}  h-[4px] bg-blue-700 rounded-md`}></p>
            <p className={`${(id ===1) ?'w-[50px]':'w-[15px]'}  h-[4px] bg-blue-700 rounded-md`}></p>
            <p className={`${(id ===2) ?'w-[50px]':'w-[15px]'}  h-[4px] bg-blue-700 rounded-md`}></p>
            <p className={`${(id ===3) ?'w-[50px]':'w-[15px]'}  h-[4px] bg-blue-700 rounded-md`}></p>
          </div>

          <div className=  "w-full">
            <p className="font-extrabold flex flex-wrap justify-center gap-3">Your Virtual AI assistant and <span  className="text-cosmic-primary-color">Diagnostic Partner.</span> </p>
            <p className="text-white pe-4    w-full  overflow-x-auto font-semibold   mt-5 min-h[100px] flex flex-col flex-wrap justify-center " style={{scrollbarWidth:'none'}}>Seamless virtual consultations, intelligent diagnosis at your fingertips</p>

            <div className="flex w-full justify-center mt-6 gap-56 ">
                <p className="text-white p-3">Skip</p>

                <p className="bg-cosmic-primary-color text-white w-[150px] p-2">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidder;
