import UseNavigateToPath from "../hooks/navigateHook";

interface props {
  image: string;
  title: string;
  path: string;
}

const NonEmergentBox = ({ image, title, path }: props) => {
  const nav = UseNavigateToPath();
  return (
    <div
      className="flex justify-start hover:scale-[101%] transition-all duration-[300] ease-in-out items-center h-[85px] border bg-white px-[7px] rounded-md w-full shadow-md cursor-pointer gap-2"
      onClick={() => nav(path)}
    >
      <img src={image} alt={title} className="w-[70px] rounded-sm" />
      <p className="font-semibold text-sm">{title}</p>
    </div>
  );
};

export default NonEmergentBox;
