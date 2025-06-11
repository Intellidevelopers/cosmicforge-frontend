import UseNavigateToPath from "../hooks/navigateHook.tsx";

interface props {
  image: string;
  title: string;
  width: string;
  path: string;
}

const EmergentBox = ({ image, title, width, path }: props) => {
  const nav = UseNavigateToPath();

  return (
    <div
      className={`flex flex-col ${width} items-center border hover:scale-[103%] transition-all ease-in-out duration-[300] bg-white rounded-md justify-center h-[130px] gap-1 shadow-lg cursor-pointer`}
      onClick={() => nav(path)}
    >
      <img
        src={image}
        alt={title}
        className="md:w-[85%] md:h-[90px] w-[80px] h-[80px] rounded-sm"
      />
      <p className="font-semibold text-sm">{title}</p>
    </div>
  );
};

export default EmergentBox;
