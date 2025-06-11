// import UseNavigateToPath from "../hooks/navigateHook";

interface props {
  image: string;
  title: string;
}

const SosComponent = ({ image, title }: props) => {
  // const navigate = UseNavigateToPath()

  return (
    <div
      className="flex justify-between gap-4 p-4 ronded-md shadow-lg cursor-pointer items-center w-full"
      onClick={() => {}}
    >
      <div className="flex gap-2 items-center">
        <img src={image} alt={title} className="max-w-[70px]" />
        <p className="font-bold">{title}</p>
      </div>
      <i className="fas fa-phone bg-red-600 rounded-[50%] p-4 text-white"></i>
    </div>
  );
};

export default SosComponent;
